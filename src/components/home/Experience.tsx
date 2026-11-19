'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ExperienceItem,
  LEFT_EXPERIENCES,
  RIGHT_EXPERIENCES,
} from '@/src/data/experiences';

interface TimelineColumnProps {
  items: ExperienceItem[];
  columnDelay?: number;
}

function TimelineColumn({ items, columnDelay = 0 }: TimelineColumnProps) {
  return (
    <div className="relative flex flex-col gap-10 sm:gap-12">
      {/* Static Background Connector Line (extends slightly above first & below last icon) */}
      <div
        aria-hidden="true"
        className="absolute left-5 sm:left-[22px] -top-6 -bottom-6 w-[1px] -translate-x-1/2 bg-zinc-200/80 dark:bg-white/[0.08]"
      />

      {/* Animated Drawing Line + Subtle Traveling Light Pulse */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.1,
          delay: columnDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ originY: 0 }}
        className="absolute left-5 sm:left-[22px] -top-6 -bottom-6 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-400/70 dark:via-white/30 to-transparent overflow-hidden"
      >
        {/* Continuous subtle light shimmer traveling down the connector */}
        <motion.div
          animate={{ y: ['-100%', '300%'] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'linear',
            delay: columnDelay + 1,
          }}
          className="w-full h-16 bg-gradient-to-b from-transparent via-purple-500/80 dark:via-purple-400/80 to-transparent"
        />
      </motion.div>

      {/* Experience Rows */}
      {items.map((item, index) => {
        const itemDelay = columnDelay + 0.15 + index * 0.18;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              delay: itemDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex items-center gap-5 sm:gap-6"
          >
            {/* Rounded Square Logo Badge */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.12, rotate: -4 }}
              transition={{
                type: 'spring',
                stiffness: 360,
                damping: 20,
                delay: itemDelay,
              }}
              className={`relative z-10 shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-shadow duration-300 ${
                item.logo
                  ? 'bg-white border-zinc-200/80 dark:border-white/15 shadow-sm group-hover:shadow-md'
                  : 'bg-white dark:bg-[#1B1B1B] border-zinc-200/80 dark:border-white/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none group-hover:border-zinc-300 dark:group-hover:border-white/20'
              }`}
            >
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={26}
                  height={26}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              )}
            </motion.div>

            {/* Role & Company Details */}
            <div className="flex flex-col">
              <h3 className="text-[0.95rem] sm:text-base font-medium text-[#181818] dark:text-white leading-snug group-hover:translate-x-0.5 transition-transform duration-200">
                {item.role}
              </h3>
              <p className="text-xs sm:text-[0.875rem] text-[#666666] dark:text-[#A1A1AA] mt-0.5 leading-relaxed">
                {item.company} ({item.period})
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Experiences() {
  return (
    <section className="w-full px-3 sm:px-6 lg:px-10 my-4">
      <div className="w-full rounded-[1.75rem] sm:rounded-[2.25rem] bg-white dark:bg-[#161616] border border-black/[0.03] dark:border-white/[0.04] py-16 sm:py-24 px-6 sm:px-12 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Header Row: Title on Left, Intro Copy on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12 mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-[2.25rem] font-normal tracking-tight text-[#181818] dark:text-white shrink-0">
              Experiences
            </h2>
            <p className="text-sm sm:text-[0.95rem] leading-[1.6] text-[#525252] dark:text-[#A1A1AA] max-w-md">
              A little journey of where I&apos;ve been, what I&apos;ve built, and
              the experiences that have shaped me as a developer.
            </p>
          </motion.div>

          {/* 2-Column Connected Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 lg:gap-24 pl-1 sm:pl-2">
            <TimelineColumn items={LEFT_EXPERIENCES} columnDelay={0.1} />
            <TimelineColumn items={RIGHT_EXPERIENCES} columnDelay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}