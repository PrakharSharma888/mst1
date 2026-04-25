'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCoins,
  FaUserCheck,
  FaLayerGroup,
  FaPercentage,
  FaRocket,
  FaGem,
  FaBolt,
  FaTrophy,
  FaShieldAlt,
  FaUsers,
  FaFileAlt,
  FaVoteYea,
  FaLink
} from "react-icons/fa";
import Navbar from "@/app/components/navbar/Navbar";
import { ShieldCheck, Users, Layers, Lock } from "lucide-react";

export default function BlockValidationPage() {
  const features = [
    {
      title: "Transaction Validation",
      desc: "Every transaction is verified before entering the blockchain.",
      icon: ShieldCheck,
    },
    {
      title: "Trusted Validators",
      desc: "Validators ensure network security and authenticity.",
      icon: Users,
    },
    {
      title: "Block Creation",
      desc: "Approved transactions are grouped into secure blocks.",
      icon: Layers,
    },
    {
      title: "Immutable Ledger",
      desc: "Once recorded, data cannot be altered or removed.",
      icon: Lock,
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>

      <main className="relative text-black overflow-hidden bg-white z-0 relative">

        {/* 🔴 GLOBAL ORBITAL BACKGROUND (Fixed so it stays while scrolling) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Orbit 1: Inner Ring */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-200 rounded-full hidden lg:flex items-center justify-center"
          >
            <div className="absolute w-1.5 h-1.5 bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [-360, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-[10%] left-[10%] flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              <span className="text-[9px] font-black tracking-[0.2em] text-red-400 uppercase">Governance</span>
            </motion.div>
          </motion.div>

          {/* Orbit 2: Middle Dashed Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/5 rounded-full border-dashed hidden lg:flex items-center justify-center"
          >
            <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
          </motion.div>
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10">

          {/* 1. HERO SECTION */}
          {/* Massive Watermark */}
          <div className="absolute top-28 left-0 w-full overflow-hidden pointer-events-none flex justify-center z-0 opacity-[0.02] select-none">
            <h1 className="text-[16vw] sm:text-[18vw] font-black text-black whitespace-nowrap leading-none tracking-tighter">
              GOVERNANCE
            </h1>
          </div>

          <section className="relative pt-32 pb-24 px-6 min-h-[85vh] flex items-center bg-transparent z-10">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center w-full">
              
              {/* Left Content */}
              <div className="flex flex-col items-start pr-4 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group relative mb-6 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(239,68,68,0.2)] hover:shadow-[0_0_0_1px_rgba(239,68,68,0.5)] transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex h-2 w-2 items-center justify-center rounded-full bg-red-100">
                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60"></span>
                     <span className="relative h-1.5 w-1.5 rounded-full bg-red-600"></span>
                  </span>
                  <span className="relative text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
                    Community <span className="text-red-600 font-black">Driven</span>
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="bungee-regular text-5xl sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.05] tracking-tight text-black font-extrabold uppercase m-0 p-0 drop-shadow-sm"
                >
                  Shape the Future of <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 pb-2">
                    MST Chain
                    {/* Animated underline */}
                    <motion.svg 
                      className="absolute -bottom-1 left-0 w-full h-4 text-red-500/30"
                      viewBox="0 0 100 10" preserveAspectRatio="none"
                    >
                       <motion.path 
                         d="M0 5 Q 50 10 100 5" 
                         fill="none" 
                         stroke="currentColor" 
                         strokeWidth="4"
                         strokeLinecap="round"
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                       />
                    </motion.svg>
                  </span>
                </motion.h1>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="mt-6 flex gap-4 text-gray-600 max-w-xl text-lg md:text-xl leading-relaxed font-medium"
                >
                  <div className="w-1.5 rounded-full bg-gradient-to-b from-red-500 to-red-200 shrink-0" />
                  <p>
                    Empowering the community through decentralized decision-making. MST Chain&apos;s DAO ensures every stakeholder has a voice in the network&apos;s evolution. From grants to protocol upgrades, we build with <strong className="text-gray-900">transparency and accountability</strong>.
                  </p>
                </motion.div>
              </div>

              {/* Right Visual */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.25 }}
                className="relative w-full mt-12 lg:mt-0"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-red-500/20 via-transparent to-red-400/10 blur-3xl -z-10" />
                
                <motion.div 
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-[300px] md:h-[400px] lg:h-[480px] w-full rounded-[2rem] border border-red-200/50 bg-white/40 p-3 shadow-2xl backdrop-blur-sm overflow-hidden group"
                >
                  <div className="relative h-full w-full rounded-xl overflow-hidden border border-red-100/50 bg-black">
                    <Image
                      src="/dao/DAO.jpg"
                      alt="DAO Hero"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                      priority
                      sizes="(min-width: 1024px) 600px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>


              </motion.div>

            </div>
          </section>

          {/* 2. BACKBONE SECTION */}
          <section className="py-12 px-2 bg-gray-50/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img src="/dao/Decentralized Auto- Square.jpg" alt="Backbone" className="w-full h-full object-cover" />
                </motion.div>

                <div>
                  <h2 className="bungee-regular text-3xl sm:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                    Decentralized <span className="text-red-500">Autonomous</span> Organization
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((item, i) => (
                      <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-red-50 text-red-500">
                          <item.icon size={22} />
                        </div>
                        <h3 className="bungee-regular text-xl sm:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. PROOF SECTION */}
          <section className="py-32 px-6 relative bg-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-50/50 via-transparent to-transparent opacity-60 pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold tracking-widest uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Consensus Mechanism
                </div>
                <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-black font-extrabold uppercase mb-6">
                  Governance Built Into <br className="hidden md:block" /> The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Blockchain</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">The secure, transparent, and decentralized consensus mechanism that powers the MST Blockchain.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { num: "01", title: "Community Driven", text: "MST Chain's DAO lets the community shape the future of the network.", icon: FaUsers },
                  { num: "02", title: "Open Proposals", text: "Validators, developers, and token holders can submit proposals.", icon: FaFileAlt },
                  { num: "03", title: "Democratic Voting", text: "Every decision, from upgrades to reward changes, is voted on.", icon: FaVoteYea },
                  { num: "04", title: "On-Chain Truth", text: "All votes are recorded on-chain for full transparency.", icon: FaLink }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-8 rounded-[2rem] border border-red-100/60 bg-white shadow-xl hover:shadow-[0_20px_40px_rgba(239,68,68,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    {/* Glowing Number Watermark */}
                    <div className="absolute -top-6 -right-6 text-[8rem] font-black text-red-50 opacity-50 group-hover:text-red-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 pointer-events-none select-none z-0">
                      {item.num}
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors duration-500 shadow-sm overflow-hidden relative">
                        <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <item.icon className="relative z-10 text-3xl text-red-500 group-hover:text-white transition-colors duration-500 group-hover:scale-110" />
                      </div>

                      <h3 className="bungee-regular text-xl text-black uppercase mb-3 group-hover:text-red-600 transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.text}</p>
                    </div>

                    {/* Bottom Gradient Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. STEP FLOW (How it works) */}
          <section className="py-32 px-6 bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-24">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold tracking-widest uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  The Process
                </div>
                <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-black font-extrabold uppercase m-0">
                  How DAO Works on <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">MST Chain</span>
                </h2>
              </div>

              <div className="relative">
                {/* Horizontal Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-red-100 via-red-300 to-red-100 z-0 rounded-full"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                  {[
                    { step: "Proposal Creation", desc: "A member submits a change idea.", icon: FaFileAlt },
                    { step: "Community Review", desc: "Proposal is discussed openly.", icon: FaUsers },
                    { step: "Voting Period", desc: "Token holders cast votes based on stake.", icon: FaVoteYea },
                    { step: "Implementation", desc: "Code is automatically updated on-chain.", icon: FaRocket }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: i * 0.15 }}
                      className="relative group"
                    >
                      {/* Step Node (Circle on the line) */}
                      <div className="w-20 h-20 mx-auto rounded-full bg-white border-4 border-white shadow-[0_10px_20px_rgba(239,68,68,0.15)] flex items-center justify-center relative z-20 mb-8 group-hover:scale-110 transition-transform duration-500">
                        {/* Connecting dot */}
                        <div className="w-full h-full rounded-full bg-red-50 group-hover:bg-red-600 border border-red-100 group-hover:border-red-600 transition-colors duration-500 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <item.icon className="text-red-500 text-2xl group-hover:text-white relative z-10 transition-colors duration-500" />
                        </div>
                        {/* Number Badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-red-500/30 ring-4 ring-white z-30 group-hover:-translate-y-1 transition-transform duration-500">
                          {i + 1}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="bg-white p-8 rounded-3xl border border-transparent group-hover:border-red-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(239,68,68,0.08)] transition-all duration-500 text-center relative overflow-hidden group-hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="bungee-regular text-xl lg:text-xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4 relative z-10 group-hover:text-red-600 transition-colors duration-300">{item.step}</h3>
                        <p className="text-gray-500 text-sm font-medium relative z-10 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. WHY DECENTRALIZATION */}
          <section className="py-16 md:py-20 px-6 bg-black text-white rounded-[3rem] mx-2 md:mx-6 my-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/20 via-black to-black opacity-80 pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="bungee-regular text-2xl sm:text-3xl lg:text-5xl leading-tight tracking-tight text-white font-extrabold uppercase mb-6 drop-shadow-lg">
                  Decentralization <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Matters</span>
                </h2>
                <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Transparency", icon: FaGem, desc: "Every decision is entirely public." },
                  { title: "Fairness", icon: FaBolt, desc: "No single entity controls it." },
                  { title: "Voice", icon: FaTrophy, desc: "Token holders always decide." },
                  { title: "Adaptability", icon: FaShieldAlt, desc: "Evolves with the community." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 hover:border-red-500/30 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(239,68,68,0.15)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-500 transition-colors duration-500 relative z-10">
                       <item.icon className="text-2xl text-red-500 group-hover:text-white transition-colors duration-500 group-hover:scale-110" />
                    </div>
                    
                    <h3 className="bungee-regular text-xl leading-tight tracking-tight text-white font-extrabold uppercase mb-3 relative z-10">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-medium relative z-10">{item.desc}</p>
                    
                    {/* Glowing bottom line */}
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. WHAT CAN BE DECIDED */}
          <section className="py-24 px-6 relative bg-white overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
              <div className="mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold tracking-widest uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Voting Power
                </div>
                <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">
                  What Can Be Decided Through <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">MST DAO?</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { title: "Block Rewards", icon: FaCoins },
                  { title: "Validator Req.", icon: FaUserCheck },
                  { title: "Ecosystem Fund", icon: FaLayerGroup },
                  { title: "Fee Structures", icon: FaPercentage },
                  { title: "Protocol Upgrades", icon: FaRocket }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.1 }}
                    className="group relative h-48 md:h-56 rounded-3xl border border-red-100/60 bg-white shadow-lg hover:shadow-[0_20px_40px_rgba(239,68,68,0.12)] hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center p-4 md:p-6"
                  >
                    {/* Background Icon Watermark */}
                    <item.icon className="absolute -bottom-4 -right-4 text-[6rem] text-red-50 opacity-40 group-hover:text-red-100 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 pointer-events-none z-0" />

                    <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-500 overflow-hidden shadow-sm">
                      <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      <item.icon className="relative z-10 text-xl md:text-2xl text-red-500 group-hover:text-white transition-colors duration-500 group-hover:scale-110" />
                    </div>

                    <p className="bungee-regular text-xs md:text-sm lg:text-base font-bold text-gray-800 uppercase text-center relative z-10 group-hover:text-red-600 transition-colors duration-300">
                      {item.title}
                    </p>

                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. YOUR VOTE SECTION */}
          <section className="py-20 px-6 relative max-w-7xl mx-auto mb-10 text-center">
            <h2 className="bungee-regular text-3xl sm:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-black font-extrabold uppercase mb-4">
              Your Vote,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Your Voice</span>
            </h2>
            <p className="text-gray-500 font-medium mb-16 max-w-2xl mx-auto text-lg">
              Participating in governance is simple. Start shaping the future today.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { text: "Hold MST tokens.", icon: FaCoins },
                { text: "Connect your wallet.", icon: FaLink },
                { text: "View active proposals.", icon: FaUsers },
                { text: "Cast your vote.", icon: FaVoteYea }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:border-red-100 hover:shadow-[0_20px_40px_rgba(239,68,68,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center justify-center min-h-[240px]"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-500 relative shadow-sm">
                    <step.icon className="text-gray-400 text-2xl group-hover:text-white transition-colors duration-500 relative z-10 group-hover:scale-110" />
                  </div>
                  
                  <div className="text-gray-900 font-extrabold uppercase tracking-widest text-xs mb-3 group-hover:text-red-500 transition-colors">
                    Step 0{idx + 1}
                  </div>
                  <div className="text-gray-500 font-medium text-base text-center leading-relaxed">
                    {step.text}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}