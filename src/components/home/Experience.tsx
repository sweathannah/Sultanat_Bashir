'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ExperienceItem,
  LEFT_EXPERIENCES,
  RIGHT_EXPERIENCES,
} from '@/src/data/experiences';

const MotionImage = motion.create(Image);

interface TimelineColumnProps {
  items: ExperienceItem[];
  columnDelay?: number;
  staggerStep?: number;
}

function TimelineColumn({
  items,
  columnDelay = 0,
  staggerStep = 0.16,
}: TimelineColumnProps) {
  return (
    <div className="relative flex flex-col gap-10 sm:gap-12">
      {/* Static Background Connector Line */}
      <div
        aria-hidden="true"
        className="absolute left-5 sm:left-[22px] -top-6 -bottom-6 w-[1px] -translate-x-1/2 bg-zinc-200/80 dark:bg-white/[0.08]"
      />

      {/* Animated Drawing Line + Traveling Light Pulse */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.1,
          delay: columnDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ originY: 0 }}
        className="absolute left-5 sm:left-[22px] -top-6 -bottom-6 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-400/70 dark:via-white/30 to-transparent overflow-hidden"
      >
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
        const itemDelay = columnDelay + 0.12 + index * staggerStep;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: itemDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex items-start sm:items-center gap-8 sm:gap-6"
          >
            {/* Unwrapped Logo Image (or empty placeholder if logo not added yet) */}
            {item.logo ? (
              <MotionImage
                src={item.logo}
                alt={`${item.company} logo`}
                width={44}
                height={44}
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ scale: 1.12, rotate: -4 }}
                transition={{
                  type: 'spring',
                  stiffness: 360,
                  damping: 20,
                  delay: itemDelay,
                }}
                className="relative z-10 shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover mt-0.5 sm:mt-0"
              />
            ) : (
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  type: 'spring',
                  stiffness: 360,
                  damping: 20,
                  delay: itemDelay,
                }}
                className="relative z-10 shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-[#1B1B1B] border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none mt-0.5 sm:mt-0"
              />
            )}

            {/* Role & Company Details */}
            <div className="flex flex-col">
              <h3 className="text-[0.95rem] sm:text-base font-medium text-[#000000] dark:text-[#FFFFFF] leading-snug group-hover:translate-x-0.5 transition-transform duration-200">
                {item.role}
              </h3>
              <p className="text-[0.875rem] text-[#000000B2] dark:text-[#A1A1AA] mt-0.5 leading-relaxed">
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
  const ALL_EXPERIENCES = [...LEFT_EXPERIENCES, ...RIGHT_EXPERIENCES];

  return (
    <section className="w-full px-0 sm:px-6 lg:px-10 my-4">
      <div className="w-full rounded-[2rem] sm:rounded-[2.25rem] bg-white dark:bg-[#181818] border border-black/[0.03] dark:border-white/[0.04] py-14 sm:py-24 px-6 sm:px-12 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Header Row: Title on Left, Intro Copy on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-12 mb-14 md:mb-20"
          >
            <h2 className="text-[2rem] font-normal tracking-tight text-[#000000] dark:text-[#FFFFFF] shrink-0">
              Experiences
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#000000B2] dark:text-[#A1A1AA] max-w-md">
              A little journey of where I&apos;ve been, what I&apos;ve built, and
              the experiences that have shaped me as a developer.
            </p>
          </motion.div>

          {/* Mobile: Single Continuous Vertical Timeline */}
          <div className="md:hidden pl-1">
            <TimelineColumn
              items={ALL_EXPERIENCES}
              columnDelay={0.1}
              staggerStep={0.12}
            />
          </div>

          {/* Desktop: 2-Column Connected Timeline Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 lg:gap-24 pl-2">
            <TimelineColumn items={LEFT_EXPERIENCES} columnDelay={0.1} />
            <TimelineColumn items={RIGHT_EXPERIENCES} columnDelay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}