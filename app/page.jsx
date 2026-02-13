import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import dynamic from 'next/dynamic';

// ✅ Dynamic imports WITHOUT ssr: false (works in Next.js 15)
const ServicesGrid = dynamic(() => import('@/components/sections/services-grid').then(mod => ({ default: mod.ServicesGrid })));
const ServicesTree = dynamic(() => import('@/components/sections/services-tree').then(mod => ({ default: mod.ServicesTree })));
const FeaturesBento = dynamic(() => import('@/components/sections/features-bento').then(mod => ({ default: mod.FeaturesBento })));
const WhyChooseUs = dynamic(() => import('@/components/sections/why-choose-us').then(mod => ({ default: mod.WhyChooseUs })));
const Process = dynamic(() => import('@/components/sections/process').then(mod => ({ default: mod.Process })));
const TechStack = dynamic(() => import('@/components/sections/tech-stack').then(mod => ({ default: mod.TechStack })));
const Testimonials = dynamic(() => import('@/components/sections/testimonials').then(mod => ({ default: mod.Testimonials })));
const FAQ = dynamic(() => import('@/components/sections/faq').then(mod => ({ default: mod.FAQ })));
const CTA = dynamic(() => import('@/components/sections/cta').then(mod => ({ default: mod.CTA })));

// ✅ Import FloatingParticles normally (it's already 'use client')
const FloatingParticles = dynamic(() => import('@/components/ui/floating-particles').then(mod => ({ default: mod.FloatingParticles })));

export const metadata = {
  title: 'Webbito - Premium Software Development & Digital Agency',
  description: 'Transform your ideas into reality with cutting-edge web development, mobile apps, and digital solutions. Expert team delivering scalable, high-performance solutions.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Section - REDUCED from 50 to 20 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={20} color="mixed" speed={0.4} size="small" />
          <Hero />
        </div>
        
        {/* Stats Section - REDUCED from 35 to 12 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={12} color="cyan" speed={0.3} size="small" />
          <Stats />
        </div>
        
        {/* Services Grid (Mobile) - REDUCED from 30 to 10 */}
        <div className="lg:hidden relative overflow-hidden">
          <FloatingParticles count={10} color="blue" speed={0.3} size="small" />
          <ServicesGrid />
        </div>
        
        {/* Services Tree (Desktop) - REDUCED from 20 to 6 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={6} color="cyan" speed={0.25} size="small" />
          <ServicesTree />
        </div>
        
        {/* Features Bento Grid - REDUCED from 35 to 10 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={10} color="mixed" speed={0.3} size="small" />
          <FeaturesBento />
        </div>
        
        {/* Why Choose Us - REDUCED from 30 to 8 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={8} color="blue" speed={0.25} size="small" />
          <WhyChooseUs />
        </div>
        
        {/* Process Timeline - REDUCED from 35 to 10 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={10} color="cyan" speed={0.3} size="small" />
          <Process />
        </div>
        
        {/* Tech Stack - REDUCED from 40 to 12 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={12} color="mixed" speed={0.3} size="small" />
          <TechStack />
        </div>
        
        {/* Testimonials - REDUCED from 30 to 8 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={8} color="purple" speed={0.25} size="small" />
          <Testimonials />
        </div>
        
        {/* FAQ Section - REDUCED from 25 to 6 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={6} color="blue" speed={0.2} size="small" />
          <FAQ />
        </div>
        
        {/* Final CTA - REDUCED from 45 to 15 */}
        <div className="relative overflow-hidden">
          <FloatingParticles count={15} color="mixed" speed={0.4} size="small" />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
