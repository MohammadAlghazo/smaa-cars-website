"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-smaa-dark relative overflow-hidden">
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
                <h2 className="text-4xl font-bold text-white">من نحن</h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-balance">
                سما التوريد لخدمات السيارات – SMAA Cars شركة سعودية متخصصة في استيراد وتوريد وبيع السيارات الجديدة والمستعملة للأفراد والشركات.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 text-balance">
                نحن نعلم أن استيراد سيارة من الخارج قد يكون مغامرة محفوفة بالشكوك: هل تم تزوير العداد؟ هل هناك أضرار خفية؟ من سيهتم بها بعد وصولها؟ قررنا إنهاء هذه الشكوك من خلال تقديم خدمة متكاملة تركز على ما يهمك حقاً: سلامة السيارة وراحة بالك.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-smaa-blue-900/30 border border-smaa-blue-800 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-smaa-red-500 mb-3">رؤيتنا</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    أن نكون من الجهات الموثوقة في مجال توريد واستيراد السيارات، وأن نوفّر حلولًا عملية تخدم الأفراد وقطاع الأعمال داخل المملكة.
                  </p>
                </div>
                <div className="bg-smaa-blue-900/30 border border-smaa-blue-800 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-smaa-red-500 mb-3">رسالتنا</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    تسهيل الوصول إلى السيارات المناسبة من الأسواق المحلية والعالمية، من خلال خدمة احترافية واضحة ومرنة تراعي احتياج كل عميل.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Grid Content */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                {/* Decorative background shapes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-smaa-red-600/20 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-smaa-blue-600/20 rounded-full blur-3xl"></div>

                <Image 
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=800&auto=format&fit=crop"
                  alt="Luxury Car Inside"
                  width={300}
                  height={400}
                  unoptimized
                  className="absolute top-0 right-4 md:right-10 rounded-2xl border-4 border-smaa-dark shadow-2xl object-cover h-64 z-10 rotate-3"
                />
                
                <Image 
                  src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop"
                  alt="Premium Sedan"
                  width={350}
                  height={250}
                  unoptimized
                  className="absolute bottom-10 left-4 md:left-10 rounded-2xl border-4 border-smaa-dark shadow-2xl object-cover h-56 z-20 -rotate-3"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
