'use client';

import ServiceCard from '@/components/services/ServiceCard';
import { useTranslation } from '@/lib/i18n/i18n';

export default function ServicesPage() {
  const { t, messages } = useTranslation();
  const servicesData = messages.services || {};

  return (
    <section className="min-h-screen bg-void text-lavender py-16 px-6 md:px-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-fog text-sm">
          Khayal Studio / Services
        </p>
        <h1 className="font-syne text-[64px] font-bold mb-4 leading-none">
          {t('services.title')}
        </h1>
        <p className="font-tajawal text-[32px] font-bold text-violet rtl text-right">
          {t('services.tagline')}
        </p>
        <p className="text-fog max-w-2xl mx-auto">
          {t('services.description')}
        </p>
      </div>

      {/* Services */}
      <div className="grid gap-16 md:grid-cols-1 lg:grid-cols-3">
        {/* Service 1: AI Brand Character */}
        {servicesData.brandCharacter && (
          <ServiceCard
            number="01"
            title={t('services.brandCharacter.title')}
            description={t('services.brandCharacter.description')}
            features={servicesData.brandCharacter.features}
            stats={servicesData.brandCharacter.stats}
          />
        )}
        {/* Service 2: Brand Website */}
        {servicesData.website && (
          <ServiceCard
            number="02"
            title={t('services.website.title')}
            description={t('services.website.description')}
            features={servicesData.website.features}
            stats={servicesData.website.stats}
            reverse={true}
          />
        )}
        {/* Service 3: Brand Identity */}
        {servicesData.identity && (
          <ServiceCard
            number="03"
            title={t('services.identity.title')}
            description={t('services.identity.description')}
            features={servicesData.identity.features}
            stats={servicesData.identity.stats}
          />
        )}
      </div>

      {/* Process Strip */}
      <div className="mt-20">
        <h2 className="font-syne text-[32px] font-bold mb-6 text-center">
          {t('services.howItWorks.title')}
        </h2>
        <div className="flex flex-col items-start gap-6">
          <div className="flex w-full items-start gap-8">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-violet/20 text-violet rounded-full">
              01
            </div>
            <div>
              <h3 className="font-syne text-[24px] font-bold mb-2">{t('services.howItWorks.step1.title')}</h3>
              <p className="text-fog">{t('services.howItWorks.step1.description')}</p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-lavender/10"></div>
          <div className="flex w-full items-start gap-8">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-violet/20 text-violet rounded-full">
              02
            </div>
            <div>
              <h3 className="font-syne text-[24px] font-bold mb-2">{t('services.howItWorks.step2.title')}</h3>
              <p className="text-fog">{t('services.howItWorks.step2.description')}</p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-lavender/10"></div>
          <div className="flex w-full items-start gap-8">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-violet/20 text-violet rounded-full">
              03
            </div>
            <div>
              <h3 className="font-syne text-[24px] font-bold mb-2">{t('services.howItWorks.step3.title')}</h3>
              <p className="text-fog">{t('services.howItWorks.step3.description')}</p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-lavender/10"></div>
          <div className="flex w-full items-start gap-8">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-violet/20 text-violet rounded-full">
              04
            </div>
            <div>
              <h3 className="font-syne text-[24px] font-bold mb-2">{t('services.howItWorks.step4.title')}</h3>
              <p className="text-fog">{t('services.howItWorks.step4.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}