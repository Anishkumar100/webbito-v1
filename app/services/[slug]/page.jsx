// app/services/[slug]/page.jsx
'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  Code2, 
  Zap, 
  Shield, 
  Users,
  Clock,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Rocket
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { useEffect, useState } from 'react';

export default function ServiceDetailPage({ params }) {
  const [mounted, setMounted] = useState(false);
  const [resolvedParams, setResolvedParams] = useState(null);

  useEffect(() => {
    setMounted(true);
    Promise.resolve(params).then(setResolvedParams);
  }, [params]);

  if (!mounted || !resolvedParams) {
    return null;
  }

  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter(
    (s) => s.slug !== service.slug
  ).slice(0, 3);

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and create a detailed project roadmap',
      icon: Target
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our designers create stunning mockups aligned with your brand',
      icon: Code2
    },
    {
      number: '03',
      title: 'Development',
      description: 'Expert developers bring your vision to life with clean code',
      icon: Zap
    },
    {
      number: '04',
      title: 'Launch',
      description: 'We deploy, test, and ensure everything runs smoothly',
      icon: Rocket
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% satisfaction assured'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals'
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Maintainable & scalable'
    },
    {
      icon: Clock,
      title: 'On-Time',
      description: 'Never miss deadlines'
    },
    {
      icon: Award,
      title: 'Premium Support',
      description: '24/7 assistance'
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-20">
        {/* Background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-cyan-50/30 via-transparent to-blue-50/30 dark:from-cyan-950/10 dark:via-transparent dark:to-blue-950/10 pointer-events-none" />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-12">
          <ScrollReveal>
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4">
          {/* Hero Section with Orbital Icon */}
          <div className="relative mb-32">
            {/* Desktop: Circular orbit (>= lg) */}
            <div className="hidden lg:flex items-center justify-center mb-16">
              <div className="relative w-64 h-64">
                {/* Orbital ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20" style={{ animation: 'spin 30s linear infinite' }} />

                {/* Center icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <ScrollReveal>
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                      <service.icon className="w-16 h-16 text-white" />
                    </div>
                  </ScrollReveal>
                </div>

                {/* Orbiting particles */}
                {[0, 90, 180, 270].map((angle, idx) => {
                  const x = Math.cos((angle - 90) * (Math.PI / 180)) * 120;
                  const y = Math.sin((angle - 90) * (Math.PI / 180)) * 120;

                  return (
                    <div
                      key={idx}
                      className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-cyan-500"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Mobile: Simple icon (< lg) */}
            <div className="lg:hidden flex justify-center mb-8">
              <ScrollReveal>
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-xl">
                  <service.icon className="w-12 h-12 text-white" />
                </div>
              </ScrollReveal>
            </div>

            {/* Header Text */}
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-4">
                  <Sparkles className="w-4 h-4" />
                  Premium Service
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {service.title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Starting at <span className="font-bold text-cyan-600 dark:text-cyan-400">{service.pricing}</span></span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Features - Hub & Spoke Layout */}
          <section className="mb-40">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  What's Included
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Comprehensive features for your success
                </p>
              </div>
            </ScrollReveal>

            {/* Desktop: Hub & Spoke (>= xl) */}
            <div className="hidden xl:block relative max-w-7xl mx-auto" style={{ minHeight: '800px' }}>
              <div className="relative w-full h-[800px]">
                {/* Center hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <ScrollReveal>
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-3xl font-bold">{service.features.length}</div>
                        <div className="text-xs">Features</div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Connection lines + Feature cards */}
                {service.features.slice(0, 10).map((feature, index) => {
                  const totalFeatures = Math.min(service.features.length, 10);
                  const angle = (index * 360) / totalFeatures - 90;
                  const radius = 320;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div key={index}>
                      {/* Connection line */}
                      <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${x}px)`}
                          y2={`calc(50% + ${y}px)`}
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-cyan-500/20"
                          strokeDasharray="4 4"
                        />
                      </svg>

                      {/* Feature card */}
                      <ScrollReveal delay={index * 0.05}>
                        <div
                          className="absolute top-1/2 left-1/2 w-56"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                        >
                          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {feature}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tablet/Mobile: Grid (< xl) */}
            <div className="xl:hidden grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {service.features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Process - Flow Timeline */}
          <section className="mb-40">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Process
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  From concept to completion
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto">
              {/* Desktop: Horizontal flow */}
              <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
                {/* Connecting line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 -z-10" style={{ width: 'calc(100% - 4rem)', left: '2rem' }} />

                {processSteps.map((step, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="relative">
                      {/* Flow node */}
                      <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl flex items-center justify-center mb-6 relative z-10 border-4 border-white dark:border-gray-950">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition-all relative">
                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {step.number}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Mobile: Vertical flow */}
              <div className="md:hidden relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <div className="relative pl-20">
                        {/* Node */}
                        <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl flex items-center justify-center border-4 border-white dark:border-gray-950">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 relative">
                          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            {step.number}
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits - Hexagonal Ring */}
          <section className="mb-40">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Excellence in every dimension
                </p>
              </div>
            </ScrollReveal>

            {/* Desktop: Hexagonal ring (>= xl) */}
            <div className="hidden xl:block relative max-w-5xl mx-auto" style={{ minHeight: '700px' }}>
              <div className="relative w-full h-[700px]">
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <ScrollReveal>
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-2xl flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-white" />
                    </div>
                  </ScrollReveal>
                </div>

                {/* Benefits in hexagon */}
                {benefits.map((benefit, index) => {
                  const angle = (index * 360) / benefits.length - 90;
                  const radius = 280;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div key={index}>
                      {/* Connection line */}
                      <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${x}px)`}
                          y2={`calc(50% + ${y}px)`}
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-cyan-500/20"
                          strokeDasharray="6 6"
                        />
                      </svg>

                      <ScrollReveal delay={index * 0.1}>
                        <div
                          className="absolute top-1/2 left-1/2"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                        >
                          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:scale-105 transition-all w-52 group">
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <benefit.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {benefit.title}
                              </h3>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tablet/Mobile: Grid (< xl) */}
            <div className="xl:hidden grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center mb-3">
                        <benefit.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-40">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Tech Stack
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Cutting-edge technologies we use
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {service.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-full border-2 border-cyan-200 dark:border-cyan-900 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* Related Services */}
          <section className="mb-20">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Services
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Explore our other offerings
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedServices.map((related, index) => (
                <ScrollReveal key={related.slug} delay={index * 0.1}>
                  <Link href={`/services/${related.slug}`}>
                    <div className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-2xl hover:-translate-y-2 transition-all h-full">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                        <related.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors">
                        {related.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {related.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                        <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                          {related.pricing}
                        </span>
                        <div className="flex items-center text-cyan-500 group-hover:gap-2 transition-all text-sm font-semibold">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <ScrollReveal>
              <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden">
                {/* Animated background */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-cyan-50 max-w-2xl mx-auto">
                    Let's bring your vision to life with our {service.title.toLowerCase()} service
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-cyan-600 font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                        Request Quote
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}