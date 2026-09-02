"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "اختر ونحن نتحقق",
    desc: "أرسل لنا السيارة المطلوبة أو دعنا نبحث لك، ثم نقوم بالتحقق من حالتها ومستنداتها كاملة."
  },
  {
    num: "02",
    title: "الفحص الخارجي الشامل",
    desc: "لضمان الجودة، يتم فحص السيارة في بلد المصدر قبل إتمام أي عملية شراء."
  },
  {
    num: "03",
    title: "تخليص الإجراءات الجمركية",
    desc: "نتولى عنك كافة التراخيص، الجمارك، والمطابقة للمواصفات السعودية لضمان دخولها النظامي."
  },
  {
    num: "04",
    title: "التسليم حتى الباب",
    desc: "نوصل السيارة إلى مكانك بكل أمان وراحة بال لتبدأ تجربة القيادة."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-12 md:py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-smaa-blue-900 mb-4"
          >
            آلية العمل
          </motion.h2>
          <div className="w-20 h-1 bg-smaa-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all"
            >
              <div className="text-6xl font-black text-gray-50 group-hover:text-smaa-red-50/50 transition-colors absolute top-4 left-4 z-0 select-none">
                {step.num}
              </div>
              <div className="relative z-10 mt-6">
                <h3 className="text-xl font-bold text-smaa-blue-900 mb-4 flex items-center gap-3">
                  <span className="text-smaa-red-600">{step.num}</span>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
