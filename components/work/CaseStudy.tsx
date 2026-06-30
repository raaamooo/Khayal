import Image from 'next/image'

type CaseStudyProps = {
  title: string
  titleAr: string
  tags: string[]
  description: string
  descriptionAr: string
  results: Array<{ label: string; value: string }>
  services: string[]
  reverse?: boolean
}

export default function CaseStudy({
  title,
  titleAr,
  tags,
  description,
  descriptionAr,
  results,
  services,
  reverse = false,
}: CaseStudyProps) {
  return (
    <div className="bg-surface rounded-[14px] p-6">
      {/* Top tags */}
      <div className="flex flex-wrap gap-3 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-void border border-lavender/10 text-fog text-xs font-syne"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {!reverse ? (
          <>
            {/* Text column */}
            <div className="space-y-4">
              <h2 className="font-syne text-[36px] font-bold mb-2">
                {title}
              </h2>
              <p className="font-tajawal text-[18px] text-fog rtl mb-4">
                {titleAr}
              </p>

              <p className="text-fog leading-relaxed mb-4">
                {description}
              </p>
              <p className="font-tajawal text-fog rtl">
                {descriptionAr}
              </p>

              {/* Results row */}
              <div className="flex flex-wrap gap-4 text-sm text-fog">
                {results.map((r) => (
                  <div key={r.label} className="flex flex-col">
                    <span className="font-syne">{r.value}</span>
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>

              {/* Services chips */}
              <div className="flex flex-wrap gap-3 mt-4">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-full text-xs font-syne bg-violet/20 text-violet"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Image column */}
            <div className="flex items-center justify-center">
              <div
                className="bg-void rounded-xl h-72 w-full flex items-center justify-center text-fog/30"
              >
                {title} · Coming Soon
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Image column */}
            <div className="flex items-center justify-center order-1 md:order-1">
              <div
                className="bg-void rounded-xl h-72 w-full flex items-center justify-center text-fog/30"
              >
                {title} · Coming Soon
              </div>
            </div>

            {/* Text column */}
            <div className="space-y-4 order-2 md:order-2">
              <h2 className="font-syne text-[36px] font-bold mb-2">
                {title}
              </h2>
              <p className="font-tajawal text-[18px] text-fog rtl mb-4">
                {titleAr}
              </p>

              <p className="text-fog leading-relaxed mb-4">
                {description}
              </p>
              <p className="font-tajawal text-fog rtl">
                {descriptionAr}
              </p>

              {/* Results row */}
              <div className="flex flex-wrap gap-4 text-sm text-fog">
                {results.map((r) => (
                  <div key={r.label} className="flex flex-col">
                    <span className="font-syne">{r.value}</span>
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>

              {/* Services chips */}
              <div className="flex flex-wrap gap-3 mt-4">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-full text-xs font-syne bg-violet/20 text-violet"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}