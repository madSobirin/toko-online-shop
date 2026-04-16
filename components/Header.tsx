"use client";

import { motion } from "motion/react";
import { Search, ShoppingBag, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-[0px_20px_40px_rgba(46,52,45,0.05)]">
      <div className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-primary font-headline"
        >
          LUMIÈRE
        </motion.div>

        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="font-headline uppercase tracking-widest text-[12px] text-primary border-b border-primary pb-1"
            href="#"
          >
            Shop
          </a>
          <a
            className="font-headline uppercase tracking-widest text-[12px] text-secondary hover:text-primary transition-colors duration-300"
            href="#"
          >
            Collections
          </a>
          <a
            className="font-headline uppercase tracking-widest text-[12px] text-secondary hover:text-primary transition-colors duration-300"
            href="#"
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-6 text-primary">
          <button className="hover:opacity-70 transition-opacity">
            <Search size={20} />
          </button>
          <button className="hover:opacity-70 transition-opacity relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-tertiary text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
              2
            </span>
          </button>
          <button className="md:hidden hover:opacity-70 transition-opacity">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
