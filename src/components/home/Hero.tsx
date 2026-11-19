'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="w-full lg:pt-[6.9rem] pt-[3.75rem] pb-20 sm:pt-28 sm:pb-32 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-200 mx-auto flex flex-col items-start text-left"
      >
        {/* Eyebrow: Founder, [Logo] HerDeen */}
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2.5 mb-3 lg:mb-5 text-[0.94rem] text-[#000000B2] dark:text-[#FFFFFFB2]"
        >
          <span>Founder,</span>
          <a
            href="https://her-deen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-200 hover:scale-110 hover:rotate-6 active:scale-95 cursor-pointer"
            aria-label="HerDeen Website"
          >
            <Image
              src="/images/herdeen-logo.svg"
              alt="HerDeen"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </a>
          <span>HerDeen</span>
        </motion.div>

        {/* Primary Headline: Hi, I'm [hero-1] Sultanat. */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] leading-[1.3] tracking-tight flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 mb-3 sm:mb-2 w-full text-[#000000] dark:text-[#FFFFFF]"
        >
          <span>Hi, I&apos;m</span>
          <Image
            src="/images/hero-1.svg"
            alt="Sultanat"
            width={80}
            height={80}
            priority
            className="w-11 h-11 sm:w-14 sm:h-14 lg:w-20 lg:h-20 object-contain translate-y-1 transition-transform duration-200 hover:scale-110 hover:-rotate-6 active:scale-95 cursor-pointer"
          />
          <span>Sultanat.</span>
        </motion.h1>

        {/* Subtitle: Text-only on mobile, inline images on md+ */}
        <motion.h2
          variants={fadeUpVariants}
          className="text-[1.45rem] sm:text-[1.75rem] lg:text-[2rem] leading-[1.38] tracking-tight w-full md:w-[90%] text-[#000000B2] dark:text-[#FFFFFFB2] font-normal"
        >
          A{' '}
          <Image
            src="/images/hero-2.svg"
            alt="Sultanat snapshot"
            width={80}
            height={80}
            className="hidden md:inline-block w-14 h-14 lg:w-20 lg:h-20 object-contain align-middle mx-1 transition-transform duration-200 hover:scale-110 hover:-rotate-6 active:scale-95 cursor-pointer"
          />{' '}
          Frontend Developer{' '}
          <Image
            src="/images/hero-3.svg"
            alt="Sultanat developer snapshot"
            width={80}
            height={80}
            className="hidden md:inline-block w-14 h-14 lg:w-20 lg:h-20 object-contain align-middle mx-1 transition-transform duration-200 hover:scale-110 hover:-rotate-6 active:scale-95 cursor-pointer"
          />{' '}
          who loves bringing designs and ideas to life on the web.
        </motion.h2>

        {/* Action Pill Buttons: 50/50 full-width row on mobile, compact pills on sm+ */}
        <motion.div
          variants={fadeUpVariants}
          className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-3.5 mt-8 sm:mt-9 w-full sm:w-auto"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 sm:py-3 rounded-full text-sm font-medium bg-[#181818] text-white dark:bg-white dark:text-[#181818] shadow-xs hover:opacity-90 transition-opacity"
            >
              Projects
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <a
              href="/Sultanat-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 sm:py-3 rounded-full text-sm font-medium bg-white text-[#181818] border border-zinc-200 dark:bg-transparent dark:text-zinc-200 dark:border-[#FFFFFF26] hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              View my CV
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}