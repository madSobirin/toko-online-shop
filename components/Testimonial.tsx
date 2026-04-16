"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Quote
            className="mx-auto text-tertiary mb-8"
            size={40}
            fill="currentColor"
          />
          <p className="font-headline text-2xl md:text-3xl font-light italic text-on-surface leading-relaxed">
            &quot;The quality of the silk is unlike anything I&apos;ve ever
            worn. It drapes beautifully and stays cool throughout the day.
            Lumière has truly redefined my wardrobe.
          </p>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-xl">
              <img
                alt="Sarah J. Al-Maktoum"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA6UVr3VMYypuIaru_Q2UCh-iAJZu83z23t_EONPjaTOLsq73z-sk_uJdu1CLFvMl_oEXTfe1kfROa9VZ1tUS1xmSfeAXzVKb3aUD16l1at1H0YMdkIv8i7Uy6vbI_m57WEURQILdAfyhUBvj6yNoY2Odv9JZLsOHc27ZMP3qN64L-IXwxn-oKWKxx42nK9QBmv8w-iIo72TdgsCAq6eRSOjLIBPgQCV-f2MywyZkSuzdE3hkOrxIBRUCX-Wl7qMAemBGZCfMvo5M"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="font-headline font-bold text-primary">
              Sarah J. Al-Maktoum
            </h4>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
              Verified Collector
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
