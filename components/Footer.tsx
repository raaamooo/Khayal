'use client';

import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';

export default function Footer() {
  const { content } = useLanguage();
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className='bg-surface/50 backdrop-blur-sm relative'>
      {/* Top gradient separator */}
      <div className="section-divider" />

      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* K-mark icon */}
              <svg width="28" height="40" viewBox="0 0 58 82" fill="none">
                <line x1="10" y1="6" x2="10" y2="68" stroke="#A259FF" strokeWidth="7" strokeLinecap="round"/>
                <line x1="10" y1="37" x2="50" y2="6" stroke="#A259FF" strokeWidth="7" strokeLinecap="round"/>
                <line x1="10" y1="37" x2="50" y2="68" stroke="#A259FF" strokeWidth="7" strokeLinecap="round"/>
                <circle cx="30" cy="77" r="5.5" fill="#FF6B35"/>
              </svg>
              <span className="font-syne text-xl font-bold text-lavender tracking-wide">KHAYAL</span>
            </div>
            <p className="text-fog text-sm leading-relaxed max-w-xs">
              AI-powered brand characters and bilingual websites that speak, sell, and connect.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className='font-syne text-sm uppercase tracking-[0.2em] text-lavender mb-6 flex items-center gap-2'>
              <span className="w-4 h-px bg-violet" />
              {content.footer.quickLinks}
            </h3>
            <ul className='space-y-3 text-fog text-sm'>
              <li>
                <Link href='/' className='hover:text-violet transition-colors duration-300'>
                  {content.nav.home}
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:text-violet transition-colors duration-300'>
                  {content.nav.services}
                </Link>
              </li>
              <li>
                <Link href='/work' className='hover:text-violet transition-colors duration-300'>
                  {content.nav.work}
                </Link>
              </li>
              <li>
                <Link href='/pricing' className='hover:text-violet transition-colors duration-300'>
                  {content.nav.pricing}
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-violet transition-colors duration-300'>
                  {content.nav.about}
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-violet transition-colors duration-300'>
                  {content.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-syne text-sm uppercase tracking-[0.2em] text-lavender mb-6 flex items-center gap-2'>
              <span className="w-4 h-px bg-violet" />
              {content.footer.contact}
            </h3>
            <div className="space-y-4">
              {/* WhatsApp */}
              <a href="#" className='flex items-center gap-3 text-fog hover:text-violet transition-colors duration-300 group'>
                <div className="w-8 h-8 rounded-lg bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-violet">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.213l-.302-.18-2.858.85.85-2.858-.18-.302A8 8 0 1112 20z"/>
                  </svg>
                </div>
                <span className="text-sm">{content.footer.whatsApp}</span>
              </a>

              {/* Email */}
              <a href="#" className='flex items-center gap-3 text-fog hover:text-violet transition-colors duration-300 group'>
                <div className="w-8 h-8 rounded-lg bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 4L12 13L2 4"/>
                  </svg>
                </div>
                <span className="text-sm">{content.footer.email}</span>
              </a>

              {/* Instagram */}
              <a href="#" className='flex items-center gap-3 text-fog hover:text-violet transition-colors duration-300 group'>
                <div className="w-8 h-8 rounded-lg bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                </div>
                <span className="text-sm">{content.footer.instagram}</span>
              </a>
            </div>
          </div>

          {/* Language column */}
          <div>
            <h3 className='font-syne text-sm uppercase tracking-[0.2em] text-lavender mb-6 flex items-center gap-2'>
              <span className="w-4 h-px bg-violet" />
              Language
            </h3>
            <div className='flex items-center gap-3'>
              <a href='#' className='text-fog hover:text-violet transition-colors duration-300 text-sm'>
                {content.footer.language.english}
              </a>
              <span className='w-1 h-1 rounded-full bg-violet/30' />
              <a href='#' className='text-fog hover:text-violet transition-colors duration-300 text-sm'>
                {content.footer.language.arabic}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-16 pt-8 border-t border-violet/10'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-fog/60 text-xs font-syne'>
              {content.footer.copyright
                .replace('{year}', currentYear)
                .replace('{السنة}', currentYear)}
            </p>
            <p className="text-fog/40 text-xs">
              Built with intention ✦
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}