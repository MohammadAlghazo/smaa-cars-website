"use client";
import { motion } from "framer-motion";
import { ArrowLeft, User, Building2, Handshake, MessageSquareWarning, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: User,
    title: "طلب الأفراد",
    desc: "استيراد أو شراء سيارة لاستخدامك الشخصي بمواصفاتك الدقيقة وضمن ميزانيتك. نبحث لك من أفضل أسواق العالم.",
    link: "/contact/individual",
    cta: "تقديم طلبك",
  },
  {
    icon: Building2,
    title: "طلب الشركات",
    desc: "حلول توريد مخصصة للشركات، المعارض، ومكاتب التأجير بكميات مرنة وأسعار تنافسية تلائم احتياجاتك.",
    link: "/contact/corporate",
    cta: "طلب عرض أسعار",
  },
  {
    icon: Handshake,
    title: "الشراكة والتعاون",
    desc: "نرحب بالشراكات الاستراتيجية مع الموردين والجهات المتخصصة في قطاع السيارات لتوسيع آفاق العمل.",
    link: "/contact/partner",
    cta: "اقتراح شراكة",
  },
  {
    icon: MessageSquareWarning,
    title: "الشكاوى والاقتراحات",
    desc: "نأخذ ملاحظاتكم وشكاواكم بجدية تامة لتحسين خدماتنا المستمرة ورفع مستوى رضا العملاء.",
    link: "/contact/complaint",
    cta: "رفع شكوى",
  },
  {
    icon: MessageCircle,
    title: "تواصل عام",
    desc: "لأي استفسار أو استيضاح حول خدماتنا، فريق خدمة العملاء مستعد للإجابة عليك في أقرب وقت ممكن.",
    link: "/contact/general",
    cta: "أرسل استفسارك",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative border-b border-gray-100" id="services">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-smaa-blue-900 mb-6 tracking-tight">خدمات <span className="text-smaa-red-600">التواصل</span></h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              صممنا قنوات تواصل مخصصة لتلبية احتياجاتك بدقة وسرعة. اختر الخدمة المناسبة لطلبك وسيقوم فريقنا المختص بالرد عليك فوراً.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-sm p-8 hover:bg-smaa-blue-900 hover:border-smaa-blue-900 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-smaa-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={32} strokeWidth={1.5}/>
                </div>
                <h3 className="text-2xl font-bold text-smaa-blue-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-sm group-hover:text-gray-300 transition-colors duration-300 font-light">
                  {service.desc}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-smaa-blue-900 font-bold group-hover:text-smaa-red-400 transition-colors mt-auto text-sm"
                >
                  {service.cta}
                  <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
