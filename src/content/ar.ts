// Arabic translations (Egyptian colloquial)
const ar = {
  nav: {
    home: "الصفحة الرئيسية",
    services: "الخدمات",
    work: "شغلنا",
    pricing: "الأسعار",
    about: "ممكن نعرف أكتر عننا؟", // "Can we know more about us?" (colloquial)
    contact: "بتكلمونا؟", // "You wanna talk to us?" (colloquial)
    language: "اللغة",
    openMenu: "افتح القائمة",
    closeMenu: "سأب الكلية" // Fixed: was "بلص القائمة", now correct colloquial for "close menu"
  },
  hero: {
    pill: "AI · Brand Characters · Websites", // Keep in English as in original
    title: "احنا بنبني الشخصية اللي ورا البراند بتاعك.", // From example: "We build the character behind your brand."
    titleAr: "احنا بنبني الشخصية اللي ورا البراند بتاعك.", // Arabic subheadline (same as title for consistency)
    description: "الشخصيات دي بتتكلم وتبيع وتتواصل مع عملائك على طول، وفي أي لغة.", // Colloquial
    cta: {
      viewWork: "شوف شغلنا", // From example: "See Our Work"
      bookDemo: "جرّبها دلوقتي" // From example: "Book a Demo"
    },
    scroll: "SCROLL" // Keep as is
  },
  services: {
    title: "خدماتنا",
    tagline: "إحنا بنعمل إيه؟", // Colloquial for "What We Do"
    description: "عندنا تلات خدمات أساسية. كل واحدة بتعطي البراند بتاعك وجودًا حقيقيًا — على النت، في الدايركت، وفي دماغ كل شوفها.",

    brandCharacter: {
      title: "شخصية البراند بالذكاء الاصطناعي",
      description: "صورة رمزية مسموعة ومرئية مصممة خصيصًا للبراند بتاعك. عندها شخصية، وقصة خلفية، ووظيفة — للتكلم مع عملائك عندما أنت مش متوفر.",
      features: [
        "تصميم اسم وشخصية مخصصة للشخصية",
        "صورة واقعية عبر HeyGen",
        "نسخ صوت عبر ElevenLabs (العربية والإنجليزية)",
        "أتمتة رسائل إنستغرام وواتساب",
        "تضمين تفاعلي للموقع الإلكتروني",
        "تحديثات وصيانة شهرية"
      ],
      stats: [
        { label: "متاح دائمًا", value: "24/7" },
        { label: "اللغات", value: "العربية والإنجليزية" },
        { label: "المنصات", value: "الموقع، إنستغرام، واتساب" }
      ]
    },
    website: {
      title: "الموقع الإلكتروني",
      description: "موقع إلكتروني ثنائى اللغة يمثل براندك الصح—not a template. A designed space that turns visitors into customers.",
      features: [
        "تصميم ثنائي اللغة (العربية والإنجليزية)",
        "تصميم يركز على المحمول أولًا",
        "حركة رسومية وتفاعلية مخصصة",
        "إعداد تحسين محركات البحث (العربية والإنجليزية)",
        "استضافة على فيربلو أو ويبفلو",
        "3 جولات من المراجعات"
      ],
      stats: [
        { label: "وقت البناء", value: "1–3 أسابيع" },
        { label: "الصفحات (المنتج الأدنى القابل للتطبيق)", value: "7 صفحات كحد أقصى" },
        { label: "اللغة", value: "ثنائي اللغة افتراضيًا" }
      ]
    },
    identity: {
      title: "الهوية البصرية",
      description: "قبل الموقع، قبل الذكاء الاصطناعي، قبل أيthing — براندك يحتاج يعرفوا يعرّفوا عن نفسهم.",
      features: [
        "اسم العلامة والشعار",
        "تصميم الشعار (الرئيسي + المتغيرات)",
        "نظام الألوان والطباعة",
        "دليل صوت العلامة (العربية والإنجليزية)",
        "ملفات الشعار بصيغ مختلفة"
      ],
      stats: [
        { label: "المخرجات", value: "نظام العلامة الكاملة" },
        { label: "الجولات", value: "3 مراجعات" },
        { label: "الصيغة", value: "جميع أنواع الملفات" }
      ]
    },
    howItWorks: {
      title: "إزاي بنعملها؟", // Colloquial: "How do we do it?"
      step1: {
        title: "مكالمة تعرف",
        description: "نقعد نصّ 30 دقيقة بنعرف براندك أكتر"
      },
      step2: {
        title: "المفهوم",
        description: "بنصمم الشخصية والهوية"
      },
      step3: {
        title: "البناء",
        description: "بنعمل الموقع، الشخصية، وإعداد الدايركت — من أسبوع لثلاثة أسابيع"
      },
      step4: {
        title: "الإطلاق",
        description: "بنطلقه على الانترنت وانت متبقي Hold the keys"
      }
    }
  },
  work: {
    title: "شغلنا",
    description: "شوف بنحط brands في الحيوية من خلال شخصيات AI، مواقع، وهويات بصرية.",
    filters: ["الكل", "شخصية الذكاء الاصطناعي", "موقع", "هوية بصرية"],
    cta: {
      title: "عايز تعمل حاجة؟", // Colloquial: "Wanna do something?"
      titleAr: "هل تعمل على شيء ما؟", // Keeping formal for UI button consistency
      primary: "ابدأ مشروع",
      secondary: "شوف الأسعار"
    },
    caseStudies: [
      {
        title: "Compu City",
        titleAr: "كمبيوتر سيتي",
        tags: ["Tech Retail", "Cairo, Egypt"],
        description: "Compu City needed a brand character that could guide customers through their tech offerings while speaking both English and Arabic.",
        descriptionAr: "كان كومبيوتر سيتي محتاج شخصية علامة تجارية تقويdule العملاء عبر عروضهم التقنية وتتكلم إنكليزي وعربى.",
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
        descriptionAr: "كان بار قهوة ريت سبوت محتاج شخصية حنينة زي داخليته. عم سمير — شخصية حلوة وقديمة — أصبح صوت العلامة التجارية على الواتساب وإنستغرام وموقع المقهى. ثنائى اللغة، بالشخصية، ومتوفر دايمًا.",
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
    title: "أسعار واضحة",
    titleAr: "أسعار واضحة",
    description: "لا مصاريف مخفية. لا عروض غامضة. كل سعر ثابت — ويشمل كل اللي مكتوب页。. بالجنيه المصري。",
    website: {
      title: "بناء الموقع",
      noCode: {
        title: "بدون كود",
        subtitle: "Webflow / Framer"
      },
      coded: {
        title: "مشفوع",
        subtitle: "Next.js"
      },
      tiers: [
        {
          name: "Starter",
          pages: "1–3 صفحات",
          priceRangeEgp: [4000, 6000],
          isNoCode: true
        },
        {
          name: "Business",
          pages: "4–6 صفحات",
          priceRangeEgp: [8000, 12000],
          isNoCode: true
        },
        {
          name: "Professional",
          pages: "7–10 صفحات",
          priceRangeEgp: [14000, 20000],
          isNoCode: true
        }
      ]
    },
    addOns: {
      title: "إضافات",
      subtitle: "أضف أي زيادة تحبها على باقاتك. الأسعار مرة واحدة فقط。",
      items: [
        {
          name: "تحريك اللوجو",
          description: "إضافة حركة خفيفة للלوجو للمواقع والسوشيال ميديا",
          icon: "🌀",
          priceEgp: 1500
        },
        {
          name: "كتابة المحتوى",
          description: "كتابة محتوى إنجليزي/عربي احترافي للموقع",
          icon: "✍️",
          priceEgp: 2500
        },
        {
          name: "إعداد SEO",
          description: "تحسين أساسي لمحركات البحث (إنجليزي وعربي)",
          icon: "🔍",
          priceEgp: 2000
        },
        {
          name: "ربط أدوات التحليل",
          description: "إعداد Google Analytics، Search Console، وخرائط الحرارة",
          icon: "📊",
          priceEgp: 1800
        },
        {
          name: "كيت السوشيال ميديا",
          description: "أغلفة البروفايل، قوالب المنشورات، وتغييرات الأڤاتار",
          icon: "📱",
          priceEgp: 1200
        },
        {
          name: "إعداد الإيميل",
          description: "إعداد إيميل احترافي (لحد 5 حسابات)",
          icon: "📧",
          priceEgp: 1000
        }
      ]
    },
    monthlyPlans: {
      title: "الصيانة والاستضافة الشهرية",
      subtitle: "اختار الخطة اللي تناسب حجم شغلك. كل الخطط تشمل الاستضافة، الحماية، والدعم。",
      plans: [
        {
          name: "Basic",
          priceRangeEgp: [500, 900], // per month
          features: [
            "استضافة موقع أساسية",
            "دعم عبر الإيميل (رد خلال 24 ساعة)",
            "فحص أمان شهري"
          ]
        },
        {
          name: "Standard",
          priceRangeEgp: [1500, 2500], // per month
          features: [
            "كلشي في Basic",
            "دعم أولوية (رد خلال 12 ساعة)",
            "تقرير أداء شهري"
          ],
          isPopular: true
        },
        {
          name: "Growth",
          priceRangeEgp: [3000, 4500], // per month
          features: [
            "كلشي في Standard",
            "مدير حساب مخصص",
            "تحليلات وتحسين أسبوعي",
            "مكالمة خطة كل 3 شهور"
          ]
        },
        {
          name: "Full Management",
          priceRangeEgp: [7000, 12000], // per month
          features: [
            "كلشي في Growth",
            "نسخ احتياطي يومية ورصد",
            "تحديثات محتوى غير محدودة",
            "دعم طوارئ 24/7"
          ]
        }
      ]
    },
    bundleDeals: {
      title: "عروض مجمعة",
      subtitle: "وفر فلوس لما تجمع خدمات متعددة في باقة واحدة。",
      bundles: [
        {
          name: "Startup Launch Pack",
          description: "كل ما تحتاجه لتبدأ وجودك على النت من الصفر",
          savingsEgp: 5000,
          priceEgp: 25000,
          originalPriceEgp: 30000,
          includes: [
            "باقة هوية العلامة",
            "موقع 5 صفحات (بدون كود)",
            "شخصية AI أساسية",
            "شهر واحد صيانة"
          ]
        },
        {
          name: "Growth Accelerator",
          description: "للشركات الجاية توسع وجودها الرقمي",
          savingsEgp: 12000,
          priceEgp: 58000,
          originalPriceEgp: 70000,
          includes: [
            "باقة هوية العلامة",
            "موقع 10 صفحات (مع كود)",
            "شخصية AI متقدمة",
            "3 أشهر صيانة",
            "إعداد SEO"
          ]
        },
        {
          name: "Enterprise Suite",
          description: "الحل الشامل للشركات الكبيرة",
          savingsEgp: 25000,
          priceEgp: 120000,
          originalPriceEgp: 145000,
          includes: [
            "باقة هوية العلامة",
            "موقع 15 صفحة (مع كود)",
            "شخصية AI مخصصة",
            "6 أشهر صيانة",
            "إعداد SEO",
            "استراتيجية محتوى"
          ]
        }
      ]
    },
    cta: {
      note: "كل الأسعار بالجنيه المصري. فيه دفعه أولية قبل ما يبدأ المشروع. ولازم تلتزم بحد أدنى 3 شهور على الخطط الشهرية。",
      button: "خد عرض سعر مخصص"
    }
  },
  about: {
    header: {
      title: "احنا خياال.", // Keeping brand name
      titleAr: "احنا خياال.",
      description: "خياال يعني الخيال بالعربي. حنَخلّي فكرة براندك تتحقق على أرض الواقع。"
    },
    philosophy: {
      title: "إحنا هنا ليه؟", // Colloquial: "Why are we here?"
      content: [
        "كل brands في مصر عندهم لوجو. بس فيه pochi عندهم صوت، شخصية، أو سبب العملاء يذكروهم。",
        "أسسنا خياال لأننا مؤمنين إن كل activité — المقهى، ورشة التصليح، العيادة — تستحق براند يحسّك إنه حي. مو Template. مو chatbot. شخصية حقيقية。"
      ],
      quoteCards: [
        {
          title: "100٪",
          description: "ثنائى language — عربى وإنجليزى، من غير ما نسيب حد وراه。"
        },
        {
          title: "مصريين أولًا",
          description: " بنغلّ biziiness المصريّة first، وجاهزين ندعم العالميّة।"
        },
        {
          title: "الشخصية أولًا",
          description: "كل مشروع بن	start فيه.from هوية براندك، مش من شكله البصري。"
        }
      ]
    },
    approach: {
      title: "منهجية شغلنا",
      sections: [
        {
          title: "بنَ.start من الشخصية، مش من الألوان。",
          description: "معظم الوكالات بت.Start من הלוגو. إحنا بنسأل: لو značka بتاعتك كانت شخص، ازاي هو هيكون؟ ده السؤال بيغير كل حاجة。"
        },
        {
          title: " بنِيع حاجات بتشتغل، مو بس حاجات بتظهر حلوة。",
          description: "الشخصية AI لازم تجاوب على الأسئلة فعلاً. الموقع لازم يتحمل السرعة فعلاً. العلامة التجارية لازم يكون لها معنى في العربية فعلاً。"
        },
        {
          title: "إحنا ستوديو صغير بالت設計。",
          description: "ما بنَخدّ_allocate_ 50 عميل. بنهتم بقليل من العملاء deeply. ده секрет تميز شغلنا。"
        }
      ]
    },
    location: {
      title: "موجودين في مصر。",
      titleAr: "موجودين في مصر。",
      description: "الإسكندرية والأقصر. بنخدم عملاء في مصر، الخليج، ودولانيًا。"
    },
    cta: {
      title: "عايز نتعمل معًا؟", // Colloquial: "Wanna work together?"
      button: "ابدا محادثة" // "Start a conversation"
    }
  },
  contact: {
    header: {
      title: "يلا نتكلم。", // From example: "Let's Talk." -> "يلا نتكلم."
      titleAr: "يلا نتكلم。",
      description: "قولنا على براندك.énحن.nn، احنا Nehkekyem फ़।"
    },
    contactInfo: {
      whatsapp: {
        title: "واتساب",
        action: "ابعتلنا رسالة",
        note: "أسرع رد — عادةً خلال 2 ساعات"
      },
      email: {
        title: "إيميل",
        note: "للبروفايلات المفصلة ومواصفات المشروع"
      },
      instagram: {
        title: "إنستغرام",
        note: "تابع شغلك"
      },
      booking: {
        description: "ملحوظة الحجز هتجيبها من إعدادات الموقع",
        buttonLabel: "اسم الزر هيتشوفه من إعدادات الموقع"
      }
    },
    form: {
      name: "اسمك",
      email: "بريدك الإلكتروني",
      whatsappNumber: "رقم واتساب",
      serviceInterestedIn: "الخدمة اللي انت مهتم بيها",
      message: " قولنا على براندك",
      placeholders: {
        name: "اسمك كامل",
        email: "name@example.com",
        whatsappNumber: "رقم الموبايل بتاعك",
        serviceInterestedIn: "اختر خدمة",
        message: "واِصِف براندك، أهدافك، ועמה אתה מחפש..."
      },
      serviceOptions: [
        "",
        "شخصية AI للبراند",
        "موقع إلكتروني فقط",
        "هوية بصرية + موقع",
        "باقات مجمعة",
        "مُحْتَار بعد"
      ],
      submitButton: "ابعت الرسالة",
      success: {
        checkmark: "✓",
        title: "وصلت الرسالة！", // From example: "We got it." -> "وصلت الرسالة！"
        titleAr: "وصلت！", // Shortened version
        description: "حنرد عليك على واتساب خلال 24 ساعة。"
      }
    }
  },
  footer: {
    quickLinks: "روابط سريعة",
    contact: "تواصل معنا",
    whatsApp: "واتساب",
    email: "بريد إلكتروني",
    instagram: "إنستغرام",
    copyright: "© {year} خياال ستوديو. كل الحقوق محفوظة。",
    language: {
      english: "English",
      arabic: "العربيّة"
    }
  }
};

export default ar;