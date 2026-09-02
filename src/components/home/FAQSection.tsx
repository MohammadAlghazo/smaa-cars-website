"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "هل تقدمون خدماتكم للأفراد فقط؟",
    a: "نخدم الأفراد والشركات والمعارض وقطاعات الأعمال."
  },
  {
    q: "هل يمكن طلب استيراد سيارة غير موجودة في الموقع؟",
    a: "نعم، الموقع تعريفي ويمكن إرسال طلب السيارة والمواصفات المطلوبة من خلال نموذج طلب الأفراد أو الشركات."
  },
  {
    q: "هل تبيعون سيارات داخل المملكة؟",
    a: "نعم، تشمل خدماتنا بيع وتوفير السيارات داخل المملكة، بالإضافة إلى الاستيراد من الخارج."
  },
  {
    q: "هل يمكن للشركات طلب كميات؟",
    a: "نعم، نستقبل طلبات الشركات والمعارض والأساطيل، ويتم إعداد العرض بناءً على العدد والموديلات والمواصفات المطلوبة."
  },
  {
    q: "هل الأسعار ثابتة؟",
    a: "تختلف الأسعار بحسب السيارة ومصدر التوريد وتكاليف الشحن والرسوم والعروض المتاحة وقت تقديم الطلب."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-smaa-dark border-t border-smaa-blue-900">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            الأسئلة الشائعة
          </motion.h2>
          <div className="w-20 h-1 bg-smaa-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`border border-smaa-blue-800 rounded-xl overflow-hidden transition-colors ${openIndex === idx ? 'bg-smaa-blue-900/30' : 'bg-smaa-dark hover:bg-smaa-blue-900/10'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right focus:outline-none"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-smaa-red-400' : 'text-white'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180 text-smaa-red-400' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-400 leading-relaxed text-balance border-t border-smaa-blue-800/50 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
