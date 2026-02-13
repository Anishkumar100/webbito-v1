'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { ArrowRight, Sparkles } from 'lucide-react';

export function ServicesTree() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const servicePositions = useMemo(() => [
    { x: 50, y: 6 },
    { x: 20, y: 28 },
    { x: 80, y: 28 },
    { x: 6, y: 52 },
    { x: 32, y: 54 },
    { x: 68, y: 54 },
    { x: 94, y: 54 },
    { x: 20, y: 84 },
    { x: 50, y: 84 },
    { x: 80, y: 84 },
  ], []);

  const connections = useMemo(() => [
    [0, 1], [0, 2],
    [1, 3], [1, 4],
    [2, 5], [2, 6],
    [3, 7], [4, 7], [4, 8],
    [5, 8], [5, 9], [6, 9],
    [7, 8], [8, 9],
  ], []);

  const connectionPaths = useMemo(() => {
    return connections.map(([startIdx, endIdx]) => {
      const start = servicePositions[startIdx];
      const end = servicePositions[endIdx];
      return { start, end, startIdx, endIdx };
    });
  }, [connections, servicePositions]);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false,
    });
    const container = containerRef.current;
    
    const resizeCanvas = () => {
      const dpr = 1; // ✅ NO scaling for maximum performance
      const rect = container.getBoundingClientRect();
      
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    // ✅ ONLY draw once initially, then only on hover
    const drawStatic = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);

      connectionPaths.forEach(({ start, end, startIdx, endIdx }) => {
        const x1 = (start.x / 100) * width;
        const y1 = (start.y / 100) * height;
        const x2 = (end.x / 100) * width;
        const y2 = (end.y / 100) * height;

        const isHovered = hoveredIndex === startIdx || hoveredIndex === endIdx;
        
        if (isHovered) {
          // ✅ Simple gradient for hovered lines
          const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
          gradient.addColorStop(0, 'rgba(6, 182, 212, 0.7)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0.7)');
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2.5;
        } else {
          // ✅ Static color - NO animation
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
          ctx.lineWidth = 1.5;
        }

        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        
        const cpX = (x1 + x2) / 2;
        const cpY = (y1 + y2) / 2 - 30;
        ctx.quadraticCurveTo(cpX, cpY, x2, y2);
        
        ctx.stroke();
      });
    };

    resizeCanvas();
    drawStatic(); // ✅ Draw once

    // ✅ Redraw only when hover changes
    const redrawOnHover = () => {
      drawStatic();
    };

    // ✅ Store function reference
    const currentRedraw = redrawOnHover;

    window.addEventListener('resize', () => {
      resizeCanvas();
      drawStatic();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [hoveredIndex, mounted, connectionPaths]); // ✅ Redraws only on hover change

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-32 relative overflow-hidden hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-cyan-500 font-semibold">Our Ecosystem</span>
            <Sparkles className="w-4 h-4 text-cyan-500" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Connected Services Network</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            All our services work together seamlessly like a symphony
          </p>
        </div>

        <div ref={containerRef} className="relative h-[860px]">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
          />

          {SERVICES.map((service, index) => {
            const pos = servicePositions[index];
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={service.slug}
                className="absolute"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: isHovered 
                    ? 'translate(-50%, -50%) scale(1.02)' // ✅ Tiny scale
                    : 'translate(-50%, -50%) scale(1)',
                  transition: 'transform 0.1s ease-out', // ✅ Super fast
                  zIndex: isHovered ? 20 : 10,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={`/services/${service.slug}`}>
                  {/* ✅ REMOVED backdrop-blur-xl (expensive!) */}
                  <div className="p-6 rounded-3xl w-56 cursor-pointer group relative overflow-hidden border border-cyan-500/20 bg-white/95 dark:bg-gray-900/95 shadow-lg">
                    
                    <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/30 dark:bg-white/20 flex items-center justify-center z-30">
                      <span className="text-[11px] font-bold text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <div className="relative z-10">
                      {/* ✅ Removed hover scale animation */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm leading-tight">
                        {service.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-0.5 w-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                        <p className="text-xs text-cyan-500 font-bold">
                          {service.pricing}
                        </p>
                      </div>
                      
                      {/* ✅ Removed opacity transition */}
                      <div className="flex items-center text-xs text-cyan-500 font-semibold">
                        View Details
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 border border-cyan-500/20">
            <span>💡</span>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Hover over any service to see connections illuminate
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  );
}
