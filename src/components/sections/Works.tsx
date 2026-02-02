"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { WORKS_DATA } from "@/data";
import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Works = () => {
  return (
    <section
      id="works"
      className="relative bg-zinc-50 dark:bg-black py-32 px-6 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-zinc-400/10 dark:bg-zinc-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-zinc-500/10 dark:bg-zinc-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            A collection of projects that showcase my skills in web development, AI integration, and creative problem-solving.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {WORKS_DATA.map((work, index) => (
            <ProjectCard 
              key={work.title} 
              work={work} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// PROJECT CARD COMPONENT
interface ProjectCardProps {
  work: typeof WORKS_DATA[0];
  index: number;
}

const ProjectCard = ({ work, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
        
        {/* Bagian gambar projek */}
        <motion.div
          className={`relative ${isEven ? 'md:col-start-1' : 'md:col-start-2'}`}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Image container with rounded corners */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-linear-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 shadow-2xl border border-zinc-300 dark:border-zinc-700">
            
            {/* Project thumbnail/placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
              {/* Placeholder - Replace with actual project images later */}
              <div className="text-[120px] font-bold text-zinc-300 dark:text-zinc-700 opacity-40 select-none">
                {work.title.charAt(0)}
              </div>
              
              {/* Decorative gradient orbs */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-zinc-400 to-zinc-600 dark:from-zinc-600 dark:to-zinc-800 opacity-20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-br from-zinc-500 to-zinc-700 dark:from-zinc-700 dark:to-zinc-900 opacity-20 blur-3xl rounded-full"></div>
            </div>

            {/* Hover overlay with gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center gap-4"
            >
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-white/90 hover:bg-white text-black backdrop-blur-sm shadow-lg"
              >
                <a
                  href={work.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-white/90 hover:bg-white text-black backdrop-blur-sm shadow-lg"
              >
                <a
                  href={work.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="w-4 h-4" />
                  Source
                </a>
              </Button>
            </motion.div>

            {/* Category badge */}
            {work.category && (
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full border border-zinc-200 dark:border-zinc-700 shadow-lg">
                <span className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
                  {work.category}
                </span>
              </div>
            )}
          </div>

          {/* Gradient accent bar */}
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-linear-to-br from-zinc-400 to-zinc-600 dark:from-zinc-600 dark:to-zinc-800 rounded-2xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        </motion.div>

        {/* PROJECT INFO SECTION */}
        <div className={`space-y-6 ${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}>
          {/* Project number */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-sm text-zinc-400 dark:text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-zinc-300 dark:from-zinc-700 to-transparent"></div>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-serif text-3xl lg:text-4xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors"
          >
            {work.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base lg:text-lg"
          >
            {work.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {work.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                viewport={{ once: true }}
                className="text-xs font-mono px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action buttons (mobile fallback) */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-3 pt-4 md:hidden"
          >
            <Button
              variant="outline"
              size="default"
              asChild
              className="border-zinc-300 dark:border-zinc-700"
            >
              <a
                href={work.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-4 w-4 mr-2" />
                Source
              </a>
            </Button>
            <Button
              variant="outline"
              size="default"
              asChild
              className="border-zinc-300 dark:border-zinc-700"
            >
              <a
                href={work.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;