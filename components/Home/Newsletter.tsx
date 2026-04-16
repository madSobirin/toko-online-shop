"use client";

import { motion } from "motion/react";

export default function Newsletter() {
  return (
    <section className="py-32 relative overflow-hidden bg-surface">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px]"></div>

      <div className="max-w-3xl mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-4xl font-bold mb-6">
            Join Our Inner Circle
          </h2>
          <p className="text-on-surface-variant mb-12">
            Receive exclusive access to new collection launches, styling guides,
            and soulful storytelling.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-1">
              <input
                className="w-full px-6 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 text-on-surface transition-all placeholder:text-on-surface-variant/50 shadow-sm"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <button
              className="primary-gradient text-white px-10 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-md shadow-primary/10"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-[11px] text-on-surface-variant/60 italic">
            By subscribing, you agree to our Privacy Policy and Terms of
            Service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
