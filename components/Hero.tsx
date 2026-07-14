'use client';

import { motion } from "framer-motion";
import { useLanguage } from '@/src/context/LanguageContext';
import Button from '@/components/ui/Button';

export const Hero = () => {
  const { content } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-void relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial-violet" />

      {/* Floating K-mark decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none"
      >
        <svg width="600" height="600" viewBox="0 0 58 82" fill="none">
          <line x1="10" y1="6" x2="10" y2="68" stroke="#A259FF" strokeWidth="4" strokeLinecap="round"/>
          <line x1="10" y1="37" x2="50" y2="6" stroke="#A259FF" strokeWidth="4" strokeLinecap="round"/>
          <line x1="10" y1="37" x2="50" y2="68" stroke="#A259FF" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="30" cy="77" r="5.5" fill="#FF6B35"/>
        </svg>
      </motion.div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/5 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-ember/5 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="flex flex-col items-center text-center py-12 relative z-10 px-6"
      >
        {/* Pill badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
          }}
          className="glass-card !rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase mb-8 text-violet border-violet/20 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet animate-glow-pulse" />
          {content.hero.pill}
        </motion.div>

        {/* English headline */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
          className="mb-4"
        >
          <h1 className="font-syne text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[0.95] gradient-text">
            {content.hero.title}
          </h1>
        </motion.div>



        {/* Body copy */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="max-w-lg mx-auto text-fog text-base sm:text-lg leading-relaxed mb-12"
        >
          {content.hero.description}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button
            as="a"
            href="#work"
          >
            {content.hero.cta.viewWork}
          </Button>
          <Button
            as="a"
            href="#demo"
          >
            {content.hero.cta.bookDemo}
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
          }}
          className="flex flex-col items-center text-fog/60 text-xs tracking-[0.2em] uppercase"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M10 16l4-4M10 16l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <span className="font-syne">{content.hero.scroll}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};