'use client';

import { motion } from "framer-motion";
import { useLanguage } from '@/src/context/LanguageContext';

export const CtaStrip = () => {
  const { content } = useLanguage();

  return (
    <section className="my-24 mx-6 md:mx-auto md:max-w-5xl relative overflow-hidden">
      {/* Background */}
      <div className="glass-card !rounded-2xl p-12 sm:p-16 text-center relative">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-24 bg-ember/8 rounded-full blur-[60px]" />
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-20 rounded-2xl" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
              {'Ready to give your brand a voice?'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <p className="font-tajawal text-xl sm:text-2xl text-violet/70 direction-rtl">
              {content.pricing.cta?.note || 'هل أنت مستعد لإعطاء علامتك صوتاً؟'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="btn-primary"
            >
              {content.pricing.cta?.button || 'Book a Free Call'}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};