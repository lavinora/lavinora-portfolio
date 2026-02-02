"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TECH_STACK_CATEGORIZED } from "@/data";
import { IconType } from "react-icons";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import {
  SiFastapi,
  SiLaravel,
  SiSupabase,
  SiGithub,
  SiVercel,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiReactquery,
} from "react-icons/si";
import { useState } from "react";

// MAPPING SVG FILE
const imgMap: { [key: string]: string } = {
  "Python": "/images/techstack-icons/python.svg",
  "Java": "/images/techstack-icons/java.svg",
  "JavaScript": "/images/techstack-icons/javascript.svg",
  "TypeScript": "/images/techstack-icons/typescript.svg",
  "HTML": "/images/techstack-icons/html-5.svg",
  "CSS": "/images/techstack-icons/css.svg",
  
  "React": "/images/techstack-icons/react.svg",
  "Next.js": "/images/techstack-icons/next-js.svg",
  "Flutter": "/images/techstack-icons/flutter.svg",
  "Tailwind CSS": "/images/techstack-icons/tailwind.svg",
  
  "React Hook Form": "/images/techstack-icons/react-hook-form.svg",
  "Zustand": "/images/techstack-icons/zustand.svg",
  "Zod": "/images/techstack-icons/zod.svg",
  
  "Scikit-learn": "/images/techstack-icons/scikit-learn.svg",
  "NumPy": "/images/techstack-icons/numpy.svg",
  "Pandas": "/images/techstack-icons/pandas.svg",
  "Jupyter": "/images/techstack-icons/jupyter.svg",
  
  "MySQL": "/images/techstack-icons/mysql.svg",
  "PostgreSQL": "/images/techstack-icons/postgressql.svg",
  "Redis": "/images/techstack-icons/redis.svg",
  
  "Docker": "/images/techstack-icons/docker.svg",
  "Git": "/images/techstack-icons/git.svg",
  "Figma": "/images/techstack-icons/figma.svg",
  "Davinci Resolve": "/images/techstack-icons/davinci-resolve.svg",
};

// MAPPING REACT ICONS
const iconMap: { [key: string]: IconType } = {
  "Framer Motion": TbBrandFramerMotion,
  "TanStack Query": SiReactquery,
  "Node.js": FaNodeJs,
  "FastAPI": SiFastapi,
  "Laravel": SiLaravel,
  "Supabase": SiSupabase,
  "GitHub": SiGithub,
  "Vercel": SiVercel,
  "Photoshop": SiAdobephotoshop,
  "Premiere Pro": SiAdobepremierepro,
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative py-32 px-6 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
    >
      {/* Decorative background grid */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-zinc-400/10 to-zinc-600/10 dark:from-zinc-600/5 dark:to-zinc-800/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-linear-to-br from-zinc-500/10 to-zinc-700/10 dark:from-zinc-700/5 dark:to-zinc-900/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Skills & Tools
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white"
          >
            Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>
        <div className="space-y-16">
          {TECH_STACK_CATEGORIZED.map((category, categoryIndex) => (
            <SkillCategory
              key={category.category}
              category={category}
              categoryIndex={categoryIndex}
              imgMap={imgMap}
              iconMap={iconMap}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Kategori skill
interface SkillCategoryProps {
  category: typeof TECH_STACK_CATEGORIZED[0];
  categoryIndex: number;
  imgMap: { [key: string]: string };
  iconMap: { [key: string]: IconType };
}

const SkillCategory = ({ category, categoryIndex, imgMap, iconMap }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="h-px bg-linear-to-r from-zinc-400 dark:from-zinc-600 to-transparent"
        ></motion.div>
        <h3 className="font-serif text-2xl font-semibold text-zinc-900 dark:text-white">
          {category.category}
        </h3>
        <div className="flex-1 h-px bg-linear-to-r from-zinc-400 dark:from-zinc-600 to-transparent"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {category.skills.map((tech, index) => (
          <SkillCard
            key={tech.name}
            tech={tech}
            index={index}
            categoryIndex={categoryIndex}
            imgMap={imgMap}
            iconMap={iconMap}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Kartu skill
interface SkillCardProps {
  tech: { name: string; color: string; proficiency?: number };
  index: number;
  categoryIndex: number;
  imgMap: { [key: string]: string };
  iconMap: { [key: string]: IconType };
}

const SkillCard = ({ tech, index, categoryIndex, imgMap, iconMap }: SkillCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const imageSrc = imgMap[tech.name];
  const IconComponent = iconMap[tech.name];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: categoryIndex * 0.1 + index * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      onHoverStart={() => setShowTooltip(true)}
      onHoverEnd={() => setShowTooltip(false)}
      className="group relative flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
    >
      {/* Icon Wrapper */}
      <div className="h-12 w-12 flex items-center justify-center mb-3 transition-all duration-300">
        <div className="filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 w-full h-full flex items-center justify-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={tech.name}
              width={48}
              height={48}
              className="object-contain w-full h-full"
            />
          ) : IconComponent ? (
            <div className="text-[40px]" style={{ color: tech.color }}>
              <IconComponent />
            </div>
          ) : (
            <span className="text-xs text-zinc-400 dark:text-zinc-600">?</span>
          )}
        </div>
      </div>

      {/* Skill Name */}
      <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors text-center leading-tight">
        {tech.name}
      </span>

      {/* Tooltip seberapa jago make techstack nya */}
      {tech.proficiency && showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 px-3 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg shadow-xl whitespace-nowrap z-10"
        >
          {/* Tooltip content */}
          <div className="text-xs font-semibold mb-1">{tech.name}</div>
          <div className="flex items-center gap-2">
            <div className="w-24 h-1.5 bg-zinc-700 dark:bg-zinc-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-slate-300 to-gray-400"
                style={{ width: `${tech.proficiency}%` }}
              ></div>
            </div>
            <span className="text-[10px] font-mono">{tech.proficiency}%</span>
          </div>
          {/* Tooltip arrow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-white rotate-45"></div>
        </motion.div>
      )}

      {/* Accent gradient on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-zinc-400/0 to-zinc-600/0 group-hover:from-zinc-400/5 group-hover:to-zinc-600/5 dark:group-hover:from-zinc-600/5 dark:group-hover:to-zinc-800/5 transition-all duration-300 -z-10"></div>
    </motion.div>
  );
};

export default Skills;