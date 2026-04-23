'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ===== MOCK DATA =====
const BLOGS = [
  {
    id: 1,
    category: 'TECH UPDATES',
    date: 'OCT 24',
    title: 'SCALING STRUCTURAL PURITY',
    excerpt: 'Discover how MST Network achieves unprecedented scalability while maintaining blockchain integrity through our unique consensus.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    category: 'VALIDATOR NEWS',
    date: 'OCT 23',
    title: 'INSTITUTIONAL VALIDATOR PROGRAM',
    excerpt: 'Join our new institutional validator program with premium rewards and infrastructure support for early network adopters.',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    category: 'ECOSYSTEM',
    date: 'OCT 22',
    title: 'PARTNERSHIPS EXPAND ACROSS WEB3',
    excerpt: 'MST announces strategic partnerships with leading protocols and infrastructure providers to drive global adoption.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800',
  }
];

export default function MSTBlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? BLOGS.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev === BLOGS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-hidden bg-white text-black py-14 sm:py-18 md:py-24 px-4 sm:px-6">
      
      {/* 🔴 BACKGROUND LAYER */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-35%] left-[-85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex pointer-events-none z-0"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-40 z-0"
      >
        <div className="w-16 h-16 border border-red-500/20 rounded-full" />
        <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bungee-regular text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase"
          >
            LATEST{" "}
            <span className="text-red-600">
              BLOGS
            </span>
          </motion.h2>

          {/* NAV BUTTONS */}
          <div className="flex items-center gap-3">
            <NavButton direction="left" onClick={goLeft} />
            <NavButton direction="right" onClick={goRight} />
          </div>
        </div>

        {/* MOBILE CAROUSEL */}
        {isMobile ? (
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <BlogCard post={BLOGS[currentIndex]} index={0} />
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {BLOGS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-6 h-2 bg-red-500'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* DESKTOP GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {BLOGS.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ===== SUB-COMPONENTS =====
function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] w-full overflow-hidden mb-5 sm:mb-8 border border-black/5 rounded-lg">
        <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 z-10" />
        <motion.img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out rounded-lg"
        />
      </div>

      {/* META */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-red-600  text-xs tracking-[0.2em]">
          {post.category}
        </span>
        <div className="h-1 w-1 rounded-full bg-black/20" />
        <span className="text-gray-500  text-xs font-medium uppercase">
          {post.date}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="bungee-regular text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 tracking-tight group-hover:text-red-500 transition-colors duration-300 leading-[1.1]">
        {post.title}
      </h3>

      {/* EXCERPT */}
      <p className="text-gray-700 text-sm leading-relaxed mb-5 sm:mb-8 line-clamp-2">
        {post.excerpt}
      </p>

      {/* CTA BUTTON */}
      <div className="mt-auto">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black text-white text-sm font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all duration-300 hover:bg-red-500"
        >
          Read More
        </motion.a>
      </div>
    </motion.article>
  );
}

function NavButton({ direction, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border border-black/10 hover:border-red-600/50 hover:bg-red-600/5 transition-all group"
    >
      {direction === 'left' ? (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </motion.button>
  );
}