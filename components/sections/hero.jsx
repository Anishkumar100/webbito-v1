'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScaleIn } from '@/components/animations';

export function Hero() {
  const canvasRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Only run on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Canvas particle system
  useEffect(() => {
    if (!isMounted || !canvasRef.current || typeof window === 'undefined' || window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 50;
    const connectionDistance = 150;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isMounted]);



  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyan-50/30 via-white to-blue-50/30 dark:from-cyan-950/10 dark:via-gray-950 dark:to-blue-950/10">
      
      {/* Canvas - Only renders after mount and on desktop */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <ScaleIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                Premium Software Development Agency
              </span>
            </div>
          </ScaleIn>

          {/* Heading */}
          <ScaleIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              We Build{' '}
              <span className="gradient-text">Digital Products</span>
              <br />
              That People Love
            </h1>
          </ScaleIn>

          {/* Description */}
          <ScaleIn delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into powerful web & mobile applications. 
              We specialize in creating scalable, high-performance solutions 
              that drive real business results.
            </p>
          </ScaleIn>

          {/* CTA Buttons */}
          <ScaleIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/contact">
                <Button size="lg" className="group text-lg px-8 py-6 shadow-xl shadow-cyan-500/30">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Who Are We?
                </Button>
              </Link>
            </div>
          </ScaleIn>


        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
