// English translations
const en = {
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  },
  hero: {
    pill: "AI · Brand Characters · Websites",
    title: "We build the character behind your brand.",
    titleAr: "نبني الشخصية خلف علامتك التجارية",
    description: "AI-powered brand characters that speak, sell, and connect with your customers — 24/7, in any language.",
    cta: {
      viewWork: "See Our Work",
      bookDemo: "Book a Demo"
    },
    scroll: "SCROLL"
  },
  services: {
    title: "Our Services",
    tagline: "What We Do",
    description: "Three core services. Each one designed to give your brand a real presence — online, in DMs, and in the mind of every customer who encounters it.",
    brandCharacter: {
      title: "AI Brand Character",
      description: "A named, voiced avatar built specifically for your brand. It has a personality, a backstory, and a job — to talk to your customers when you can't.",
      features: [
        "Custom character name and personality design",
        "Realistic avatar via HeyGen",
        "Voice clone via ElevenLabs (Arabic + English)",
        "Instagram and WhatsApp DM automation",
        "Website interactive embed",
        "Monthly maintenance and updates"
      ],
      stats: [
        { label: "Always available", value: "24/7" },
        { label: "Languages", value: "Arabic and English" },
        { label: "Platforms", value: "Website, Instagram, WhatsApp" }
      ]
    },
    website: {
      title: "Brand Website",
      description: "A bilingual website built to represent your brand the way it deserves. Not a template. A deliberate, designed space that converts visitors into customers.",
      features: [
        "Bilingual layout (Arabic + English)",
        "Mobile-first responsive design",
        "Custom animations and interactions",
        "SEO setup (Arabic and English)",
        "Vercel or Webflow hosting",
        "3 rounds of revisions"
      ],
      stats: [
        { label: "Build time", value: "1–3 weeks" },
        { label: "Pages (MVP)", value: "7 pages max" },
        { label: "Language", value: "Bilingual by default" }
      ]
    },
    identity: {
      title: "Brand Identity",
      description: "Before the website. Before the AI. Before anything else — your brand needs to know who it is.",
      features: [
        "Brand name and tagline",
        "Logo design (primary + variants)",
        "Color palette and typography system",
        "Brand voice guide (Arabic + English)",
        "Logo files in all formats"
      ],
      stats: [
        { label: "Deliverables", value: "Full brand system" },
        { label: "Rounds", value: "3 revisions" },
        { label: "Format", value: "All file types" }
      ]
    },
    howItWorks: {
      title: "How It Works",
      step1: {
        title: "Discovery Call",
        description: "30 min, we learn your brand"
      },
      step2: {
        title: "Concept",
        description: "We design the character and identity"
      },
      step3: {
        title: "Build",
        description: "Website, avatar, DM setup — 1 to 3 weeks"
      },
      step4: {
        title: "Launch",
        description: "We go live, you keep the keys"
      }
    }
  },
  work: {
    title: "Our Work",
    description: "See how we bring brands to life through AI characters, websites, and visual identities.",
    filters: ["All", "AI Brand Character", "Website", "Brand Identity"],
    cta: {
      title: "Working on something?",
      titleAr: "هل تعمل على شيء ما?",
      primary: "Start a Project",
      secondary: "See Pricing"
    },
    caseStudies: [
      {
        title: "Compu City",
        titleAr: "كمبيوتر سيتي",
        tags: ["Tech Retail", "Cairo, Egypt"],
        description: "Compu City needed a brand character that could guide customers through their tech offerings while speaking both English and Arabic.",
        descriptionAr: "كان كومبيوتر سيتي بحاجة إلى شخصية علامة تجارية يمكنها توجيه العملاء عبر عروضهم التقنية مع التحدث باللغتين الإنجليزية والعربية.",
        results: [
          { label: "Response time", value: "0s" },
          { label: "Availability", value: "24/7" },
          { label: "AR + EN", value: "2 langs" }
        ],
        services: ["AI Brand Character", "Website", "Brand Identity"],
        reverse: false
      },
      {
        title: "3m Samir — The Retro Host",
        titleAr: "عم سمير — مضيف ريترو",
        tags: ["Café & Workspace", "Luxor, Egypt"],
        description: "Retro Spot Coffee Bar needed a character as nostalgic as its interior. 3m Samir — a warm, vintage character — became the voice of the brand on WhatsApp, Instagram, and the café's website. Bilingual, in-character, always available.",
        descriptionAr: "كان بار قهوة ريت سبوت بحاجة إلى شخصية настالغية مثل داخليته. عم سمير — شخصية دافئة وقديمة — أصبح صوت العلامة التجارية على الواتساب وإنستغرام وموقع المقهى. ثنائي اللغة، بالشخصية، ومتوفر دائمًا.",
        results: [
          { label: "Response time", value: "0s" },
          { label: "Availability", value: "24/7" },
          { label: "AR + EN", value: "2 langs" }
        ],
        services: ["AI Brand Character", "Website", "Instagram DMs"],
        reverse: true
      }
    ]
  },
  pricing: {
    title: "Transparent Pricing",
    titleAr: "أسعار واضحة",
    description: "No hidden fees. No vague quotes. Every price is fixed — and includes everything listed. In Egyptian Pounds.",
    website: {
      title: "Website Build",
      noCode: {
        title: "No-Code",
        subtitle: "Webflow / Framer"
      },
      coded: {
        title: "Coded",
        subtitle: "Next.js"
      },
      tiers: [
        {
          name: "Starter",
          pages: "1–3 pages",
          // Price ranges will be handled by the component based on currency
          // These are EGP values: [min, max]
          priceRangeEgp: [4000, 6000],
          // For no-code tiers
          isNoCode: true
        },
        {
          name: "Business",
          pages: "4–6 pages",
          priceRangeEgp: [8000, 12000],
          isNoCode: true
        },
        {
          name: "Professional",
          pages: "7–10 pages",
          priceRangeEgp: [14000, 20000],
          isNoCode: true
        }
      ]
    },
    addOns: {
      title: "Add-Ons",
      subtitle: "Enhance your package with these optional add-ons. Prices are one-time fees.",
      items: [
        {
          name: "Logo Animation",
          description: "Add subtle motion to your logo for websites and social media",
          icon: "🌀",
          priceEgp: 1500
        },
        {
          name: "Copywriting",
          description: "Professional English/Arabic copy for your website",
          icon: "✍️",
          priceEgp: 2500
        },
        {
          name: "SEO Setup",
          description: "Basic on-page SEO optimization (English & Arabic)",
          icon: "🔍",
          priceEgp: 2000
        },
        {
          name: "Analytics Integration",
          description: "Google Analytics, Search Console, and heatmaps setup",
          icon: "📊",
          priceEgp: 1800
        },
        {
          name: "Social Media Kit",
          description: "Profile covers, post templates, and avatar variations",
          icon: "📱",
          priceEgp: 1200
        },
        {
          name: "Email Setup",
          description: "Professional email setup (up to 5 accounts)",
          icon: "📧",
          priceEgp: 1000
        }
      ]
    },
    monthlyPlans: {
      title: "Monthly Hosting & Maintenance",
      subtitle: "Choose a plan that grows with your business. All plans include hosting, security, and support.",
      plans: [
        {
          name: "Basic",
          priceRangeEgp: [500, 900], // per month
          features: [
            "Basic website hosting",
            "Email support (24h response)",
            "Monthly security scan"
          ]
        },
        {
          name: "Standard",
          priceRangeEgp: [1500, 2500], // per month
          features: [
            "Everything in Basic",
            "Priority support (12h response)",
            "Monthly performance report"
          ],
          isPopular: true
        },
        {
          name: "Growth",
          priceRangeEgp: [3000, 4500], // per month
          features: [
            "Everything in Standard",
            "Dedicated account manager",
            "Weekly analytics & optimization",
            "Quarterly strategy call"
          ]
        },
        {
          name: "Full Management",
          priceRangeEgp: [7000, 12000], // per month
          features: [
            "Everything in Growth",
            "Daily backups & monitoring",
            "Unlimited content updates",
            "24/7 emergency support"
          ]
        }
      ]
    },
    bundleDeals: {
      title: "Bundle Deals",
      subtitle: "Save big when you combine our most popular services.",
      bundles: [
        {
          name: "Startup Launch Pack",
          description: "Everything you need to launch your online presence",
          savingsEgp: 5000,
          priceEgp: 25000, // bundled price
          originalPriceEgp: 30000, // sum of individual items
          includes: [
            "Brand Identity Package",
            "5-Page Website (No-Code)",
            "Basic AI Brand Character",
            "1 Month of Maintenance"
          ]
        },
        {
          name: "Growth Accelerator",
          description: "For businesses ready to scale their digital presence",
          savingsEgp: 12000,
          priceEgp: 58000,
          originalPriceEgp: 70000,
          includes: [
            "Brand Identity Package",
            "10-Page Website (Coded)",
            "Advanced AI Brand Character",
            "3 Months of Maintenance",
            "SEO Setup"
          ]
        },
        {
          name: "Enterprise Suite",
          description: "Complete solution for established businesses",
          savingsEgp: 25000,
          priceEgp: 120000,
          originalPriceEgp: 145000,
          includes: [
            "Brand Identity Package",
            "15-Page Website (Coded)",
            "Custom AI Brand Character",
            "6 Months of Maintenance",
            "SEO Setup",
            "Content Strategy"
          ]
        }
      ]
    },
    cta: {
      note: "All prices in Egyptian Pounds. Setup fee required before project begins. Minimum 3-month commitment on monthly plans.",
      button: "Get a Custom Quote"
    }
  },
  about: {
    header: {
      title: "We're Khayal.",
      titleAr: "نحن خيال.",
      description: "Khayal means imagination in Arabic. That's exactly what we do — we take what a brand could be, and make it real."
    },
    philosophy: {
      title: "Why We Exist",
      content: [
        "Most brands in Egypt have a logo. Very few have a voice, a character, or a reason for customers to remember them.",
        "We started Khayal because we believe every business — the café, the repair shop, the clinic — deserves a brand that feels alive. Not a template. Not a chatbot. A character."
      ],
      quoteCards: [
        {
          title: "100%",
          description: "Bilingual — Arabic and English, always"
        },
        {
          title: "Egypt-first",
          description: "Built for local businesses, ready for the world"
        },
        {
          title: "Character-first",
          description: "Every project starts with who your brand is, not what it looks like"
        }
      ]
    },
    approach: {
      title: "Our Approach",
      sections: [
        {
          title: "We start with the character, not the colors.",
          description: "Most agencies start with the logo. We start by asking: if your brand were a person, who would they be? That question changes everything."
        },
        {
          title: "We build things that work, not just look good.",
          description: "The AI agent has to actually answer questions. The website has to actually load fast. The brand has to actually make sense in Arabic."
        },
        {
          title: "We're a small studio by design.",
          description: "We don't take on 50 clients. We go deep on a few. That's why the work is different."
        }
      ]
    },
    location: {
      title: "Based in Egypt.",
      titleAr: "مقرنا في مصر.",
      description: "Alexandria and Luxor. Working with clients across Egypt, the Gulf, and internationally."
    },
    cta: {
      title: "Want to work together?",
      button: "Start a Conversation"
    }
  },
  contact: {
    header: {
      title: "Let's Talk.",
      titleAr: "لنتحدث.",
      description: "Tell us about your brand. We'll tell you what we can build."
    },
    contactInfo: {
      whatsapp: {
        title: "WhatsApp",
        action: "Message Us",
        note: "Fastest response — usually within 2 hours"
      },
      email: {
        title: "Email",
        note: "For detailed briefs and project specs"
      },
      instagram: {
        title: "Instagram",
        note: "Follow our work"
      },
      booking: {
        description: "Note about booking will come from siteConfig",
        buttonLabel: "Button label will come from siteConfig"
      }
    },
    form: {
      name: "Your Name",
      email: "Email",
      whatsappNumber: "WhatsApp Number",
      serviceInterestedIn: "Service Interested In",
      message: "Tell us about your brand",
      placeholders: {
        name: "Your Name",
        email: "your@email.com",
        whatsappNumber: "WhatsApp number will come from siteConfig",
        serviceInterestedIn: "Select a service",
        message: "Describe your brand, goals, and what you're looking for..."
      },
      serviceOptions: [
        "",
        "AI Brand Character",
        "Website Only",
        "Full Identity + Website",
        "Bundle Deal",
        "Not sure yet"
      ],
      submitButton: "Send Message",
      success: {
        checkmark: "✓",
        title: "We got it.",
        titleAr: "استلمنا رسالتك.", // Note: This needs review for Egyptian colloquial
        description: "We'll be in touch on WhatsApp within 24 hours."
      }
    }
  },
  footer: {
    quickLinks: "Quick Links",
    contact: "Contact",
    whatsApp: "WhatsApp",
    email: "Email",
    instagram: "Instagram",
    copyright: "© {year} Khayal Studio. All rights reserved.",
    language: {
      english: "English",
      arabic: "العربية"
    }
  }
};

export default en;