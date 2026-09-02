"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "اختر ونحن نتحقق",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    align: "left"
  },
  {
    num: "02",
    title: "الفحص الخارجي الشامل",
    image: "https://images.unsplash.com/photo-1632823462943-4632b7194f1c?q=80&w=800&auto=format&fit=crop",
    align: "right"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-smaa-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #1e3a8a 0%, transparent 50%)',
        backgroundSize: '100% 100%'
      }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-smaa-red-500 mb-4"
          >
            كيف نعمل
          </motion.h2>
          <div className="w-24 h-1 bg-smaa-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-24">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col ${step.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
              
              {/* Number */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/3 flex justify-center"
              >
                <span className="text-8xl md:text-9xl font-bold text-transparent" style={{ WebkitTextStroke: '2px #dc2626' }}>
                  {step.num}
                </span>
              </motion.div>

              {/* Image & Title Card */}
              <motion.div 
                initial={{ opacity: 0, x: step.align === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-2/3 relative"
              >
                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <Image 
                    src={step.image} 
                    alt={step.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                {/* Title Box */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${step.align === 'left' ? '-right-4 md:-right-10' : '-left-4 md:-left-10'} bg-[#4d1f1f] text-white p-6 md:p-8 rounded-xl shadow-xl w-48 md:w-56 text-center border-r-4 border-smaa-red-500`}>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-balance">
                    {step.title}
                  </h3>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
