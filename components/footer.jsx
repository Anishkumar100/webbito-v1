'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Send 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES, NAVIGATION, COMPANY_INFO } from '@/lib/constants';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    setStatus('Thanks for subscribing!');
    setEmail('');
    setTimeout(() => setStatus(''), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-xl font-heading font-bold glow-text">
                Webbito
              </span>
            </div>
            
            <p className="text-sm text-foreground/70 leading-relaxed">
              {COMPANY_INFO.tagline}. We transform ideas into powerful digital experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <Link 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-3 text-sm text-foreground/70 hover:text-cyan-500 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{COMPANY_INFO.email}</span>
              </Link>
              
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-3 text-sm text-foreground/70 hover:text-cyan-500 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{COMPANY_INFO.phone}</span>
              </Link>
              
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-foreground/70 hover:text-cyan-500 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Pages</h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/70 hover:text-cyan-500 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Subscribe to get the latest news and updates from Webbito.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg glass border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm bg-transparent placeholder:text-foreground/40"
                />
              </div>
              
              <Button type="submit" className="w-full group">
                Subscribe
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {status && (
                <p className="text-xs text-cyan-500 animate-fade-in">
                  {status}
                </p>
              )}
            </form>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              <Link
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-cyan-500/10 hover:text-cyan-500 transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
              
              <Link
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-cyan-500/10 hover:text-cyan-500 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
              
              <Link
                href={COMPANY_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-cyan-500/10 hover:text-cyan-500 transition-all group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
              
              <Link
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-cyan-500/10 hover:text-cyan-500 transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-foreground/60">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-foreground/60 hover:text-cyan-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-foreground/60 hover:text-cyan-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
