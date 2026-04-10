"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Articles" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/contact/", label: "Contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              K<span className="text-primary">&amp;</span>W
            </span>
            <span className="hidden sm:block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium border-l border-slate-300 dark:border-slate-700 pl-2">
              Mobile Tire Service
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="tel:3865667339"
              className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              (386) 566-7339
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:3865667339"
                className="flex items-center justify-center gap-2 mt-3 bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call (386) 566-7339
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
