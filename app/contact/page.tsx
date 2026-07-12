'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';
import { siteConfig } from '@/src/config/siteConfig';

export default function Contact() {
  const { content } = useLanguage();
  const contact = content.contact || {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send the data to an API here
    console.log({ name, email, whatsapp, service, message });
  };

  return (
    <>
      {/* Page Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <div className="text-center py-20">
          <h1 className="font-syne text-[64px] text-lavender mb-4">
            {contact.header?.title || "Let's Talk."}
          </h1>
          <p className="font-tajawal text-[32px] text-violet rtl text-right">
            {contact.header?.titleAr || "لنتحدث."}
          </p>
          <p className="font-syne text-[22px] text-fog max-w-2xl mx-auto leading-relaxed">
            {contact.header?.description || "Tell us about your brand. We'll tell you what we can build."}
          </p>
        </div>
      </motion.div>

      {/* Two-column layout */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0, y: 20 }}
      >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
              {/* Left Column: Contact Info */}
              <div className="w-full md:w-1/2 space-y-6">
                {/* Contact Method Cards */}
                <div className="space-y-4">
                  {/* WhatsApp Card */}
                  <div className="bg-surface rounded-[14px] p-6">
                    <div className="space-y-2">
                      <p className="text-fog text-xs uppercase tracking-widest">
                        {contact.contactInfo?.whatsapp?.title || "WhatsApp"}
                      </p>
                      <p className="text-lavender font-bold text-lg">
                        {siteConfig.contact.whatsapp.number}
                      </p>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp.number.replace(/\s+/g, '').replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-violet text-white rounded-full text-sm px-6 py-2"
                      >
                        {contact.contactInfo?.whatsapp?.action || "Message Us"}
                      </a>
                      <p className="text-fog text-xs">
                        {contact.contactInfo?.whatsapp?.note || "Fastest response — usually within 2 hours"}
                      </p>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-surface rounded-[14px] p-6">
                    <div className="space-y-2">
                      <p className="text-fog text-xs uppercase tracking-widest">
                        {contact.contactInfo?.email?.title || "Email"}
                      </p>
                      <p className="text-lavender font-bold text-lg">
                        {siteConfig.contact.email.address}
                      </p>
                      <p className="text-fog text-xs">
                        {contact.contactInfo?.email?.note || "For detailed briefs and project specs"}
                      </p>
                    </div>
                  </div>

                  {/* Instagram Card */}
                  <div className="bg-surface rounded-[14px] p-6">
                    <div className="space-y-2">
                      <p className="text-fog text-xs uppercase tracking-widest">
                        {contact.contactInfo?.instagram?.title || "Instagram"}
                      </p>
                      <p className="text-lavender font-bold text-lg">
                        {siteConfig.contact.instagram.handle}
                      </p>
                      <p className="text-fog text-xs">
                        {contact.contactInfo?.instagram?.note || "Follow our work"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Booking Note */}
                <div className="bg-violet/10 border border-violet/20 rounded-xl p-5">
                  <p className="text-lavender text-sm leading-relaxed">
                    {siteConfig.booking.description}
                  </p>
                  <a
                    href={siteConfig.booking.link}
                    className="border border-violet text-violet rounded-full px-6 py-2 text-sm"
                  >
                    {siteConfig.booking.label}
                  </a>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="w-full md:w-1/2">
                <div className="bg-surface rounded-[14px] p-8">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Your Name */}
                      <div>
                        <label className="block text-fog text-sm mb-2">
                          {contact.form?.name || "Your Name"}
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-void border border-lavender/10 rounded-xl px-4 py-3 text-lavender w-full focus:border-violet focus:outline-none transition-colors placeholder:text-fog"
                          placeholder={contact.form?.placeholders?.name || "Your Name"}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-fog text-sm mb-2">
                          {contact.form?.email || "Email"}
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-void border border-lavender/10 rounded-xl px-4 py-3 text-lavender w-full focus:border-violet focus:outline-none transition-colors placeholder:text-fog"
                          placeholder={contact.form?.placeholders?.email || "your@email.com"}
                          required
                        />
                      </div>

                      {/* WhatsApp Number */}
                      <div>
                        <label className="block text-fog text-sm mb-2">
                          {contact.form?.whatsappNumber || "WhatsApp Number"}
                        </label>
                        <input
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsApp(e.target.value)}
                          className="bg-void border border-lavender/10 rounded-xl px-4 py-3 text-lavender w-full focus:border-violet focus:outline-none transition-colors placeholder:text-fog"
                          placeholder={siteConfig.contact.whatsapp.number}
                          required
                        />
                      </div>

                      {/* Service Interested In */}
                      <div>
                        <label className="block text-fog text-sm mb-2">
                          {contact.form?.serviceInterestedIn || "Service Interested In"}
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="bg-void border border-lavender/10 rounded-xl px-4 py-3 text-lavender w-full focus:border-violet focus:outline-none transition-colors placeholder:text-fog"
                          required
                        >
                          {contact.form?.serviceOptions?.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-fog text-sm mb-2">
                          {contact.form?.message || "Tell us about your brand"}
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          className="bg-void border border-lavender/10 rounded-xl px-4 py-3 text-lavender w-full focus:border-violet focus:outline-none transition-colors placeholder:text-fog"
                          placeholder={contact.form?.placeholders?.message || "Describe your brand, goals, and what you're looking for..."}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="bg-violet text-white rounded-xl py-4 w-full font-bold text-base hover:bg-violet/90 transition-colors"
                      >
                        {contact.form?.submitButton || "Send Message"}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center space-y-4">
                      {/* Checkmark Icon */}
                      <div className="text-violet text-[48px] mb-4">
                        {contact.form?.success?.checkmark || "✓"}
                      </div>
                      <h1 className="font-syne text-[36px] text-lavender mb-2">
                        {contact.form?.success?.title || "We got it."}
                      </h1>
                      <p className="font-tajawal text-[24px] text-violet rtl text-right">
                        {contact.form?.success?.titleAr || "استلمنا رسالتك."}
                      </p>
                      <p className="text-fog text-[18px] leading-relaxed max-w-md mx-auto">
                        {contact.form?.success?.description || "We'll be in touch on WhatsApp within 24 hours."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}