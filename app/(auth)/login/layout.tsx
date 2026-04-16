"use client";
import { motion } from "motion/react";
import { HelpCircle, Globe } from "lucide-react";
import Link from "next/link";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Imagery (Asymmetric Editorial Style) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#fafaf5]/40 z-10" />
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          alt="Serene Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgeg8NnWB4mS3vcoVQTTnxflAf7wDNuRl7SrgBp3lw_wkCxtTujNj4HI_iIisHqSlkgL9aM2tpNWTbqpfIoH7r19UhyKtk5nk9e4Dc8P1DseItpteW3k30WEKDALgiLMLDp_4vZVAdSu9bFcghPtxDhW1ieTMd9g9t0o6Rmb003bzw1G6j83KxXi6JJ5aNLCzX9K28wrG7d8Hx1GISdZl1MrRE164xzwRUGO4v5ezcVl2-DMVptAdSEHnG0NAoo7p_kj4BtdROokg"
        />
      </div>

      {/* Floating Decorative Element */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:block absolute top-12 left-12 z-20"
      >
        <h1 className="font-headline text-2xl font-bold tracking-tighter text-primary">
          Serene Modesty
        </h1>
      </motion.div>

      {/* Central Login Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="relative z-30 w-full max-w-md px-6"
      >
        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-[0px_20px_40px_rgba(46,52,45,0.05)] border border-surface-container">
          {/* Card Header */}
          <div className="text-center mb-10">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-3">
              Welcome Back
            </span>
            <h2 className="font-headline text-3xl font-light tracking-tight text-on-surface">
              Sign In
            </h2>
            <p className="mt-4 text-on-surface-variant text-sm font-light leading-relaxed">
              Step back into a world of curated grace and timeless elegance.
            </p>
          </div>

          {/* Form */}
          {children}

          {/* Footer Links */}
          <div className="mt-10 text-center space-y-4">
            <p className="text-sm text-on-surface-variant font-light">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-medium hover:underline underline-offset-4 decoration-primary/30 transition-all"
              >
                Create an Account
              </Link>
            </p>

            <div className="flex items-center justify-center gap-6 pt-6 border-t border-outline-variant/10">
              <button className="text-on-surface-variant hover:text-primary transition-colors duration-300">
                <HelpCircle size={20} />
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors duration-300">
                <Globe size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-on-surface-variant"
        >
          © 2026 madsob. Designed for madsob.
        </motion.p>
      </motion.div>

      {/* Editorial Decor Detail */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="hidden lg:block absolute bottom-12 right-12 z-20 max-w-xs text-right"
      >
        <p className="font-headline text-sm font-light italic text-primary-dim leading-relaxed">
          &quot;Modesty is the highest form of elegance.&quot;
        </p>
      </motion.div>
    </main>
  );
}
