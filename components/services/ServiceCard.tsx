"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string;
}

interface ServiceCardProps {
  number: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  features: string[];
  stats: Stat[];
  reverse?: boolean; // if true, stats on left, content on right
}

export const ServiceCard: FC<ServiceCardProps> = ({
  number,
  title,
  titleAr,
  description,
  descriptionAr,
  features,
  stats,
  reverse = false,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 border border-surface/50 hover:border-violet/50 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6"
    >
      {!reverse && (
        <>
          <div className="w-full sm:w-[60%] flex-1 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-syne text-violet text-sm tracking-widest">{number}</span>
            </div>
            <div>
              <h2 className="font-syne text-[40px] font-bold mb-2">{title}</h2>
              <p className="font-tajawal text-[22px] font-bold text-fog rtl mb-4">{titleAr}</p>
            </div>
            <p className="text-fog mb-6">{description}</p>
            <p className="font-tajawal text-fog rtl mb-6">{descriptionAr}</p>
            <ul className="space-y-2 text-fog">
              {features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-3">— </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-[40%] flex-1 space-y-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-void rounded-xl p-6 flex flex-col items-center text-center"
              >
                <span className="font-syne text-[24px] font-bold text-lavender">{stat.value}</span>
                <p className="font-tajawal text-fog mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {reverse && (
        <>
          <div className="w-full sm:w-[40%] flex-1 space-y-4 order-2 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-syne text-violet text-sm tracking-widest">{number}</span>
            </div>
            <div>
              <h2 className="font-syne text-[40px] font-bold mb-2">{title}</h2>
              <p className="font-tajawal text-[22px] font-bold text-fog rtl mb-4">{titleAr}</p>
            </div>
            <p className="text-fog mb-6">{description}</p>
            <p className="font-tajawal text-fog rtl mb-6">{descriptionAr}</p>
            <ul className="space-y-2 text-fog">
              {features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-3">— </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-[60%] flex-1 space-y-4 order-1 md:order-1">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-void rounded-xl p-6 flex flex-col items-center text-center"
              >
                <span className="font-syne text-[24px] font-bold text-lavender">{stat.value}</span>
                <p className="font-tajawal text-fog mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ServiceCard;