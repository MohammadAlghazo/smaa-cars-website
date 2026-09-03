import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, User } from "lucide-react";

// ISR
export const revalidate = 3600;

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-smaa-blue-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">المركز الإعلامي</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            أحدث الأخبار، المقالات، والنصائح حول استيراد السيارات وأخبار عالم المحركات.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all group flex flex-col h-full">
              
              <Link href={`/articles/${article.slug}`} className="relative aspect-[16/10] overflow-hidden bg-gray-100 block">
                <Image 
                  src={article.coverImage || "/placeholder-article.jpg"} 
                  alt={article.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    <span>{article.createdAt.toLocaleDateString("ar-SA")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>

                <Link href={`/articles/${article.slug}`}>
                  <h3 className="text-2xl font-bold text-smaa-blue-900 mb-4 line-clamp-2 hover:text-smaa-red-600 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <Link 
                  href={`/articles/${article.slug}`} 
                  className="mt-auto inline-flex items-center gap-2 text-smaa-red-600 font-bold hover:text-smaa-red-500 transition-colors group/link w-fit"
                >
                  إقرأ المزيد
                  <ArrowLeft size={18} className="group-hover/link:-translate-x-2 transition-transform" />
                </Link>
              </div>

            </article>
          ))}

          {articles.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">لا يوجد مقالات منشورة حالياً</h3>
              <p className="text-gray-500">سيتم إضافة المقالات والأخبار قريباً، يرجى العودة لاحقاً.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
