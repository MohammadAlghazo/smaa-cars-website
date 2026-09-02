"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "+500", label: "سيارة مستوردة" },
  { value: "+200", label: "عميل" },
  { value: "+2", label: "سنوات خبرة" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-4 md:py-0"
            >
              <h4 className="text-4xl md:text-5xl font-bold text-smaa-blue-900 mb-2">{stat.value}</h4>
              <p className="text-smaa-red-600 font-bold text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
