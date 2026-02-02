"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-white dark:bg-black"
        >
          {/* Loading content */}
          <div className="text-center space-y-8">
            {/* Animated logo/text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white">
                Lavinora
              </h1>
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-900 dark:from-zinc-600 dark:via-zinc-400 dark:to-white"
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-sm text-zinc-500 dark:text-zinc-400 tracking-widest uppercase"
            >
              Loading Portfolio
            </motion.p>
          </div>

          {/* Animated background elements */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-br from-zinc-400 to-zinc-600 dark:from-zinc-600 dark:to-zinc-800 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-br from-zinc-500 to-zinc-700 dark:from-zinc-700 dark:to-zinc-900 rounded-full blur-3xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;