'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { SERVICES, NAVIGATION } from '@/lib/constants.js';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500'
        )}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-transparent dark:from-gray-950/95 dark:via-gray-950/80 dark:to-transparent pointer-events-none transition-all duration-500" />
        
        {/* Animated Glow Line */}
        {mounted && (
          <div className={cn(
            "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0"
          )} />
        )}
        
        {/* Full Width Content Container */}
        <div className="w-full relative z-10">
          <div
            className={cn(
              'relative w-full px-6 md:px-10 lg:px-12 xl:px-16 transition-all duration-500',
              'backdrop-blur-2xl',
              scrolled 
                ? 'py-4 bg-white/90 dark:bg-gray-900/90 shadow-[0_8px_40px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.5)] border-b border-gray-200/60 dark:border-gray-800/60' 
                : 'py-5 bg-white/70 dark:bg-gray-900/70 shadow-[0_4px_20px_rgb(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.3)] border-b border-gray-200/30 dark:border-gray-800/30'
            )}
          >
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex items-center justify-between relative z-10">
              {/* Logo - Enhanced Animation - Always Show Name */}
              <Link href="/" className="flex items-center gap-3 md:gap-4 group">
                <div className="relative">
                  {/* Pulsing Glow */}
                  {mounted && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition-all duration-700 animate-pulse" />
                  )}
                  
                  {/* Rotating Ring */}
                  {mounted && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm animate-spin-slow transition-opacity duration-500" />
                  )}
                  
                  {/* Logo Container */}
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-white font-black text-lg sm:text-xl md:text-3xl tracking-tighter group-hover:scale-110 transition-transform duration-300">W</span>
                  </div>
                  
                  {/* Sparkle Effects */}
                  {mounted && (
                    <>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 animate-ping" />
                    </>
                  )}
                </div>
                
                {/* Show name on all screen sizes */}
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Webbito
                  </span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-gray-500 dark:text-gray-500 uppercase -mt-0.5 sm:-mt-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    Digital Excellence
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation - Centered with Animations */}
              <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                {NAVIGATION.map((item, index) => {
                  if (item.name === 'Services') {
                    return (
                      <div 
                        key={item.href} 
                        className="relative group/services"
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            'relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden',
                            pathname.startsWith('/services')
                              ? 'text-cyan-600 dark:text-cyan-400'
                              : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                          )}
                        >
                          {/* Active Background with Pulse */}
                          {pathname.startsWith('/services') && mounted && (
                            <>
                              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl animate-pulse" />
                              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-xl blur-sm" />
                            </>
                          )}
                          
                          {/* Hover Background with Slide */}
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover/services:opacity-100 transition-all duration-300 translate-y-2 group-hover/services:translate-y-0" />
                          
                          <span className="relative z-10 group-hover/services:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover/services:opacity-100 group-hover/services:translate-x-1 transition-all duration-300 relative z-10" />
                        </Link>

                        {/* Premium Mega Menu with Enhanced Animations */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300 pointer-events-none group-hover/services:pointer-events-auto group-hover/services:translate-y-0 translate-y-2">
                          {/* Connection Line with Animation */}
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-cyan-500/50 to-transparent scale-y-0 group-hover/services:scale-y-100 transition-transform duration-300" />
                          
                          {/* Menu Container */}
                          <div className="w-[720px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200/60 dark:border-gray-800/60 rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgb(0,0,0,0.5)] overflow-hidden">
                            {/* Header */}
                            <div className="relative px-8 py-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800/50 dark:via-gray-900/50 dark:to-gray-800/50 border-b border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
                              {/* Animated Pattern */}
                              {mounted && (
                                <div className="absolute inset-0 opacity-30">
                                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse" />
                                </div>
                              )}
                              
                              {/* Sliding Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover/services:translate-x-full transition-transform duration-1000" />
                              
                              <div className="relative flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className={cn(
                                    "w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center",
                                    mounted && "animate-pulse"
                                  )}>
                                    <Sparkles className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Premium Services</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Industry-leading digital solutions</p>
                                  </div>
                                </div>
                                <div className={cn(
                                  "px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg",
                                  mounted && "animate-pulse"
                                )}>
                                  {SERVICES.length} Services
                                </div>
                              </div>
                            </div>
                            
                            {/* Services Grid */}
                            <div className="grid grid-cols-2 gap-2 p-4 max-h-[480px] overflow-y-auto">
                              {SERVICES.map((service, index) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="group/item relative p-5 rounded-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-950/20 dark:hover:to-blue-950/20 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:shadow-lg hover:-translate-y-1"
                                >
                                  {/* Number Badge */}
                                  <div className="absolute top-4 right-4 w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-600">
                                      {String(index + 1).padStart(2, '0')}
                                    </span>
                                  </div>

                                  <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="relative flex-shrink-0">
                                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover/item:opacity-40 transition-all duration-500" />
                                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 shadow-md">
                                        <service.icon className="w-6 h-6 text-white" />
                                      </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0 pt-0.5">
                                      <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors line-clamp-1">
                                        {service.title}
                                      </h4>
                                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-2">
                                        {service.description.substring(0, 65)}...
                                      </p>
                                      <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                                          {service.pricing}
                                        </span>
                                        <ArrowRight className="w-3 h-3 text-cyan-500 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border-t border-gray-200/60 dark:border-gray-800/60">
                              <Link 
                                href="/services"
                                className="group/cta flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden relative"
                              >
                                {/* Sliding Shine Effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />
                                <span className="relative z-10">Explore All Services</span>
                                <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform relative z-10" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden',
                        pathname === item.href
                          ? 'text-cyan-600 dark:text-cyan-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                      )}
                    >
                      {pathname === item.href && mounted && (
                        <>
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl animate-pulse" />
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-xl blur-sm" />
                        </>
                      )}
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 hover:opacity-100 transition-all duration-300 translate-y-2 hover:translate-y-0" />
                      <span className="relative z-10 hover:translate-x-0.5 inline-block transition-transform duration-200">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Right Actions with Stagger Animation */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Theme Toggle - Always visible */}
                <div className={cn(mounted && "animate-fade-in")}>
                  <ThemeToggle />
                </div>
                
                <Link href="/contact" className={cn("hidden md:block", mounted && "animate-fade-in")}>
                  <Button 
                    size="sm" 
                    className="gap-2 font-bold shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 px-6 group relative overflow-hidden"
                  >
                    {/* Sliding Background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Button>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-110 hover:rotate-3"
                  aria-label="Toggle menu"
                >
                  <div className="relative w-5 h-5">
                    <span className={cn(
                      "absolute left-0 top-1 w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300",
                      isOpen ? "rotate-45 translate-y-1.5" : ""
                    )} />
                    <span className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300",
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    )} />
                    <span className={cn(
                      "absolute left-0 bottom-1 w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300",
                      isOpen ? "-rotate-45 -translate-y-1.5" : ""
                    )} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Enhanced Animations */}
      {mounted && (
        <div
          className={cn(
            'fixed inset-0 z-40 lg:hidden transition-all duration-500',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          {/* Animated Backdrop */}
          <div
            className={cn(
              "absolute inset-0 bg-black/60 backdrop-blur-lg transition-all duration-500",
              isOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={cn(
              'absolute top-20 sm:top-24 right-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200/60 dark:border-gray-800/60 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500',
              isOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-8 scale-95 opacity-0'
            )}
          >
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border-b border-gray-200/60 dark:border-gray-800/60 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-shimmer" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 dark:text-white">Menu</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Navigate our services</p>
                </div>
              </div>
            </div>

            {/* Links with Stagger Animation */}
            <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
              {NAVIGATION.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105',
                    pathname === item.href
                      ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-blue-500/5'
                  )}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 0.3s ease ${index * 100}ms`
                  }}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <Link href="/contact" className="block">
                  <Button className="w-full gap-2 font-bold py-6 text-base shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Get Started Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animations to global CSS */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
