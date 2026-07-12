"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/i18n";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[100vh] flex flex-col items-center bg-void">
      {/* We'll wrap the content in a motion container for stagger animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col items-center text-center py-12"
      >
        {/* Pill badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="bg-violet/10 border border-violet/20 text-violet rounded-full px-4 py-1.5 text-xs tracking-widest uppercase mb-6"
        >
          {t('hero.pill')}
        </motion.div>

        {/* English headline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="mb-4"
        >
          <h1
            className="font-syne text-[72px] leading-none text-lavender md:text-[72px] sm:text-[40px]"
          >
            {t('hero.title')}
          </h1>
        </motion.div>

        {/* Arabic subheadline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="mb-8"
        >
          <h2
            className="font-tajawal text-[28px] text-violet direction-rtl text-right md:text-[28px] sm:text-[20px]"
          >
            {t('hero.titleAr')}
          </h2>
        </motion.div>

        {/* Body copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="max-w-lg mx-auto text-fog text-[16px] leading-relaxed mb-10"
        >
          {t('hero.description')}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex gap-4 mb-12"
        >
          <a
            href="#work"
            className="bg-violet text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-violet/90 transition-colors"
          >
            {t('hero.cta.viewWork')}
          </a>
          <a
            href="#demo"
            className="border border-lavender/20 text-lavender px-8 py-3.5 rounded-full text-sm hover:border-lavender/40 transition-colors"
          >
            {t('hero.cta.bookDemo')}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex flex-col items-center text-fog text-xs tracking-widest"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-5 w-5 items-center justify-center mb-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2L12 6H4L8 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6V14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <span>{t('hero.scroll')}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};