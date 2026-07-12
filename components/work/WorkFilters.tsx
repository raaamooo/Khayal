"use client";

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function WorkFilters() {
  const { content } = useLanguage()
  const work = content.work || {}
  const filters = work.filters || ['All', 'AI Brand Character', 'Website', 'Brand Identity']

  // Set initial state to first filter (typically 'All' or localized equivalent)
  const [activeFilter, setActiveFilter] = useState(filters[0] || 'All')

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActiveFilter(f)}
          className={`px-4 py-2 rounded-full text-sm font-syne
            ${activeFilter === f
              ? 'bg-violet text-white'
              : 'border border-lavender/10 text-fog hover:bg-lavender/20'}`}
        >
          {f}
        </button>
      ))}
    </div>
  )
}