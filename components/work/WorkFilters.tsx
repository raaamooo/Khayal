"use client";

import { useState } from 'react'

export default function WorkFilters() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'AI Brand Character', 'Website', 'Brand Identity']

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