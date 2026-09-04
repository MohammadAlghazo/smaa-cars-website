import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, User } from "lucide-react";

export default async function LatestArticlesSection() {
  const articles = await prisma.article.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  if (articles.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 bg-smaa-blue-50 text-smaa-blue-900 text-sm font-bold rounded-full mb-4 border border-smaa-blue-100">
              المركز الإعلامي
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-smaa-blue-900 mb-3">آخر الأخبار والمقالات</h2>
            <div className="w-16 h-1 bg-smaa-red-600 rounded-full mb-4"></div>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              المركز الإعلامي لسما للسيارات يوفر لك أحدث الأخبار، نصائح الشراء، تقارير السوق، وكل ما يخص عالم السيارات المستوردة داخل وخارج المملكة.
            </p>
          </div>
          <Link 
            href="/articles" 
            className="hidden md:flex items-center gap-2 text-smaa-blue-900 hover:text-smaa-red-600 font-bold transition-colors group mt-4 md:mt-0"
          >
            عرض جميع المقالات
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none md:mx-0 md:px-0 md:pb-0 hide-scrollbar">
          {articles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.id} className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-start shrink-0 group flex flex-col h-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100 shadow-sm">
                <Image 
                  src={article.coverImage || "/placeholder-article.jpg"} 
                  alt={article.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} className="text-smaa-red-600" />
                    <span>{new Date(article.createdAt).toLocaleDateString('ar-SA')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-smaa-red-600" />
                    <span>{article.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-smaa-blue-900 mb-2 line-clamp-2 group-hover:text-smaa-red-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-smaa-red-600 font-bold text-sm">
                  اقرأ المزيد
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link 
          href="/articles" 
          className="md:hidden mt-8 flex items-center justify-center gap-2 text-smaa-blue-900 font-bold w-full bg-gray-50 border border-gray-200 rounded-xl py-4 active:scale-95 transition-all"
        >
          عرض جميع المقالات
          <ArrowLeft size={20} />
        </Link>
      </div>
    </section>
  );
}
