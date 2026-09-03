"use client";
import { motion } from "framer-motion";
import { Search, Map, ShieldCheck, Clock } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Search className="text-smaa-red-600" size={32} />,
      title: "خيارات لا محدودة",
      desc: "نبحث في الأسواق العالمية لنجد السيارة التي تطابق مواصفاتك الدقيقة."
    },
    {
      icon: <ShieldCheck className="text-smaa-red-600" size={32} />,
      title: "فحص شامل وموثوق",
      desc: "نضمن سلامة السيارة ميكانيكياً وكهربائياً قبل إتمام عملية الشراء."
    },
    {
      icon: <Map className="text-smaa-red-600" size={32} />,
      title: "تخليص جمركي متكامل",
      desc: "نقوم بجميع الإجراءات الجمركية ونقل الملكية لراحتك التامة."
    },
    {
      icon: <Clock className="text-smaa-red-600" size={32} />,
      title: "سرعة في الإنجاز",
      desc: "نلتزم بتوريد سيارتك في أسرع وقت ممكن وفق أعلى معايير الجودة."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-smaa-blue-900 mb-6"
          >
            حلول متكاملة لاستيراد وبيع السيارات
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-smaa-red-600 mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            في سما التوريد لخدمات السيارات نقدّم حلولًا متكاملة لاستيراد وتوريد وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية، من خلال شبكة من الموردين ومصادر التوريد من مختلف دول العالم.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-smaa-blue-900 mb-3">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
