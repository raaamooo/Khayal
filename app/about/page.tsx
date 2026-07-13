'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';

export default function About() {
  const { content } = useLanguage();
  const about = content.about || {};

  return (
    <>
      {/* Page Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <div className="text-center py-20">
          <h1 className="font-syne text-[64px] text-lavender mb-4">
            {about.header?.title || "We're Khayal."}
          </h1>
          <p className="font-tajawal text-[32px] text-violet rtl text-right">
            {about.header?.titleAr || "نحن خيال."}
          </p>
          <p className="font-syne text-[22px] text-lavender max-w-2xl mx-auto leading-relaxed">
            {about.header?.description || "Khayal means imagination in Arabic. That's exactly what we do — we take what a brand could be, and make it real."}
          </p>
        </div>
      </motion.div>

      {/* Philosophy Section: Why We Exist */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section label */}
            <h2 className="text-fog text-xs uppercase tracking-widest mb-8 text-center">
              {about.philosophy?.title || "Why We Exist"}
            </h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Left: Text */}
              <div className="space-y-6">
                <p className="font-syne text-lavender text-[18px] leading-relaxed">
                  {about.philosophy?.content?.[0] || "Most brands in Egypt have a logo. Very few have a voice, a character, or a reason for customers to remember them."}
                </p>
                <p className="font-syne text-lavender text-[18px] leading-relaxed">
                  {about.philosophy?.content?.[1] || "We started Khayal ker because we believe every business — the café, the repair shop, the clinic — deserves a brand that feels alive. Not a template. Not a chatbot. A character."}
                </p>
              </div>

              {/* Right: Quote cards */}
              <div className="space-y-6">
                {/* Map over quoteCards */}
                {about.philosophy?.quoteCards?.map((card, index) => (
                  <div key={index} className="bg-surface rounded-xl p-6 text-center">
                    <p className="font-syne text-[32px] font-bold text-lavender mb-2">
                      {card.title}
                    </p>
                    <p className="font-syne text-lavender text-[16px]">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* What Makes Us Different: Our Approach */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section label */}
            <h2 className="text-fog text-xs uppercase tracking-widest mb-8 text-center">
              {about.approach?.title || "Our Approach"}
            </h2>

            <div className="space-y-12">
              {/* Map over sections */}
              {about.approach?.sections?.map((section, index) => (
                <div key={index} className="border-b pb-8">
                  <h3 className="font-syne text-lavender text-[20px] mb-2">
                    {section.title}
                  </h3>
                  <p className="font-syne text-fog text-[18px] leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      {/* Location Strip */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <section className="bg-surface rounded-[14px] p-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Left column */}
            <div className="text-center md:text-left">
              <p className="font-syne text-[40px] text-lavender mb-2">
                {about.location?.title || "Based in Egypt."}
              </p>
              <p className="font-tajawal text-[24px] text-violet rtl text-right mb-2">
                {about.location?.titleAr || "مقرنا في مصر."}
              </p>
              <p className="font-syne text-fog text-[16px] leading-relaxed max-w-md">
                {about.location?.description || "Alexandria and Luxor. Working with clients across Egypt, the Gulf, and internationally."}
              </p>
            </div>

            {/* Right column: Location chips */}
            <div className="flex flex-wrap gap-4">
              <span className="bg-void rounded-xl px-6 py-4 flex items-center">
                📍 Alexandria — Studio HQ
              </span>
              <span className="bg-void rounded-xl px-6 py-4 flex items-center">
                📍 Luxor — Field Projects
              </span>
            </div>
          </div>
        </section>
      </motion.div>

      {/* CTA */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <section className="py-20 text-center">
          <h1 className="font-syne text-[48px] text-lavender mb-8">
            {about.cta?.title || "Want to work together?"}
          </h1>
          <a
            href="/contact"
            className="btn-primary"
          >
            {about.cta?.button || "Start a Conversation"}
          </a>
        </section>
      </motion.div>
    </>
  );
}