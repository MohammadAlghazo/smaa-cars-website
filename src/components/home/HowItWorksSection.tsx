"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "الاستشارة والبحث",
    desc: "نستمع لاحتياجاتك بدقة، سواء كنت فرداً يبحث عن سيارة أحلامه، أو شركة تبحث عن أسطول متكامل، ونبدأ البحث في الأسواق العالمية."
  },
  {
    num: "02",
    title: "الفحص وضمان الجودة",
    desc: "قبل الشراء، تخضع السيارة لفحص فني شامل ودقيق في بلد المصدر للتأكد من سلامتها الميكانيكية والكهربائية بنسبة 100%."
  },
  {
    num: "03",
    title: "التخليص الجمركي",
    desc: "نقوم بإدارة جميع الإجراءات المعقدة، من شحن، جمارك، استخراج البطاقة الجمركية، وحتى مطابقة المواصفات القياسية السعودية."
  },
  {
    num: "04",
    title: "التسليم والضمان",
    desc: "تسليم السيارة لك جاهزة للاستخدام مع كافة الأوراق الرسمية، لتنطلق بها بكل ثقة وأمان وموثوقية."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-smaa-blue-900 mb-6 tracking-tight">كيف <span className="text-smaa-red-600">نعمل؟</span></h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              رحلة استيراد سيارتك معنا مصممة لتكون خالية من التعقيدات. خطوات مدروسة ومجربة لضمان راحة بالك من الطلب وحتى الاستلام.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200 bg-white rounded-sm overflow-hidden shadow-sm">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 relative group hover:bg-smaa-blue-900 transition-colors duration-500 ${
                idx !== steps.length - 1 ? 'border-b md:border-b-0 md:border-l border-gray-100' : ''
              }`}
            >
              <div className="text-5xl font-black text-gray-100 group-hover:text-white/10 transition-colors duration-500 mb-8 font-sans tracking-tighter select-none">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-smaa-blue-900 group-hover:text-white mb-4 transition-colors duration-500">
                {step.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed text-sm font-light transition-colors duration-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
