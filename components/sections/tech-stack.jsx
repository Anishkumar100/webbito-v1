'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations';

const technologies = {
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'TypeScript', icon: '📘' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🎸' },
    { name: 'Express', icon: '🚂' },
    { name: 'GraphQL', icon: '◈' },
  ],
  mobile: [
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Swift', icon: '🍎' },
    { name: 'Kotlin', icon: '🤖' },
    { name: 'Ionic', icon: '⚡' },
  ],
  cloud: [
    { name: 'AWS', icon: '☁️' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Azure', icon: '🔷' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Firebase', icon: '🔥' },
  ],
};

function TechCategory({ title, techs, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
          {title}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass px-6 py-4 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function TechStack() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
            >
              <span className="text-cyan-500 font-semibold">Technology Stack</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Built With Modern Tech</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We use cutting-edge technologies to build scalable, high-performance solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <TechCategory title="Frontend" techs={technologies.frontend} delay={0} />
          <TechCategory title="Backend" techs={technologies.backend} delay={0.1} />
          <TechCategory title="Mobile" techs={technologies.mobile} delay={0.2} />
          <TechCategory title="Cloud & DevOps" techs={technologies.cloud} delay={0.3} />
        </div>

        {/* Rotating circle background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/10 rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full pointer-events-none"
        />
      </div>
    </section>
  );
}
