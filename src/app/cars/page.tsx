import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, ArrowLeft, Gauge, CalendarDays } from "lucide-react";

// Revalidate this page every hour (ISR) to keep it blazing fast but fresh
export const revalidate = 3600;

const prisma = new PrismaClient();

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    where: { isAvailable: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-smaa-blue-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">السيارات المستوردة</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            تصفح أحدث السيارات المستوردة من الخارج بمواصفات عالمية وأسعار منافسة. نحن نضمن لك الجودة والفحص الشامل.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Filters & Search (UI Only for now) */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="ابحث عن ماركة أو موديل..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:border-smaa-blue-700 focus:ring-1 focus:ring-smaa-blue-700 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-smaa-blue-900 font-bold rounded-xl transition-colors active:scale-95 whitespace-nowrap w-full md:w-auto justify-center">
            <Filter size={18} />
            تصفية النتائج
          </button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all group flex flex-col h-full">
              
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image 
                  src={car.mainImage || "/placeholder-car.jpg"} 
                  alt={car.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-smaa-blue-900 shadow-sm">
                  {car.brand}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-smaa-blue-900 mb-2 line-clamp-1">{car.name}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays size={16} className="text-smaa-red-600" />
                    <span dir="ltr">{car.modelYear}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Gauge size={16} className="text-smaa-red-600" />
                    <span dir="ltr">{car.mileage}</span>
                  </div>
                </div>

                {car.price && (
                  <div className="mb-4">
                    <span className="text-gray-500 text-sm block mb-1">السعر التقريبي</span>
                    <span className="text-2xl font-bold text-smaa-red-600">{car.price}</span>
                  </div>
                )}

                <Link 
                  href={`/cars/${car.id}`} 
                  className="mt-auto w-full bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group/btn"
                >
                  التفاصيل والصور
                  <ArrowLeft size={18} className="group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}

          {cars.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">لا يوجد سيارات متاحة حالياً</h3>
              <p className="text-gray-500">يرجى العودة لاحقاً أو تصفية البحث بشكل مختلف.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
