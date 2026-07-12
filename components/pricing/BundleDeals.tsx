'use client';

import { useLanguage } from '@/context/LanguageContext';

type Bundle = {
  name: string;
  description: string;
  savingsEgp: number; // total savings compared to buying separately
  priceEgp: number; // bundled price
  originalPriceEgp: number; // sum of individual items
  includes: string[]; // list of what's included
};

type BundleDealsData = {
  title: string;
  subtitle: string;
  bundles: Bundle[];
};

interface BundleDealsProps {
  currency: 'EGP' | 'USD';
}

export default function BundleDeals({ currency }: BundleDealsProps) {
  const { content } = useLanguage();
  const pricing = content.pricing || {};
  const bundleDealsData = pricing.bundleDeals || {
    title: 'Bundle Deals',
    subtitle: 'Save big when you combine our most popular services.',
    bundles: [
      {
        name: 'Startup Launch Pack',
        description: 'Everything you need to launch your online presence',
        savingsEgp: 5000,
        priceEgp: 25000,
        originalPriceEgp: 30000,
        includes: [
          'Brand Identity Package',
          '5-Page Website (No-Code)',
          'Basic AI Brand Character',
          '1 Month of Maintenance',
        ],
      },
      {
        name: 'Growth Accelerator',
        description: 'For businesses ready to scale their digital presence',
        savingsEgp: 12000,
        priceEgp: 58000,
        originalPriceEgp: 70000,
        includes: [
          'Brand Identity Package',
          '10-Page Website (Coded)',
          'Advanced AI Brand Character',
          '3 Months of Maintenance',
          'SEO Setup',
        ],
      },
      {
        name: 'Enterprise Suite',
        description: 'Complete solution for established businesses',
        savingsEgp: 25000,
        priceEgp: 120000,
        originalPriceEgp: 145000,
        includes: [
          'Brand Identity Package',
          '15-Page Website (Coded)',
          'Custom AI Brand Character',
          '6 Months of Maintenance',
          'SEO Setup',
          'Content Strategy',
        ],
      },
    ],
  };

  const formatPrice = (egpAmount: number): string => {
    if (currency === 'USD') {
      return `${(egpAmount / 50).toLocaleString()} USD`;
    }
    return `${egpAmount.toLocaleString()} EGP`;
  };

  const formatSavings = (savingsEgp: number): string => {
    if (currency === 'USD') {
      return `Save ${(savingsEgp / 50).toLocaleString()} USD`;
    }
    return `Save ${savingsEgp.toLocaleString()} EGP`;
  };

  return (
    <section>
      <h2 className="font-syne text-[32px] font-bold mb-6 text-center">
        {bundleDealsData.title}
      </h2>
      <p className="text-fog text-center mb-12 max-w-xl mx-auto">
        {bundleDealsData.subtitle}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bundleDealsData.bundles.map((bundle, index) => (
          <div key={index} className="bg-surface rounded-xl p-6 border border-surface/20 hover:border-violet/20 transition-border duration-300">
            <h3 className="font-syne text-[24px] font-bold mb-4">{bundle.name}</h3>
            <p className="text-fog mb-4">{bundle.description}</p>
            <div className="mb-4 flex items-baseline gap-2">
              <span className="block text-violet font-bold text-[24px]">
                {formatPrice(bundle.priceEgp)}
              </span>
              <span className="text-xs text-fog/50">
                (was {formatPrice(bundle.originalPriceEgp)})
              </span>
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-violet/20 text-violet font-syne text-xs">
                {formatSavings(bundle.savingsEgp)}
              </span>
            </div>
            <ul className="text-fog space-y-2 text-sm">
              {bundle.includes.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0">• </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}