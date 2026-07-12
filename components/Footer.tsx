'use client';

import Link from 'next/link';
import { siteConfig } from '@/src/config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-surface pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start md:items-center text-center md:text-left space-y-6">
            {/* The K Mark + Wordmark */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse justify-center md:justify-start">
              <div className="w-10 h-10 flex-shrink-0 relative">
                {/* Outer circle */}
                <circle
                  cx="5"
                  cy="5"
                  r="4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="stroke-violet"
                />
                {/* Inner diagonal line (top-left to bottom-right) */}
                <line
                  x1="1"
                  y1="1"
                  x2="9"
                  y2="9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="stroke-violet"
                />
                {/* Inner diagonal line (bottom-left to top-right) */}
                <line
                  x1="1"
                  y1="9"
                  x2="9"
                  y2="1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="stroke-violet"
                />
              </div>
              <span className="font-syne text-xl font-bold text-lav rtl:text-right">KHAYAL</span>
            </div>

            {/* Arabic Tagline */}
            <p className="font-tajawal text-[18px] text-violet rtl text-center md:text-left">
              نحن خيال.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="fog text-xs uppercase tracking-widest mb-2">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="text-fog hover:text-lav transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-fog hover:text-lav transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="text-fog hover:text-lav transition-colors"
              >
                Work
              </Link>
              <Link
                href="/pricing"
                className="text-fog hover:text-lav transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-fog hover:text-lav transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-fog hover:text-lav transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="fog text-xs uppercase tracking-widest mb-2">
              Contact
            </h3>
            <div className="space-y-3">
              {/* WhatsApp */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  📱
                </div>
                <div>
                  <p className="text-fog text-xs">WhatsApp</p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.number.replace(/\s+/g, '').replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lav font-semibold hover:text-violet transition-colors"
                  >
                    {siteConfig.contact.whatsapp.number}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-fog text-xs">Email</p>
                  <a
                    href={siteConfig.contact.email.link}
                    className="text-lav font-semibold hover:text-violet transition-colors"
                  >
                    {siteConfig.contact.email.address}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  📸
                </div>
                <div>
                  <p className="text-fog text-xs">Instagram</p>
                  <a
                    href={siteConfig.contact.instagram.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lav font-semibold hover:text-violet transition-colors"
                  >
                    {siteConfig.contact.instagram.handle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-lavender/10"></div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center text-center md:flex-row md:justify-between">
          <p className="text-fog text-xs">
            © {new Date().getFullYear()} Khayal Studio. All rights reserved.
          </p>
          <div className="flex flex-col items-center md:flex-row mt-4 md:mt-0 md:space-x-4">
            <a
              href="/"
              className="text-fog hover:text-lav transition-colors"
            >
              English
            </a>
            <a
              href="/"
              className="text-fog hover:text-lav transition-colors rtl"
            >
              العربية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}