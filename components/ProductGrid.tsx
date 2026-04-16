"use client";

import { motion } from "motion/react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "The Signature Silk",
    description: "Featherlight and fluid movement.",
    price: "$55.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6hRxRUUopP2_Csl8htQme9eEuivxfJVUwD0tOeM2lhsm_6fyuuM4ECXxuBS76He3OEc6pPsRynMvwvQL3CE45lksHgUGBpQ2hXq11Q7wPdU9VtoLCWGmJXeuiSFIF7xx-AJXaXklJ3GC9ucTzVWEmG_lTxB0vFTeGdEEP5qMhmzbPZpxZZTx6grdX7_V_YSgqtvBc1rv7DbETDgNUCOrH87Lof00v82Ofbqmwxux_RbJ2CMxjY53g_JcA47ajyNtpzpq4WI3We1U",
    large: true,
  },
  {
    id: 2,
    title: "Bamboo Jersey",
    description: "Ultra-breathable for daily wear",
    price: "$38.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7tqwwKl36yoNml9sF3KrKUJk0XRdemZ5UJoOFS1zZEyKPaCwe-eS-rK2QY6K7QinX5MQhDaXHVoW9CznFfcrxV1epfuK4LZ562YIBdQ8RyESxWADMf5hPSY7TfFwxTgUCn3BUcgg1B_cOEx0oWsOQqtRrcuCMd-45aByxmx0o9zaVUOz3Cscy9eVrLLlc9_oL_F88AfhxxEsnVP0aoTZuTkFqOR8fARG-4X87lUJFcA7PBI_m-afxLF36BZ8yt37PHboTZAuVC6I",
    badge: "New In",
  },
  {
    id: 3,
    title: "Crinkle Chiffon",
    description: "Texture that stays in place",
    price: "$42.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnq3l1QBTlqIWJ39hvWWw8sEhzE0ILraB64FCdcBDaT90fkjk9n6kZsOW68JxbUcliOoYfXJ8uzjv_F_kCw2D8Qqk025w05wDvbJmbZfj0wRUwuIGWRayJtViztkBNZm9LoZ-HPcb7P5hv79U13QQRxoKkofAPLYQwaroaEBwiXh7U6jz7fJX6YduNl9vKdj47tMMVUgUrPVtV9wHtZQNe1rggoKSbh8vsiQ2YWZLBPm5AVwB2Tltv4Jp1XszK_do_yk0v_cmVXKY",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-body uppercase tracking-widest text-[11px] text-tertiary mb-3 block">
              Curated Selection
            </span>
            <h2 className="font-headline text-4xl font-bold text-editorial">
              Seasonal Favorites
            </h2>
          </div>
          <a
            className="text-primary font-semibold text-sm border-b border-primary/30 pb-1 hover:border-primary transition-all"
            href="#"
          >
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group"
          >
            <div className="relative overflow-hidden rounded-xl bg-surface-container aspect-4/5 md:aspect-16/11">
              <Image
                width={1920}
                height={1080}
                alt={products[0].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={products[0].image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-8 bg-white/40 backdrop-blur-xl rounded-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-headline text-xl font-bold text-on-surface">
                  {products[0].title}
                </h3>
                <p className="text-on-surface-variant text-sm mt-2">
                  {products[0].description}
                </p>
                <button className="mt-4 text-primary font-bold text-xs uppercase tracking-widest">
                  Explore Series →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Medium Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 flex flex-col justify-center"
          >
            <div className="group">
              <div className="relative overflow-hidden rounded-xl bg-surface-container aspect-4/5  ">
                <Image
                  width={1920}
                  height={1080}
                  alt={products[1].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src={products[1].image}
                  referrerPolicy="no-referrer"
                />
                {products[1].badge && (
                  <span className="absolute top-4 left-4 bg-tertiary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {products[1].badge}
                  </span>
                )}
              </div>
              <div className="mt-6">
                <h3 className="font-headline text-lg font-bold">
                  {products[1].title}
                </h3>
                <p className="text-on-surface-variant text-sm">
                  {products[1].description}
                </p>
                <span className="text-primary font-semibold mt-2 block">
                  {products[1].price}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4"
          >
            <div className="group">
              <div className="relative overflow-hidden rounded-xl bg-surface-container aspect-square">
                <Image
                  width={1920}
                  height={1080}
                  alt={products[2].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src={products[2].image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-headline text-lg font-bold">
                  {products[2].title}
                </h3>
                <p className="text-on-surface-variant text-sm">
                  {products[2].description}
                </p>
                <span className="text-primary font-semibold mt-2 block">
                  {products[2].price}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Lifestyle/Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container h-[400px]"
          >
            <Image
              width={1920}
              height={1080}
              alt="Lifestyle Hijab"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBSJ1W5HPb8JMXu3bb6ozNN5nLOOacCNBd7-1VaeZ77DRMIdsjFRiRucbGQZ-bhMj6i38kU02fq45KXNWtQXeme5IWD5WFhCLqqHZiIrNllAzOe8dYNWBM2b4XB8heonRxqD1uXWfuyRtBOVCL04XW_GkPu6LTwdUb8Z04Jr9yeqNm1bkjAAMSGd5xkH_uKlEVUk08YeyB6WrvSYh5WNSyM2F7INS8ckxaUW-n7FI2NZcWs-ZtnvLHBddO0IU1E29iaboNQl1Tck"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12 text-white">
              <h3 className="font-headline text-3xl font-bold">
                Essential Luxury
              </h3>
              <p className="max-w-md mt-4 text-white/90">
                Curated for the woman who bridges the gap between traditional
                values and contemporary style.
              </p>
              <button className="mt-8 border border-white/40 hover:bg-white hover:text-primary px-8 py-3 rounded-full text-xs font-bold uppercase transition-all self-start">
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
