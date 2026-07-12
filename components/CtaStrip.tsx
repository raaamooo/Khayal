'use client';

import { motion } from "framer-motion";
import { useLanguage } from '@/src/context/LanguageContext';

export const CtaStrip = () => {
  const { content } = useLanguage();

  return (
    <section className="bg-surface rounded-[14px] p-16 text-center my-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="mb-6"
      >
        <h1 className="font-syne text-[48px] text-lavender leading-tight">
          {'Ready to give your brand a voice?'}
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="mb-8"
      >
        <p className="font-tajawal text-[24px] text-violet direction-rtl text-right">
          {content.pricing.cta?.note || 'هل أنت مستعد لإعطاء علامتك صوتاً？'}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <a
          href="#contact"
          className="bg-violet text-white rounded-full px-10 py-4 text-base font-bold hover:bg-violet/90 transition-colors"
        >
          {content.pricing.cta?.button || 'Book a Free Call'}
        </a>
      </motion.div>
    </section>
  );
};