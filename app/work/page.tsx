import WorkFilters from '@/components/work/WorkFilters'
import CaseStudy from '@/components/work/CaseStudy'
import WorkCTA from '@/components/work/WorkCTA'
import { useLanguage } from '@/context/LanguageContext'

export default function WorkPage() {
  const { content } = useLanguage()
  const work = content.work || {}

  return (
    <main className="min-h-screen bg-void text-lavender py-16 px-6 md:px-12">
      <section className="mb-20">
        <h1 className="font-syne text-[48px] font-bold mb-6">
          {work.title || 'Our Work'}
        </h1>
        <p className="font-tajawal text-[24px] text-fog max-w-xl">
          {work.description || 'See how we bring brands to life through AI characters, websites, and visual identities.'}
        </p>
        <WorkFilters />
      </section>

      <section className="grid gap-16 md:grid-cols-2">
        {work.caseStudies?.map((caseStudy, index) => (
          <CaseStudy
            key={index}
            title={caseStudy.title}
            titleAr={caseStudy.titleAr}
            tags={caseStudy.tags}
            description={caseStudy.description}
            descriptionAr={caseStudy.descriptionAr}
            results={caseStudy.results}
            services={caseStudy.services}
            reverse={caseStudy.reverse}
          />
        ))}
      </section>

      <section className="mt-20">
        <WorkCTA />
      </section>
    </main>
  );
}