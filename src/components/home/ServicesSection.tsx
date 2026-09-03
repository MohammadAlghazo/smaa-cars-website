"use client";
import { motion } from "framer-motion";
import { ArrowLeft, User, Building2, Handshake, MessageSquareWarning, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: User,
    iconBg: "bg-smaa-blue-50 text-smaa-blue-900",
    title: "طلب الأفراد",
    desc: "استيراد أو شراء سيارة لاستخدامك الشخصي بمواصفاتك وضمن ميزانيتك. نبحث لك من أسواق العالم.",
    link: "/contact/individual",
    cta: "تقديم طلبك",
  },
  {
    icon: Building2,
    iconBg: "bg-indigo-50 text-indigo-700",
    title: "طلب الشركات",
    desc: "حلول توريد مخصصة للشركات والمعارض ومكاتب التأجير بكميات مرنة وأسعار تنافسية.",
    link: "/contact/corporate",
    cta: "طلب عرض أسعار",
  },
  {
    icon: Handshake,
    iconBg: "bg-amber-50 text-amber-600",
    title: "شراكة وتعاون",
    desc: "نرحب بالشراكات الاستراتيجية مع الموردين والجهات المتخصصة في قطاع السيارات.",
    link: "/contact/partner",
    cta: "اقتراح شراكة",
  },
  {
    icon: MessageSquareWarning,
    iconBg: "bg-red-50 text-red-500",
    title: "شكاوى واقتراحات",
    desc: "نأخذ ملاحظاتكم وشكاواكم بجدية تامة لتحسين خدماتنا ورفع مستوى رضا العملاء.",
    link: "/contact/complaint",
    cta: "رفع شكوى",
  },
  {
    icon: MessageCircle,
    iconBg: "bg-green-50 text-green-600",
    title: "تواصل عام",
    desc: "أي استفسار أو استيضاح حول خدماتنا، فريقنا مستعد للإجابة عليك في أقرب وقت.",
    link: "/contact/general",
    cta: "أرسل رسالة",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-smaa-blue-900 mb-4"
          >
            خدماتنا وطرق التواصل
          </motion.h2>
          <div className="w-20 h-1 bg-smaa-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto">
            اختر الخدمة المناسبة لاحتياجك وتواصل مع فريقنا المتخصص مباشرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${service.iconBg}`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-smaa-blue-900 mb-3 group-hover:text-smaa-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-sm">
                  {service.desc}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-smaa-blue-900 font-bold group-hover:text-smaa-red-600 transition-colors mt-auto"
                >
                  {service.cta}
                  <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
