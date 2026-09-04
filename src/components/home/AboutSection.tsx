"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] p-10 md:p-16 lg:p-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-1 bg-smaa-red-600"></div>
                <h2 className="text-xl font-bold text-smaa-red-600 tracking-wide uppercase">عن سما التوريد</h2>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-smaa-blue-900 mb-6 leading-normal">
                نصنع الفارق في سوق <br/> السيارات السعودي
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                سما التوريد لخدمات السيارات (SMAA Cars) هي شركة سعودية رائدة متخصصة في توفير حلول استيراد وتوريد وبيع السيارات الجديدة والمستعملة. نحن لا نبيع مجرد سيارات؛ نحن نبني شراكات طويلة الأمد مع عملائنا عبر تقديم أعلى مستويات الشفافية والموثوقية.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-smaa-red-600" size={20} />
                  <span className="font-bold text-smaa-blue-900">حلول مرنة للأفراد والشركات الكبرى</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-smaa-red-600" size={20} />
                  <span className="font-bold text-smaa-blue-900">شبكة موردين عالمية موثوقة ومضمونة</span>
                </div>
              </div>

              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white px-8 py-4 rounded-sm font-bold transition-all group"
              >
                المزيد عن الشركة
                <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Abstract / Stats Design */}
          <div className="w-full lg:w-[45%] bg-smaa-blue-900 relative p-10 md:p-16 flex items-center justify-center min-h-[400px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 w-full"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Stat Box 1 */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-sm border border-white/20 hover:bg-white/15 transition-colors">
                  <p className="text-4xl font-extrabold text-white mb-2">+15</p>
                  <p className="text-smaa-red-400 font-bold text-sm">دولة نستورد منها</p>
                </div>
                
                {/* Stat Box 2 */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-sm border border-white/20 hover:bg-white/15 transition-colors mt-8">
                  <p className="text-4xl font-extrabold text-white mb-2">100%</p>
                  <p className="text-smaa-red-400 font-bold text-sm">شفافية في التسعير</p>
                </div>

                {/* Stat Box 3 */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-sm border border-white/20 hover:bg-white/15 transition-colors -mt-8">
                  <p className="text-4xl font-extrabold text-white mb-2">+500</p>
                  <p className="text-smaa-red-400 font-bold text-sm">سيارة تم استيرادها</p>
                </div>

                {/* Stat Box 4 */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-sm border border-white/20 hover:bg-white/15 transition-colors">
                  <p className="text-4xl font-extrabold text-white mb-2">24/7</p>
                  <p className="text-smaa-red-400 font-bold text-sm">دعم فني متواصل</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
