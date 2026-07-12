'use client';

import { useLanguage } from '@/src/context/LanguageContext';

export default function Footer() {
  const { content } = useLanguage();
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className='bg-background/50 backdrop-blur-sm backdrop-support:bg-background/50 backdrop-support:backdrop-blur'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='font-syne text-lg mb-4'>{content.footer.quickLinks}</h3>
            <ul className='space-y-2 text-fog'>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {content.nav.home}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {content.nav.services}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {content.nav.work}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {content.nav.pricing}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {content.nav.about}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {content.nav.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-syne text-lg mb-4'>{content.footer.contact}</h3>
            <p className='flex items-center space-x-2 text-fog'>
              <span className='flex-shrink-0'>
                {/* WhatsApp icon */}
              </span>
              <span>{content.footer.whatsApp}</span>
            </p>
            <p className='flex items-center space-x-2 text-fog mt-2'>
              <span className='flex-shrink-0'>
                {/* Email icon */}
              </span>
              <span>{content.footer.email}</span>
            </p>
            <p className='flex items-center space-x-2 text-fog mt-2'>
              <span className='flex-shrink-0'>
                {/* Instagram icon */}
              </span>
              <span>{content.footer.instagram}</span>
            </p>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-border/50'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-fog'>
              {/* Replace placeholders for year */}
              {content.footer.copyright
                .replace('{year}', currentYear)
                .replace('{السنة}', currentYear)}
            </p>
            <div className='flex items-center space-x-4'>
              <a href='#' className='text-fog hover:text-lav transition-colors'>
                {content.footer.language.english}
              </a>
              <span className='w-0.5 h-0.5 bg-gray-400'></span>
              <a href='#' className='text-fog hover:text-lav transition-colors'>
                {content.footer.language.arabic}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}