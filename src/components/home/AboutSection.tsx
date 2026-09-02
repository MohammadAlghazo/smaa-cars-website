"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-smaa-red-600 rounded-full"></div>
                <h2 className="text-4xl font-bold text-smaa-blue-900">من نحن</h2>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-relaxed text-balance">
                سما التوريد لخدمات السيارات – SMAA Cars شركة سعودية متخصصة في استيراد وتوريد وبيع السيارات الجديدة والمستعملة للأفراد والشركات.
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 text-balance text-lg">
                نوفّر حلولًا مرنة تناسب مختلف الاحتياجات، سواءً لشراء سيارة للاستخدام الشخصي، أو توريد مجموعة من السيارات للمعارض والشركات والأساطيل. نعتمد على دراسة احتياج العميل والبحث عن الخيارات المناسبة من مصادر متعددة حول العالم.
              </p>

              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-smaa-red-600 font-bold hover:text-smaa-red-500 transition-colors group text-lg"
              >
                اكتشف المزيد عنا
                <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Image Grid Content */}
          <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Decorative background shapes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full z-0"></div>

                <Image 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
                  alt="Premium Sedan"
                  width={400}
                  height={300}
                  unoptimized
                  className="absolute top-4 md:top-10 right-0 md:right-10 rounded-2xl shadow-xl object-cover h-48 md:h-64 z-10 w-[70%] md:w-[400px]"
                />
                
                <Image 
                  src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop"
                  alt="Car Inspection"
                  width={350}
                  height={250}
                  unoptimized
                  className="absolute bottom-4 md:bottom-10 left-0 md:left-10 rounded-2xl shadow-2xl object-cover h-40 md:h-56 z-20 border-4 md:border-8 border-white w-[70%] md:w-[350px]"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
