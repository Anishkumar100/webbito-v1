'use client';

import { Star } from 'lucide-react';
import { ScrollReveal } from '@/components/animations';

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart India',
    content: 'Webbito transformed our digital presence completely. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, StyleHub',
    content: 'The e-commerce platform they built increased our sales by 300%. Absolutely worth every penny!',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Arjun Patel',
    role: 'Marketing Director, GrowFast',
    content: 'Best agency we have worked with. Professional, creative, and delivered beyond expectations.',
    rating: 5,
    image: '👨‍💻',
  },
  {
    name: 'Sneha Reddy',
    role: 'Product Manager, AppWorks',
    content: 'Our mobile app launch was a huge success thanks to Webbito\'s exceptional development team.',
    rating: 5,
    image: '👩‍💻',
  },
  {
    name: 'Vikram Singh',
    role: 'CTO, DataFlow Solutions',
    content: 'Their custom development solutions solved complex problems we struggled with for months.',
    rating: 5,
    image: '👨‍🔧',
  },
  {
    name: 'Ananya Iyer',
    role: 'Founder, CreativeMinds',
    content: 'The UI/UX design work was phenomenal. Our users love the new interface!',
    rating: 5,
    image: '👩‍🎨',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What Our <span className="glow-text">Clients Say</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-6">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-shrink-0 w-[400px] glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-cyan-500 text-cyan-500" />
        ))}
      </div>

      <p className="text-foreground/80 leading-relaxed mb-6">
        "{testimonial.content}"
      </p>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl">
          {testimonial.image}
        </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-foreground/60">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
