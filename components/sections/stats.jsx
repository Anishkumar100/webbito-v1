'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Briefcase, Zap } from 'lucide-react';

const stats = [
  { icon: Briefcase, number: 200, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, number: 50, suffix: '+', label: 'Happy Clients' },
  { icon: TrendingUp, number: 98, suffix: '%', label: 'Success Rate' },
  { icon: Zap, number: 5, suffix: ' Years', label: 'Experience' },
];

export function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate each counter
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.number / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
