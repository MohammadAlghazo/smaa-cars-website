"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Globe, TrendingUp, Award } from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "شفافية تامة في الأسعار",
    text: "نوفر كشفاً تفصيلياً بجميع التكاليف قبل إتمام أي صفقة، بلا رسوم مخفية أو مفاجآت.",
  },
  {
    icon: Clock,
    title: "التزام بالمواعيد",
    text: "نعمل بكفاءة عالية لإنهاء الإجراءات والتخليص الجمركي لضمان استلام سيارتك في الوقت المحدد.",
  },
  {
    icon: Users,
    title: "خدمة مخصصة",
    text: "نولي اهتماماً خاصاً بكل عميل، نستمع لاحتياجاتك ونقدم لك الخيارات التي تلبي تطلعاتك بدقة.",
  },
  {
    icon: Globe,
    title: "شبكة دولية واسعة",
    text: "نعتمد على شبكة من الشركاء والموردين المعتمدين عالمياً لضمان توفر الخيارات بأسعار تنافسية.",
  },
  {
    icon: TrendingUp,
    title: "حلول الأساطيل",
    text: "ندعم الشركات بمرونة عالية في توفير وتوريد أساطيل كاملة للارتقاء بأعمالهم.",
  },
  {
    icon: Award,
    title: "جودة لا تساوم",
    text: "تخضع كل مركبة لفحوصات صارمة قبل التسليم لضمان مطابقتها لأعلى معايير الجودة السعودية.",
  },
];

export default function CommitmentsSection() {
  return (
    <section className="py-24 bg-smaa-blue-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-smaa-red-600 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-12">
          <div className="max-w-2xl text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">لماذا تختار <span className="text-smaa-red-500">سما للسيارات؟</span></h2>
            <p className="text-gray-300 leading-relaxed text-lg font-light">
              نحن نلتزم بتقديم معايير استثنائية في كل خطوة من رحلة شراء سيارتك. قيمنا هي أساس عملنا وثقتك هي غايتنا.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md hover:bg-white/10 p-8 rounded-sm border border-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 text-smaa-red-500 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
