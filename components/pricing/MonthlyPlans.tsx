'use client';

import { useLanguage } from '@/src/context/LanguageContext';

type Plan = {
  name: string;
  priceRangeEgp: [number, number]; // [min, max] per month
  features: string[]; // 3-4 bullet points
  isPopular?: boolean;
};

type MonthlyPlansData = {
  title: string;
  subtitle: string;
  plans: Plan[];
};

interface MonthlyPlansProps {
  currency: 'EGP' | 'USD';
}

export default function MonthlyPlans({ currency }: MonthlyPlansProps) {
  const { content } = useLanguage();
  const pricing = content.pricing || {};
  const monthlyPlansData = (pricing.monthlyPlans || {
    title: 'Monthly Hosting & Maintenance',
    subtitle: 'Choose a plan that grows with your business. All plans include hosting, security, and support.',
    plans: [
      {
        name: 'Basic',
        priceRangeEgp: [500, 900],
        features: [
          'Basic website hosting',
          'Email support (24h response)',
          'Monthly security scan',
        ],
      },
      {
        name: 'Standard',
        priceRangeEgp: [1500, 2500],
        features: [
          'Everything in Basic',
          'Priority support (12h response)',
          'Monthly performance report',
        ],
        isPopular: true,
      },
      {
        name: 'Growth',
        priceRangeEgp: [3000, 4500],
        features: [
          'Everything in Standard',
          'Dedicated account manager',
          'Weekly analytics & optimization',
          'Quarterly strategy call',
        ],
        isPopular: false,
      },
      {
        name: 'Full Management',
        priceRangeEgp: [7000, 12000],
        features: [
          'Everything in Growth',
          'Daily backups & monitoring',
          'Unlimited content updates',
          '24/7 emergency support',
        ],
      },
    ],
  }) as MonthlyPlansData;

  const formatPriceRange = (range: [number, number]): string => {
    const [min, max] = range;
    if (currency === 'USD') {
      return `${(min / 50).toLocaleString()}–${(max / 50).toLocaleString()} USD/mo`;
    }
    return `${min.toLocaleString()}–${max.toLocaleString()} EGP/mo`;
  };

  return (
    <section>
      <h2 className="font-syne text-[32px] font-bold mb-6 text-center">
        {monthlyPlansData.title}
      </h2>
      <p className="text-fog text-center mb-12 max-w-xl mx-auto">
        {monthlyPlansData.subtitle}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {monthlyPlansData.plans.map((plan, index) => (
          <div key={index} className={`flex flex-col h-full bg-surface rounded-xl p-6 border ${plan.isPopular ? 'border-violet' : 'border-transparent'} transition-border duration-300 hover:border-violet/20`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-syne text-[24px] font-bold">{plan.name}</h3>
              {plan.isPopular && (
                <span className="px-3 py-1 rounded-full bg-violet/20 text-violet text-xs font-syne">
                  Most Popular
                </span>
              )}
            </div>
            <div className="mb-6">
              <p className="text-violet font-bold text-[24px]">
                {formatPriceRange(plan.priceRangeEgp)}
              </p>
            </div>
            <ul className="flex-1 flex-col space-y-2 text-fog">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0">• </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}