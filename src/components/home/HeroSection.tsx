"use client";
import { motion } from "framer-motion";
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

      <div className="container mx-auto px-4 md:px-8 z-20 relative pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-[65%] text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-smaa-red-600"></div>
                <span className="text-smaa-red-400 font-bold tracking-wider uppercase text-sm md:text-base">
                  سما التوريد للسيارات
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.5] tracking-tight text-white drop-shadow-sm">
                استورد سيارة أحلامك
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">بمستوى جديد من الفخامة</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
                نقدم لك حلولاً متكاملة لاستيراد وتوريد وبيع السيارات للأفراد والشركات، مع ضمان الجودة والشفافية التامة في كل خطوة حتى استلام سيارتك.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-8 w-full items-center">
                <Link 
                  href="/contact/individual" 
                  className="group relative bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all text-center flex items-center justify-center gap-3 overflow-hidden shadow-lg"
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
              <div className="flex flex-wrap items-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">100%</p>
                  <p className="text-sm text-gray-400 font-medium">ضمان الجودة</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">+500</p>
                  <p className="text-sm text-gray-400 font-medium">عميل سعيد</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">24/7</p>
                  <p className="text-sm text-gray-400 font-medium">دعم مستمر</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
