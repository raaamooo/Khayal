import { useLanguage } from '@/src/context/LanguageContext'

export default function WorkCTA() {
  const { content } = useLanguage()
  const cta = content.work?.cta || {}

  return (
    <section className="relative bg-surface/20 rounded-2xl p-12 text-center">
      <h2 className="font-syne text-[40px] font-bold mb-6">
        {cta.title || 'Working on something?'}
      </h2>
      <p className="font-tajawal text-[24px] text-violet rtl mb-8">
        {cta.titleAr || 'هل تعمل على شيء ما؟'}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="btn-primary w-full sm:w-auto"
        >
          {cta.primary || 'Start a Project'}
        </a>
        <a
          href="/pricing"
          className="btn-secondary w-full sm:w-auto"
        >
          {cta.secondary || 'See Pricing'}
        </a>
      </div>
    </section>
  );
}