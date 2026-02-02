"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-900 dark:from-zinc-600 dark:via-zinc-400 dark:to-white origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;