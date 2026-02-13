'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SERVICES } from '@/lib/constants';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Award, 
  Clock, 
  Shield,
  Zap,
  Target,
  Star,
  Sparkles,
  MessageCircle,
  Code2,
  Palette,
  Hexagon
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations';
import { useState, useEffect } from 'react';

// Key benefits
const BENEFITS = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned professionals with 10+ years of combined experience.'
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Rigorous testing ensures flawless delivery every time.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We deliver projects on schedule without compromising quality.'
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: 'Post-launch support to keep your products running smoothly.'
  },
];

// Process steps
const PROCESS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Analyze requirements and define scope',
    icon: Target
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create wireframes and prototypes',
    icon: Palette
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build with modern technologies',
    icon: Code2
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy and monitor performance',
    icon: Zap
  },
];

// Stats
const STATS = [
  { value: '500+', label: 'Projects', icon: CheckCircle2 },
  { value: '98%', label: 'Satisfaction', icon: Star },
  { value: '50+', label: 'Experts', icon: Users },
  { value: '24/7', label: 'Support', icon: MessageCircle },
];

// Testimonials
const TESTIMONIALS = [
  {
    quote: "The web development service exceeded our expectations. Our platform handles 10x more traffic effortlessly.",
    author: "James Wilson",
    role: "CTO, GrowthTech"
  },
  {
    quote: "Beautiful, intuitive app that our users love. Downloads increased 300% in the first month.",
    author: "Maria Garcia",
    role: "Product Manager, FitLife"
  },
  {
    quote: "The UI/UX redesign transformed our product. Engagement is up 85% and support tickets down 40%.",
    author: "David Chen",
    role: "CEO, CloudSync"
  },
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return simple grid layout during SSR to prevent hydration mismatch
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24 overflow-hidden">
          <div className="fixed inset-0 -z-10 bg-gradient-to-b from-cyan-50/30 via-transparent to-blue-50/30 dark:from-cyan-950/10 dark:via-transparent dark:to-blue-950/10 pointer-events-none" />
          
          <section className="container mx-auto px-4 mb-32">
            <div className="text-center max-w-4xl mx-auto relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
              
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-8">
                <Sparkles className="w-4 h-4" />
                Our Services
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-[1.1] relative z-10">
                Digital Solutions That Drive{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Real Results
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                From concept to launch, we deliver excellence in every project
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-cyan-50/30 via-transparent to-blue-50/30 dark:from-cyan-950/10 dark:via-transparent dark:to-blue-950/10 pointer-events-none" />

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-32">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
              
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-8">
                <Sparkles className="w-4 h-4" />
                Our Services
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-[1.1] relative z-10">
                Digital Solutions That Drive{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Real Results
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                From concept to launch, we deliver excellence in every project
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Stats Ring - RESPONSIVE */}
        <section className="container mx-auto px-4 mb-40">
          {/* Mobile/Tablet Grid (< lg) */}
          <div className="lg:hidden grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {STATS.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center mb-3">
                      <stat.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Desktop Circular Layout (>= lg) */}
          <div className="hidden lg:block relative max-w-4xl mx-auto h-[500px]">
            <div className="relative h-full flex items-center justify-center">
              {/* Center hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">WEBBITO</div>
                    <div className="text-xs text-cyan-100">Core</div>
                  </div>
                </div>
              </div>

              {/* Orbital rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-2 border-dashed border-cyan-500/20 animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-blue-500/10" style={{ animationDuration: '20s' }} />

              {/* Stats in orbit */}
              {STATS.map((stat, index) => {
                const angle = (index * 360) / STATS.length;
                const radius = 180;
                const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div
                      className="absolute top-1/2 left-1/2 z-10"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      {/* Connection thread */}
                      <svg className="absolute top-1/2 left-1/2 -z-10" width="200" height="200" style={{ transform: 'translate(-50%, -50%)' }}>
                        <line
                          x1="100"
                          y1="100"
                          x2={100 - x}
                          y2={100 - y}
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-cyan-500/20"
                          strokeDasharray="4 4"
                        />
                      </svg>

                      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:scale-110 transition-all duration-300 min-w-[140px]">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center mb-3">
                            <stat.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Tree Layout */}
        <section className="container mx-auto px-4 mb-40">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Service Ecosystem
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions that grow with your business
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-7xl mx-auto">
            {/* Tree trunk */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent hidden lg:block" />

            {/* Root node */}
            <div className="flex justify-center mb-16">
              <ScrollReveal>
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">
                    Services Hub
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Services as tree branches */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 relative">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;

                return (
                  <ScrollReveal key={service.id} delay={index * 0.1}>
                    <div className="relative">
                      {/* Branch connection */}
                      <svg className="absolute -top-20 left-1/2 -translate-x-1/2 w-px h-20 hidden lg:block pointer-events-none">
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="80"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-cyan-500/30"
                        />
                        <circle
                          cx="0"
                          cy="0"
                          r="4"
                          fill="currentColor"
                          className="text-cyan-500"
                        />
                      </svg>

                      <Link 
                        href={`/services/${service.slug}`}
                        onMouseEnter={() => setHoveredService(index)}
                        onMouseLeave={() => setHoveredService(null)}
                      >
                        <div className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 transition-all duration-300 h-full
                          ${hoveredService === index 
                            ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20 -translate-y-2' 
                            : 'border-gray-200 dark:border-gray-800 hover:border-cyan-500/50'
                          }`}
                        >
                          {/* Hexagon badge */}
                          <div className="absolute -top-6 -right-6 w-12 h-12">
                            <div className="relative w-full h-full">
                              <Hexagon className="w-12 h-12 text-cyan-500 fill-cyan-500/20 absolute" />
                              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-cyan-700 dark:text-cyan-300">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>
                          </div>

                          {/* Icon */}
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                            <Icon className="w-8 h-8 text-white" />
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
                            {service.shortDescription}
                          </p>

                          {/* Features */}
                          <ul className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2 mt-1.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                            <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                              {service.pricing}
                            </span>
                            <div className="flex items-center text-cyan-500 group-hover:gap-2 transition-all text-sm font-semibold">
                              <span>Explore</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process - Threaded Timeline */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Our Process Thread
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  A seamless journey from idea to reality
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Curved thread path - Desktop */}
              <svg className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none" preserveAspectRatio="none">
                <path
                  d="M 100 100 Q 400 50, 500 150 T 900 200 Q 1100 250, 1200 150"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-cyan-500/30"
                  strokeDasharray="8 8"
                />
              </svg>

              {/* Vertical thread - Mobile */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 lg:hidden" />

              <div className="grid lg:grid-cols-4 gap-8">
                {PROCESS.map((step, index) => (
                  <ScrollReveal key={index} delay={index * 0.15}>
                    <div className="relative">
                      {/* Thread node */}
                      <div className="absolute -left-11 top-8 lg:static lg:mx-auto lg:mb-6 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white dark:border-gray-950 shadow-lg z-10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>

                      <div className="ml-8 lg:ml-0 bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
                        {/* Step number */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-xl">
                          {step.number}
                        </div>

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                          <step.icon className="w-7 h-7 text-white" />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow connector */}
                      {index < PROCESS.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 z-20">
                          <ArrowRight className="w-8 h-8 text-cyan-500" />
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - RESPONSIVE */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Why Choose Us
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Excellence in every dimension
                </p>
              </div>
            </ScrollReveal>

            {/* Mobile/Tablet Grid (< lg) */}
            <div className="lg:hidden grid sm:grid-cols-2 gap-6">
              {BENEFITS.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center mb-4">
                        <benefit.icon className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Desktop Circular Layout (>= lg) */}
            <div className="hidden lg:block relative h-[600px]">
              <div className="relative h-full flex items-center justify-center">
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold">100%</div>
                      <div className="text-sm">Committed</div>
                    </div>
                  </div>
                </div>

                {/* Connecting web */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {BENEFITS.map((_, index) => {
                    const angle = (index * 360) / BENEFITS.length - 90;
                    const radius = 200;
                    const centerX = 50;
                    const centerY = 50;
                    const x = centerX + (radius / 5) * Math.cos((angle * Math.PI) / 180);
                    const y = centerY + (radius / 5) * Math.sin((angle * Math.PI) / 180);

                    return (
                      <line
                        key={index}
                        x1={`${centerX}%`}
                        y1={`${centerY}%`}
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-cyan-500/20"
                        strokeDasharray="6 6"
                      />
                    );
                  })}
                </svg>

                {/* Benefits positioned in circle */}
                {BENEFITS.map((benefit, index) => {
                  const angle = (index * 360) / BENEFITS.length - 90;
                  const radius = 220;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <div
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:scale-110 transition-all duration-300 w-56">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center mb-4">
                              <benefit.icon className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                              {benefit.title}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Chain */}
        <section className="container mx-auto px-4 mb-40">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Hear from our satisfied clients
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-6xl mx-auto">
            {/* Chain links */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative">
                    {/* Chain link */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white dark:border-gray-950 hidden md:block z-10" />

                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-8 border-2 border-cyan-200 dark:border-cyan-900 hover:shadow-xl hover:-translate-y-2 transition-all">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>

                      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <ScrollReveal>
            <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white shadow-2xl overflow-hidden">
              {/* Animated background circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-5xl font-bold mb-6">
                  Ready to Start?
                </h2>
                <p className="text-2xl mb-10 text-cyan-50 max-w-2xl mx-auto">
                  Let's turn your vision into reality
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-xl bg-white text-cyan-600 font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all"
                  >
                    View Work
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>

      <Footer />
    </>
  );
}
