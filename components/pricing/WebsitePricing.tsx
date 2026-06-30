'use client';

interface PriceRange {
  egp: [number, number]; // [min, max] in EGP
}

interface PricingTier {
  name: string;
  pages: string; // e.g., "1–3 pages"
  priceRange: PriceRange;
}

const noCodeTiers: PricingTier[] = [
  {
    name: 'Starter',
    pages: '1–3 pages',
    priceRange: { egp: [4000, 6000] },
  },
  {
    name: 'Business',
    pages: '4–6 pages',
    priceRange: { egp: [8000, 12000] },
  },
  {
    name: 'Professional',
    pages: '7–10 pages',
    priceRange: { egp: [14000, 20000] },
  },
];

const codedTiers: PricingTier[] = [
  {
    name: 'Starter',
    pages: '1–3 pages',
    priceRange: { egp: [10000, 15000] },
  },
  {
    name: 'Business',
    pages: '4–6 pages',
    priceRange: { egp: [18000, 28000] },
  },
  {
    name: 'Professional',
    pages: '7–10 pages',
    priceRange: { egp: [30000, 50000] },
  },
];

type Currency = 'EGP' | 'USD';

interface WebsitePricingProps {
  currency: Currency;
}

export default function WebsitePricing({ currency }: WebsitePricingProps) {
  const formatPriceRange = (range: [number, number]): string => {
    const [min, max] = range;
    if (currency === 'USD') {
      return `${(min / 50).toLocaleString()}–${(max / 50).toLocaleString()} USD`;
    }
    return `${min.toLocaleString()}–${max.toLocaleString()} EGP`;
  };

  return (
    <section>
      <h2 className="font-syne text-[32px] font-bold mb-6 text-center">
        Website Build
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* No-Code Column */}
        <div className="bg-surface rounded-xl p-6">
          <h3 className="font-syne text-[24px] font-bold mb-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-surface/20 text-fog text-xs">
              No-Code
            </span>
            Webflow / Framer
          </h3>
          {noCodeTiers.map((tier, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-t border-surface/20 first:border-t-0">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-void border border-lavender/10 text-fog text-xs font-syne">
                  {tier.pages}
                </span>
                <span className="font-syne">{tier.name}</span>
              </div>
              <div className="text-violet font-bold">
                {formatPriceRange(tier.priceRange.egp)}
              </div>
            </div>
          ))}
        </div>

        {/* Coded Column */}
        <div className="bg-surface rounded-xl p-6">
          <h3 className="font-syne text-[24px] font-bold mb-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-violet/10 border-violet text-violet text-xs">
              Coded
            </span>
            Next.js
          </h3>
          {codedTiers.map((tier, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-t border-surface/20 first:border-t-0">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-void border border-lavender/10 text-fog text-xs font-syne">
                  {tier.pages}
                </span>
                <span className="font-syne">{tier.name}</span>
              </div>
              <div className="text-violet font-bold">
                {formatPriceRange(tier.priceRange.egp)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}