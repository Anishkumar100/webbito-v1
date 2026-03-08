'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Target, Eye, Heart, Users, Award, Zap, Rocket, Shield, Clock, Star,
  Sparkles, CheckCircle2, Trophy, MessageCircle, TrendingUp, Code2,
  Smartphone, Database, Cloud, Lock, HeartHandshake, BarChart3, ArrowRight,
  Circle, Layers
} from 'lucide-react';
import { ScrollReveal, TiltCard } from '@/components/animations';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// ✅ CHANGE 1: 2014 → 2024, timeline condensed to 2 years
const MILESTONES = [
  { year: '2024', title: 'Founded', description: '3 developers, 1 shared desk, unlimited ambition', icon: Rocket },
  { year: '2024', title: 'First Clients', description: 'Onboarded first 10 clients, delivered 30+ projects', icon: TrendingUp },
  { year: '2024', title: 'Team Growth', description: 'Expanded to a 10-person team, hit 100+ projects', icon: Users },
  { year: '2024', title: 'Recognition', description: 'Earned top client ratings and referrals across sectors', icon: Trophy },
  { year: '2025', title: 'Scale Up', description: '200+ projects delivered, growing client base globally', icon: Award },
  { year: '2026', title: 'Present Day', description: '270+ completed projects, trusted by clients worldwide', icon: Star },
];

const VALUES = [
  { icon: Target, title: 'Quality First', description: 'We prioritize sustainable, maintainable solutions over quick fixes.', gradient: 'from-cyan-500 to-blue-600' },
  { icon: Users, title: 'Client Partnership', description: 'Your goals become our goals. We succeed when you succeed.', gradient: 'from-blue-500 to-purple-600' },
  { icon: Zap, title: 'Technical Excellence', description: 'Staying current with technology while applying proven best practices.', gradient: 'from-purple-500 to-pink-600' },
  { icon: Heart, title: 'Honest Communication', description: 'Clear timelines, transparent pricing, no hidden surprises.', gradient: 'from-pink-500 to-red-600' },
];

const WHY_US = [
  { icon: Shield, title: 'Proven Track Record', description: 'Consistent project delivery across diverse industries since day one.' },
  { icon: HeartHandshake, title: 'Dedicated Support', description: 'Direct access to senior developers throughout the entire lifecycle.' },
  { icon: BarChart3, title: 'Measurable Results', description: 'We focus on metrics that matter - engagement, conversion, growth.' },
  { icon: Lock, title: 'Security First', description: 'Built-in security best practices and compliance from day one.' },
];

// ✅ CHANGE 2: weeks → days
const PROCESS_STEPS = [
  { number: '01', title: 'Discovery', description: 'Understanding your business goals, user needs, and technical requirements.', duration: '2-4 days' },
  { number: '02', title: 'Planning', description: 'Detailed project roadmap, architecture design, and resource allocation.', duration: '2-3 days' },
  { number: '03', title: 'Development', description: 'Agile development with regular updates, demos, and feedback cycles.', duration: 'Variable' },
  { number: '04', title: 'Quality Assurance', description: 'Comprehensive testing across devices, browsers, and use cases.', duration: '3-5 days' },
  { number: '05', title: 'Deployment', description: 'Smooth launch with monitoring, optimization, and performance tuning.', duration: '1-2 days' },
  { number: '06', title: 'Support', description: 'Ongoing maintenance, updates, and technical support as needed.', duration: 'Ongoing' },
];

