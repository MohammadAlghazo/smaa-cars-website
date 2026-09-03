import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Gauge, MessageCircle, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

import { Metadata } from "next";

// ISR
export const revalidate = 3600;

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = await prisma.car.findUnique({
    where: { id: params.id, isAvailable: true },
  });

  if (!car) {
    return {
      title: "سيارة غير متوفرة",
    };
  }

  const title = `${car.brand} ${car.name} ${car.modelYear}`;
  const description = `اكتشف ${title} عبر سما التوريد لخدمات السيارات.${car.price ? ` السعر: ${car.price} ريال.` : ''}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: car.mainImage ? [car.mainImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: car.mainImage ? [car.mainImage] : [],
    },
  };
}

export default async function CarDetailPage({ params }: { params: { id: string } }) {
  const car = await prisma.car.findUnique({
    where: { id: params.id, isAvailable: true }
  });

  if (!car) {
    notFound();
  }

  try {
    JSON.parse(car.features);
  } catch {}

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-smaa-red-600 transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/cars" className="hover:text-smaa-red-600 transition-colors">السيارات المستوردة</Link>
          <span>/</span>
          <span className="text-smaa-blue-900 font-bold">{car.brand}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Image & Gallery */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-200">
              <Image 
                src={car.mainImage || "/placeholder-car.jpg"} 
                alt={car.name} 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* Future Gallery Thumbnails can go here */}
          </div>

          {/* Details Sidebar */}
          <div className="space-y-6">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h1 className="text-3xl font-bold text-smaa-blue-900 mb-2">{car.name}</h1>
              <p className="text-gray-500 mb-6">{car.brand} • استيراد حديث</p>
              
              {car.price && (
                <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-center border border-gray-100">
                  <span className="text-sm text-gray-500 block mb-1">السعر التقريبي</span>
                  <span className="text-3xl font-bold text-smaa-red-600">{car.price}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-smaa-blue-900 shadow-sm">
                    <CalendarDays size={20} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500">سنة الصنع</span>
                    <span className="font-bold" dir="ltr">{car.modelYear}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-smaa-blue-900 shadow-sm">
                    <Gauge size={20} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500">الممشى</span>
                    <span className="font-bold" dir="ltr">{car.mileage}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  href="/contact" 
                  className="w-full bg-smaa-red-600 hover:bg-smaa-red-500 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 text-lg"
                >
                  <MessageCircle size={22} />
                  تواصل للاستفسار والحجز
                </Link>
                <button className="w-full bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 font-bold py-4 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                  <Share2 size={20} />
                  مشاركة السيارة
                </button>
              </div>
            </div>

            {/* Seller Contact Info Card */}
            <div className="bg-smaa-blue-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                لا تتردد بالتواصل معنا
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                نحن هنا للإجابة على كافة استفساراتك حول هذه السيارة، وسنقوم بمساعدتك في كافة إجراءات الاستيراد والتخليص الجمركي.
              </p>
              <a href="https://wa.me/966565848380" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold transition-all shadow-md active:scale-95 w-full justify-center">
                تواصل عبر واتساب
              </a>
            </div>

          </div>

          {/* Description Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-smaa-blue-900 mb-6 border-b pb-4">الوصف والتفاصيل</h2>
              
              {/* Render Rich Text Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-smaa-blue-900 prose-a:text-smaa-red-600 mb-10" dangerouslySetInnerHTML={{ __html: car.description }}>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
