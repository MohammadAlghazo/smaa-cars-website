"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Star, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden pt-24 pb-12">
      
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      {/* Decorative Blob */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-smaa-blue-900/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-smaa-red-600/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] pt-10 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-smaa-blue-50 text-smaa-blue-900 rounded-full font-semibold text-sm mb-6 border border-smaa-blue-100 shadow-sm">
                <Star className="text-yellow-500" size={16} fill="currentColor" />
                الخيار الأول لاستيراد السيارات في السعودية
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-smaa-blue-900 mb-6 leading-[1.2] tracking-tight flex flex-col gap-3">
                <span>استورد سيارة أحلامك</span>
                <span className="text-smaa-red-600">بكل ثقة وأمان</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                نوفر لك تشكيلة واسعة من السيارات العائلية والفخمة المستوردة بأعلى المواصفات، مع ضمان فحص شامل، وضوح تام في التكاليف، وإجراءات ميسرة حتى تستلم مفتاح سيارتك.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 w-full">
                <Link 
                  href="/contact/individual" 
                  className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-red-600/30 text-center flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95"
                >
                  <ShieldCheck size={24} />
                  اطلب سيارتك الآن
                </Link>
                <Link 
                  href="/contact/corporate" 
                  className="bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm text-center flex items-center justify-center hover:-translate-y-1 active:scale-95"
                >
                  اطلب عرضًا للشركات
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white border-2 border-gray-200 hover:border-smaa-blue-900 text-smaa-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm text-center flex items-center justify-center hover:-translate-y-1 active:scale-95"
                >
                  تواصل معنا
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-12 text-sm font-bold text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-smaa-red-600" size={20} />
                  فحص شامل ومضمون
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-smaa-red-600" size={20} />
                  تخليص جمركي متكامل
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-smaa-red-600" size={20} />
                  أسعار شفافة
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image & Floating Cards */}
          <div className="w-full lg:w-[45%] relative h-[450px] md:h-[600px] mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full"
            >
              {/* Main Image */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/normal_car.jpg" 
                  alt="Premium SUV Car" 
                  fill 
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smaa-blue-900/60 to-transparent"></div>
              </div>
              
              {/* Floating Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-10 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50 z-20"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight">سيارات مفحوصة</p>
                  <p className="text-sm text-gray-500 font-medium">ضمان الجودة 100%</p>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 right-4 md:-bottom-8 md:right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 z-20 max-w-[220px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                         <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" fill className="object-cover"/>
                      </div>
                    ))}
                  </div>
                  <div className="font-bold text-gray-900">+500</div>
                </div>
                <p className="font-bold text-smaa-blue-900 text-sm leading-tight">عميل يثق بنا في المملكة</p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
