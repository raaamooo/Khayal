'use client';

import { useState } from 'react';
import CurrencyToggle from '@/components/pricing/CurrencyToggle';
import WebsitePricing from '@/components/pricing/WebsitePricing';
import AddOnsGrid from '@/components/pricing/AddOnsGrid';
import MonthlyPlans from '@/components/pricing/MonthlyPlans';
import BundleDeals from '@/components/pricing/BundleDeals';
import PricingCTA from '@/components/pricing/PricingCTA';

export default function PricingPage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');

  return (
    <main className="min-h-screen bg-void text-lavender py-16 px-6 md:px-12">
      {/* Header */}
      <section className="mb-20 text-center">
        <h1 className="font-syne text-[64px] font-bold mb-4">
          Transparent Pricing
        </h1>
        <p className="font-tajawal text-[32px] font-bold text-violet rtl text-right">
          أسعار واضحة
        </p>
        <p className="text-fog max-w-xl mx-auto">
          No hidden fees. No vague quotes. Every price is fixed — and includes everything
          listed. In Egyptian Pounds.
        </p>
        <CurrencyToggle currency={currency} setCurrency={setCurrency} />
      </section>

      {/* Website Pricing */}
      <section className="mb-20">
        <WebsitePricing currency={currency} />
      </section>

      {/* Add-Ons */}
      <section className="mb-20">
        <AddOnsGrid currency={currency} />
      </section>

      {/* Monthly Plans */}
      <section className="mb-20">
        <MonthlyPlans currency={currency} />
      </section>

      {/* Bundle Deals */}
      <section className="mb-20">
        <BundleDeals currency={currency} />
      </section>

      {/* CTA and Note */}
      <section className="mb-20">
        <PricingCTA currency={currency} />
      </section>
    </main>
  );
}