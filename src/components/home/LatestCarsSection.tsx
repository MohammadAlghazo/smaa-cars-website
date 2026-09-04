import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Gauge, CalendarDays, CheckCircle2 } from "lucide-react";

export default async function LatestCarsSection() {
  const cars = await prisma.car.findMany({
    where: { isAvailable: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  if (cars.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-smaa-blue-900 mb-6 tracking-tight">أحدث <span className="text-smaa-red-600">السيارات</span> المستوردة</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              نقدم لكم أحدث السيارات التي تم فحصها واعتمادها في سجلاتنا. نضمن لك سيارات خالية من العيوب وبأفضل الأسعار العالمية.
            </p>
          </div>
          <Link 
            href="/cars" 
            className="hidden md:flex items-center gap-2 text-smaa-blue-900 hover:text-smaa-red-600 font-bold transition-colors group"
          >
            تصفح الكتالوج الكامل
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none md:mx-0 md:px-0 md:pb-0 hide-scrollbar">
          {cars.map((car) => (
            <div key={car.id} className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-start shrink-0 bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all group flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image 
                  src={car.mainImage || "/placeholder-car.jpg"} 
                  alt={car.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 bg-smaa-blue-900 text-white px-3 py-1 text-xs font-bold tracking-wider rounded-sm shadow-md">
                  {car.brand}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-normal">{car.name}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 pb-5 border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-smaa-red-600" />
                    <span dir="ltr">{car.modelYear}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge size={16} className="text-smaa-red-600" />
                    <span dir="ltr">{car.mileage}</span>
                  </div>
                </div>

                <div className="mb-6 flex-1 flex items-end">
                  {car.price ? (
                    <div>
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-1">السعر التقريبي</span>
                      <span className="text-2xl font-extrabold text-smaa-blue-900">{car.price}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-smaa-red-600 text-sm font-bold">
                      <CheckCircle2 size={16}/>
                      متاحة عند الطلب
                    </div>
                  )}
                </div>

                <Link 
                  href={`/cars/${car.id}`} 
                  className="w-full bg-gray-50 hover:bg-smaa-blue-900 hover:text-white text-smaa-blue-900 font-bold py-3 px-4 rounded-sm transition-colors flex items-center justify-center gap-2 text-sm border border-gray-100 group/btn"
                >
                  استعرض التفاصيل
                  <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/cars" 
          className="md:hidden mt-8 flex items-center justify-center gap-2 text-smaa-blue-900 font-bold w-full bg-gray-50 border border-gray-100 rounded-sm py-4 transition-all"
        >
          تصفح الكتالوج الكامل
          <ArrowLeft size={20} />
        </Link>
      </div>
    </section>
  );
}
