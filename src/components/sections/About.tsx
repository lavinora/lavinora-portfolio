"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 border-b border-zinc-400 bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl">
        
        {/* --- HEADER (Sama persis dengan Experience) --- */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl font-semibold text-zinc-900 dark:text-white">
            About Me
          </h2>
        </div>

        {/* --- CONTENT (Teks Simple) --- */}
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-light"
          >
            <p>
              It started in <span className="font-medium text-zinc-900 dark:text-white">2021</span> as a Java Developer. 
              I focused on logic and creativity by building complex Minecraft modifications, which sparked my love for programming.
            </p>
            
            <p>
              By <span className="font-medium text-zinc-900 dark:text-white">2022</span>, I dove into the world of Software Engineering 
              and Full Stack development. I also explored video editing, finding a way to combine technical precision with visual storytelling.
            </p>

            <p>
              Today, I have returned to my roots as a <span className="font-medium text-zinc-900 dark:text-white">Software & AI Engineer</span>. 
              I now leverage machine learning and robust engineering principles to build smarter, scalable solutions.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;