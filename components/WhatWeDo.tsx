'use client';

import { motion } from "framer-motion";
import { useLanguage } from '@/src/context/LanguageContext';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export const WhatWeDo = () => {
  const { content } = useLanguage();
  const services = content.services || {};

  const cards = [
    {
      data: services.brandCharacter,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      fallbackTitle: 'AI Brand Character',
      fallbackDesc: 'A named, voiced avatar that represents your brand on your website, Instagram, and WhatsApp. Speaks, answers, sells — in Arabic and English.',
    },
    {
      data: services.website,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
          <rect x="4" y="4" width="8" height="2" rx="1" fill="currentColor"/>
          <rect x="14" y="4" width="4" height="2" rx="1" fill="currentColor"/>
        </svg>
      ),
      fallbackTitle: 'Brand Website',
      fallbackDesc: 'Custom-built bilingual websites in Next.js or no-code. Designed to convert. Optimized for Egypt and international markets.',
    },
    {
      data: services.identity,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L20 7L12 14L4 7Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14L12 20" stroke="currentColor" strokeWidth="1"/>
          <path d="M8 14L16 14" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      fallbackTitle: 'Brand Identity',
      fallbackDesc: 'Logo, colors, typography, and tone of voice. Everything a brand needs to exist with intention.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-fog text-xs uppercase tracking-[0.2em] mb-12 font-syne flex items-center gap-3"
        >
          <span className="w-8 h-px bg-gradient-to-r from-violet to-transparent" />
          {services.tagline || 'What We Build'}
        </motion.h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            card.data && (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="glass-card p-8 flex flex-col items-start group cursor-default"
              >
                {/* Icon */}
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet/15 to-ember/10 text-violet group-hover:shadow-glow-violet transition-shadow duration-500">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-syne text-lg text-lavender mb-3 font-bold">
                  {card.data.title || card.fallbackTitle}
                </h3>

                {/* Body */}
                <p className="text-fog text-sm leading-relaxed flex-1">
                  {card.data.description || card.fallbackDesc}
                </p>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};