'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-cyan-500 group-hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-cyan-500 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
