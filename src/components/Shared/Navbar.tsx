'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Home, Image as ImageIcon, MessageSquare, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/projects', icon: Briefcase },
  { label: 'About', href: '/about', icon: User },
  { label: 'Memories', href: '/memories', icon: ImageIcon },
  { label: 'Contact', href: '/contact', icon: MessageSquare },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 pt-2 sm:pt-8 w-max max-w-[95vw]">
      <nav className="flex items-center justify-between gap-1 sm:gap-2 px-1.5 py-1.5 rounded-full border border-[#0000001A] dark:border-[#FFFFFF1A] bg-white dark:bg-[#181818] backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40 transition-colors duration-300">
        
        {/* Profile Avatar */}
        <Link href="/" className="shrink-0 group block">
          <Image
            src="/icons/avatar.svg"
            alt="Sultanat Profile"
            width={56}
            height={56}
            priority
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Navigation Items */}
        <ul className="flex items-center gap-1 sm:gap-1.5 relative mx-2 sm:mx-6 md:mx-12">
          {NAV_ITEMS.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  aria-label={item.label}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex items-center justify-center gap-2 p-2.5 sm:px-3 sm:py-2 rounded-full text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-zinc-900 dark:text-white font-medium'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Icon
                    className={`w-[18px] h-[18px] sm:w-4 sm:h-4 relative z-10 transition-transform ${
                      isActive ? 'stroke-[2.25]' : 'stroke-[1.75]'
                    }`}
                  />

                  {/* Text expansion on hover/active (Desktop & Tablet only) */}
                  <AnimatePresence>
                    {(isHovered || isActive) && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="hidden sm:inline-block overflow-hidden whitespace-nowrap text-xs font-medium relative z-10"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Shooting Star Underline Effect */}
                  {isHovered && (
                    <motion.div
                      layoutId="shooting-star-underline"
                      className="hidden sm:block absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    />
                  )}

                  {/* Background Hover Pill Highlight */}
                  {isHovered && (
                    <motion.div
                      layoutId="hover-pill"
                      className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/60 rounded-full -z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Theme Toggle Button */}
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}