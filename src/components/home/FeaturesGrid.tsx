"use client";
import { motion } from "framer-motion";
import { Search, Map, ShieldCheck, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Search className="text-smaa-red-600" size={28} />,
      title: "خيارات لا محدودة",
      desc: "نبحث في الأسواق العالمية لنجد السيارة التي تطابق مواصفاتك الدقيقة تماماً."
    },
    {
      icon: <ShieldCheck className="text-smaa-red-600" size={28} />,
      title: "فحص شامل وموثوق",
      desc: "نضمن سلامة السيارة ميكانيكياً وكهربائياً قبل إتمام عملية الشراء لضمان الجودة."
    },
    {
      icon: <Map className="text-smaa-red-600" size={28} />,
      title: "تخليص جمركي متكامل",
      desc: "نقوم بجميع الإجراءات الجمركية ونقل الملكية لراحتك التامة وبأقل جهد منك."
    },
    {
      icon: <Clock className="text-smaa-red-600" size={28} />,
      title: "سرعة في الإنجاز",
      desc: "نلتزم بتوريد سيارتك في أسرع وقت ممكن وفق أعلى معايير الجودة والمهنية."
    }
  ];

  return (
    <section className="py-24 bg-white relative border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-smaa-blue-900 mb-6 tracking-tight"
            >
              حلول متكاملة <span className="text-smaa-red-600">وحصرية</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 leading-relaxed text-lg font-light"
            >
              في سما التوريد لخدمات السيارات نقدّم حلولًا متكاملة لاستيراد وتوريد وبيع السيارات للأفراد والشركات داخل المملكة، عبر شبكة واسعة من الموردين العالميين.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/services" className="group inline-flex items-center gap-2 text-smaa-blue-900 font-bold hover:text-smaa-red-600 transition-colors">
              عرض كل الخدمات
              <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-0 md:divide-y-0 md:divide-x md:divide-x-reverse border-0 md:border md:border-gray-100 rounded-sm md:overflow-hidden md:shadow-sm">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-4 md:p-10 border border-gray-100 md:border-0 rounded-xl md:rounded-none hover:bg-gray-50 transition-colors duration-300 group flex flex-col items-center text-center md:items-start md:text-right"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-smaa-red-50 rounded-lg flex items-center justify-center mb-4 md:mb-8 group-hover:scale-110 group-hover:bg-smaa-red-100 transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7">
                {feat.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold text-smaa-blue-900 mb-2 md:mb-4">{feat.title}</h3>
              <p className="text-gray-500 md:text-gray-600 leading-relaxed text-xs md:text-sm">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
