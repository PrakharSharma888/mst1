"use client"; // <--- Add this at the very top
import React from "react";
import { motion } from "framer-motion";

export default function MSTInstitutional() {
  return (
    <div className="px-4 sm:px-5 md:px-10 py-10 sm:py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#f9f9f9] via-[#ffffff] to-[#f0f0f0] border border-black/30 p-6 sm:p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 relative overflow-hidden">
        
        {/* 🔴 Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[400px] h-[400px] bg-red-500/20 blur-[120px] top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-red-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />
        </div>

        {/* 🛰️ ORBITAL ANIMATIONS (Background Layer) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* Orbit 1: Inner Solid Ring */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[10%] -left-[20%] w-[100%] h-[120%] border-[0.5px] border-red-500/20 rounded-full hidden lg:flex items-center justify-center"
          >
            <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [-360, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[15%] left-[15%] flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              <span className="text-[9px] font-black tracking-[0.2em] text-red-400/60 uppercase whitespace-nowrap">Use Cases</span>
            </motion.div>
          </motion.div>

          {/* Orbit 2: Middle Dashed Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[20%] -left-[30%] w-[120%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center"
          >
            <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/60 backdrop-blur-[2px] rounded-full p-1 border border-black/10"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-500" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-black whitespace-nowrap">9+ Active Nodes</span>
            </motion.div>
          </motion.div>

          {/* Orbit 3: Outer Faint Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[30%] -left-[40%] w-[150%] h-[160%] border-[0.5px] border-black/10 rounded-full hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-[25%] left-[15%] flex items-center gap-2 opacity-40"
            >
              <span className="relative inline-flex rounded-full h-1 w-1 bg-red-400"></span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-red-400 whitespace-nowrap uppercase">POSA Consensus</span>
            </motion.div>
          </motion.div>

          {/* Small floating local elements */}
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 right-20 w-24 h-24 border border-red-500/20 rounded-full flex items-center justify-center opacity-40"
          >
            <div className="w-16 h-16 border border-red-500/10 rounded-full" />
            <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
          </motion.div>
        </div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <h2 className="bungee-regular text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase">
             Join Our <span className="text-red-600">Validator</span> Program 
          </h2>

         

          <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
            Help secure the most performant network in existence. Stake MSTC and
            run professional-grade infrastructure designed for high-throughput,
            reliability, and institutional-level performance.
          </p>

          <a
            href="https://mstblockchain.com/portal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-full bg-red-500 text-white text-sm font-semibold tracking-wide hover:bg-red-600 transition"
              type="button"
            >
              JOIN THE ECOSYSTEM
            </motion.button>
          </a>
        </div>

        {/* RIGHT LOGO */}
        <div className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-[100px] sm:w-[140px] md:w-[300px] h-[100px] sm:h-[140px] md:h-[300px] flex items-center justify-center rounded-2xl"
          >
            <img
              src="/1.png"
              alt="MST Logo"
              className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_30px_rgba(255,45,45,0.3)]"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}