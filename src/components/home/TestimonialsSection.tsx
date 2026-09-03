"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Globe, TrendingUp, Award } from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "شفافية تامة في الأسعار",
    text: "نوفر كشف تفصيلي بجميع التكاليف قبل إتمام أي صفقة – لا رسوم مخفية ولا مفاجآت.",
    color: "bg-blue-50 text-smaa-blue-900",
  },
  {
    icon: Clock,
    title: "سرعة في الإنجاز",
    text: "نعمل بكفاءة عالية لإنجاز تخليص جمركي واستلام السيارات في أقصر وقت ممكن.",
    color: "bg-red-50 text-smaa-red-600",
  },
  {
    icon: Users,
    title: "خدمة مخصصة لكل عميل",
    text: "نتعامل مع كل طلب كحالة فريدة – نستمع لاحتياجاتك ونقدم الخيار الأنسب لك.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Globe,
    title: "شبكة موردين دولية",
    text: "نمتلك شراكات مع موردين موثوقين في عدة دول لتوفير أفضل الخيارات والأسعار.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: TrendingUp,
    title: "حلول للأفراد والشركات",
    text: "سواء كنت فرداً يبحث عن سيارة أو شركة تحتاج أسطولاً كاملاً – لدينا الحل المناسب.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Award,
    title: "جودة مضمونة",
    text: "كل سيارة تمر بفحص شامل قبل التوريد لضمان استلامك سيارة بمواصفات عالية.",
    color: "bg-teal-50 text-teal-600",
  },
];

export default function CommitmentsSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-smaa-blue-50 text-smaa-blue-900 rounded-full text-sm font-bold mb-4 border border-smaa-blue-100"
          >
            التزاماتنا معكم
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-smaa-blue-900 mb-4"
          >
            لماذا تختار سما للسيارات؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            نحرص في كل خطوة على تقديم تجربة موثوقة ومهنية، بدءاً من استلام طلبك وحتى تسليمك مفتاح سيارتك.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gray-50 hover:bg-white p-7 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-13 h-13 w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <item.icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-smaa-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
