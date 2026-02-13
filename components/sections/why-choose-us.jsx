'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  HeadphonesIcon, 
  Award 
} from 'lucide-react';
import { ScrollReveal, TiltCard } from '@/components/animations';

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We understand time is money. Our agile process ensures rapid development without compromising quality.",
    stat: "2-3 Weeks",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data security is our priority. We implement industry-leading security practices and regular audits.",
    stat: "100% Secure",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with seasoned professionals who have delivered 500+ successful projects across industries.",
    stat: "500+ Projects",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Build for today, prepared for tomorrow. Our solutions scale seamlessly as your business grows.",
    stat: "10x Growth",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock support from our dedicated team. We're here whenever you need us.",
    stat: "24/7 Available",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee. Your success is our success.",
    stat: "100% Satisfaction",
    color: "from-red-500 to-rose-600"
  }
];

export function WhyChooseUs() {
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
              <span className="text-cyan-500 font-semibold">Why Webbito</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Why Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're not just developers – we're your partners in digital success
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <TiltCard>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass p-8 rounded-2xl h-full hover:shadow-2xl hover:shadow-cyan-500/20 transition-all group relative overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {reason.description}
                    </p>

                    {/* Stat */}
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${reason.color} text-white font-bold text-sm`}>
                      {reason.stat}
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
