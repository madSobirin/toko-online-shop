import { Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-start px-12 py-16 gap-12 w-full max-w-screen-2xl mx-auto">
        <div className="max-w-xs">
          <div className="text-xl font-bold text-primary font-headline mb-6">
            LUMIÈRE
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Elevating the modest fashion landscape through intentional design,
            premium sourcing, and timeless aesthetics.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <Share2 size={18} />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h5 className="font-headline text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">
              Collection
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-sm text-on-surface-variant hover:text-tertiary transition-colors"
                  href="#"
                >
                  Silk Series
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-on-surface-variant hover:text-tertiary transition-colors"
                  href="#"
                >
                  Bamboo Jersey
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-on-surface-variant hover:text-tertiary transition-colors"
                  href="#"
                >
                  Bridal Collection
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-on-surface-variant hover:text-tertiary transition-colors"
                  href="#"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-headline text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">
              Support
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-sm text-on-surface-variant hover:text-tertiary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-on-surface-variant hover:text-tertiary transition-colors"
                  href="#"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-on-surface-variant hover:text-tertiary transition-colors"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-on-surface-variant hover:text-tertiary transition-colors"
                  href="#"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <h5 className="font-headline text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">
            Contact
          </h5>
          <p className="text-sm text-on-surface-variant mb-2">
            atelier@lumierehijab.com
          </p>
          <p className="text-sm text-on-surface-variant">
            Flagship: Paris & Dubai
          </p>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-primary/5 text-center">
        <p className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest">
          © 2024 Lumière Hijab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
