// src/config/siteConfig.ts
// Centralized configuration for site-wide constants
// TODO: Replace placeholder values with actual contact information

export const siteConfig = {
  // Contact Information
  contact: {
    // WhatsApp number - format: +20XXXXXXXXXX (Egypt country code)
    whatsapp: {
      // TODO: Replace with actual WhatsApp number
      number: '+20 XXX XXX XXXX',
      label: 'WhatsApp',
      // Uncomment and set actual link when number is known
      // link: 'https://wa.me/20XXXXXXXXXX'
    },

    // Email address
    email: {
      // TODO: Replace with actual email address
      address: 'hello@khayal.studio',
      label: 'Email',
      link: 'mailto:hello@khayal.studio'
    },

    // Instagram handle
    instagram: {
      // TODO: Replace with actual Instagram handle
      handle: '@khayal.studio',
      label: 'Instagram',
      link: 'https://instagram.com/khayal.studio'
    }
  },

  // Booking/Calendly link
  booking: {
    // TODO: Replace with actual Calendly or booking link
    link: '#', // Placeholder - replace with actual booking URL
    label: 'Book a Call',
    description: 'Prefer a call? Book a free 30-minute discovery session.'
  },

  // Social media links (add more as needed)
  social: {
    // Instagram is already in contact above, but can add others here
    // facebook: {
    //   url: '#',
    //   label: 'Facebook'
    // },
    // twitter: {
    //   url: '#',
    //   label: 'Twitter/X'
    // }
  }
};

// Export individual values for backward compatibility during transition
export const whatsappNumber = siteConfig.contact.whatsapp.number;
export const emailAddress = siteConfig.contact.email.address;
export const instagramHandle = siteConfig.contact.instagram.handle;
export const bookingLink = siteConfig.booking.link;