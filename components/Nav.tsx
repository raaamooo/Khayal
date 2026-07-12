'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Nav() {
  const { language, setLanguage, content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <nav className='bg-white/5 backdrop-blur-sm backdrop-support:bg-white/50 backdrop-support:backdrop-blur'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-10'>
        <div className='flex flex-wrap items-center justify-between py-4'>
          <div className='flex flex-shrink-0 items-center'>
            <Link
              href='/'
              className='flex-shrink-0'
            >
              {/* The K Mark + Wordmark */}
              <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                <div className='w-10 h-10 flex-shrink-0 relative'>
                  {/* Outer circle */}
                  <circle
                    cx='5'
                    cy='5'
                    r='4.5'
                    stroke='currentColor'
                    strokeWidth='2'
                    fill='none'
                    className='stroke-violet'
                  />
                  {/* Inner diagonal line (top-left to bottom-right) */}
                  <line
                    x1='1'
                    y1='1'
                    x2='9'
                    y2='9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    className='stroke-violet'
                  />
                  {/* Inner diagonal line (bottom-left to top-right) */}
                  <line
                    x1='1'
                    y1='9'
                    x2='9'
                    y2='1'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    className='stroke-violet'
                  />
                </div>
                <span className='font-syne text-xl font-bold text-lav rtl:text-right'>KHAYAL</span>
              </div>
            </Link>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-8'>
            <Link
              href='/'
              className={
                `${pathname === '/' || (pathname === '' && typeof window !== 'undefined')
                  ? 'text-violet font-semibold'
                  : 'text-hover text-fog hover:text-lav transition-colors'}`
              }
            >
              {content.nav.home}
            </Link>
            <Link
              href='/services'
              className={
                `${pathname === '/services'
                  ? 'text-violet font-semibold'
                  : 'text-hover text-fog hover:text-lav transition-colors'}`
              }
            >
              {content.nav.services}
            </Link>
            <Link
              href='/work'
              className={
                `${pathname === '/work'
                  ? 'text-violet font-semibold'
                  : 'text-hover text-fog hover:text-lav transition-colors'}`
              }
            >
              {content.nav.work}
            </Link>
            <Link
              href='/pricing'
              className={`${pathname === '/pricing'
                ? 'text-violet font-semibold'
                : 'text-hover text-fog hover:text-lav transition-colors'}`}
              >
                {content.nav.pricing}
              </Link>
            <Link
              href='/about'
              className={
                `${pathname === '/about'
                  ? 'text-violet font-semibold'
                  : 'text-hover text-fog hover:text-lav transition-colors'}`
              }
            >
              {content.nav.about}
            </Link>
            <Link
              href='/contact'
              className={
                `${pathname === '/contact'
                  ? 'text-violet font-semibold'
                  : 'text-hover text-fog hover:text-lav transition-colors'}`
              }
            >
              {content.nav.contact}
            </Link>
            {/* Language Switcher */}
            <div className='flex-shrink-0 ml-4 flex items-center'>
              <LanguageSwitcher />
            </div>
          </div>
          <div className='flex items-center pt-4'>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? content.nav.closeMenu : content.nav.openMenu}
              className='md:hidden p-2 rounded-full hover:bg-lavender/20'
            >
              {isOpen ? (
                <svg className='h-4 w-4 text-lav' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              ) : (
                <svg className='h-4 w-4 text-lav' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                  <line x1='3' y1='12' x2='21' y2='12' />
                  <line x1='3' y1='6' x2='21' y2='6' />
                  <line x1='3' y1='18' x2='21' y2='18' />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='mt-6 md:hidden'>
            <div className='bg-white/80 backdrop-blur-sm backdrop-support:bg-white/80 backdrop-support:backdrop-blur'>
              <nav className='px-6 pt-8 pb-4 space-y-6'>
                <Link
                  href='/'
                  className={`${pathname === '/' || (pathname === '' && typeof window !== 'undefined') ? 'block px-4 py-3 text-lg font-syne text-violet' : 'block px-4 py-3 text-lg font-syne text-hover text-fog hover:text-lav transition-colors'}`}
                >
                  {content.nav.home}
                </Link>
                <Link
                  href='/services'
                  className={`${pathname === '/services' ? 'block px-4 py-3 text-lg font-syne text-violet' : 'block px-4 py-3 text-lg font-syne text-hover text-fog hover:text-lav transition-colors'}`}
                >
                  {content.nav.services}
                </Link>
                <Link
                  href='/work'
                  className={`${pathname === '/work' ? 'block px-4 py-3 text-lg font-syne text-violet' : 'block px-4 py-3 text-lg font-syne text-hover text-fog hover:text-lav transition-colors'}`}
                >
                  {content.nav.work}
                </Link>
                <Link
                  href='/pricing'
                  className={`${pathname === '/pricing' ? 'block px-4 py-3 text-lg font-syne text-violet' : 'block px-4 py-3 text-lg font-syne text-hover text-fog hover:text-lav transition-colors'}`}
                >
                  {content.nav.pricing}
                </Link>
                <Link
                  href='/about'
                  className={`${pathname === '/about' ? 'block px-4 py-3 text-lg font-syne text-violet' : 'block px-4 py-3 text-lg font-syne text-hover text-fog hover:text-lav transition-colors'}`}
                >
                  {content.nav.about}
                </Link>
                <Link
                  href='/contact'
                  className={`${pathname === '/contact' ? 'block px-4 py-3 text-lg font-syne text-violet' : 'block px-4 py-3 text-lg font-syne text-hover text-fog hover:text-lav transition-colors'}`}
                >
                  {content.nav.contact}
                </Link>
                {/* Language Switcher in mobile menu */}
                <div className='flex items-center mt-6'>
                  <LanguageSwitcher />
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}