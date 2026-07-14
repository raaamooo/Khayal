"use client";

import { useState } from 'react'
import { useLanguage } from '@/src/context/LanguageContext'
import Button from '@/components/ui/Button'

export default function WorkFilters() {
  const { content } = useLanguage()
  const work = content.work || {}
  const filters = work.filters || ['All', 'AI Brand Character', 'Website', 'Brand Identity']

  // Set initial state to first filter (typically 'All' or localized equivalent)
  const [activeFilter, setActiveFilter] = useState(filters[0] || 'All')

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filters.map((f) => (
        <Button
          key={f}
          onClick={() => setActiveFilter(f)}
          className={`
            ${activeFilter === f
              ? 'bg-violet text-white'
              : 'border border-lavender/10 text-fog hover:bg-lavender/20'}`}
          size="sm"
        >
          {f}
        </Button>
      ))}
    </div>
  )
}