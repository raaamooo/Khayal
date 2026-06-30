"use client";

import { motion } from "framer-motion";

export const WhatWeDo = () => {
  return (
    <section className="py-20 bg-relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <h2 className="text-fog text-xs uppercase tracking-widest mb-8">
          What We Build
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: AI Brand Agent */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-surface rounded-[14px] border border-lavender/5 p-8 flex flex-col items-start transition-all duration-300 hover:border-violet/20"
          >
            {/* Icon */}
            <div className="mb-6 w-12 h-12 flex items-center justify-center bg-violet/10 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Circle head */}
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                {/* 3 lines body */}
                <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Title */}
            <h3 className="font-syne text-lg text-lavender mb-2">
              AI Brand Character
            </h3>

            {/* Arabic title */}
            <h4 className="font-tajawal text-violet text-sm mb-4 direction-rtl text-right">
              شخصية الذكاء الاصطناعي
            </h4>

            {/* Body */}
            <p className="text-fog text-sm leading-relaxed flex-1">
              A named, voiced avatar that represents your brand on your website, Instagram, and WhatsApp. Speaks, answers, sells — in Arabic and English.
            </p>
          </motion.div>

          {/* Card 2: Website Design */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-surface rounded-[14px] border border-lavender/5 p-8 flex flex-col items-start transition-all duration-300 hover:border-violet/20"
          >
            {/* Icon */}
            <div className="mb-6 w-12 h-12 flex items-center justify-center bg-violet/10 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Browser outline */}
                <rect x="2" y="2" width="20" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
                {/* Tabs */}
                <rect x="4" y="4" width="8" height="2" rx="1" fill="currentColor"/>
                <rect x="14" y="4" width="4" height="2" rx="1" fill="currentColor"/>
              </svg>
            </div>

            <h3 className="font-syne text-lg text-lavender mb-2">
              Brand Website
            </h3>
            <h4 className="font-tajawal text-violet text-sm mb-4">
              الموقع الإلكتروني
            </h4>
            <p className="text-fog text-sm leading-relaxed flex-1">
              Custom-built bilingual websites in Next.js or no-code. Designed to convert. Optimized for Egypt and international markets.
            </p>
          </motion.div>

          {/* Card 3: Full Identity */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-surface rounded-[14px] border border-lavender/5 p-8 flex flex-col items-start transition-all duration-300 hover:border-violet/20"
          >
            {/* Icon */}
            <div className="mb-6 w-12 h-12 flex items-center justify-center bg-violet/10 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Diamond */}
                <path d="M12 2L20 7L12 14L4 7Z" stroke="currentColor" strokeWidth="2"/>
                {/* Sparkles */}
                <path d="M12 14L12 20" stroke="currentColor" strokeWidth="1"/>
                <path d="M8 14L16 14" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>

            <h3 className="font-syne text-lg text-lavender mb-2">
              Brand Identity
            </h3>
            <h4 className="font-tajawal text-violet text-sm mb-4">
              هوية بصرية
            </h4>
            <p className="text-fog text-sm leading-relaxed flex-1">
              Logo, colors, typography, and tone of voice. Everything a brand needs to exist with intention.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
