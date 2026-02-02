"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <nav className="container mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-xl font-bold text-zinc-900 dark:text-white cursor-pointer tracking-tight font-serif"
          onClick={() => scrollToSection("hero")}
        >
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("works")}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Work
          </button>
          
          <Button
            variant="outline"
            size="default"
            onClick={() => scrollToSection("contact")}
            className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium px-6"
          >
            Contact
          </Button>

          {/* Theme Toggle (Desktop) */}
          <div className="pl-2 border-l border-zinc-200 dark:border-zinc-800">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-4 md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-zinc-900 dark:text-white hover:text-black dark:hover:text-zinc-300 transition-colors"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-16 right-0 w-64 h-screen bg-white/95 dark:bg-black/95 backdrop-blur-md border-l border-zinc-200 dark:border-zinc-800 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-8">
          <button
            onClick={() => scrollToSection("works")}
            className="text-left text-lg font-medium text-zinc-900 dark:text-white"
          >
            Work
          </button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium justify-start"
          >
            Contact
          </Button>

          {/* Theme Toggle (Mobile Menu) */}
          <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Switch Theme
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/50 top-16 backdrop-blur-sm"
        />
      )}
    </header>
  );
};

export default Header;