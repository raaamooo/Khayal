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
          className="flex-1 sm:max-w-xs inline-block px-8 py-4 font-syne bg-violet text-white rounded-lg hover:bg-violet/90 transition-colors"
        >
          {cta.primary || 'Start a Project'}
        </a>
        <a
          href="/pricing"
          className="flex-1 sm:max-w-xs inline-block px-8 py-4 font-syne border border-lavender text-lavender hover:bg-lavender/20 rounded-lg transition-colors"
        >
          {cta.secondary || 'See Pricing'}
        </a>
      </div>
    </section>
  );
}