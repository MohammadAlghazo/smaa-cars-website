"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "عبدالله الشمري",
    role: "عميل فردي",
    text: "تجربتي مع سما للسيارات كانت استثنائية. الشفافية في الأسعار وسرعة التخليص الجمركي أبهرتني. استلمت سيارتي بحالة الوكالة تماماً كما وعدوا.",
    rating: 5,
  },
  {
    name: "مؤسسة النقل السريع",
    role: "قطاع الأعمال",
    text: "تعاقدنا مع سما لتوريد أسطول سيارات للشركة. الدقة في المواعيد والالتزام بالمواصفات المطلوبة جعلهم الخيار الأول لنا في المستقبل.",
    rating: 5,
  },
  {
    name: "خالد العتيبي",
    role: "صاحب معرض سيارات",
    text: "أتعامل مع سما منذ سنتين لتوريد السيارات لمعرضي. شبكة الموردين لديهم قوية جداً وقدرتهم على توفير سيارات نادرة في وقت قياسي ممتازة.",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-smaa-blue-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-smaa-red-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-smaa-red-600"
          >
            <Quote size={28} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-smaa-blue-900 mb-6"
          >
            ماذا يقول عملاؤنا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            نفخر بثقة الآلاف من الأفراد والشركات في المملكة العربية السعودية. نجاحنا يقاس برضا عملائنا.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="mt-auto border-t border-gray-100 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-smaa-blue-50 text-smaa-blue-900 font-bold rounded-full flex items-center justify-center text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
