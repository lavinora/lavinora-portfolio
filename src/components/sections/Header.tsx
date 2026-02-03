"use client";

import { useState, useEffect } from "react";
import { Home, Briefcase, Mail, Github, Linkedin, Twitter, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();

  // Daftar menu navigasi
  const navItems = [
    { icon: Home, href: "#hero", label: "Home" },
    { icon: Briefcase, href: "#works", label: "Work" },
    { icon: Mail, href: "#contact", label: "Contact" },
    // Link Eksternal (bisa disesuaikan)
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub", external: true },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", external: true },
  ];

  // Fungsi Smooth Scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    
    // Hapus tanda # untuk mendapatkan ID
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsMenuOpen(false);
    }
  };

  // Optional: Intersection Observer untuk mendeteksi section yang sedang aktif saat di-scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      {/* --- DESKTOP NAVIGATION (Floating Bottom) --- */}
      <nav className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 transition-all duration-300">
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.replace("#", "");
            
            // Render Link Eksternal
            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                  aria-label={item.label}
                >
                  <Icon size={20} />
                </a>
              );
            }
            
            // Render Internal Link (Smooth Scroll)
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`group relative p-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                }`}
                aria-label={item.label}
              >
                <Icon size={20} />
                {/* Tooltip kecil saat hover */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            );
          })}
          
          {/* Separator */}
          <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700 mx-1" />
          
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION (Floating Bottom) --- */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">
        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 transition-all duration-300">
          
          {/* Baris Utama (Selalu Terlihat) */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* Home */}
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "#hero")}
              className={`p-2.5 rounded-xl transition-all ${
                activeSection === "hero"
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <Home size={22} />
            </a>
            
            {/* Work */}
            <a
              href="#works"
              onClick={(e) => handleScroll(e, "#works")}
              className={`p-2.5 rounded-xl transition-all ${
                activeSection === "works"
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <Briefcase size={22} />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className={`p-2.5 rounded-xl transition-all ${
                activeSection === "contact"
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <Mail size={22} />
            </a>
            
            {/* Toggle Menu Lainnya */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2.5 rounded-xl transition-all ${isMenuOpen ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Menu Tambahan (Expanded) */}
          {isMenuOpen && (
            <div className="px-4 pb-4 pt-2 border-t border-zinc-100 dark:border-zinc-800 animate-in slide-in-from-bottom-5 fade-in duration-200">
              <div className="grid grid-cols-4 gap-2 mb-3">
                {/* Social Links di Menu Mobile */}
                {navItems.filter(i => i.external).map((item) => {
                   const Icon = item.icon;
                   return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-400"
                    >
                      <Icon size={20} />
                      <span className="text-[10px]">{item.label}</span>
                    </a>
                   )
                })}
              </div>

              {/* Theme Toggle Mobile Expanded */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 text-sm font-medium"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                <span>Switch Theme</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;