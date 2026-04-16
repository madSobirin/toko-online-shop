"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] lg:h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          priority
          alt="Elegant model wearing silk hijab"
          className="object-cover object-[center_15%] sm:object-[center_20%]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD73Oyg-k-9gVSASpng5HiIfCivE89PJAoSbCohK-O4o0XZoia9vbazAwbPwQ2LccHS8MWMaXFVQ2th53tQTlVbu7CicmTLMmcTJptCO1SKDmWaXohsKsW4uyhsSmhu7xZxjdpoFzefR6v3Y9zDogxLWfcwE9RgoS0a8sR0mCxT7Z0v5fvzpi-rQXHSc0XP8EP7n1gJujpscIrjVmyVMoOefz7cRlmI6_diQdvrVujM_KlgCMzw2eVcFZyS6og998cIJW1vBdo_f4U"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/60 to-transparent"></div>
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="font-headline uppercase tracking-[0.3em] text-[10px] text-primary mb-4 block">
            New Season Collection
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface text-editorial leading-[1.1] mb-8">
            Elegant <br />
            Everyday Hijab
          </h1>
          <p className="text-on-surface-variant text-lg mb-10 leading-relaxed max-w-lg">
            Designed for the modern woman who values comfort as much as grace.
            Experience the breathable luxury of our signature fabrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="primary-gradient text-white font-semibold px-10 py-5 rounded-xl text-sm tracking-wide hover:opacity-90 transition-all shadow-lg shadow-primary/10">
              Shop Collection
            </button>
            <button className="bg-surface/50 backdrop-blur-md border border-on-surface-variant/15 text-primary font-semibold px-10 py-5 rounded-xl text-sm tracking-wide hover:bg-surface-container transition-all">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
