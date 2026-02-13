import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Check, Zap, Star, Rocket } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, TiltCard, ScaleIn } from '@/components/animations';

export const metadata = {
  title: 'Pricing - Webbito',
  description: 'Transparent pricing for all our services. Choose the plan that fits your needs.',
};

const PRICING_TIERS = [
  {
    name: 'Starter',
    icon: Zap,
    price: '₹25,000',
    period: 'one-time',
    description: 'Perfect for small businesses and startups',
    features: [
      '5 Page Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form',
      '1 Month Support',
      'Social Media Integration',
    ],
    notIncluded: [
      'Custom Features',
      'E-commerce Integration',
      'Advanced Analytics',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Star,
    price: '₹75,000',
    period: 'one-time',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 15 Pages',
      'Custom Design',
      'Advanced SEO',
      'E-commerce Integration',
      '3 Months Support',
      'Analytics Dashboard',
      'Payment Gateway Setup',
      'Content Management System',
      'Mobile App (Basic)',
    ],
    notIncluded: [],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    price: 'Custom',
    period: 'quote',
    description: 'For large-scale projects',
    features: [
      'Unlimited Pages',
      'Premium Custom Design',
      'Enterprise SEO',
      'Advanced E-commerce',
      '12 Months Support',
      'Advanced Analytics',
      'API Integrations',
      'Custom Features',
      'Mobile Apps (iOS & Android)',
      'Dedicated Account Manager',
      'Priority Support',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Simple, Transparent <span className="glow-text">Pricing</span>
              </h1>
              <p className="text-xl text-foreground/70">
                Choose the perfect plan for your business. All plans include our core features and dedicated support.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PRICING_TIERS.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <TiltCard intensity={tier.popular ? 10 : 6}>
                    <div
                      className={`glass rounded-2xl p-8 relative h-full ${
                        tier.popular
                          ? 'border-2 border-cyan-500 shadow-lg shadow-cyan-500/20 md:scale-105'
                          : ''
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-medium">
                          Most Popular
                        </div>
                      )}

                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-heading font-bold mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-6">
                        {tier.description}
                      </p>

                      <div className="mb-6">
                        <span className="text-4xl font-heading font-bold glow-text">
                          {tier.price}
                        </span>
                        {tier.period !== 'quote' && (
                          <span className="text-foreground/60 ml-2">
                            / {tier.period}
                          </span>
                        )}
                      </div>

                      <Link href="/contact" className="block mb-8">
                        <Button
                          className="w-full"
                          variant={tier.popular ? 'default' : 'outline'}
                        >
                          {tier.cta}
                        </Button>
                      </Link>

                      <div className="space-y-3">
                        {tier.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/80">
                              {feature}
                            </span>
                          </div>
                        ))}
                        {tier.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3 opacity-40">
                            <Check className="w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/60 line-through">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <ScrollReveal delay={0.4}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Can I upgrade my plan later?',
                    a: "Yes, you can upgrade to a higher plan at any time. We'll adjust the pricing based on your current usage.",
                  },
                  {
                    q: 'What payment methods do you accept?',
                    a: 'We accept all major credit cards, debit cards, UPI, net banking, and bank transfers.',
                  },
                  {
                    q: 'Do you offer refunds?',
                    a: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our services.',
                  },
                  {
                    q: 'Is there a setup fee?',
                    a: 'No, there are no hidden fees. The price you see is what you pay.',
                  },
                ].map((faq, index) => (
                  <ScaleIn key={index} delay={0.5 + index * 0.1}>
                    <div className="glass rounded-xl p-6 hover:border-cyan-500/20 border border-transparent transition-all">
                      <h3 className="font-heading font-semibold mb-2">{faq.q}</h3>
                      <p className="text-sm text-foreground/70">{faq.a}</p>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
