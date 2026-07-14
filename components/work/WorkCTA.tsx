import { useLanguage } from '@/src/context/LanguageContext'
import Button from '@/components/ui/Button'

export default function WorkCTA() {
  const { content } = useLanguage()
  const cta = content.work?.cta || {}

  return (
    <section className="relative bg-surface/20 rounded-2xl p-12 text-center">
      <h2 className="font-syne text-[40px] font-bold mb-6">
        {cta.title || 'Working on something?'}
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          as="a"
          href="/contact"
          size="md"
        >
          {cta.primary || 'Start a Project'}
        </Button>
        <Button
          as="a"
          href="/pricing"
          size="md"
        >
          {cta.secondary || 'See Pricing'}
        </Button>
      </div>
    </section>
  );
}