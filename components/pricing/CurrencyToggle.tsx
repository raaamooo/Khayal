'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface CurrencyToggleProps {
  currency: 'EGP' | 'USD';
  setCurrency: (currency: 'EGP' | 'USD') => void;
}

export default function CurrencyToggle({ currency, setCurrency }: CurrencyToggleProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <Button
        onClick={() => setCurrency('EGP')}
        className={`
          ${currency === 'EGP'
            ? 'bg-violet text-white'
            : 'border border-lavender/10 text-fog hover:bg-lavender/20'}`}
        size="sm"
      >
        EGP
      </Button>
      <Button
        onClick={() => setCurrency('USD')}
        className={`
          ${currency === 'USD'
            ? 'bg-violet text-white'
            : 'border border-lavender/10 text-fog hover:bg-lavender/20'}`}
        size="sm"
      >
        USD
      </Button>
    </div>
  );
}