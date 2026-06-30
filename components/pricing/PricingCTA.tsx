'use client';

type Currency = 'EGP' | 'USD';

interface PricingCTAProps {
  currency: Currency;
}

export default function PricingCTA({ currency }: PricingCTAProps) {
  return (
    <section className="bg-surface/20 rounded-2xl p-12 text-center">
      <p className="text-fog text-sm italic mb-6">
        All prices in Egyptian Pounds. Setup fee required before project begins. Minimum 3-month commitment on monthly plans.
      </p>
      <a
        href="/contact"
        className="inline-block px-8 py-4 font-syne bg-violet text-white rounded-lg hover:bg-violet/90 transition-colors"
      >
        Get a Custom Quote
      </a>
    </section>
  );
}