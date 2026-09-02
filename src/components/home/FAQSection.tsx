"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "هل تقدمون خدماتكم للأفراد فقط؟",
    a: "نخدم الأفراد والشركات والمعارض وقطاعات الأعمال بمرونة تامة لتلبية كافة الاحتياجات."
  },
  {
    q: "هل يمكن طلب استيراد سيارة غير موجودة في الموقع؟",
    a: "نعم بالتأكيد! يمكنك إرسال طلب السيارة والمواصفات المطلوبة من خلال صفحة تواصل معنا وسنقوم بتوفيرها لك."
  },
  {
    q: "هل تبيعون سيارات داخل المملكة؟",
    a: "نعم، تشمل خدماتنا بيع وتوفير السيارات داخل المملكة بالتعاون مع وكلائنا المعتمدين، بالإضافة إلى الاستيراد."
  },
  {
    q: "هل يمكن للشركات طلب كميات؟",
    a: "نعم، نستقبل طلبات الشركات والمعارض بأسعار خاصة، ويتم إعداد العروض بناءً على العدد والموديلات."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-smaa-blue-900 mb-4"
          >
            الأسئلة الشائعة
          </motion.h2>
          <div className="w-20 h-1 bg-smaa-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-4 mb-12">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`border rounded-xl overflow-hidden transition-colors ${openIndex === idx ? 'border-smaa-blue-300 bg-blue-50/50' : 'border-gray-200 bg-white hover:border-smaa-blue-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right focus:outline-none"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-smaa-blue-900' : 'text-gray-800'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180 text-smaa-red-600' : ''}`} 
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
                    <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed text-balance border-t border-gray-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 text-smaa-red-600 font-bold hover:text-smaa-red-500 transition-colors group">
            لديك سؤال آخر؟ تواصل معنا
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
