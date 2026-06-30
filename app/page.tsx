"use client";

import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { WhatWeDo } from "../components/WhatWeDo";
import { FeaturedWork } from "../components/FeaturedWork";
import { CtaStrip } from "../components/CtaStrip";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <Hero />
      </motion.div>

      {/* What We Do Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <WhatWeDo />
      </motion.div>

      {/* Featured Work Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <FeaturedWork />
      </motion.div>

      {/* CTA Strip */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <CtaStrip />
      </motion.div>
    </>
  );
}
