'use client';

import { useState } from 'react';

interface CurrencyToggleProps {
  currency: 'EGP' | 'USD';
  setCurrency: (currency: 'EGP' | 'USD') => void;
}

export default function CurrencyToggle({ currency, setCurrency }: CurrencyToggleProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <button
        onClick={() => setCurrency('EGP')}
        className={`px-4 py-2 rounded-full text-sm font-syne
          ${currency === 'EGP'
            ? 'bg-violet text-white'
            : 'border border-lavender/10 text-fog hover:bg-lavender/20'}`}
      >
        EGP
      </button>
      <button
        onClick={() => setCurrency('USD')}
        className={`px-4 py-2 rounded-full text-sm font-syne
          ${currency === 'USD'
            ? 'bg-violet text-white'
            : 'border border-lavender/10 text-fog hover:bg-lavender/20'}`}
      >
        USD
      </button>
    </div>
  );
}