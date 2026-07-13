'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';

export default function Nav() {
  const { language, setLanguage, content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  // Detect scroll for sticky nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: content.nav.home },
    { href: '/services', label: content.nav.services },
    { href: '/work', label: content.nav.work },
    { href: '/pricing', label: content.nav.pricing },
    { href: '/about', label: content.nav.about },
    { href: '/contact', label: content.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/80 backdrop-blur-xl border-b border-violet/10 shadow-lg shadow-void/50'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-10'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo */}
          <Link href='/' className='flex-shrink-0 group'>
            <div className='flex items-center space-x-3 rtl:space-x-reverse'>
              <div className='w-10 h-10 flex-shrink-0 relative rounded-full overflow-hidden ring-2 ring-violet/20 group-hover:ring-violet/50 transition-all duration-300'>
                <Image
                  src="/logo.jpeg"
                  alt="Khayal Studio"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className='font-syne text-xl font-bold text-lavender group-hover:text-violet transition-colors duration-300 tracking-wide'>
                KHAYAL
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className='hidden md:flex md:items-center md:space-x-8 rtl:md:space-x-reverse'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-syne text-sm tracking-wide ${
                  isActive(link.href)
                    ? 'text-violet font-semibold active'
                    : 'text-fog hover:text-lavender'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Theme & Language Switchers */}
            <div className='flex items-center gap-4 ml-4 rtl:mr-4 rtl:ml-0'>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? content.nav.closeMenu : content.nav.openMenu}
            className='md:hidden p-2 rounded-xl hover:bg-violet/10 transition-colors duration-300 relative z-50'
          >
            <div className='w-6 h-5 flex flex-col justify-between'>
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className='block h-0.5 w-6 bg-lavender rounded-full origin-center transition-colors'
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className='block h-0.5 w-6 bg-lavender rounded-full'
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className='block h-0.5 w-6 bg-lavender rounded-full origin-center transition-colors'
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='md:hidden overflow-hidden'
            >
              <div className='glass-card mt-2 mb-4'>
                <nav className='px-6 pt-6 pb-4 space-y-1'>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl text-lg font-syne transition-all duration-300 ${
                          isActive(link.href)
                            ? 'text-violet bg-violet/10 font-semibold'
                            : 'text-fog hover:text-lavender hover:bg-violet/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  {/* Switchers in mobile menu */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className='px-4 pt-4 flex items-center gap-4'
                  >
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}