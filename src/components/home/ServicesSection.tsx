"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "استيراد السيارات",
    desc: "توفير واستيراد السيارات من مختلف دول العالم وفق طلب العميل والخيارات المتاحة لدى الموردين.",
    link: "/services"
  },
  {
    title: "بيع السيارات داخل المملكة",
    desc: "توفير وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية، بحسب السيارات والعروض المتاحة.",
    link: "/services"
  },
  {
    title: "توريد سيارات الشركات",
    desc: "تقديم عروض توريد مخصصة للشركات، المعارض، مكاتب التأجير وقطاعات الأعمال، وفق الكميات والمواصفات المطلوبة.",
    link: "/services"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-smaa-blue-900 mb-4"
          >
            خدماتنا
          </motion.h2>
          <div className="w-20 h-1 bg-smaa-red-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-smaa-blue-900 mb-4 group-hover:text-smaa-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <Link 
                href={service.link}
                className="inline-flex items-center gap-2 text-smaa-blue-900 font-bold group-hover:text-smaa-red-600 transition-colors mt-auto"
              >
                تفاصيل الخدمة
                <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
