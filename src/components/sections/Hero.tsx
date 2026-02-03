"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROFILE_DATA } from "@/data";
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-zinc-50/80 dark:bg-black flex items-center justify-center px-6 pt-20 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end"
          >
            {/* Outer container with rotating gradient */}
            <div className="relative group">
              {/* Animated gradient border - UPDATED */}
              <div className="absolute -inset-1 bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-900 dark:from-zinc-600 dark:via-zinc-400 dark:to-white rounded-full opacity-75 group-hover:opacity-100 blur-lg animate-pulse"></div>
              
              {/* Rotating gradient ring - UPDATED */}
              <div className="absolute -inset-1 bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-900 dark:from-zinc-600 dark:via-zinc-400 dark:to-white rounded-full opacity-0 group-hover:opacity-75 animate-spin-slow blur"></div>
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 bg-white dark:bg-zinc-900">
                <Image 
                  src="/images/pfp/pfp.jpg"
                  alt="Lavinora Profile Picture"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "320px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block w-0.5 bg-zinc-300 dark:bg-zinc-800"
          ></motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 text-center md:text-left space-y-6"
          >
            <div>
              <div className="text-xs uppercase text-zinc-500 dark:text-zinc-400 tracking-widest leading-tight mb-2 h-4">
                <TypeAnimation
                  sequence={[
                    'Software Engineer',
                    2000, // Wait 2s
                    'AI Engineer',
                    2000,
                    'Video Editor',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="font-mono"
                />
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl font-medium text-zinc-900 dark:text-white leading-tight">
                {PROFILE_DATA.hero.greeting}{" "}
                <span className="text-zinc-600 dark:text-zinc-400">
                  {PROFILE_DATA.name}!
                </span>
              </h1>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto md:mx-0">
              {PROFILE_DATA.hero.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;