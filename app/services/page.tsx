"use client";

import { FC } from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import ProcessStep from '@/components/services/ProcessStep';

export const ServicesPage: FC = () => {
  return (
    <section className="min-h-screen bg-void text-lavender py-16 px-6 md:px-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-fog text-sm">
          Khayal Studio / Services
        </p>
        <h1 className="font-syne text-[64px] font-bold mb-4 leading-none">
          What We Do
        </h1>
        <p className="font-tajawal text-[32px] font-bold text-violet rtl">
          ما الذي نقدمه
        </p>
        <p className="text-fog max-w-2xl mx-auto">
          Three core services. Each one designed to give your brand a real presence — online, in DMs, and in the mind of every customer who encounters it.
        </p>
      </div>

      {/* Services */}
      <div className="grid gap-16 md:grid-cols-1 lg:grid-cols-3">
        {/* Service 1: AI Brand Character */}
        <ServiceCard
          number="01"
          title="AI Brand Character"
          titleAr="شخصية الذكاء الاصطناعي"
          description="A named, voiced avatar built specifically for your brand. It has a personality, a backstory, and a job — to talk to your customers when you can't."
          descriptionAr="صورة رمزية مسماة ومسموعة تم إنشاؤها خصيصًا لعلامتك التجارية. لها شخصية، وقصة خلفية، ووظيفة — للتحدث مع عملائك عندما لا تستطيع."
          features={[
            "Custom character name and personality design",
            "Realistic avatar via HeyGen",
            "Voice clone via ElevenLabs (Arabic + English)",
            "Instagram and WhatsApp DM automation",
            "Website interactive embed",
            "Monthly maintenance and updates"
          ]}
          stats={[
            { label: "Always available", value: "24/7" },
            { label: "Languages", value: "Arabic and English" },
            { label: "Platforms", value: "Website, Instagram, WhatsApp" }
          ]}
        />
        {/* Service 2: Website Design */}
        <ServiceCard
          number="02"
          title="Brand Website"
          titleAr="الموقع الإلكتروني"
          description="A bilingual website built to represent your brand the way it deserves. Not a template. A deliberate, designed space that converts visitors into customers."
          descriptionAr="موقع إلكتروني ثنائي اللغة تم إنشاؤه لتمثيل علامتك التجارية كما تستحق. ليس قالبًا. مساحة مصممة délibéradamente تحوّل الزوار إلى عملاء."
          features={[
            "Bilingual layout (Arabic + English)",
            "Mobile-first responsive design",
            "Custom animations and interactions",
            "SEO setup (Arabic and English)",
            "Vercel or Webflow hosting",
            "3 rounds of revisions"
          ]}
          stats={[
            { label: "Build time", value: "1–3 weeks" },
            { label: "Pages (MVP)", value: "7 pages max" },
            { label: "Language", value: "Bilingual by default" }
          ]}
          reverse={true}
        />
        {/* Service 3: Brand Identity */}
        <ServiceCard
          number="03"
          title="Brand Identity"
          titleAr="الهوية البصرية"
          description="Before the website. Before the AI. Before anything else — your brand needs to know who it is."
          descriptionAr="قبل الموقع. قبل الذكاء الاصطناعي. قبل أي شيء آخر — تحتاج علامتك التجارية إلى معرفة من هي."
          features={[
            "Brand name and tagline",
            "Logo design (primary + variants)",
            "Color palette and typography system",
            "Brand voice guide (Arabic + English)",
            "Logo files in all formats"
          ]}
          stats={[
            { label: "Deliverables", value: "Full brand system" },
            { label: "Rounds", value: "3 revisions" },
            { label: "Format", value: "All file types" }
          ]}
        />
      </div>

      {/* Process Strip */}
      <div className="mt-20">
        <h2 className="font-syne text-[32px] font-bold mb-6 text-center">
          How It Works
        </h2>
        <div className="flex flex-col items-start gap-6">
          <div className="flex w-full items-start gap-8">
            <ProcessStep number="01" title="Discovery Call" description="30 min, we learn your brand" />
            <div className="h-0.5 w-full bg-lavender/10"></div>
          </div>
          <div className="flex w-full items-start gap-8">
            <ProcessStep number="02" title="Concept" description="We design the character and identity" />
            <div className="h-0.5 w-full bg-lavender/10"></div>
          </div>
          <div className="flex w-full items-start gap-8">
            <ProcessStep number="03" title="Build" description="Website, avatar, DM setup — 1 to 3 weeks" />
            <div className="h-0.5 w-full bg-lavender/10"></div>
          </div>
          <div className="flex w-full items-start gap-8">
            <ProcessStep number="04" title="Launch" description="We go live, you keep the keys" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;