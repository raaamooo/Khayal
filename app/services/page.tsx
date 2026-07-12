'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';
import ServiceCard from '@/components/services/ServiceCard';
import { siteConfig } from '@/src/config/siteConfig';

export default function ServicesPage() {
  const { content } = useLanguage();
  const servicesData = content.services || {};

  return (
    <section className="min-h-screen bg-void text-lavender py-16 px-6 md:px-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-fog text-sm">
          {/* Using services title as the section name - "Our Services" */}
          {servicesData.title ? `Khayal Studio / ${servicesData.title}` : 'Khayal Studio / Services'}
        </p>
        <h1 className="font-syne text-[64px] font-bold mb-4 leading-none">
          {servicesData.title}
        </h1>
        <p className="font-tajawal text-[32px] font-bold text-violet rtl text-right">
          {servicesData.tagline}
        </p>
        <p className="text-fog mx-auto">
          {servicesData.description}
        </p>
      </div>

      {/* Services */}
      <div className="gap-16 md:grid-cols-1 lg:grid-cols-3">
        {/* Service 1: AI Brand Character */}
        {servicesData.brandCharacter && (
          <ServiceCard
            number="01"
            title={servicesData.brandCharacter.title}
            description={servicesData.brandCharacter.description}
            features={servicesData.brandCharacter.features}
            stats={servicesData.brandCharacter.stats}
          />
        )}
        {/* Service 2: Brand Website */}
        {servicesData.website && (
          <ServiceCard
            number="02"
            title={servicesData.website.title}
            description={servicesData.website.description}
            features={servicesData.website.features}
            stats={servicesData.website.stats}
            reverse={true}
          />
        )}
        {/* Service 3: Brand Identity */}
        {servicesData.identity && (
          <ServiceCard
            number="03"
            title={servicesData.identity.title}
            description={servicesData.identity.description}
            features={servicesData.identity.features}
            stats={servicesData.identity.stats}
          />
        )}
      </div>

      {/* Process Strip */}
      <div className="mt-20">
        <h2 className="font-syne text-[32px] font-bold mb-6 text-center">
          {servicesData.howItWorks.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[servicesData.howItWorks.step1, servicesData.howItWorks.step2, servicesData.howItWorks.step3, servicesData.howItWorks.step4]
            .filter(Boolean)
            .map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 bg-violet/20 text-violet rounded-full p-4 w-12 h-12 flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-syne text-[24px] font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-fog">{step.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}