"use client";

import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col items-start gap-3 bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-surface/50"
    >
      <div className="flex items-center gap-3">
        <span className="font-syne text-[24px] font-bold text-violet">{number}</span>
        <h3 className="font-syne text-[20px] font-bold text-lavender">{title}</h3>
      </div>
      <p className="font-tajawal text-fog text-center">{description}</p>
    </motion.div>
  );
};

export default ProcessStep;