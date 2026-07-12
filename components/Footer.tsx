'use client';

import { useTranslation } from '@/lib/i18n/i18n';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className='bg-background/50 backdrop-blur-sm backdrop-support:bg-background/50 backdrop-support:backdrop-blur'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='font-syne text-lg mb-4'>{t('footer.quickLinks')}</h3>
            <ul className='space-y-2 text-fog'>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {t('nav.work')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {t('nav.pricing')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-lav transition-colors'>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-syne text-lg mb-4'>{t('footer.contact')}</h3>
            <p className='flex items-center space-x-2 text-fog'>
              <span className='flex-shrink-0'>
                {/* WhatsApp icon */}

              </span>
              <span>{t('footer.whatsApp')}</span>
            </p>
            <p className='flex items-center space-x-2 text-fog mt-2'>
              <span className='flex-shrink-0'>
                {/* Email icon */}

              </span>
              <span>{t('footer.email')}</span>
            </p>
            <p className='flex items-center space-x-2 text-fog mt-2'>
              <span className='flex-shrink-0'>
                {/* Instagram icon */}

              </span>
              <span>{t('footer.instagram')}</span>
            </p>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-border/50'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-fog'>
              {/* Replace placeholders for year */}
              {t('footer.copyright')
                .replace('{year}', currentYear)
                .replace('{السنة}', currentYear)}
            </p>
            <div className='flex items-center space-x-4'>
              <a href='#' className='text-fog hover:text-lav transition-colors'>
                {t('footer.language.english')}
              </a>
              <span className='w-0.5 h-0.5 bg-gray-400'></span>
              <a href='#' className='text-fog hover:text-lav transition-colors'>
                {t('footer.language.arabic')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}