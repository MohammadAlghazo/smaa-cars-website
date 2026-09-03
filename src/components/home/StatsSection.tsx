"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "+500", label: "سيارة مستوردة" },
  { value: "+200", label: "عميل" },
  { value: "+2", label: "سنوات خبرة" },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-smaa-blue-900 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-smaa-red-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center divide-y border-t md:border-t-0 border-white/10 md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-8 md:py-4 px-4 hover:bg-white/5 rounded-2xl transition-colors cursor-default"
            >
              <h4 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">{stat.value}</h4>
              <p className="text-smaa-red-400 font-bold text-lg uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
