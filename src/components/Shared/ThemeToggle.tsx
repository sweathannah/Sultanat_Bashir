'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 sm:w-24 sm:h-9 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative flex items-center p-1 rounded-full transition-colors duration-300 shadow-sm cursor-pointer select-none ${
        isDark
          ? 'bg-gradient-to-b from-white/90 to-white dark:bg-linear-to-b dark:from-white/90 dark:to-white text-[#181818] border border-zinc-200'
          : 'bg-gradient-to-b from-black/80 to-black dark:bg-linear-to-b dark:from-black/80 dark:to-black text-white border border-zinc-800'
      }`}
      aria-label="Toggle Theme"
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`flex items-center gap-2 ${
          isDark ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        {/* Sliding Circular Badge */}
        <motion.div
          layout
          className={`flex items-center justify-center w-7 h-7 rounded-full shadow-md transition-colors ${
            isDark ? 'bg-[#181818] text-white' : 'bg-white text-[#181818]'
          }`}
        >
          {isDark ? (
            <Sun className="w-4 h-4 stroke-[1.75]" />
          ) : (
            <Moon className="w-4 h-4 stroke-[1.75]" />
          )}
        </motion.div>

        {/* Text Label (Hidden on Mobile) */}
        <motion.span
          layout
          className="hidden sm:inline-block px-2 text-xs font-normal tracking-wide whitespace-nowrap"
        >
          {isDark ? 'Light' : 'Dark'}
        </motion.span>
      </motion.div>
    </button>
  );
}