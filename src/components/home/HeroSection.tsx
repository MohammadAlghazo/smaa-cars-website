"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Car Import" 
          fill 
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-smaa-dark via-smaa-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-smaa-dark via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-10 pt-20">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            استورد سيارتك <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-smaa-red-400 to-smaa-red-600">بأمان</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl"
          >
            نستورد من جميع أنحاء العالم ونوفر خيارات متنوعة تلائم احتياجاتك مع ضمان الوضوح والجودة من الطلب وحتى التسليم.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              href="#contact" 
              className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-lg shadow-smaa-red-600/30 group"
            >
              اطلب سيارتك الآن
              <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="#services" 
              className="bg-transparent border border-gray-500 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              تصفح خدماتنا
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
