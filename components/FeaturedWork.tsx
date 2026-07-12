'use client';

import { motion } from "framer-motion";

export const FeaturedWork = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <h2 className="text-fog text-xs uppercase tracking-widest mb-8">
          Selected Work
        </h2>

        {/* Cards container */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Compu City */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-surface rounded-[14px] border border-lavender/5 p-6 flex flex-col transition-all duration-300 hover:border-violet/20"
          >
            <div className="flex flex-col items-start mb-4">
              {/* Tag */}
              <span className="text-fog text-xs uppercase tracking-widest mb-2">
                MacBook Repair · Alexandria
              </span>
              {/* Headline */}
              <h3 className="font-syne text-lg text-lavender mb-2">
                Chip — The AI Tech Assistant
              </h3>
              {/* Body */}
              <p className="text-fog text-sm leading-relaxed flex-1 mb-4">
                AI brand character that handles customer inquiries, repair quotes, and MacBook advice 24/7.
              </p>
            </div>
            {/* Abstract Visual - K mark variant */}
            <div className="w-full h-48 bg-surface rounded-xl flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Outer ring - violet */}
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="rgba(162, 89, 255, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Inner K shape - two lines */}
                <line
                  x1="8"
                  y1="8"
                  x2="8"
                  y2="24"
                  stroke="rgba(162, 89, 255, 0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="16"
                  x2="24"
                  y2="10"
                  stroke="rgba(162, 89, 255, 0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="16"
                  x2="24"
                  y2="22"
                  stroke="rgba(162, 89, 255, 0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Center dot - ember */}
                <circle
                  cx="16"
                  cy="16"
                  r="2"
                  fill="rgba(255, 107, 53, 0.7)"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Retro Spot */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-surface rounded-[14px] border border-lavender/5 p-6 flex flex-col transition-all duration-300 hover:border-violet/20"
          >
            <div className="flex flex-col items-start mb-4">
              {/* Tag */}
              <span className="text-fog text-xs uppercase tracking-widest mb-2">
                Café & Workspace · Luxor
              </span>
              {/* Headline */}
              <h3 className="font-syne text-lg text-lavender mb-2">
                3m Samir — The Retro Host
              </h3>
              {/* Body */}
              <p className="text-fog text-sm leading-relaxed flex-1 mb-4">
                A nostalgic café character built for Instagram, WhatsApp, and the café's website. Bilingual, in-character.
              </p>
            </div>
            {/* Abstract Visual - K mark variant */}
            <div className="w-full h-48 bg-surface rounded-xl flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Outer ring - ember */}
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="rgba(255, 107, 53, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Inner K shape - two lines */}
                <line
                  x1="8"
                  y1="8"
                  x2="8"
                  y2="24"
                  stroke="rgba(255, 107, 53, 0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="16"
                  x2="24"
                  y2="10"
                  stroke="rgba(255, 107, 53, 0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="16"
                  x2="24"
                  y2="22"
                  stroke="rgba(255, 107, 53, 0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Center dot - violet */}
                <circle
                  cx="16"
                  cy="16"
                  r="2"
                  fill="rgba(162, 89, 255, 0.7)"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Link to view all work */}
        <div className="mt-12 flex justify-center">
          <a
            href="/work"
            className="text-violet hover:underline underline-offset-4 transition-colors"
          >
            View All Work →
          </a>
        </div>
      </div>
    </section>
  );
};