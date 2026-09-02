"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "+500", label: "سيارة مستوردة" },
  { value: "+200", label: "عميل" },
  { value: "+2", label: "سنوات خبرة" },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-smaa-blue-900 border-y border-smaa-blue-700 relative z-20 -mt-10 mx-4 md:mx-auto md:max-w-5xl rounded-2xl shadow-2xl shadow-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-smaa-blue-700">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-4 md:py-0"
            >
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-smaa-red-400 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
