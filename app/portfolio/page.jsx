'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, TiltCard, ScaleIn } from '@/components/animations';

const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'ecommerce',
    description: 'Complete online store with payment integration and inventory management',
    image: '🛍️',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'web',
    description: 'Analytics dashboard for business intelligence and reporting',
    image: '📊',
    tags: ['React', 'Chart.js', 'Node.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'mobile',
    description: 'Secure mobile banking application with biometric authentication',
    image: '💳',
    tags: ['React Native', 'Firebase'],
    link: '#',
  },
  {
    id: 4,
    title: 'Healthcare Portal',
    category: 'web',
    description: 'Patient management system with appointment scheduling',
    image: '🏥',
    tags: ['Next.js', 'MongoDB', 'AWS'],
    link: '#',
  },
  {
    id: 5,
    title: 'Restaurant Website',
    category: 'wordpress',
    description: 'Beautiful restaurant website with online ordering system',
    image: '🍽️',
    tags: ['WordPress', 'WooCommerce'],
    link: '#',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    category: 'mobile',
    description: 'Workout tracking and nutrition planning mobile app',
    image: '💪',
    tags: ['Flutter', 'Firebase'],
    link: '#',
  },
  {
    id: 7,
    title: 'Real Estate Platform',
    category: 'web',
    description: 'Property listing and management platform',
    image: '🏠',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 8,
    title: 'Learning Management System',
    category: 'web',
    description: 'Online education platform with video courses',
    image: '📚',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'wordpress', label: 'WordPress' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Our <span className="glow-text">Portfolio</span>
              </h1>
              <p className="text-xl text-foreground/70">
                Explore our latest projects and see how we've helped businesses achieve their digital goals.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4 mb-12">
          <ScaleIn delay={0.2}>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-cyan-500" />
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                      : 'glass hover:bg-cyan-500/10 text-foreground'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </ScaleIn>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <TiltCard className="h-full" intensity={8}>
                  <div className="glass rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-cyan-500/10 group transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl">
                      {project.image}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-cyan-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-cyan-500 hover:underline"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
