'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ScrollReveal, TiltCard } from '@/components/animations';

export function ServicesGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="glow-text">Services</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Comprehensive digital solutions tailored to your business needs. From concept to launch, we've got you covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <TiltCard className="h-full" intensity={10}>
                    <div className="glass rounded-2xl p-8 h-full hover:shadow-lg hover:shadow-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-300">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-cyan-500 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-sm font-medium text-cyan-500">
                          {service.pricing}
                        </span>
                        <ArrowRight className="w-5 h-5 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
