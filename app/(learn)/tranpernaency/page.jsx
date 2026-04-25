"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDatabase, FaFire, FaShieldAlt, FaWallet, FaGift, FaCog, FaCopy, FaExternalLinkAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function TransparencyPage() {
  return (
    <main className="relative bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden pt-16">

      {/* --- BACKGROUND ORBITAL ANIMATIONS --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Orbit 1: Inner Solid Ring */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[10%] left-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap uppercase">Use Cases</span>
          </motion.div>
        </motion.div>

        {/* Orbit 2: Middle Dashed Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-500 to-red-200" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap uppercase">9+ Active Nodes</span>
          </motion.div>
        </motion.div>

        {/* Orbit 3: Outer Faint Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
          >
            <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap uppercase">POSA Consensus</span>
          </motion.div>
        </motion.div>

        {/* Small floating local elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-40"
        >
          <div className="w-16 h-16 border border-red-500/20 rounded-full" />
          <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        {/* 🔴 BACKGROUND WATERMARK */}
        <div className="absolute top-28 left-0 w-full overflow-hidden pointer-events-none flex justify-center z-0 opacity-[0.02] select-none">
          <h1 className="text-[18vw] font-black text-black whitespace-nowrap leading-none tracking-tighter">
            TRANSPARENCY
          </h1>
        </div>

        {/* HERO */}
        <section className="relative pt-24 pb-20 px-6 min-h-[75vh] flex items-center bg-transparent z-10">
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
                  Real-Time <span className="text-red-600 font-black">Verification</span>
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bungee-regular text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] leading-[1.1] tracking-tight text-black font-extrabold uppercase m-0 p-0 drop-shadow-sm"
              >
                Transparency You <br className="hidden md:block" />
                Can Verify <span className="text-red-500">Live</span> on <br className="hidden md:block" />
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
                  Experience absolute clarity in the decentralized economy. MST Chain redefines trust by providing an immutable, real-time window into the network&apos;s heartbeat. Monitor every transaction, verify supply metrics, and track burn events with total confidence.
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
                    src="/transperancy/Transparency.jpg"
                    alt="Transparency hero"
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

        {/* COIN SUPPLY */}
        <section className="py-20 px-6 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Circulating Metrics
              </div>
              <div className="grid lg:grid-cols-2 gap-8 items-end">
                <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-black font-extrabold uppercase">
                  Building <span className="text-red-600">Trust</span> Through <br className="hidden md:block" /> Transparent Coin Supply
                </h2>
                <div className="flex gap-4 text-gray-600 text-lg md:text-xl font-medium border-l-2 border-red-500 pl-6 h-fit py-2">
                  <p>
                    The MST Blockchain provides a detailed breakdown of coin distribution across rewards, operations, and reserves. All data is verifiable on-chain for total peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  title: "Total Supply", 
                  label: "After latest burn", 
                  value: "8,401,387,459", 
                  unit: "MSTC",
                  icon: FaDatabase,
                },
                { 
                  title: "Most Recent Burn", 
                  label: "Manual on-chain event", 
                  value: "41,996,612,502", 
                  unit: "MSTC",
                  icon: FaFire,
                },
                { 
                  title: "Burn Address", 
                  label: "Dead wallet (Immutable)", 
                  value: "0x0000...0000", 
                  unit: "HEX",
                  icon: FaShieldAlt,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative py-6 px-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(239,68,68,0.1)] hover:-translate-y-3 transition-all duration-700 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-500 relative overflow-hidden shadow-sm">
                       <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                       <item.icon className="text-xl text-gray-400 group-hover:text-white transition-colors duration-500 relative z-10 group-hover:scale-110" />
                    </div>
                    <div className="text-right">
                       <p className="text-[9px] font-black tracking-widest text-gray-400 uppercase group-hover:text-red-500 transition-colors">{item.label}</p>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">{item.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-black text-black tracking-tighter group-hover:text-red-600 transition-colors break-all">
                      {item.value}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.unit}</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-tighter">Verified On-Chain</span>
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WALLETS */}
        <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
            
            {/* Header Content */}
            <div className="lg:sticky lg:top-24 mb-10 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-black tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Official Treasury
              </div>
              <h2 className="bungee-regular text-4xl md:text-5xl leading-[1.1] tracking-tight text-black font-extrabold uppercase mb-6">
                Every Major <br /> Wallet, <span className="text-red-600">Trackable</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-md">
                We maintain total transparency by providing the public addresses of our primary network wallets. You can monitor the movement of funds in real-time on any MST block explorer.
              </p>
              

            </div>

            {/* Wallet Cards Stack */}
            <div className="grid gap-6">
              {[
                { 
                  name: "Master Wallet", 
                  address: "0xA93c8f6922159954E26C6C6011d3ED7dd166E25D",
                  desc: "Primary foundation reserve and governance wallet.",
                  icon: FaWallet,
                  tag: "Foundation"
                },
                { 
                  name: "Reward Wallet", 
                  address: "0x7a4d434E68E018e3679F64DeA4F0f02E20C6809",
                  desc: "Dedicated to validator rewards and staking incentives.",
                  icon: FaGift,
                  tag: "Rewards"
                },
                { 
                  name: "Operational Wallet", 
                  address: "0x7a4d434E68E018e3679F64DeA4F0f02E20C6809",
                  desc: "Funds network maintenance and ecosystem growth.",
                  icon: FaCog,
                  tag: "Ops"
                },
              ].map((wallet, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group py-5 px-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-red-100 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <wallet.icon className="text-xl" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{wallet.name}</h3>
                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-[9px] font-black text-gray-500 uppercase tracking-tighter">
                          {wallet.tag}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2 line-clamp-1">{wallet.desc}</p>
                      
                      <div className="flex items-center gap-2 p-2 px-3 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-white transition-colors">
                        <code className="text-[10px] md:text-xs text-gray-600 font-medium break-all flex-grow leading-none">
                          {wallet.address}
                        </code>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors bg-white rounded-lg shadow-sm">
                          <FaCopy className="text-[10px]" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Background Accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* TABLE */}
        {/* TABLE SECTION */}
        <section className="py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-red-50/30 blur-[120px] -z-10 rounded-full" />

          <div className="max-w-7xl mx-auto">
            {/* Table Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-4"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800">
                  Network <span className="text-green-600">Live Status</span>
                </span>
              </motion.div>
              
              <h2 className="bungee-regular text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4">
                Validator <span className="text-red-600 font-black">Node Overview</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl mx-auto">
                Real-time tracking of MST Chain consensus nodes. Verify performance and uptime of each validator.
              </p>
            </div>

            {/* Premium Table Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] border border-gray-100 bg-white/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="py-6 px-8 text-left text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100">Validator</th>
                      <th className="py-6 px-8 text-left text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100">Address</th>
                      <th className="py-6 px-8 text-center text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100">Status</th>
                      <th className="py-6 px-8 text-right text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <motion.tr 
                        key={idx} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group hover:bg-white transition-all duration-300"
                      >
                        <td className="py-5 px-8">
                          <div className="flex items-center gap-4">
                            <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black text-xs group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                              0{idx}
                            </div>
                            <span className="font-bold text-gray-900 group-hover:text-red-600 transition-colors text-sm">Validator Node {idx}</span>
                          </div>
                        </td>
                        <td className="py-5 px-8">
                          <div className="flex items-center gap-3">
                            <code className="text-[11px] text-gray-500 font-medium tracking-tight bg-gray-50 px-3 py-1.5 rounded-lg group-hover:bg-gray-100 transition-colors">0x152...2fqwd2</code>
                            <button className="p-2 text-gray-300 hover:text-red-600 transition-colors">
                               <FaCopy className="text-[9px]" />
                            </button>
                          </div>
                        </td>
                        <td className="py-5 px-8">
                          <div className="flex justify-center">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[9px] font-black text-green-600 uppercase tracking-widest border border-green-100">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                              Active
                            </span>
                          </div>
                        </td>
                        <td className="py-5 px-8 text-right">
                          <button className="px-5 py-2 rounded-full bg-black text-white text-[9px] font-black uppercase tracking-widest hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg active:scale-95">
                            View Node
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA - REDESIGNED */}
        <section className="py-24 md:py-32 lg:py-40 px-6 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gray-50/50 -z-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-50 rounded-full blur-[120px] -z-10 opacity-60" />
          
          {/* Giant Watermark Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none -z-10 select-none overflow-hidden">
            <span className="bungee-regular text-[8rem] sm:text-[15rem] md:text-[25rem] font-black text-black/[0.02] leading-none tracking-tighter uppercase whitespace-nowrap">
              EXPLORER
            </span>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-white text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-2xl shadow-black/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Public Ledger Access
              </div>

              <h2 className="bungee-regular text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mb-8">
                Verify Everything <br className="hidden md:block" /> <span className="text-red-600">Yourself</span>
              </h2>

              <p className="text-gray-500 text-lg md:text-xl lg:text-2xl font-medium mb-12 max-w-4xl mx-auto leading-relaxed px-4 italic opacity-80">
                Experience total decentralized transparency. Access all network data <br className="hidden lg:block" /> directly on the public ledger through our immersive block explorer.
              </p>

              <div className="flex items-center justify-center">
                <a
                  href="https://mstscan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 px-14 py-8 bg-red-600 text-white rounded-full text-sm font-black uppercase tracking-widest shadow-[0_20px_50px_rgba(239,68,68,0.3)] hover:shadow-[0_30px_70px_rgba(239,68,68,0.5)] hover:-translate-y-1 transition-all duration-500 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10">Launch MST Explorer</span>
                  <FaExternalLinkAlt className="relative z-10 text-xs group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Corner Orbits */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 border border-red-100 rounded-full opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-red-200 rounded-full opacity-30" />
        </section>
      </div>
    </main>
  );
}