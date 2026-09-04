import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, ArrowLeft, Gauge, CalendarDays, CheckCircle2 } from "lucide-react";

export const revalidate = 3600;

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    where: { isAvailable: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-smaa-blue-900 text-white pt-24 pb-20 relative overflow-hidden mb-12">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png" 
            alt="Imported Cars" 
            fill 
            className="object-cover object-center opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-smaa-blue-900 via-smaa-blue-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-smaa-red-600"></div>
            <span className="text-smaa-red-400 font-bold tracking-wider uppercase text-sm">الكتالوج</span>
            <div className="w-8 h-px bg-smaa-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            السيارات <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">المستوردة</span>
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            تصفح أحدث السيارات المستوردة من الخارج بمواصفات عالمية، مع ضمان الجودة والفحص الشامل الذي يليق بك.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Filters & Search (UI Only for now) */}
        <div className="bg-white p-5 rounded-sm shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="ابحث عن ماركة، موديل، أو سنة..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-sm py-3 pr-12 pl-4 focus:outline-none focus:border-smaa-blue-900 focus:ring-1 focus:ring-smaa-blue-900 transition-colors text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-8 py-3 bg-gray-50 border border-gray-200 hover:bg-smaa-blue-900 hover:text-white hover:border-smaa-blue-900 text-smaa-blue-900 font-bold rounded-sm transition-all text-sm w-full md:w-auto justify-center group">
            <Filter size={18} className="group-hover:rotate-180 transition-transform duration-500"/>
            تصفية متقدمة
          </button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all group flex flex-col h-full">
              
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
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-snug">{car.name}</h3>
                
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

          {cars.length === 0 && (
            <div className="col-span-full py-24 text-center bg-white rounded-sm border border-gray-100">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold text-smaa-blue-900 mb-3">لا يوجد سيارات متاحة حالياً</h3>
              <p className="text-gray-500 font-light">يرجى العودة لاحقاً أو تعديل فلاتر البحث الخاصة بك.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
