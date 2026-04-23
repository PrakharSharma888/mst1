"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/navbar/Navbar";

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

      <main className="text-gray-900 relative z-10">
        {/* 🔴 HERO */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold">
                <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">
                  Solidity <span className="text-red-500">Powering</span> Smart Contracts on MST Chain
                </h1>
              </h1>
              <p className="text-gray-500 mt-6 text-lg">
                The programming language that brings decentralized applications to life.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative h-80 md:h-[420px] border border-red-500/20 rounded-xl overflow-hidden bg-white shadow-xl"
            >
              <Image
                src="/solidity/solidity Hero-Banner.jpg"
                alt="Solidity hero"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* 🔴 ABOUT SOLIDITY */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-8 m-0 p-0">
            The Language of <span className="text-red-600">Smart Contracts</span> 
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Solidity is the most widely used programming language for smart contracts.",
              "It’s a high-level, object-oriented language inspired by JavaScript.",
              "Compiled into EVM bytecode running on blockchain.",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-red-600 bg-red-500 hover:bg-black hover:text-red-600 transition"
              >
                <p className="text-white text-center font-medium group-hover:text-red-600 transition-colors">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔴 FEATURES */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-8 m-0 p-0 transition-colors duration-300 hover:text-red-600">
              Familiar, <span className="text-red-600">Compatible</span>, and Developer-Friendly
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "EVM Compatible", desc: "Ethereum contracts work on MST Chain." },
                { title: "Large Community", desc: "Access tools and open-source support." },
                { title: "Secure & Proven", desc: "Used by Ethereum, BNB, Polygon." },
                { title: "Rich Libraries", desc: "Use OpenZeppelin and more." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-6 border border-red-600 rounded-xl bg-red-500 hover:bg-black hover:text-white transition"
                >
                  <h4 className="mb-3 font-bold text-white group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-red-100 text-sm group-hover:text-white transition-colors">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔴 USE CASES */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">Let’s Redefine The Future</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Decentralized Finance (DeFi)",
              "Token Standards (ERC-20, ERC-721)",
              "DAO Governance Systems",
              "NFT Marketplaces",
              "Gaming & Metaverse",
            ].map((title, i) => (
              <div
                key={i}
                className="p-10 rounded-2xl border border-red-500/20 bg-red-500/10 hover:bg-black hover:text-white hover:border-black transition group"
              >
                <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0 group-hover:text-red-500 transition-colors">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 🔴 LEARNING RESOURCES */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">Start Your Smart Contract Journey</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              "CryptoZombies",
              "Solidity by Example",
              "Ethereum Dev Docs",
              "Smart Contract Best Practices",
            ].map((resource, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 bg-gray-50 hover:bg-black hover:text-white hover:border-black transition cursor-pointer"
              >
                <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">{resource}</h3>
              </div>
            ))}
          </div>

          <div className=" ">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">Deploy Your First Smart Contract</h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              MST Chain fully supports Solidity. You can use standard tools like Remix, Hardhat, or Truffle to build, test, and deploy.
            </p>
            <button className="px-8 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-all transform hover:scale-105">
              Start Building →
            </button>

            <div className="h-80 border border-red-500/20 rounded-2xl overflow-hidden bg-white relative mt-12 shadow-2xl">
              <Image
                src="/solidity/Smart Contract Banner.jpg"
                alt="Smart Contract Banner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}