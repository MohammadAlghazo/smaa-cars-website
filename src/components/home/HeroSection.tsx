"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ChevronLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Premium Luxury Cars"
          fill
          className="object-cover object-center scale-105"
          priority
          unoptimized
        />
        {/* Gradient Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-smaa-blue-900/95 via-smaa-blue-900/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-smaa-blue-900/80 via-transparent to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 z-20 relative pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Text Content */}
          <div className="w-full lg:w-[65%] text-white text-center lg:text-right">
            <div className="animate-[fadeIn_1s_ease-out]">
              <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6 w-full lg:w-auto">
                <div className="w-8 md:w-12 h-px bg-smaa-red-600"></div>
                <span className="text-smaa-red-400 font-bold tracking-wider uppercase text-xs md:text-base">
                  سما التوريد للسيارات
                </span>
                <div className="w-8 h-px bg-smaa-red-600 lg:hidden"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-4 md:mb-6 leading-[1.4] md:leading-[1.5] text-white drop-shadow-sm px-2 md:px-0">
                استورد سيارة أحلامك
                <br />
                بمستوى جديد من الفخامة
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light px-4 md:px-0">
                نقدم لك حلولاً متكاملة لاستيراد وتوريد وبيع السيارات للأفراد والشركات، مع ضمان الجودة والشفافية التامة في كل خطوة حتى استلام سيارتك.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6 md:mt-8 w-full items-center justify-center lg:justify-start px-4 sm:px-0">
                <Link
                  href="/contact/individual"
                  className="w-full sm:w-auto group relative bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-sm font-bold text-base md:text-lg transition-all text-center flex items-center justify-center gap-3 overflow-hidden shadow-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <ShieldCheck size={24} />
                    اطلب سيارتك الآن
                  </span>
                  <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                </Link>

                <Link
                  href="/contact/corporate"
                  className="group text-white px-8 py-4 font-bold text-lg transition-all text-center flex items-center justify-center gap-2 hover:text-smaa-red-400"
                >
                  اطلب عرضاً للشركات
                  <ChevronLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

              {/* Minimal Stats */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-16 mt-12 md:mt-16 pt-8 border-t border-white/10 text-center sm:text-right">
                <div className="col-span-1">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">100%</p>
                  <p className="text-xs md:text-sm text-gray-400 font-medium">ضمان الجودة</p>
                </div>
                <div className="col-span-1">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">+500</p>
                  <p className="text-xs md:text-sm text-gray-400 font-medium">عميل</p>
                </div>
                <div className="col-span-2 sm:col-span-1 mt-2 sm:mt-0">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</p>
                  <p className="text-xs md:text-sm text-gray-400 font-medium">دعم مستمر</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
