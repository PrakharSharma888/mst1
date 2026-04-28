"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/navbar/Navbar";
import { FaCode, FaCube, FaBolt, FaCoins, FaLink, FaUsers, FaImages, FaGamepad, FaFileAlt, FaShieldAlt, FaRocket } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SolidityPage() {
  return (
    <>
      {/* 🌌 Animated Orbital Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        {/* Orbit 1: Inner Red Ring */}
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
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-400"></span>
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">Use Cases</span>
          </motion.div>
        </motion.div>

        {/* Orbit 2: Middle Dashed Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          <div className="absolute w-2 h-2 bg-red-400 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />

          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-400 to-red-200" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">9+ Active Nodes</span>
          </motion.div>
        </motion.div>

        {/* Orbit 3: Outer Faint Ring */}
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

        {/* Small floating local elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
        >
          <div className="w-16 h-16 border border-red-500/20 rounded-full" />
          <div className="absolute w-1.5 h-1.5 bg-red-400 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
        </motion.div>
      </div>

      <Navbar />

      <main className="text-gray-900 relative z-10 bg-white relative">
        {/* 🔴 BACKGROUND WATERMARK */}
        <div className="absolute top-28 left-0 w-full overflow-hidden pointer-events-none flex justify-center z-0 opacity-[0.02] select-none">
          <h1 className="text-[16vw] sm:text-[18vw] font-black text-black whitespace-nowrap leading-none tracking-tighter">
            SOLIDITY
          </h1>
        </div>

        {/* 🔴 HERO */}
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
                  Smart <span className="text-red-600 font-black">Contracts</span>
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bungee-regular text-5xl sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.05] tracking-tight text-black font-extrabold uppercase m-0 p-0 drop-shadow-sm"
              >
                Solidity Powering <br />
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
                  Master the foundation of decentralized innovation. Solidity is the primary high-level language for implementing smart contracts on the MST Chain. It empowers developers to build secure, transparent, and robust decentralized applications (dApps) that redefine trust and automation in the digital world.
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
              {/* Outer glow - Enhanced for better blending */}
              <div className="absolute inset-0 -m-8 rounded-[3rem] bg-gradient-to-br from-red-600/30 via-rose-500/10 to-transparent blur-[100px] -z-10" />
              
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-[300px] md:h-[400px] lg:h-[480px] w-full rounded-[2rem] border border-red-500/30 bg-white/40 p-3 shadow-2xl backdrop-blur-sm overflow-hidden group"
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden border border-red-100/50 bg-gradient-to-b from-gray-900 to-black">
                  <Image
                    src="/solidity/Solidity Powering Smart Contracts.jpg"
                    alt="Solidity hero"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
                    priority
                    sizes="(min-width: 1024px) 600px, 100vw"
                  />
                  {/* Blending Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* 🔴 ABOUT SOLIDITY */}
        <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Core Technology
            </div>
            <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase mb-6 m-0 p-0">
              The Language of <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Smart Contracts</span>
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Standard",
                text: "Solidity is the most widely used programming language for smart contracts across Web3.",
                icon: FaCube
              },
              {
                title: "Developer Friendly",
                text: "It’s a high-level, object-oriented language highly inspired by JavaScript and C++.",
                icon: FaCode
              },
              {
                title: "EVM Optimized",
                text: "Compiled directly into highly-efficient EVM bytecode running natively on the blockchain.",
                icon: FaBolt
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 rounded-[2rem] border border-red-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(239,68,68,0.08)] hover:-translate-y-2 hover:border-red-300 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-500 relative shadow-sm overflow-hidden">
                  <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <item.icon className="text-gray-400 text-2xl group-hover:text-white transition-colors duration-500 relative z-10 group-hover:scale-110" />
                </div>

                <h3 className="bungee-regular text-xl font-extrabold uppercase tracking-tight text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 font-medium leading-relaxed relative z-10">
                  {item.text}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔴 FEATURES */}
        <section className="py-20 px-6 bg-gray-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
               <div className="max-w-2xl">
                  <h2 className="bungee-regular text-3xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">
                    Familiar, <span className="text-red-600">Compatible</span>, & Developer-Friendly
                  </h2>
                  <p className="text-gray-500 mt-4 font-medium">Build with the tools you already know and love.</p>
               </div>
               <div className="h-px flex-grow bg-gray-200 mx-8 hidden lg:block mb-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "EVM Compatible", desc: "Ethereum contracts work on MST Chain.", icon: FaBolt },
                { title: "Large Community", desc: "Access tools and open-source support.", icon: FaUsers },
                { title: "Secure & Proven", desc: "Used by Ethereum, BNB, Polygon.", icon: FaShieldAlt },
                { title: "Rich Libraries", desc: "Use OpenZeppelin and more.", icon: FaCube },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-[2rem] border border-red-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(239,68,68,0.08)] hover:border-red-400 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon className="text-xl" />
                  </div>
                  <h4 className="bungee-regular text-lg text-black uppercase mb-2 group-hover:text-red-600 transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔴 USE CASES */}
        <section className="py-24 px-6 relative overflow-hidden bg-white">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-50 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Possibilities
              </div>
              <h2 className="bungee-regular text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mb-6">
                Let’s Redefine <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">The Future</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "DeFi Protocols", icon: FaCoins, desc: "Build lending markets, decentralized exchanges, and yield aggregators with Solidity.", num: "01" },
                { title: "Token Standards", icon: FaLink, desc: "Deploy industry-standard ERC-20 and ERC-721 contracts for seamless asset management.", num: "02" },
                { title: "Governance", icon: FaUsers, desc: "Empower communities with on-chain DAO systems and transparent voting mechanisms.", num: "03" },
                { title: "Digital Markets", icon: FaImages, desc: "Create high-performance NFT marketplaces with complex trading logic.", num: "04" },
                { title: "Web3 Gaming", icon: FaGamepad, desc: "Power immersive metaverse experiences and play-to-earn economies on-chain.", num: "05" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-10 rounded-[2.5rem] bg-white border border-red-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(239,68,68,0.12)] hover:border-red-300 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
                >
                  {/* Number Watermark */}
                  <div className="absolute -bottom-4 -left-2 text-[8rem] font-black text-gray-50 opacity-100 group-hover:text-red-50 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none z-0">
                    {item.num}
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500 shadow-sm relative overflow-hidden">
                       <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                       <item.icon className="text-3xl text-red-500 group-hover:text-white transition-colors duration-500 relative z-10 group-hover:scale-110" />
                    </div>

                    <h3 className="bungee-regular text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-600 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}

              {/* Final CTA Card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-red-600 to-red-500 border border-red-400 shadow-[0_20px_40px_rgba(239,68,68,0.2)] flex flex-col items-center justify-center text-center overflow-hidden hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),transparent)]"></div>
                <h3 className="bungee-regular text-2xl text-white uppercase mb-4 relative z-10 leading-tight">Your Vision <br/> Our Chain</h3>
                <p className="text-red-50 text-sm font-medium relative z-10 max-w-[200px]">The possibilities with Solidity on MST are truly limitless.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 🔴 LEARNING RESOURCES */}
        <section className="py-24 px-6 max-w-7xl mx-auto relative">
          <div className="mb-16">
             <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">
               Start Your <span className="text-red-600">Journey</span>
             </h2>
             <div className="w-16 h-1 bg-red-600 rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { name: "CryptoZombies", desc: "Learn by building a zombie game.", icon: FaGamepad },
              { name: "Solidity by Example", desc: "Code-first learning approach.", icon: FaCode },
              { name: "Ethereum Dev Docs", desc: "Official deep-dive documentation.", icon: FaFileAlt },
              { name: "Best Practices", desc: "Security and optimization tips.", icon: FaShieldAlt },
            ].map((resource, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] border border-red-100 bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-red-400 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <resource.icon className="text-2xl" />
                </div>
                <h3 className="bungee-regular text-lg text-black uppercase mb-3 transition-colors group-hover:text-red-600">{resource.name}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed flex-grow">{resource.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Massive CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden bg-black text-white shadow-2xl border border-white/10 group"
          >
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16 lg:p-20 relative z-10">
              <div>
                <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-white font-extrabold uppercase mb-6">
                  Deploy Your First <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Smart Contract</span>
                </h2>
                <p className="text-gray-400 max-w-xl text-lg leading-relaxed font-medium">
                  MST Chain fully supports Solidity. You can use standard tools like <span className="text-white">Remix, Hardhat, or Truffle</span> to build, test, and deploy with high efficiency.
                </p>
              </div>

              <div className="relative h-[300px] md:h-[400px] w-full">
                 <motion.div
                   animate={{ y: [-10, 10, -10] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                 >
                   <Image
                     src="/solidity/Smart Contract Banner.jpg"
                     alt="Smart Contract Banner"
                     fill
                     className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}