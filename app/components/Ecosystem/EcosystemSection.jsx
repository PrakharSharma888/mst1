'use client';
import { useEffect } from 'react';

import React from 'react';
import { motion } from 'framer-motion';
import DotGrid from '../productSection/DotGrid';

// Icons for the cards
const Icons = {
  validator: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  ambassador: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  grants: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

export default function EcosystemSection() {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('fromEcosystem', 'true');
      }
    }, []);
  return (
    <section id="ecosystemSection" className="relative bg-white text-gray-900 py-14 sm:py-18 md:py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* --- Orbit Background --- */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [-360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] left-[10%] flex items-center gap-2"
        >
          <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span></span>
          <span className="text-[9px] font-extrabold text-red-500 whitespace-nowrap">Use Cases</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-500 to-red-200" />
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>
          <span className="text-[10px] font-extrabold text-red-500 whitespace-nowrap">9+ Active Nodes</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
        >
          <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
          <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus</span>
        </motion.div>
      </motion.div>
            {/* DotGrid Animated Background - behind card content */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none rounded-2xl overflow-hidden">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#000000cd"
          activeColor="#ff2727"
          proximity={180}
          shockRadius={50}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
      >
        <div className="w-16 h-16 border border-red-500/20 rounded-full" />
        <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
      </motion.div>

      {/* --- Content Section --- */}
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="bungee-regular text-3xl sm:text-4xl md:text-6xl leading-tight bg-white text-black font-extrabold uppercase">
            JOIN OUR <span className="text-red-600">ECOSYSTEM.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 mb-8 sm:mb-12">

          <a href="/validator" className="md:col-span-7 block">
            <PartnerCard 
              icon={Icons.validator}
              tag="Incentivized"
              title="VALIDATOR"
              description="Run reliable node infrastructure, secure consensus, and earn rewards by participating at protocol level."
            />
          </a>

          <a href="/Ambassador" className="md:col-span-5 block">
            <PartnerCard 
              icon={Icons.ambassador}
              tag="Community"
              title="AMBASSADOR"
              description="Represent MST across communities, onboard builders, and expand ecosystem reach."
            />
          </a>

          <a href="/learn/grant" className="md:col-span-5 block">
            <PartnerCard 
              icon={Icons.grants}
              tag="Funding"
              title="GRANTS"
              description="Access funding and technical support to build high-impact applications on top of MST network primitives."
            />
          </a>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="relative z-10">
              <h3 className="bungee-regular text-xl sm:text-3xl font-bold text-white leading-tight mb-4">
                READY TO BUILD<br /> THE FUTURE?
              </h3>
            </div>
            <div className="relative z-10 flex items-center justify-between">
             <a href="https://mstblockchain.com/portal/" target="_blank" rel="noopener noreferrer">
               <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm hover:bg-black hover:text-white hover:scale-105 transition-all flex items-center gap-3">
                BECOME A PARTNER
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
             </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function PartnerCard({ icon, title, description, className, tag }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`group relative bg-white border border-black/50 border-[1px] rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-colors hover:border-red-500/50 hover:bg-red-600 ${className}`}
    >
      <div className="flex justify-between items-start mb-6 sm:mb-12">
        <div className="p-3 bg-red-100 text-red-600 rounded-2xl group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest border border-gray-500 px-3 py-1 rounded-full group-hover:text-white group-hover:border-white group-hover:bg-red-500/40 transition-all duration-300">
          {tag}
        </span>
      </div>
      <div>
        <h3 className="bungee-regular text-lg md:text-2xl leading-tight text-red-500 font-extrabold uppercase group-hover:text-white transition-all duration-300">{title}</h3>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-white transition-all duration-300">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-red-600/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}