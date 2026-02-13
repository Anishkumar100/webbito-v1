'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Coffee, Users, Lightbulb, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, ScaleIn } from '@/components/animations';

export function CTA() {
  const whyUs = [
    { 
      icon: Coffee, 
      title: 'No BS Meetings', 
      desc: 'We actually code',
      color: 'from-cyan-500 to-blue-600'
    },
    { 
      icon: Zap, 
      title: 'Lightning Fast', 
      desc: 'Like, seriously quick',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      icon: Users, 
      title: 'Real People', 
      desc: 'Not bots or scripts',
      color: 'from-purple-500 to-pink-600'
    },
    { 
      icon: Lightbulb, 
      title: 'Smart Solutions', 
      desc: 'Your success = ours',
      color: 'from-pink-500 to-cyan-600'
    },
  ];

  const perks = [
    'We reply to emails (usually within an hour)',
    'Your code is YOURS - forever',
    'Free revisions until you smile',
    'We explain tech in plain English',
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="relative container mx-auto px-4">
        <ScrollReveal>
          <div className="relative glass rounded-3xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto border-2 border-cyan-500/20 shadow-2xl">
            
            {/* Floating Testimonial Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden md:block">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full shadow-2xl shadow-cyan-500/50">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-white fill-white" />
                  <span className="text-sm font-bold text-white">Rated 4.9/5 by real clients</span>
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-12 mt-4">
              <ScaleIn delay={0.1}>
                <div className="inline-block mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-float">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse">
                      <span className="sr-only">Available now</span>
                    </div>
                  </div>
                </div>
              </ScaleIn>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Build Something{' '}
                <span className="gradient-text">Epic?</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
                Stop overthinking it. Let's turn your idea into a real product that people actually want to use.
              </p>

              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-8">
                👋 Hey, we're accepting new projects this month!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/contact">
                  <Button size="lg" className="group w-full sm:w-auto text-lg px-8 py-6 shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all">
                    Let's Talk About Your Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
               
              </div>
            </div>

            {/* Why Work With Us */}
            <div className="mb-10">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Why people love working with us 💙
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {whyUs.map((item, index) => (
                  <ScaleIn key={index} delay={0.2 + index * 0.1}>
                    <div className="group glass p-5 rounded-2xl text-center hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 border border-transparent hover:border-cyan-500/50 cursor-default">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <ScrollReveal delay={0.3}>
              <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border-2 border-cyan-500/30 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full" />
                
                <div className="relative">
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                    <div className="flex items-center gap-2 mb-4 sm:mb-0">
                      <Sparkles className="w-6 h-6 text-cyan-500" />
                      <h3 className="text-xl font-bold gradient-text">Here's the deal</h3>
                    </div>
                    <div className="glass px-4 py-2 rounded-full border border-cyan-500/30">
                      <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">No hidden fees, ever</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {perks.map((perk, index) => (
                      <ScaleIn key={index} delay={0.4 + index * 0.1}>
                        <div className="flex items-start gap-3 group p-3 rounded-xl hover:bg-white/50 dark:hover:bg-black/30 transition-all">
                          <div className="flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-cyan-500 group-hover:scale-125 transition-transform" />
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                            {perk}
                          </span>
                        </div>
                      </ScaleIn>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Proof */}
            <div className="text-center mt-10 space-y-3">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">"Best decision we made for our startup"</span> - Sarah, Tech Founder
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">More Oppurtunities To Be Explored</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">💳 Secure checkout</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">⚡ Start in 48 hours</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Decorative Elements */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
