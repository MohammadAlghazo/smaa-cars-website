"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden pt-20">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-smaa-blue-900 rounded-bl-[100px] md:rounded-bl-[200px] z-0 hidden md:block"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 pt-10 md:pt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-smaa-blue-900 md:text-white mb-6 leading-tight">
                استورد سيارتك <br />
                <span className="text-smaa-red-600">بأمان</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 md:text-gray-200 mb-10 max-w-xl text-balance">
                نستورد من جميع أنحاء العالم ونوفر خيارات متنوعة تلائم احتياجاتك مع ضمان الوضوح والجودة من الطلب وحتى التسليم. خيارات آمنة، سيارات فخمة، راحة بال تامة.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link 
                  href="/contact" 
                  className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-6 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
                >
                  اطلب سيارتك
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white border-2 border-smaa-blue-900 md:border-transparent md:bg-smaa-blue-800 md:hover:bg-smaa-blue-700 text-smaa-blue-900 md:text-white px-6 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
                >
                  اطلب عرضًا للشركات
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
                >
                  تواصل معنا
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0"
            >
              <Image 
                src="/hero_car.jpg" 
                alt="White Premium Car" 
                fill 
                className="object-cover rounded-3xl shadow-2xl border-4 border-white"
                priority
                unoptimized
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
              >
                <div className="bg-smaa-blue-900 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  +2
                </div>
                <div>
                  <p className="font-bold text-smaa-gray-900 text-lg leading-tight">سنوات من</p>
                  <p className="text-smaa-red-600 font-medium">الثقة والخبرة</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
