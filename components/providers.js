'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useRef } from 'react';

function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // ✅ Disable smooth scroll on mobile/tablet
    const isMobile = window.innerWidth < 1024; // Disable for screens < 1024px
    if (isMobile) return;

    // ✅ Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let Lenis;

    const initLenis = async () => {
      const module = await import('@studio-freight/lenis');
      Lenis = module.default;

      const lenis = new Lenis({
        duration: 1.0, // ✅ Reduced from 1.2 for faster scroll
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0, // ✅ Normal scroll speed
        smoothTouch: false, // ✅ IMPORTANT: Disable smooth touch on mobile
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
