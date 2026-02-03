"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, Clock, MapPin, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Button } from "../ui/button";
import { PROFILE_DATA } from "@/data";
import { useState } from "react";
import React from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [showDiscordCard, setShowDiscordCard] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: PROFILE_DATA.links.github,
      color: "hover:text-zinc-900 dark:hover:text-white",
      onClick: null,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: PROFILE_DATA.links.linkedin,
      color: "hover:text-blue-600",
      onClick: null,
    },
    {
      name: "Discord",
      icon: FaDiscord,
      href: "#",
      color: "hover:text-indigo-600",
      onClick: () => setShowDiscordCard(true),
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${PROFILE_DATA.links.email}`,
      color: "hover:text-red-600",
      onClick: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-zinc-50/80 dark:bg-black border-b border-zinc-200 dark:border-zinc-800"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-zinc-500"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-semibold text-zinc-900 dark:text-white"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Currently available for freelance projects and full-time
            opportunities. Let&apos;s create something amazing together.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-medium py-6 rounded-lg transition-all"
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-pulse">Sending...</span>
                  </span>
                ) : status === "sent" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span>✓ Message Sent!</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/50">
              <h3 className="font-serif text-2xl font-semibold text-zinc-900 dark:text-white mb-6">
                Let&apos;s Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-zinc-500 mt-1" />
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Email
                    </p>
                    <a 
                      href={`mailto:${PROFILE_DATA.links.email}`}
                      className="text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    >
                      {PROFILE_DATA.links.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-zinc-500 mt-1" />
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Location
                    </p>
                    <p className="text-zinc-900 dark:text-white">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-zinc-500 mt-1" />
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Availability
                    </p>
                    <p className="text-zinc-900 dark:text-white">
                      Open for opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                Connect on social
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.onClick ? undefined : social.href}
                      onClick={(e) => {
                        if (social.onClick) {
                          e.preventDefault();
                          social.onClick();
                        }
                      }}
                      target={social.onClick ? undefined : "_blank"}
                      rel={social.onClick ? undefined : "noopener noreferrer"}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-3 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md group cursor-pointer ${social.color}`}
                    >
                      <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* DISCORD PROFILE CARD MODAL */}
      <AnimatePresence>
        {showDiscordCard && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDiscordCard(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Discord Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-zinc-900 rounded-xl shadow-2xl max-w-sm w-full overflow-hidden"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowDiscordCard(false)}
                  className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors z-10"
                  aria-label="Close Discord card"
                >
                  <X className="w-4 h-4 text-zinc-300" />
                </button>

                {/* Banner */}
                <div className="h-24 bg-linear-to-br from-red-400 via-red-500 to-red-600 relative">
                </div>

                {/* Profile content */}
                <div className="px-4 pb-6">
                  {/* Avatar */}
                  <div className="relative -mt-12 mb-4">
                    <div className="w-20 h-20 rounded-full border-4 border-zinc-900 overflow-hidden bg-zinc-800">
                      <Image
                        src="/images/pfp/pfp.jpg"
                        alt="Discord Avatar"
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                      {/* Online status indicator */}
                      <div className="absolute bottom-0 right-70 w-5 h-5 bg-green-500 rounded-full border-4 border-zinc-900"></div>
                    </div>
                  </div>

                  {/* Username tooltip */}
                  <div className="mb-3 inline-block bg-zinc-800 rounded-lg px-3 py-1.5 text-sm text-zinc-300">
                    <MessageSquare className="inline w-4 h-4 mr-3" />
                    Ekonomi lagi sulit euy
                  </div>

                  {/* Name */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-0.5">
                      {PROFILE_DATA.name}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {PROFILE_DATA.links.discord || "lavinora"}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-zinc-800 mb-4"></div>

                  {/* Member since */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-white uppercase mb-2">
                      Member Since
                    </h4>
                    <p className="text-sm text-zinc-300">Jan 29, 2026</p>
                  </div>

                  {/* Note section */}
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase mb-2">
                      Note (only visible to you)
                    </h4>
                    <p className="text-sm text-zinc-400 italic">
                      Click to add a note
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-6">
                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                      Send Message
                    </button>
                    <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded transition-colors">
                      <span className="text-lg">⋯</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;