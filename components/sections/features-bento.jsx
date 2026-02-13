import { 
  Zap, 
  Shield, 
  Headphones, 
  Sparkles, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import { ScrollReveal, TiltCard } from '@/components/animations';

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance with modern technologies',
    size: 'large',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime',
    size: 'small',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support',
    size: 'small',
  },
  {
    icon: Sparkles,
    title: 'Modern Design',
    description: 'Beautiful, intuitive interfaces that users love',
    size: 'medium',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business',
    size: 'medium',
  },
  {
    icon: Clock,
    title: 'Quick Delivery',
    description: 'Fast turnaround without compromising quality',
    size: 'medium',
  },
];

export function FeaturesBento() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Choose <span className="glow-text">Webbito</span>
            </h2>
            <p className="text-lg text-foreground/70">
              We combine technical excellence with creative innovation to deliver exceptional results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const gridClass = 
              feature.size === 'large' ? 'md:col-span-2 md:row-span-2' :
              feature.size === 'medium' ? 'md:col-span-1' :
              'md:col-span-1';

            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className={`h-full ${gridClass}`} intensity={8}>
                  <div className="glass rounded-2xl p-8 h-full hover:shadow-lg hover:shadow-cyan-500/10 group transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-cyan-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
