
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import HeroImage from './HeroImage';
import PartnerMarquee from './PartnerMarquee';



// --- Typewriter Hook ---
function useTypewriter({ texts, typingSpeed = 10, deletingSpeed = 10, pause = 1500 }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    let timeout;
    const current = texts[index].replace(/\*/g, "");
    if (!isDeleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIdx === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [charIdx, isDeleting, index, texts, typingSpeed, deletingSpeed, pause]);

  // For highlight, only show up to displayed.length
  function formatTypewriterHeading(text, shownLength) {
    let count = 0;
    const parts = text.split("*");
    return parts.map((part, i) => {
      if (count >= shownLength) return null;
      const show = part.slice(0, Math.max(0, shownLength - count));
      count += show.length;
      if (!show) return null;
      return i % 2 === 1 ? (
        <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D2D] via-red-600 to-rose-500">
          {show.toUpperCase()}
        </span>
      ) : show.toUpperCase();
    });
  }

  return {
    index,
    displayed,
    format: (text) => formatTypewriterHeading(text, displayed.length),
    isDeleting,
  };
}

// --- DATA ---
const slides = [
  { src: '/img1.jpeg', alt: 'Institutional Web3' },
  { src: '/img3.png', alt: 'Data Visualization' },
  { src: '/img2.png', alt: 'Decentralized Network' }
];

const headings = [
  "An Ecosystem Where *Innovation* Takes Shape",
  "Designed for *Scale* Built for the *Future*",
  "Turning Blockchain *Potential* into Real *Utility*"
];

const stats = [
  { label: 'Average Block Time', value: 3.0, suffix: 's', decimals: 1, active: true },
  { label: 'Active Validators', value: 70000, suffix: '+', decimals: 0, active: true },
  { label: 'Average Txn Fees', value: 0.001, suffix: ' MSTC', decimals: 3, active: true }
];

// 🔥 LOGOS
const partnerImages = [
  '/placeholder.png',
  '/logos/2.png',
  '/logos/3.png',
  '/logos/4.png',
  '/logos/5.png'
];

// --- COUNTUP ---
function CountUp({ value, prefix = '', suffix = '', decimals = 0 }) {
  const count = useMotionValue(0);

  const formatted = useTransform(count, (latest) => {
    return latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5
      });
    }
  }, [count, value, isInView]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {prefix && <span>{prefix}</span>}
      <motion.span>{formatted}</motion.span>
      {suffix && (
        <span className="text-[10px] sm:text-[16px] font-bold ml-1 opacity-80 uppercase tracking-tight">
          {suffix.trim()}
        </span>
      )}
    </span>
  );
}

// highlight words
function formatHeading(text) {
  const parts = text.split('*');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D2D] via-red-600 to-rose-500">
        {part.toUpperCase()}
      </span>
    ) : part.toUpperCase()
  );
}


export default function HeroSection() {
  const [slideCount, setSlideCount] = useState(0);
  const [headingIndex, setHeadingIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideCount((prev) => prev + 1);
    }, 6000);

    const headingInterval = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(headingInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#FAFAFA] overflow-hidden font-extrabold">

      {/* Animated Background */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[10%] left-[10%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300 pointer-events-none opacity-40"
        style={{ zIndex: 1, opacity: 0.4 }}
      >
        <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-red-600 shadow-[0_0_10px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [-360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute left-[15%] top-[15%] flex items-center gap-2"
        >
          <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"></span></span>
          <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-300">MST BLOCKCHAIN</span>
        </motion.div>
      </motion.div>


      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute left-[35%] top-[35%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500 opacity-40 pointer-events-none"
        style={{ zIndex: 1, opacity: 0.4 }}
      >
        <div className="h-20 w-20 rounded-full border-2 border-red-500/20" />
        <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#ff2d2d]" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[90rem] min-h-screen grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-6 sm:gap-10 px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12">

        {/* LEFT - Heading & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-none flex flex-col items-center text-center md:items-start md:text-left"
        >
          {/* HEADING */}
          <div className="h-[90px] sm:h-[160px] md:h-[200px] mt-12 sm:mt-0 mb-6 sm:mb-14 md:mb-20 flex justify-center md:justify-start">
            {(() => {
              // Typewriter config
              const typingSpeed = 10; // ms per character (faster)
              const deletingSpeed = 10; // ms per character (faster)
              const pause = 1400; // ms pause at end of word
              const typewriter = useTypewriter({
                texts: headings,
                typingSpeed,
                deletingSpeed,
                pause,
              });
              return (
                <h1 className="bungee-regular text-2xl sm:text-4xl md:text-7xl w-full tracking-tight text-black font-extrabold uppercase">
                  {typewriter.format(headings[typewriter.index])}
                  <span className="inline-block w-[3px] sm:w-[4px] h-7 sm:h-10 md:h-12 mb-1 sm:mb-2 bg-black align-middle animate-pulse ml-1 sm:ml-2" style={{ verticalAlign: 'middle', opacity: 1 }} />
                </h1>
              );
            })()}
          </div>

          {/* BUTTONS */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex gap-2 sm:gap-4 w-full max-w-md">
            <a
              href="#ProductShowcase"
              className="text-center px-4 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-[9px] sm:text-[11px] font-bold uppercase tracking-wide sm:tracking-widest rounded-full hover:bg-red-500 transition-all shadow-md sm:shadow-lg shadow-black/10"
            >
              Products
            </a>

            <a
              href="https://docs.mstblockchain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-4 sm:px-8 py-2.5 sm:py-3 border border-black/10 bg-white/50 backdrop-blur-sm text-black text-[9px] sm:text-[11px] font-bold uppercase tracking-wide sm:tracking-widest rounded-full hover:border-[#FF2D2D] transition-all"
            >
              Documentation
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Image Container */}
        <div className="order-2 md:order-none md:col-start-2 md:row-span-2 flex justify-center md:justify-end w-full pr-0 md:pr-5">
          <HeroImage slides={slides} slideCount={slideCount} />
        </div>

        {/* STATS - Below image on mobile (sm), but below buttons on tablet (md) and laptop (lg) */}
        <div className="order-3 md:order-none md:col-start-1 md:row-start-2 mt-6 md:mt-0 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-xl mx-auto md:mx-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group p-2 sm:p-4 bg-white/60 border border-black/10 rounded-lg sm:rounded-2xl backdrop-blur-md hover:border-[#FF2D2D]/40 transition-all text-left"
            >
              <p className="text-[8px] sm:text-[10px] uppercase tracking-wide text-black/80 flex items-center gap-1">
                {stat.active && (
                  <span className="h-1 w-1 rounded-full bg-[#FF2D2D] animate-ping" />
                )}
                {stat.label}
              </p>

              <p className="text-2xl sm:text-4xl font-extrabold mt-1 text-black group-hover:text-[#FF2D2D] transition-colors">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* 🔥 PERFECT MARQUEE */}
      <div className="absolute bottom-0 w-full py-2 sm z-10 overflow-hidden">

        <PartnerMarquee />

      </div>

      {/* STYLES */}
      <style jsx global>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}