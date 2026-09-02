"use client";
import { motion } from "framer-motion";
import { Globe, Car, Building2 } from "lucide-react";

const services = [
  {
    title: "استيراد السيارات",
    description: "توفير واستيراد السيارات من مختلف دول العالم وفق طلب العميل والخيارات المتاحة لدى الموردين.",
    icon: <Globe className="w-10 h-10 text-smaa-red-500" />,
  },
  {
    title: "بيع السيارات داخل المملكة",
    description: "توفير وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية، بحسب السيارات والعروض المتاحة.",
    icon: <Car className="w-10 h-10 text-smaa-red-500" />,
  },
  {
    title: "توريد سيارات الشركات",
    description: "تقديم عروض توريد مخصصة للشركات، المعارض، مكاتب التأجير وقطاعات الأعمال، وفق الكميات المطلوبة.",
    icon: <Building2 className="w-10 h-10 text-smaa-red-500" />,
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-smaa-dark">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            خدماتنا
          </motion.h2>
          <div className="w-20 h-1 bg-smaa-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-smaa-blue-900/40 hover:bg-smaa-blue-900/60 transition-colors border border-smaa-blue-800 p-8 rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="bg-smaa-dark p-4 rounded-full border border-smaa-blue-700 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-smaa-red-500/20">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-balance">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
