"use client";
import { motion } from "motion/react";

import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="group">
          <label
            className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-2 ml-1"
            htmlFor="full_name"
          >
            Full Name
          </label>
          <div className="relative">
            <input
              className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl text-on-surface placeholder:text-outline-variant/60 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-400 ease-out outline-none"
              id="full_name"
              name="full_name"
              placeholder="Aisha Rahman"
              type="text"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="group">
          <label
            className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-2 ml-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl text-on-surface placeholder:text-outline-variant/60 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-400 ease-out outline-none"
              id="email"
              name="email"
              placeholder="aisha@example.com"
              type="email"
            />
          </div>
        </div>

        {/* Password Fields Grid */}
        <div className="grid grid-cols-1 gap-6">
          <div className="group">
            <label
              className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-2 ml-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl text-on-surface placeholder:text-outline-variant/60 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-400 ease-out outline-none"
                id="password"
                name="password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="group">
            <label
              className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-2 ml-1"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl text-on-surface placeholder:text-outline-variant/60 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-400 ease-out outline-none"
                id="confirm_password"
                name="confirm_password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
              />
            </div>
          </div>
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-center gap-3 pt-2">
          <div className="relative flex items-center">
            <input
              className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface-container-low cursor-pointer"
              id="terms"
              type="checkbox"
            />
          </div>
          <label
            className="text-xs text-on-surface-variant font-light cursor-pointer"
            htmlFor="terms"
          >
            I agree to the{" "}
            <a
              className="underline underline-offset-4 hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-4 hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.01, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full primary-gradient text-on-primary font-label text-[13px] font-semibold uppercase tracking-widest py-5 rounded-xl shadow-[0px_10px_25px_rgba(106,94,51,0.2)] hover:shadow-[0px_15px_35px_rgba(106,94,51,0.3)] transition-all duration-400 ease-out flex items-center justify-center gap-2 group"
            type="submit"
          >
            Create Account
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
