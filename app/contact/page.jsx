'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  CheckCircle2,
  Sparkles,
  Globe,
  Zap,
  Shield,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import { ScrollReveal, TiltCard } from '@/components/animations';

// Popular country codes
const COUNTRY_CODES = [
  { code: '+1', country: 'US/CA', flag: '🇺🇸' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+27', country: 'S. Africa', flag: '🇿🇦' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+82', country: 'S. Korea', flag: '🇰🇷' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91', // Default to India
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [showCountryCodes, setShowCountryCodes] = useState(false);
  const [searchCountry, setSearchCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const fullPhone = formData.phone ? `${formData.countryCode} ${formData.phone}` : '';

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        service: formData.service,
        message: formData.message,
        from_name: 'Webbito Contact Form',
        subject: `New Contact Form Submission - ${formData.service}`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', countryCode: '+91', phone: '', service: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectCountryCode = (code) => {
    setFormData({ ...formData, countryCode: code });
    setShowCountryCodes(false);
    setSearchCountry('');
  };

  const filteredCountryCodes = COUNTRY_CODES.filter(
    (country) =>
      country.code.includes(searchCountry) ||
      country.country.toLowerCase().includes(searchCountry.toLowerCase())
  );

  const contactMethods = [
    { 
      icon: Mail, 
      title: 'Email Us', 
      content: COMPANY_INFO.email, 
      href: `mailto:${COMPANY_INFO.email}`,
      description: 'Send us an email anytime'
    },
    { 
      icon: Phone, 
      title: 'Call Us', 
      content: COMPANY_INFO.phone, 
      href: `tel:${COMPANY_INFO.phone}`,
      description: 'Mon-Fri from 8am to 6pm'
    },
  
  ];

  const benefits = [
    { icon: Zap, text: '24-hour response time' },
    { icon: Shield, text: 'Free consultation' },
    { icon: Globe, text: 'Remote collaboration' },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Floating orbs */}
        <div className="fixed top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8">
                <MessageCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Let's Connect</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                Get In <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Have a project in mind? Let's discuss how we can help bring your vision to life.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 transition-all hover:-translate-y-1 shadow-lg hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">{item.description}</p>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-medium"
                          >
                            {item.content}
                          </Link>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 font-medium">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}

             
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl blur-2xl" />
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Send us a message
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-gray-900 dark:text-white"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-gray-900 dark:text-white"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Phone Number with Country Code Selector */}
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                            Phone Number
                          </label>
                          <div className="flex gap-2">
                            {/* Country Code Dropdown */}
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => setShowCountryCodes(!showCountryCodes)}
                                className="h-full px-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-gray-900 dark:text-white flex items-center gap-1 min-w-[90px]"
                              >
                                <span className="text-lg">{COUNTRY_CODES.find(c => c.code === formData.countryCode)?.flag}</span>
                                <span className="text-sm font-medium">{formData.countryCode}</span>
                                <ChevronDown className="w-4 h-4" />
                              </button>

                              {/* Dropdown Menu */}
                              {showCountryCodes && (
                                <div className="absolute top-full left-0 mt-2 w-72 max-h-80 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50">
                                  {/* Search */}
                                  <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                                    <input
                                      type="text"
                                      placeholder="Search country..."
                                      value={searchCountry}
                                      onChange={(e) => setSearchCountry(e.target.value)}
                                      className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-cyan-500 focus:outline-none text-sm text-gray-900 dark:text-white"
                                    />
                                  </div>

                                  {/* Country List */}
                                  <div className="overflow-y-auto max-h-64">
                                    {filteredCountryCodes.map((country) => (
                                      <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => selectCountryCode(country.code)}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                                      >
                                        <span className="text-xl">{country.flag}</span>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white flex-1">
                                          {country.country}
                                        </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                          {country.code}
                                        </span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Phone Input */}
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="flex-1 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-gray-900 dark:text-white"
                              placeholder="123 456 7890"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                            Service Interested In *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-gray-900 dark:text-white"
                          >
                            <option value="">Select a service</option>
                            {SERVICES.map((service) => (
                              <option key={service.id} value={service.title}>
                                {service.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none text-gray-900 dark:text-white"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={status === 'sending'}
                        className="w-full group text-lg py-6"
                      >
                        {status === 'sending' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>

                      {status === 'success' && (
                        <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-900 rounded-xl animate-in fade-in slide-in-from-bottom-4">
                          <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                          <p className="text-green-700 dark:text-green-300 font-medium">
                            Message sent successfully! We'll get back to you within 24 hours.
                          </p>
                        </div>
                      )}

                      {status === 'error' && (
                        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900 rounded-xl animate-in fade-in slide-in-from-bottom-4">
                          <span className="text-red-600 dark:text-red-400 text-xl">✕</span>
                          <p className="text-red-700 dark:text-red-300 font-medium">
                            Something went wrong. Please try again or email us directly.
                          </p>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <section className="container mx-auto px-4 mt-20">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">Ready to start your project?</h3>
                <p className="text-xl text-cyan-50 mb-6">
                  Join 500+ satisfied clients who trust us with their digital presence
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>No Obligation Quote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
