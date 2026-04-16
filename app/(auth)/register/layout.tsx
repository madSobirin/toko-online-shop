"use client";

import { motion } from "motion/react";

import Link from "next/link";

export default function Register({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-x-hidden">
      {/* Left Side: Visual Narrative */}
      <section className="relative hidden md:flex md:w-1/2 lg:w-3/5 min-h-screen overflow-hidden bg-surface-container">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          alt="Serene Modesty Collection"
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="https://i.pinimg.com/736x/67/a9/90/67a9903b4236336e5479cdae16a57cbb.jpg"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-on-surface/40 via-transparent to-transparent"></div>

        <div className="relative z-10 mt-auto p-12 lg:p-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md"
          >
            <span className="inline-block px-4 py-1 mb-6 text-[10px] font-semibold tracking-[0.2em] uppercase bg-surface/80 backdrop-blur-md text-on-surface-variant rounded-full">
              Elegance Redefined
            </span>
            <h2 className="font-headline text-4xl lg:text-6xl font-light tracking-tighter text-surface leading-tight mb-6">
              The Art of <br />
              <span className="italic font-normal">Gracious</span> Living.
            </h2>
            <p className="text-surface/90 font-light leading-relaxed max-w-sm">
              Join our community of mindful individuals who value the
              intersection of contemporary style and timeless modesty.
            </p>
          </motion.div>
        </div>

        {/* Brand Watermark */}
        <div className="absolute top-12 left-12 z-10">
          <span className="font-headline text-2xl font-bold tracking-tighter text-surface drop-shadow-sm">
            Serene Modesty
          </span>
        </div>
      </section>

      {/* Right Side: Registration Form */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24 bg-surface relative">
        {/* Mobile Brand Header */}
        <div className="md:hidden mb-12 text-center">
          <h1 className="font-headline text-2xl font-bold tracking-tighter text-primary">
            Serene Modesty
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[420px]"
        >
          <header className="mb-10">
            <span className="text-editorial-spacing text-[11px] font-bold uppercase text-on-surface-variant block mb-2">
              Registration
            </span>
            <h2 className="font-headline text-3xl font-light tracking-tight text-on-surface mb-3">
              Create Your Account
            </h2>
            <p className="text-on-surface-variant font-light text-sm">
              Experience personalized curation and exclusive access to our
              newest collections.
            </p>
          </header>

          {children}

          <footer className="mt-12 text-center">
            <p className="text-sm text-on-surface-variant font-light">
              Already a member?
              <Link
                className="ml-2 text-primary font-semibold hover:underline underline-offset-8 transition-all"
                href="/login"
              >
                Sign In
              </Link>
            </p>
          </footer>
        </motion.div>

        {/* Secondary Footer */}
        <div className="mt-auto pt-12">
          <p className="text-[10px] text-outline-variant uppercase tracking-[0.2em] font-medium">
            © 2026 madsob. Designed for madsob.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="fixed top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none"></div>
      </section>
    </main>
  );
}
