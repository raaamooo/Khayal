'use client';

type AddOn = {
  name: string;
  description: string;
  priceEgp: number; // one-time fee
  icon: string; // emoji
};

const addOns: AddOn[] = [
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
];

type Currency = 'EGP' | 'USD';

interface AddOnsGridProps {
  currency: Currency;
}

export default function AddOnsGrid({ currency }: AddOnsGridProps) {
  const formatPrice = (egpAmount: number): string => {
    if (currency === 'USD') {
      return `${(egpAmount / 50).toLocaleString()} USD`;
    }
    return `${egpAmount.toLocaleString()} EGP`;
  };

  return (
    <section>
      <h2 className="font-syne text-[32px] font-bold mb-6 text-center">
        Add-Ons
      </h2>
      <p className="text-fog text-center mb-12 max-w-xl mx-auto">
        Enhance your package with these optional add-ons. Prices are one-time fees.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {addOns.map((addOn, index) => (
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