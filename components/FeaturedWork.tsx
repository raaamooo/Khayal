'use client';

import { motion } from "framer-motion";
import { useLanguage } from '@/src/context/LanguageContext';

export const FeaturedWork = () => {
  const { content } = useLanguage();
  const work = content.work || {};
  const caseStudies = work.caseStudies || [];

  // K-mark SVG component for case study visuals
  const KMark = ({ color1, color2 }: { color1: string; color2: string }) => (
    <svg width="120" height="160" viewBox="0 0 58 82" fill="none" className="opacity-60">
      <line x1="10" y1="6" x2="10" y2="68" stroke={color1} strokeWidth="5" strokeLinecap="round"/>
      <line x1="10" y1="37" x2="50" y2="6" stroke={color1} strokeWidth="5" strokeLinecap="round"/>
      <line x1="10" y1="37" x2="50" y2="68" stroke={color1} strokeWidth="5" strokeLinecap="round"/>
      <circle cx="30" cy="77" r="5.5" fill={color2}/>
    </svg>
  );

  return (
    <section className="py-24" id="work">
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
          {work.title || 'Selected Work'}
        </motion.h2>

        {/* Cards container */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          {caseStudies[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex flex-col group"
            >
              <div className="flex flex-col items-start mb-4">
                <span className="text-fog text-xs uppercase tracking-[0.15em] mb-3 font-syne">
                  {caseStudies[0].tags?.join(' · ') || 'MacBook Repair · Alexandria'}
                </span>
                <h3 className="font-syne text-xl font-bold text-lavender mb-2">
                  {caseStudies[0].title || 'Chip — The AI Tech Assistant'}
                </h3>
                <p className="text-fog text-sm leading-relaxed flex-1 mb-4">
                  {caseStudies[0].description || 'AI brand character that handles customer inquiries, repair quotes, and MacBook advice 24/7.'}
                </p>
              </div>
              {/* K Mark Visual */}
              <div className="w-full h-48 rounded-xl bg-gradient-to-br from-surface to-void flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-30" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <KMark color1="rgba(162, 89, 255, 0.5)" color2="rgba(255, 107, 53, 0.7)" />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Card 2 */}
          {caseStudies[1] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex flex-col group"
            >
              <div className="flex flex-col items-start mb-4">
                <span className="text-fog text-xs uppercase tracking-[0.15em] mb-3 font-syne">
                  {caseStudies[1].tags?.join(' · ') || 'Café & Workspace · Luxor'}
                </span>
                <h3 className="font-syne text-xl font-bold text-lavender mb-2">
                  {caseStudies[1].title || '3m Samir — The Retro Host'}
                </h3>
                <p className="text-fog text-sm leading-relaxed flex-1 mb-4">
                  {caseStudies[1].description || 'A nostalgic café character built for Instagram, WhatsApp, and the café\'s website. Bilingual, in-character.'}
                </p>
              </div>
              {/* K Mark Visual */}
              <div className="w-full h-48 rounded-xl bg-gradient-to-br from-surface to-void flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-30" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <KMark color1="rgba(255, 107, 53, 0.5)" color2="rgba(162, 89, 255, 0.7)" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Link to view all work */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/work"
            className="group text-violet hover:text-violet-light transition-colors font-syne text-sm tracking-wide flex items-center gap-2"
          >
            {work.cta?.primary || 'View All Work'}
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};