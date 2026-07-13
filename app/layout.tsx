import type { Metadata } from "next";
import { Syne, Tajawal } from "next/font/google";
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/src/context/LanguageContext';

const syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

const tajawal = Tajawal({
  weight: ["700", "800"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
});

import { ThemeProvider } from '@/src/context/ThemeContext';

export const metadata: Metadata = {
  title: "Khayal Studio – AI Brand Characters & Websites",
  description: "Khayal Studio builds AI-powered brand characters and bilingual websites that speak, sell, and connect with customers 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${tajawal.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Nav />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}