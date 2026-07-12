export type Locale = 'en' | 'ar';

export interface Messages {
  nav: {
    home: string;
    services: string;
    work: string;
    pricing: string;
    about: string;
    contact: string;
    language: string;
    'language.english': string;
    'language.arabic': string;
  };
  hero: {
    title: string;
    titleAr: string;
    description: string;
  };
  about: {
    title: string;
    titleAr: string;
    description: string;
    whyWeExist: string;
    ourApproach: string;
    locationStrip: {
      title: string;
      titleAr: string;
      description: string;
    };
    cta: {
      title: string;
      buttonText: string;
    };
  };
  services: {
    title: string;
    titleAr: string;
    description: string;
    howItWorks: string;
    steps: {
      discoveryCall: {
        title: string;
        description: string;
      };
      concept: {
        title: string;
        description: string;
      };
      build: {
        title: string;
        description: string;
      };
      launch: {
        title: string;
        description: string;
      };
    };
  };
  work: {
    title: string;
    titleAr: string;
    description: string;
    cta: {
      title: string;
      buttonText: string;
    };
  };
  pricing: {
    title: string;
    titleAr: string;
    description: string;
    cta: {
      note: string;
      buttonText: string;
    };
  };
  contact: {
    title: string;
    titleAr: string;
    description: string;
    form: {
      name: string;
      email: string;
      whatsapp: string;
      service: string;
      servicePlaceholder: string;
      serviceOptions: {
        aiBrandCharacter: string;
        websiteOnly: string;
        fullIdentityWebsite: string;
        bundleDeal: string;
        notSureYet: string;
      };
      message: string;
      messagePlaceholder: string;
      submitButton: string;
    };
    success: {
      title: string;
      titleAr: string;
      description: string;
    };
  };
  footer: {
    quickLinks: string;
    contact: string;
    whatsApp: string;
    email: string;
    instagram: string;
    copyright: string;
    language: {
      english: string;
      arabic: string;
    };
  };
}
