'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileText, Code, Check, Send } from 'lucide-react';
import { ScrollReveal, TiltCard, ScaleIn } from '@/components/animations';

const PROJECT_TYPES = [
  {
    icon: GraduationCap,
    title: 'Final Year Projects',
    description: 'Complete final year project development with documentation',
    features: ['Full Source Code', 'Complete Documentation', 'PPT Presentation', 'Project Report', 'Implementation Guide'],
    price: '₹8,000 - ₹25,000',
  },
  {
    icon: Code,
    title: 'Mini Projects',
    description: 'Semester mini projects for all branches',
    features: ['Working Code', 'Basic Documentation', 'Presentation Slides', 'Demo Video', 'Setup Instructions'],
    price: '₹3,000 - ₹10,000',
  },
  {
    icon: FileText,
    title: 'Internship Assignments',
    description: 'Complete internship project assignments',
    features: ['Custom Development', 'Assignment Report', 'Code Documentation', 'Internship Certificate Support'],
    price: '₹5,000 - ₹15,000',
  },
];

const DOMAINS = [
  'Web Development',
  'Mobile App Development',
  'Machine Learning',
  'Data Science',
  'Artificial Intelligence',
  'IoT Projects',
  'Blockchain',
  'Cloud Computing',
  'Cyber Security',
  'E-commerce',
];

export default function InternshipProjectsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    projectType: '',
    domain: '',
    deadline: '',
    description: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        projectType: '',
        domain: '',
        deadline: '',
        description: '',
      });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <ScaleIn delay={0.2}>
                <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
                  <GraduationCap className="w-5 h-5 text-cyan-500" />
                  <span className="text-sm font-medium">For Students</span>
                </div>
              </ScaleIn>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Student <span className="glow-text">Project Services</span>
              </h1>
              <p className="text-xl text-foreground/70">
                We help students complete their academic projects with full source code, documentation, and presentation materials. Not internship positions - we deliver complete project solutions.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal delay={0.2}>
            <TiltCard intensity={5}>
              <div className="max-w-3xl mx-auto glass rounded-2xl p-8 border-2 border-cyan-500/20">
                <h2 className="text-2xl font-heading font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">⚠️</span>
                  Important Information
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We <strong>DO NOT provide internships</strong>. We are a service that helps students by developing their academic projects, providing complete source code, documentation, and presentation materials. This is a paid service for project completion assistance.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">
                What We <span className="glow-text">Offer</span>
              </h2>
              <p className="text-foreground/70">Choose the service that fits your needs</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECT_TYPES.map((type, index) => {
              const Icon = type.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <TiltCard intensity={10}>
                    <div className="glass rounded-2xl p-8 h-full hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold mb-3">
                        {type.title}
                      </h3>
                      <p className="text-foreground/70 mb-6">{type.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <span className="text-lg font-semibold text-cyan-500">
                          {type.price}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal delay={0.3}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Available <span className="glow-text">Domains</span>
              </h2>
              <p className="text-foreground/70">We cover a wide range of technologies and domains</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {DOMAINS.map((domain, index) => (
              <ScaleIn key={index} delay={0.4 + index * 0.05}>
                <div className="glass px-6 py-3 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500/50 border border-white/10 transition-all">
                  {domain}
                </div>
              </ScaleIn>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={0.5}>
              <TiltCard intensity={5}>
                <div className="glass rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-heading font-bold mb-4">
                      Request Your <span className="glow-text">Project</span>
                    </h2>
                    <p className="text-foreground/70">
                      Fill out the form below and we'll get back to you with a quote within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">College/University *</label>
                        <input
                          type="text"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                          placeholder="Your institution"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Project Type *</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                        >
                          <option value="">Select project type</option>
                          <option value="final-year">Final Year Project</option>
                          <option value="mini-project">Mini Project</option>
                          <option value="internship">Internship Assignment</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Domain *</label>
                        <select
                          name="domain"
                          value={formData.domain}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                        >
                          <option value="">Select domain</option>
                          {DOMAINS.map((domain, idx) => (
                            <option key={idx} value={domain}>{domain}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Deadline *</label>
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent resize-none"
                        placeholder="Describe your project requirements in detail..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === 'sending'}
                      className="w-full group"
                    >
                      {status === 'sending' ? 'Submitting...' : 'Submit Request'}
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {status === 'success' && (
                      <ScaleIn>
                        <p className="text-center text-cyan-500">
                          ✓ Request submitted successfully! We'll contact you within 24 hours.
                        </p>
                      </ScaleIn>
                    )}
                  </form>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
