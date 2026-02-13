'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Code2, 
  Rocket, 
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations';

const processes = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Research",
    description: "We dive deep into your business goals, target audience, and competition to create a solid foundation.",
    features: ["Requirement Analysis", "Market Research", "Competitor Analysis", "Goal Setting"]
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Design & Planning",
    description: "Our designers create stunning mockups and interactive prototypes aligned with your brand identity.",
    features: ["Wireframing", "UI/UX Design", "Prototyping", "Design System"]
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description: "Expert developers bring your vision to life with clean, scalable, and maintainable code.",
    features: ["Frontend Development", "Backend Development", "API Integration", "Testing"]
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Deploy",
    description: "We deploy your solution to production with comprehensive testing and quality assurance.",
    features: ["Deployment", "Performance Optimization", "Security Audit", "Training"]
  },
  {
    icon: CheckCircle2,
    number: "05",
    title: "Support & Growth",
    description: "Ongoing maintenance, updates, and optimization to ensure your solution stays ahead.",
    features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Scaling"]
  }
];

export function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
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
              <span className="text-cyan-500 font-semibold">Our Process</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">From Idea to Launch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven 5-step process that delivers exceptional results every time
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-cyan-500/20" />

          <div className="space-y-24">
            {processes.map((process, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`glass p-8 rounded-2xl ${
                        isEven ? 'lg:mr-8' : 'lg:ml-8'
                      }`}
                    >
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                          <process.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-5xl font-bold gradient-text mb-2">
                            {process.number}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {process.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {process.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {process.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + fIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center indicator */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg shadow-cyan-500/50">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-4 h-4 rounded-full bg-white"
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 text-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>

      {/* Animated background element */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
}
