"use client";

import { motion } from "framer-motion";
import { CAREER_DATA } from "@/data"; 

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 border-b border-zinc-400 bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl font-semibold text-zinc-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Garis */}
          <div className="absolute left-4 md:left-[30%] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"></div>

          <div className="space-y-12">
            {CAREER_DATA.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-0 group">
                
                {/* Bagian kiri */}
                <div className="pl-12 md:pl-0 md:w-[30%] md:pr-12 md:text-right">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                  >
                    <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-2 border border-zinc-200 dark:border-zinc-800">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm text-zinc-500 font-medium mt-1">
                      {item.company}
                    </p>
                  </motion.div>
                </div>

                {/* Titik tengah */}
                <div className="absolute left-4 md:left-[30%] -translate-x-1/2 mt-1.5 md:mt-1.5 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 bg-white dark:bg-black rounded-full border-4 border-zinc-900 dark:border-zinc-100 shadow-sm z-10"
                  />
                </div>

                {/* Deskripsi */}
                <div className="pl-12 md:pl-12 flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;