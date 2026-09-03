import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, User, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

import { Metadata } from "next";

export const revalidate = 3600;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug, isPublished: true },
  });

  if (!article) {
    return {
      title: "مقال غير متوفر",
    };
  }

  const title = article.title;
  // Use excerpt or strip HTML from content if excerpt is missing (simplified here)
  const description = article.excerpt || `اقرأ مقال ${title} على مدونة سما التوريد.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: article.coverImage ? [article.coverImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.coverImage ? [article.coverImage] : [],
    },
  };
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug, isPublished: true }
  });

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-smaa-red-600 transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-smaa-red-600 transition-colors">المركز الإعلامي</Link>
          <span>/</span>
          <span className="text-gray-400 line-clamp-1">{article.title}</span>
        </div>

        <article className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Header Area */}
          <div className="p-8 md:p-12 pb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-smaa-blue-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-smaa-blue-900">
                  <User size={18} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 mb-0.5">الكاتب</span>
                  <span className="font-bold text-gray-700">{article.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-smaa-blue-900">
                  <CalendarDays size={18} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 mb-0.5">تاريخ النشر</span>
                  <span className="font-bold text-gray-700">{article.createdAt.toLocaleDateString("ar-SA")}</span>
                </div>
              </div>
              
              <button className="mr-auto flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-600 px-4 py-2 rounded-lg transition-colors font-medium active:scale-95">
                <Share2 size={16} />
                مشاركة المقال
              </button>
            </div>
          </div>

          {/* Cover Image */}
          {article.coverImage && (
            <div className="relative aspect-[21/9] w-full bg-gray-100 mb-8">
              <Image 
                src={article.coverImage} 
                alt={article.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12 pt-0">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-smaa-blue-900 prose-a:text-smaa-red-600 prose-img:rounded-2xl" 
              dangerouslySetInnerHTML={{ __html: article.content }}
            >
            </div>
          </div>

        </article>

      </div>
    </div>
  );
}