// ✅ CHANGE 3: Added cPanel and VPS to Cloud
const TECH_STACK = [
  { category: 'Frontend', tools: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'], icon: Code2 },
  { category: 'Backend', tools: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'], icon: Database },
  { category: 'Mobile', tools: ['React Native', 'Flutter', 'iOS', 'Android'], icon: Smartphone },
  { category: 'Cloud', tools: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Docker', 'cPanel', 'VPS'], icon: Cloud },
];

// ✅ CHANGE 4: Industries total projects ≤ 270
const INDUSTRIES = [
  { name: 'E-commerce', icon: '🛒', projects: '70+' },
  { name: 'Healthcare', icon: '🏥', projects: '40+' },
  { name: 'Fintech', icon: '💰', projects: '35+' },
  { name: 'Education', icon: '📚', projects: '50+' },
  { name: 'SaaS', icon: '☁️', projects: '45+' },
  { name: 'Real Estate', icon: '🏢', projects: '30+' },
];

// ✅ LEADERSHIP removed entirely

const TESTIMONIALS = [
  { quote: "Working with TheWebytes has been a game-changer. Their technical expertise and clear communication made a complex project feel manageable.", author: "Sarah Chen", role: "CEO, TechFlow Solutions", rating: 5 },
  { quote: "What impressed me most was their ability to understand our business needs and translate them into technical solutions.", author: "Michael Rodriguez", role: "CTO, DataVerse Inc", rating: 5 },
  { quote: "The team delivered our mobile app ahead of schedule without compromising on quality. Exceptional post-launch support.", author: "Aisha Patel", role: "Founder, EduSpace", rating: 5 },
];

// Counter Component
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          const stepDuration = duration / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 overflow-hidden">
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-cyan-50/30 via-transparent to-blue-50/30 dark:from-cyan-950/10 dark:via-transparent dark:to-blue-950/10 pointer-events-none" />

        {/* Hero */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />

                <div className="mb-8 relative z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                    About Us
                  </span>
                </div>

                {/* ✅ CHANGE: 2014 → 2024 */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight relative z-10">
                  Building digital products{' '}
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    since 2024
                  </span>
                </h1>

                <div className="space-y-6 relative z-10">
                  <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    TheWebytes is a software development agency based in Chennai, India. We specialize in web applications, mobile apps, and digital transformation projects for businesses worldwide.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    What started as three developers working from a shared office has grown into a results-driven team serving clients across multiple sectors.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Metrics - RESPONSIVE CIRCULAR */}
        <section className="container mx-auto px-4 mb-40">
          {/* Desktop: Circular Layout */}
          <div className="hidden lg:block relative max-w-5xl mx-auto h-[500px]">
            <div className="flex items-center justify-center h-full">
              {/* ✅ CHANGE: 12+ → 2+ Years */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">2+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>

              {/* Connecting ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-2 border-dashed border-cyan-500/20" />

              {/* ✅ CHANGE: 500+ → 270+ Projects */}
              {[
                { value: 270, label: 'Projects', icon: CheckCircle2, suffix: '+' },
                { value: 200, label: 'Clients', icon: Users, suffix: '+' },
                { value: 50, label: 'Team', icon: Award, suffix: '+' },
                { value: 98, label: 'Retention', icon: Star, suffix: '%' },
              ].map((stat, index) => {
                const angle = (index * 360) / 4;
                const radius = 200;
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
                      <svg className="absolute top-1/2 left-1/2 -z-10" width="220" height="220" style={{ transform: 'translate(-50%, -50%)' }}>
                        <line x1="110" y1="110" x2={110 - x} y2={110 - y} stroke="currentColor" strokeWidth="1" className="text-cyan-500/20" strokeDasharray="4 4" />
                      </svg>

                      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:scale-110 transition-all duration-300 min-w-[160px]">
                        <stat.icon className="w-10 h-10 text-cyan-500 mb-3 mx-auto" />
                        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 text-center">
                          <Counter target={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Mobile: Grid Layout */}
          <div className="lg:hidden grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { value: 270, label: 'Projects', icon: CheckCircle2, suffix: '+' },
              { value: 200, label: 'Clients', icon: Users, suffix: '+' },
              { value: 50, label: 'Team', icon: Award, suffix: '+' },
              { value: 98, label: 'Retention', icon: Star, suffix: '%' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl transition-all">
                  <stat.icon className="w-10 h-10 text-cyan-500 mb-3 mx-auto" />
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 text-center">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Why Work With Us
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  We combine technical expertise with business understanding
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
                <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-cyan-500/10" strokeDasharray="4 4" />
                <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="currentColor" strokeWidth="1" className="text-cyan-500/10" strokeDasharray="4 4" />
              </svg>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {WHY_US.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white dark:border-gray-950 hidden lg:block z-10" />
                      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline - RESPONSIVE CIRCULAR */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Our Journey
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Key milestones in our company's growth
                </p>
              </div>
            </ScrollReveal>

            {/* Desktop: Circular Clock Layout */}
            <div className="hidden lg:block relative h-[900px]">
              <div className="flex items-center justify-center h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Rocket className="w-12 h-12 text-white mx-auto mb-1" />
                      <div className="text-xs text-white font-bold">Timeline</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-2 border-dashed border-cyan-500/20" />

                {MILESTONES.map((milestone, index) => {
                  const angle = (index * 360) / MILESTONES.length - 90;
                  const radius = 330;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <div
                        className="absolute top-1/2 left-1/2 z-10"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <svg className="absolute top-1/2 left-1/2 -z-10" width="350" height="350" style={{ transform: 'translate(-50%, -50%)' }}>
                          <line x1="175" y1="175" x2={175 - x} y2={175 - y} stroke="currentColor" strokeWidth="2" className="text-cyan-500/30" />
                          <circle cx="175" cy="175" r="4" fill="currentColor" className="text-cyan-500" />
                        </svg>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:scale-110 transition-all duration-300 w-56">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                              <milestone.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-base font-bold mb-2 text-gray-900 dark:text-white">
                            {milestone.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Vertical Timeline */}
            <div className="lg:hidden space-y-8">
              {MILESTONES.map((milestone, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                        <milestone.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  How We Work
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  A structured, transparent approach
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 lg:hidden" />
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hidden lg:block" />

              <div className="grid lg:grid-cols-3 gap-8">
                {PROCESS_STEPS.map((step, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="relative">
                      <div className="absolute -left-11 top-8 lg:static lg:mx-auto lg:mb-6 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white dark:border-gray-950 shadow-lg z-10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>

                      <div className="ml-8 lg:ml-0 bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                          {step.number}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        {/* ✅ CHANGE: weeks → days */}
                        <div className="inline-flex items-center gap-2 text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Industries We Serve
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Experience across diverse sectors
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {INDUSTRIES.map((industry, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl hover:scale-110 transition-all duration-300 text-center aspect-square flex flex-col items-center justify-center group">
                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                      {industry.icon}
                    </div>
                    <h3 className="text-sm font-bold mb-1 text-gray-900 dark:text-white">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                      {industry.projects}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack - TREE LAYOUT */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Technology Stack
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Modern tools we use to build scalable solutions
                </p>
              </div>
            </ScrollReveal>

            {/* Desktop: Tree Layout */}
            <div className="hidden lg:block relative">
              <div className="flex justify-center mb-12">
                <ScrollReveal>
                  <div className="relative">
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-2xl flex items-center justify-center relative z-10">
                      <div className="text-center">
                        <Layers className="w-12 h-12 text-white mx-auto mb-2" />
                        <div className="text-sm text-white font-bold">Tech Stack</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" style={{ top: '20px' }} />

                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: '500px' }}>
                  <path d="M 50% 0 L 12.5% 20 L 12.5% 80" stroke="currentColor" strokeWidth="2" className="text-cyan-500/30" fill="none" strokeDasharray="4 4" />
                  <path d="M 50% 0 L 37.5% 20 L 37.5% 80" stroke="currentColor" strokeWidth="2" className="text-cyan-500/30" fill="none" strokeDasharray="4 4" />
                  <path d="M 50% 0 L 62.5% 20 L 62.5% 80" stroke="currentColor" strokeWidth="2" className="text-cyan-500/30" fill="none" strokeDasharray="4 4" />
                  <path d="M 50% 0 L 87.5% 20 L 87.5% 80" stroke="currentColor" strokeWidth="2" className="text-cyan-500/30" fill="none" strokeDasharray="4 4" />
                </svg>

                <div className="grid grid-cols-4 gap-6 relative pt-20">
                  {TECH_STACK.map((stack, index) => (
                    <ScrollReveal key={index} delay={index * 0.15}>
                      <div className="relative">
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white dark:border-gray-950 z-10 shadow-lg" />
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                          <div className="flex flex-col items-center mb-6">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                              <stack.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                              {stack.category}
                            </h3>
                          </div>
                          <div className="space-y-3">
                            {stack.tools.map((tool, i) => (
                              <div key={i} className="flex items-center gap-2 group/tool">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover/tool:scale-150 transition-transform" />
                                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/tool:text-cyan-600 dark:group-hover/tool:text-cyan-400 transition-colors">
                                  {tool}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: Simple Grid */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TECH_STACK.map((stack, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <stack.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {stack.category}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {stack.tools.map((tool, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 mb-40">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-3xl p-10 border-2 border-cyan-200 dark:border-cyan-900 overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    To deliver high-quality software solutions that solve real business problems and provide measurable ROI through innovation, expertise, and dedication.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-10 border-2 border-purple-200 dark:border-purple-900 overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    To be recognized globally as a trusted technology partner that consistently delivers excellence in software development and digital transformation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Principles guiding every decision
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((value, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Leadership section REMOVED entirely */}

        {/* Testimonials */}
        <section className="container mx-auto px-4 mb-40">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Real feedback from businesses we've helped
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden md:block" />

              <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white dark:border-gray-950 hidden md:block z-10" />
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-8 border-2 border-cyan-200 dark:border-cyan-900 hover:shadow-xl hover:-translate-y-2 transition-all">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-3">
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
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <ScrollReveal>
            <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Let's Build Something Great
                </h2>
                <p className="text-2xl mb-10 text-cyan-50 max-w-2xl mx-auto">
                  Schedule a free consultation to discuss your project
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-xl bg-white text-cyan-600 font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Start a Project
                    <ArrowRight className="w-6 h-6" />
                  </Link>
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
