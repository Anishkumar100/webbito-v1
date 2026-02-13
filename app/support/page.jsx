'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Headphones, MessageCircle, Mail, Clock, Send } from 'lucide-react';
import { ScrollReveal, TiltCard, ScaleIn } from '@/components/animations';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    message: '',
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
        subject: '',
        priority: 'medium',
        message: '',
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
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="glow-text">Support</span> Center
              </h1>
              <p className="text-xl text-foreground/70">
                We're here to help! Get in touch with our support team for any questions or issues.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Headphones, title: '24/7 Live Chat', desc: 'Get instant help from our support team', cta: 'Start Chat' },
              { icon: Mail, title: 'Email Support', desc: 'Response within 2-4 hours', cta: 'Send Email' },
              { icon: MessageCircle, title: 'WhatsApp', desc: 'Quick support via WhatsApp', cta: 'Message Us' },
            ].map((option, index) => {
              const Icon = option.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <TiltCard intensity={10}>
                    <div className="glass rounded-2xl p-8 text-center h-full hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-3">
                        {option.title}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4">
                        {option.desc}
                      </p>
                      <Button variant="outline" className="w-full">
                        {option.cta}
                      </Button>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal delay={0.3}>
            <TiltCard intensity={5}>
              <div className="max-w-2xl mx-auto glass rounded-2xl p-8">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-cyan-500" />
                  <h2 className="text-2xl font-heading font-bold">Support Hours</h2>
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-foreground/80">
                    <strong>24/7 Emergency Support</strong> for critical issues
                  </p>
                  <p className="text-foreground/70 text-sm">
                    General Support: Monday - Saturday, 9 AM - 8 PM IST
                  </p>
                  <p className="text-foreground/70 text-sm">
                    Average Response Time: Under 2 hours
                  </p>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={0.4}>
              <TiltCard intensity={5}>
                <div className="glass rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-heading font-bold mb-4">
                      Submit a <span className="glow-text">Support Ticket</span>
                    </h2>
                    <p className="text-foreground/70">
                      Fill out the form and our team will get back to you as soon as possible
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                          placeholder="Your name"
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

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                        placeholder="Brief description of the issue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Priority *</label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent"
                      >
                        <option value="low">Low - General inquiry</option>
                        <option value="medium">Medium - Need assistance</option>
                        <option value="high">High - Service issue</option>
                        <option value="urgent">Urgent - Critical issue</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/20 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all bg-transparent resize-none"
                        placeholder="Please describe your issue in detail..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === 'sending'}
                      className="w-full group"
                    >
                      {status === 'sending' ? 'Submitting...' : 'Submit Ticket'}
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {status === 'success' && (
                      <ScaleIn>
                        <p className="text-center text-cyan-500">
                          ✓ Ticket submitted successfully! We'll respond within 2-4 hours.
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
