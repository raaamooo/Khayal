import WorkFilters from '@/components/work/WorkFilters'
import CaseStudy from '@/components/work/CaseStudy'
import WorkCTA from '@/components/work/WorkCTA'

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-void text-lavender py-16 px-6 md:px-12">
      <section className="mb-20">
        <h1 className="font-syne text-[48px] font-bold mb-6">
          Our Work
        </h1>
        <p className="font-tajawal text-[24px] text-fog max-w-xl">
          See how we bring brands to life through AI characters, websites, and
          visual identities.
        </p>
        <WorkFilters />
      </section>

      <section className="grid gap-16 md:grid-cols-2">
        {/* Case Study 1: Compu City */}
        <CaseStudy
          title="Compu City"
          titleAr="كمبيوتر سيتي"
          tags={["Tech Retail", "Cairo, Egypt"]}
          description="Compu City needed a brand character that could guide customers through their tech offerings while speaking both English and Arabic."
          descriptionAr="كان كومبيوتر سيتي بحاجة إلى شخصية علامة تجارية يمكنها توجيه العملاء عبر عروضهم التقنية مع التحدث باللغتين الإنجليزية والعربية."
          results={[
            { label: "Response time", value: "0s" },
            { label: "Availability", value: "24/7" },
            { label: "AR + EN", value: "2 langs" },
          ]}
          services={["AI Brand Character", "Website", "Brand Identity"]}
          reverse={false}
        />
        {/* Case Study 2: Retro Spot */}
        <CaseStudy
          title="3m Samir — The Retro Host"
          titleAr="عم سمير — مضيف ريترو"
          tags={["Café & Workspace", "Luxor, Egypt"]}
          description="Retro Spot Coffee Bar needed a character as nostalgic as its interior. 3m Samir — a warm, vintage character — became the voice of the brand on WhatsApp, Instagram, and the café's website. Bilingual, in-character, always available."
          descriptionAr="كان بار قهوة ريت سبوت بحاجة إلى شخصية настالغية مثل داخليته. عم سمير — شخصية دافئة وقديمة — أصبح صوت العلامة التجارية على الواتساب وإنستغرام وموقع المقهى. ثنائي اللغة، بالشخصية، ومتوفر دائمًا."
          results={[
            { label: "Response time", value: "0s" },
            { label: "Availability", value: "24/7" },
            { label: "AR + EN", value: "2 langs" },
          ]}
          services={["AI Brand Character", "Website", "Instagram DMs"]}
          reverse={true}
        />
      </section>

      <section className="mt-20">
        <WorkCTA />
      </section>
    </main>
  )
}