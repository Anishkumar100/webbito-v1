'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '@/components/animations';
import Link from 'next/link';

const faqs = [
  {
    question: "What services does Webbito offer?",
    answer: "We offer comprehensive digital solutions including Web Development, E-commerce Development, WordPress Development, UI/UX Design, Mobile App Development, Digital Marketing, Custom Software Development, Server Management, Deployment Services, and Web Hosting."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website takes 2-3 weeks, while complex web applications can take 2-3 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer 24/7 support services including server management, bug fixes, updates, and maintenance. We also provide training to help your team manage the solution effectively."
  },
  {
    question: "Can you help with student projects and internship assignments?",
    answer: "Absolutely! We specialize in completing final year projects, mini projects, and internship assignments. We provide complete documentation, source code, and PPT presentations to help students succeed."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing based on project scope. Starting packages begin at ₹15,000, with custom solutions quoted based on requirements. We provide transparent pricing with no hidden costs."
  },
  {
    question: "Do you work with startups and enterprises?",
    answer: "Yes! We work with clients of all sizes - from startups needing MVP development to enterprises requiring complex digital transformations. Our scalable solutions grow with your business."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, Flutter, React Native, WordPress, Shopify, AWS, and more. We choose the best tech stack for each project's specific needs."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow rigorous quality assurance processes including code reviews, automated testing, performance optimization, and security audits. Every project undergoes multiple testing phases before delivery."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        initial={false}
        className="glass rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 text-left flex items-start justify-between gap-4 group"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
              {faq.question}
            </h3>
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-white" />
            ) : (
              <Plus className="w-5 h-5 text-white" />
            )}
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0">
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
}

export function FAQ() {
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
              <span className="text-cyan-500 font-semibold">FAQ</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our services and process
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <ScrollReveal delay={0.8}>
          <div className="mt-16 text-center">
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
