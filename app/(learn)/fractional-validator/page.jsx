"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/navbar/Navbar";
import {
  FaUserPlus,
  FaCreditCard,
  FaCube,
  FaShieldAlt,
  FaCoins,
  FaServer,
  FaSeedling,
  FaTerminal,
  FaChartLine,
  FaTachometerAlt,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SupplyChainPage() {
  return (
    <>

      <main className="text-gray-900 overflow-hidden bg-white z-0 relative">

        {/* Global orbital animated background */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Orbit 1: Inner Ring */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center"
          >
            <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />

            <motion.div
              animate={{ rotate: [-360, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-[10%] left-[10%] flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">Use Cases</span>
            </motion.div>
          </motion.div>

          {/* Orbit 2: Middle Dashed Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center"
          >
            <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />

            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-500 to-red-200" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">9+ Active Nodes</span>
            </motion.div>
          </motion.div>

          {/* Orbit 3: Outer Faint Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
            >
              <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus</span>
            </motion.div>
          </motion.div>

          {/* Small floating local element */}
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full hidden lg:flex items-center justify-center opacity-60"
          >
            <div className="w-16 h-16 border border-red-500/20 rounded-full" />
            <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
          </motion.div>
        </div>

        {/* 🔴 BACKGROUND WATERMARK */}
        <div className="absolute top-32 left-0 w-full overflow-hidden pointer-events-none flex justify-center z-0 opacity-[0.02] select-none">
          <h1 className="text-[18vw] sm:text-[16vw] font-black text-black whitespace-nowrap leading-none tracking-tighter">
            VALIDATOR
          </h1>
        </div>

        {/* 🔴 HERO */}
        <section className="relative pt-36 pb-28 px-6 min-h-[85vh] flex items-center bg-transparent">
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-8 items-center w-full">
            
            {/* Left Content */}
            <div className="flex flex-col items-start pr-4 pt-7">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative mb-6 inline-flex items-center gap-3 rounded-full bg-white px-3 py-1.5 shadow-[0_0_0_1px_rgba(239,68,68,0.2)] hover:shadow-[0_0_0_1px_rgba(239,68,68,0.5)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-100">
                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60"></span>
                   <span className="relative h-1.5 w-1.5 rounded-full bg-red-600"></span>
                </span>
                <span className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800">
                  Zero Hardware <span className="text-red-600 font-black">Required</span>
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bungee-regular text-5xl sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] tracking-tight text-black font-extrabold uppercase m-0 p-0 drop-shadow-sm"
              >
                Own a Piece of MST <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 pb-2">
                  Blockchain
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
                className="mt-6 flex gap-4"
              >
                <div className="w-1.5 rounded-full bg-gradient-to-b from-red-500 to-red-200" />
                <p className="text-gray-600 max-w-xl text-lg md:text-xl leading-relaxed font-medium">
                  Democratizing network security through fractional participation. MST Chain allows you to earn validator rewards by owning a share of a high-performance node. Lower the barrier to entry with <strong className="text-gray-900">no technical expertise needed</strong>, and a seamless, automated staking process designed for everyone.
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
                className="relative h-[250px] md:h-[300px] lg:h-[360px] w-full rounded-[2rem] border border-red-200/50 bg-white/40 p-3 shadow-2xl backdrop-blur-sm overflow-hidden group"
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden border border-red-100/50">
                  <Image
                    src="/fractional-validator/Buying a piece of block.png"
                    alt="Fractional validator"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(min-width: 1024px) 600px, 100vw"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>


            </motion.div>

          </div>
        </section>

        {/* 🔴 PROCESS SECTION */}
        <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto overflow-hidden">
          <h2 className="bungee-regular text-3xl sm:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-12 p-0 text-center md:text-left">
            From <span className="text-red-600">Sign-Up</span> to Rewards in Minutes
          </h2>

          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="group relative rounded-3xl border border-red-100 bg-white p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(239,68,68,0.1)] hover:border-red-300 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-red-50 border border-red-100 mb-8 group-hover:bg-red-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                <FaUserPlus className="text-2xl text-red-500 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <div className="relative z-10">
                <h3 className="bungee-regular text-2xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4 group-hover:text-red-700 transition-colors duration-300">
                  Create <span className="text-red-500 transition-colors">Account</span>
                </h3>
                <p className="text-gray-600 text-lg group-hover:text-gray-800 transition-colors duration-300">
                  Sign up on our portal and complete KYC verification.
                </p>
              </div>

              <div className="absolute -right-4 -bottom-8 text-[10rem] leading-none font-black text-red-50 opacity-50 group-hover:text-red-100 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none z-0">
                1
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="relative rounded-xl border border-red-500/20 h-64 overflow-hidden"
            >
              <Image
                src="/fractional-validator/Create Account-Banner.png"
                alt="Create account"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="relative rounded-xl border border-red-500/20 h-64 order-2 md:order-1 overflow-hidden"
            >
              <Image
                src="/fractional-validator/Make Payment-Banner.jpg"
                alt="Make payment"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="order-1 md:order-2 group relative rounded-3xl border border-red-100 bg-white p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(239,68,68,0.1)] hover:border-red-300 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-red-50 border border-red-100 mb-8 group-hover:bg-red-600 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm">
                <FaCreditCard className="text-2xl text-red-500 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <div className="relative z-10">
                <h3 className="bungee-regular text-2xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4 group-hover:text-red-700 transition-colors duration-300">
                  Make <span className="text-red-500 transition-colors">Payment</span>
                </h3>
                <p className="text-gray-600 text-lg group-hover:text-gray-800 transition-colors duration-300">
                  Pay securely in your preferred currency.
                </p>
              </div>

              <div className="absolute -right-4 -bottom-8 text-[10rem] leading-none font-black text-red-50 opacity-50 group-hover:text-red-100 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none z-0">
                2
              </div>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="group relative rounded-3xl border border-red-100 bg-white p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(239,68,68,0.1)] hover:border-red-300 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-red-50 border border-red-100 mb-8 group-hover:bg-red-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                <FaCube className="text-2xl text-red-500 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <div className="relative z-10">
                <h3 className="bungee-regular text-2xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4 group-hover:text-red-700 transition-colors duration-300">
                  Own Your <span className="text-red-500 transition-colors">Fraction</span>
                </h3>
                <p className="text-gray-600 text-lg group-hover:text-gray-800 transition-colors duration-300">
                  Get on-chain ownership and start earning validator rewards instantly.
                </p>
              </div>

              <div className="absolute -right-4 -bottom-8 text-[10rem] leading-none font-black text-red-50 opacity-50 group-hover:text-red-100 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none z-0">
                3
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="relative rounded-xl border border-red-500/20 h-64 overflow-hidden"
            >
              <Image
                src="/fractional-validator/Own Fraction-Banner.jpg"
                alt="Own your fraction"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* 🔴 WHY SECTION */}
        <section className="py-24 px-6 relative bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16 md:mb-20">
                <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0 inline-block relative">
                  Why <span className="text-red-600">Fractional</span> Validators?
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 md:w-24 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "On-Chain Ownership", text: "Fully on-chain ownership with transparent rewards.", icon: FaShieldAlt },
                  { title: "Block Rewards", text: "Receive a share of 200 MST block rewards.", icon: FaCoins },
                  { title: "Zero Hardware", text: "No expensive hardware or uptime needed.", icon: FaServer },
                  { title: "Start Small", text: "Start small, even 1 fraction gets you started.", icon: FaSeedling },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-8 rounded-3xl border border-red-100/60 bg-white shadow-xl hover:shadow-[0_20px_40px_rgba(239,68,68,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                    
                    {/* Interactive Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-red-50/50 border border-red-100 flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:rotate-[10deg] transition-all duration-500 shadow-sm relative overflow-hidden">
                      <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      <item.icon className="relative z-10 text-3xl text-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <h3 className="bungee-regular text-xl text-black uppercase mb-3 group-hover:text-red-600 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.text}</p>
                    
                    {/* Animated bottom border */}
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 🔴 DASHBOARD SECTION */}
        <section className="py-32 px-6 relative overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left side: Text & Features */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold tracking-widest uppercase w-max mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Easy Dashboard
              </div>

              <h2 className="bungee-regular text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] leading-[1.2] tracking-tight text-black font-extrabold uppercase mb-8 md:mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Blockchain Rewards</span> <br/> Without Technical Barriers
              </h2>

              <div className="space-y-4">
                {[
                  { icon: FaTerminal, title: "No command line or complex setup", desc: "Skip the technical hurdles and start earning immediately." },
                  { icon: FaTachometerAlt, title: "Simple web dashboard", desc: "Manage everything through an intuitive, user-friendly interface." },
                  { icon: FaChartLine, title: "Track rewards instantly", desc: "Monitor your performance and earnings in real-time." }
                ].map((feature, i) => (
                  <div key={i} className="group flex items-start gap-5 p-5 rounded-2xl border border-transparent hover:border-red-100 hover:bg-white hover:shadow-[0_10px_30px_rgba(239,68,68,0.08)] transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-red-50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <feature.icon className="text-2xl text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">{feature.title}</h4>
                      <p className="text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side: Dashboard Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] p-3 md:p-5 bg-gradient-to-br from-red-50 to-white border border-red-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group perspective-[1000px]"
            >
              {/* Internal container for the image to apply 3D transform */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white shadow-inner transform transition-transform duration-700 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[2deg] group-hover:scale-[1.03] transform-style-preserve-3d">
                <Image
                  src="/fractional-validator/Blockchain Rewards Dashboard.jpg"
                  alt="Blockchain rewards dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating element */}
              <div className="absolute right-0 md:-right-6 top-16 md:top-24 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-red-100 shadow-[0_20px_40px_rgba(239,68,68,0.15)] flex items-center gap-4 transform transition-all duration-700 translate-x-10 opacity-0 group-hover:-translate-x-10 group-hover:opacity-100">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shadow-inner">
                  <FaCoins />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Daily Reward</p>
                  <p className="text-lg font-black text-gray-900">+4.2 MST</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 🔴 CTA SECTION */}
        <section className="py-16 px-6 relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden bg-black text-center py-10 md:py-12 px-4 md:px-6 shadow-[0_20px_50px_rgba(239,68,68,0.2)] group"
          >
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/30 via-black to-black opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full mix-blend-screen group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute top-12 right-12 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full mix-blend-screen group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Floating Pill */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Limited Availability
              </div>

              <h2 className="bungee-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white font-extrabold uppercase mb-4 max-w-4xl drop-shadow-lg">
                Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Fraction</span> Today
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto mb-0 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                Validator node fractions are limited. Once sold out, rewards are permanently recorded on-chain. Don't miss your chance to earn.
              </p>


            </div>
            
            {/* Outline Glow */}
            <div className="absolute inset-0 border border-white/10 rounded-[3rem] pointer-events-none"></div>
          </motion.div>
        </section>

      </main>
    </>
  );
}