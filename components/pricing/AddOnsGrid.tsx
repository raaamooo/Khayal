'use client';

import { useLanguage } from '@/context/LanguageContext';

type AddOn = {
  name: string;
  description: string;
  priceEgp: number; // one-time fee
  icon: string; // emoji
};

type AddOnsData = {
  title: string;
  subtitle: string;
  items: AddOn[];
};

interface AddOnsGridProps {
  currency: 'EGP' | 'USD';
}

export default function AddOnsGrid({ currency }: AddOnsGridProps) {
  const { content } = useLanguage();
  const pricing = content.pricing || {};
  const addOnsData = pricing.addOns || {
    title: 'Add-Ons',
    subtitle: 'Enhance your package with these optional add-ons. Prices are one-time fees.',
    items: [
      {
        name: 'Logo Animation',
        description: 'Add subtle motion to your logo for websites and social media',
        priceEgp: 1500,
        icon: '🌀',
      },
      {
        name: 'Copywriting',
        description: 'Professional English/Arabic copy for your website',
        priceEgp: 2500,
        icon: '✍️',
      },
      {
        name: 'SEO Setup',
        description: 'Basic on-page SEO optimization (English & Arabic)',
        priceEgp: 2000,
        icon: '🔍',
      },
      {
        name: 'Analytics Integration',
        description: 'Google Analytics, Search Console, and heatmaps setup',
        priceEgp: 1800,
        icon: '📊',
      },
      {
        name: 'Social Media Kit',
        description: 'Profile covers, post templates, and avatar variations',
        priceEgp: 1200,
        icon: '📱',
      },
      {
        name: 'Email Setup',
        description: 'Professional email setup (up to 5 accounts)',
        priceEgp: 1000,
        icon: '📧',
      },
    ],
  };

  const formatPrice = (egpAmount: number): string => {
    if (currency === 'USD') {
      return `${(egpAmount / 50).toLocaleString()} USD`;
    }
    return `${egpAmount.toLocaleString()} EGP`;
  };

  return (
    <section>
      <h2 className="font-syne text-[32px] font-bold mb-6 text-center">
        {addOnsData.title}
      </h2>
      <p className="text-fog text-center mb-12 max-w-xl mx-auto">
        {addOnsData.subtitle}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {addOnsData.items.map((addOn, index) => (
          <div key={index} className="bg-surface rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{addOn.icon}</div>
            <h3 className="font-syne text-[20px] font-bold mb-2">{addOn.name}</h3>
            <p className="text-fog text-center mb-4">{addOn.description}</p>
            <div className="mt-auto pt-4">
              <span className="font-syne text-violet">{formatPrice(addOn.priceEgp)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}