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
  FaShieldAlt
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
          <section className="min-h-screen flex items-center justify-center px-2 pt-16 pb-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                  <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                    DAO Governance <br />
                    <span className="text-red-500">MST Chain</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
                    The MST Blockchain for Grant Program transparent. DAO Governance lets the community shape the future of the network.
                  </p>
                  <div className="mt-10">
                    <button className="px-4 py-2 bg-red-500 text-white rounded-xl font-bold shadow-xl hover:bg-red-600 transition-all hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                  <div className="relative w-full h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-red-100">
                    <Image src="/dao/DAO.jpg" alt="DAO Hero" fill className="object-cover" priority />
                  </div>
                </motion.div>
              </div>
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
                  <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                    Decentralized <span className="text-red-500">Autonomous</span> Organization
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((item, i) => (
                      <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-red-50 text-red-500">
                          <item.icon size={22} />
                        </div>
                        <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. PROOF SECTION */}
          <section className="py-12 px-2">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">Governance <span className="text-red-500">Built</span> Into The <span className="text-red-500">Blockchain</span></h2>
                <p className="text-gray-400">The consensus mechanism that powers MST Blockchain</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { num: "01", text: "MST Chain's DAO lets the community shape the future of the network." },
                  { num: "02", text: "Validators, developers, and token holders can submit proposals." },
                  { num: "03", text: "Every decision — from upgrades to reward changes — is voted on." },
                  { num: "04", text: "All votes are recorded on-chain for full transparency." }
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="p-8 rounded-2xl border border-red-100 bg-white hover:border-red-500/50 transition-all">
                    <span className="text-3xl font-bold text-red-500/30 mb-4 block">{item.num}</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. STEP FLOW (How it works) */}
          <section className="py-12 px-2 bg-white/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 text-center">How DAO Works on <span className="text-red-500">MST Chain</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: "Proposal Creation", desc: "A member submits a change idea." },
                  { step: "Community Review", desc: "Proposal is discussed openly." },
                  { step: "Voting Period", desc: "Token holders cast votes based on stake." },
                  { step: "Implementation", desc: "Code is automatically updated on-chain." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-red-500/10 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center font-bold mb-4">{i+1}</div>
                    <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">{item.step}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. WHY DECENTRALIZATION */}
          <section className="py-12 px-2 bg-[#111] text-white rounded-[2rem] mx-2 my-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-red-500 font-extrabold uppercase mb-5 text-center">Decentralization Matters</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: "Transparency", icon: <FaGem />, desc: "Every decision is public." },
                  { title: "Fairness", icon: <FaBolt />, desc: "No single entity controls it." },
                  { title: "Voice", icon: <FaTrophy />, desc: "Token holders decide." },
                  { title: "Adaptability", icon: <FaShieldAlt />, desc: "Evolves with the community." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all group">
                    <div className="text-4xl text-red-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. WHAT CAN BE DECIDED (Grid Cards) */}
          <section className="py-12 px-2">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">What Can Be Decided Through <span className="text-red-500">MST DAO?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { title: "Block Rewards", icon: <FaCoins /> },
                  { title: "Validator Req.", icon: <FaUserCheck /> },
                  { title: "Ecosystem Fund", icon: <FaLayerGroup /> },
                  { title: "Fee Structures", icon: <FaPercentage /> },
                  { title: "Protocol Upgrades", icon: <FaRocket /> }
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-white border border-red-50 shadow-xl shadow-red-500/5">
                    <div className="text-3xl text-red-500 mb-4 flex justify-center">{item.icon}</div>
                    <p className="font-semibold text-sm">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. YOUR VOTE SECTION */}
          <section className="py-12 px-2 mb-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">Your Vote,<br />Your Voice</h2>
                <div className="space-y-6">
                  {["Hold MST tokens.", "Connect your wallet.", "View active proposals.", "Cast your vote."].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <div className="flex-1 border-b border-red-100 pb-3 text-gray-600 group-hover:text-black transition-colors">{step}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1730808822974-b21a29d64055?q=80&w=1032&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Vote UI" 
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}