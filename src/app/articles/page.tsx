import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import Pagination from "@/components/ui/Pagination";

export const revalidate = 3600;

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams?.page) || 1;
  const pageSize = 12;

  const [articles, totalCount] = await Promise.all([
    prisma.article.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.article.count({ where: { isPublished: true } }),
  ]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-smaa-blue-900 text-white pt-24 pb-20 relative overflow-hidden mb-12">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png" 
            alt="Media Center SMAA Cars" 
            fill 
            className="object-cover object-center opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-smaa-blue-900 via-smaa-blue-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-smaa-red-600"></div>
            <span className="text-smaa-red-400 font-bold tracking-wider uppercase text-sm">الأخبار والمقالات</span>
            <div className="w-8 h-px bg-smaa-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            المركز <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">الإعلامي</span>
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            أحدث الأخبار، المقالات المتخصصة، والنصائح الاحترافية حول استيراد السيارات وأخبار عالم المحركات.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all group flex flex-col h-full">
              
              <Link href={`/articles/${article.slug}`} className="relative aspect-[16/10] overflow-hidden bg-gray-50 block">
                <Image 
                  src={article.coverImage || "/placeholder-article.jpg"} 
                  alt={article.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </Link>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-5 pb-5 border-b border-gray-50 uppercase tracking-wide">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={14} className="text-smaa-red-600" />
                    <span>{article.createdAt.toLocaleDateString("ar-SA")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-smaa-red-600" />
                    <span>{article.author}</span>
                  </div>
                </div>

                <Link href={`/articles/${article.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-smaa-blue-900 transition-colors leading-normal">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-500 mb-8 line-clamp-3 font-light text-sm flex-1">
                  {article.excerpt}
                </p>

                <Link 
                  href={`/articles/${article.slug}`} 
                  className="mt-auto inline-flex items-center gap-2 text-smaa-blue-900 font-bold hover:text-smaa-red-600 transition-colors group/link w-fit text-sm"
                >
                  إقرأ التفاصيل
                  <ArrowLeft size={16} className="group-hover/link:-translate-x-2 transition-transform" />
                </Link>
              </div>

            </article>
          ))}

          {articles.length === 0 && (
            <div className="col-span-full py-24 text-center bg-white rounded-sm border border-gray-100">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                <CalendarDays size={32} />
              </div>
              <h3 className="text-2xl font-bold text-smaa-blue-900 mb-3">لا يوجد مقالات منشورة حالياً</h3>
              <p className="text-gray-500 font-light">سيتم إضافة المحتوى الحصري والأخبار قريباً، يرجى العودة لاحقاً.</p>
            </div>
          )}
        </div>

        <Pagination totalPages={totalPages} currentPage={page} />

      </div>
    </div>
  );
}
