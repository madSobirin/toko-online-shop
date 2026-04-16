"use client";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
// import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label
            className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 text-on-surface placeholder-outline-variant focus:ring-1 focus:ring-primary transition-all duration-300 font-light outline-none"
              id="email"
              name="email"
              placeholder="grace@example.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-end px-1">
            <label
              className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant"
              htmlFor="password"
            >
              Password
            </label>
            <button
              type="button"
              className="font-label text-[10px] uppercase tracking-widest text-primary hover:opacity-70 transition-opacity duration-300"
            >
              Forgot Password?
            </button>
          </div>
          <div className="relative">
            <input
              className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 text-on-surface placeholder-outline-variant focus:ring-1 focus:ring-primary transition-all duration-300 font-light outline-none"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="primary-gradient w-full py-4 px-6 rounded-xl font-label text-[10px] uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/10 hover:shadow-xl transition-all duration-300 ease-out flex items-center justify-center gap-2"
            type="submit"
          >
            Sign In
            <ArrowRight size={14} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
