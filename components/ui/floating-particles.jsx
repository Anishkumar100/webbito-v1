'use client';

import { useEffect, useRef } from 'react';

export function FloatingParticles({ 
  count = 20,
  color = 'cyan', 
  speed = 0.3,
  size = 'small' 
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ✅ DISABLE on mobile/tablet (below 1024px)
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return;
    }

    // ✅ Check if user prefers reduced motion
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;
    }

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true,
      willReadFrequently: false,
    });
    let particles = [];

    const colors = {
      cyan: ['rgba(6, 182, 212, 0.4)', 'rgba(6, 182, 212, 0.6)', 'rgba(6, 182, 212, 0.8)'],
      blue: ['rgba(59, 130, 246, 0.4)', 'rgba(59, 130, 246, 0.6)', 'rgba(59, 130, 246, 0.8)'],
      purple: ['rgba(168, 85, 247, 0.4)', 'rgba(168, 85, 247, 0.6)', 'rgba(168, 85, 247, 0.8)'],
      mixed: ['rgba(6, 182, 212, 0.5)', 'rgba(59, 130, 246, 0.5)', 'rgba(168, 85, 247, 0.5)'],
    };

    const particleColors = colors[color] || colors.cyan;

    const sizes = {
      small: { min: 1, max: 3 },
      medium: { min: 2, max: 5 },
      large: { min: 3, max: 7 },
    };

    const sizeRange = sizes[size] || sizes.small;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          size: Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    let lastTime = 0;
    const fps = 20;
    const fpsInterval = 1000 / fps;

    const animate = (currentTime) => {
      const elapsed = currentTime - lastTime;

      if (elapsed > fpsInterval) {
        lastTime = currentTime - (elapsed % fpsInterval);

        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

        particles.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x < 0) particle.x = canvas.offsetWidth;
          if (particle.x > canvas.offsetWidth) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.offsetHeight;
          if (particle.y > canvas.offsetHeight) particle.y = 0;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
          ctx.globalAlpha = 1;
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate(0);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count, color, speed, size]);

  // ✅ Don't render canvas on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      style={{ zIndex: 1 }}
    />
  );
}
