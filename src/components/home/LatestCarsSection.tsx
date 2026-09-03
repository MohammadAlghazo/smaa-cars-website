import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Gauge, CalendarDays } from "lucide-react";

export default async function LatestCarsSection() {
  const cars = await prisma.car.findMany({
    where: { isAvailable: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  if (cars.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-smaa-blue-900 mb-4">أحدث السيارات المستوردة</h2>
            <div className="w-16 h-1 bg-smaa-red-600 rounded-full"></div>
          </div>
          <Link 
            href="/cars" 
            className="hidden md:flex items-center gap-2 text-smaa-blue-900 hover:text-smaa-red-600 font-bold transition-colors group"
          >
            عرض جميع السيارات
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  التفاصيل
                  <ArrowLeft size={18} className="group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/cars" 
          className="md:hidden mt-8 flex items-center justify-center gap-2 text-smaa-blue-900 font-bold w-full bg-white border border-gray-200 rounded-xl py-4 active:scale-95 transition-all"
        >
          عرض جميع السيارات
          <ArrowLeft size={20} />
        </Link>
      </div>
    </section>
  );
}
