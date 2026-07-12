import type { Metadata } from "next";
import { Syne, Tajawal } from "next/font/google";
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

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
      className={`${syne.variable} ${tajawal.variable} bg-void text-lavender antialiased`}
    >
      <body className="min-h-flex flex flex-col">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}