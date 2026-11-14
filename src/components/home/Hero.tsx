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

interface InlineBadgePhotoProps {
  src: string;
  alt: string;
}

function InlineBadgePhoto({
  src,
  alt,
}: InlineBadgePhotoProps) {
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 340,
        damping: 20,
        delay: 0.35,
      }}
      whileHover={{
        scale: 1.15,
        y: -4,
        transition: { type: 'spring', stiffness: 420, damping: 16 },
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-inline-block align-middle mx-1.5 sm:mx-2 cursor-pointer select-none"
    >
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        priority
        className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 object-cover rounded-xl"
      />
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="w-full pt-[6.9rem] pb-[6.35rem] sm:pt-28 sm:pb-32 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-200 mx-auto flex flex-col items-start text-left"
      >
        {/* Eyebrow: Founder, [Logo] HerDeen */}
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2.5 lg:mb-8 mb-4 text-[0.94rem] text-[#000000B2] dark:text-[#FFFFFFB2]"
        >
          <span>Founder,</span>
            <a 
                href="https://her-deen.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 transition-transform duration-200 hover:scale-110 hover:rotate-6 active:scale-95 cursor-pointer"
                aria-label="HerDeen Website"
            >
                <Image
                    src="/images/herdeen-logo.svg"
                    alt="HerDeen"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                />
            </a>
          <span>
            HerDeen
          </span>
        </motion.div>

        {/* Hero Headline with Inline Photo Tiles */}
        <motion.h1
          variants={fadeUpVariants}
          className="lg:text-[2rem] text-[1.5rem] leading-[1.3] tracking-tight"
        >
            <span className="block lg:text-[3rem] text-[2rem] mb-2.5 text-[#000000] dark:text-[#FFFFFF] font-normal">
                Hi, I&apos;m{' '}
                <InlineBadgePhoto
                    src="/images/hero-1.svg"
                    alt="Sultanat portrait"
                />{' '}
                Sultanat.
            </span>

          <span className="block font-normal text-[#525252] dark:text-zinc-400">
            A{' '}
            <InlineBadgePhoto
              src="/images/hero-2.svg"
              alt="Sultanat snapshot"
            />{' '}
            Frontend Developer{' '}
            <InlineBadgePhoto
              src="/images/hero-3.svg"
              alt="Sultanat developer snapshot"
            />{' '}
            who loves bringing designs and ideas to life on the web.
          </span>
        </motion.h1>

        {/* Action Pill Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center gap-3.5 mt-9"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium bg-[#181818] text-white dark:bg-white dark:text-[#181818] shadow-xs hover:opacity-90 transition-opacity"
            >
              Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="/Sultanat-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium bg-white text-[#181818] border border-zinc-200 dark:bg-zinc-950 dark:text-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              View my CV
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}