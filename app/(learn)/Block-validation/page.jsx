'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGem, FaBolt, FaTrophy, FaShieldAlt, FaUserSlash, FaNetworkWired } from "react-icons/fa";
import { ShieldCheck, UserX, Network } from "lucide-react";

export default function BlockValidationPage() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black font-poppins selection:bg-[#FF2D2D] selection:text-white overflow-x-hidden">
      {/* Theme Background Orbits */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[5%] left-[5%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
        >
          <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute left-[15%] top-[15%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF2D2D]"></span>
            </span>
            <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-500/50 uppercase">MST BLOCKCHAIN</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute left-[30%] top-[25%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500/20 pointer-events-none"
        >
          <div className="h-20 w-20 rounded-full border-2 border-red-500/10" />
          <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
        >
          <div className="absolute top-[18%] left-[8%] h-[8px] w-[8px] rounded-full bg-[#FF2D2D] shadow-[0_0_15px_#ff2d2d]" />
        </motion.div>
      </div>

      <div className="relative z-10">
        <main className="max-w-[1400px] mx-auto px-6 md:px-12">

          {/* 🔴 HERO SECTION */}
          <section className="min-h-[85vh] flex flex-col justify-center pt-32 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                className="text-left"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-[0.3em] mb-8 shadow-sm">

                </div>

                <h1 className="bungee-regular text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-black font-extrabold uppercase mb-6">
                  How Blocks Are <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D2D] via-red-600 to-rose-500">Validated</span>
                </h1>

                <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-10">
                  MST Chain&apos;s validation protocol ensures that every transaction is processed with maximum integrity. From the moment a transaction is broadcast to its inclusion in the final, immutable block, our network remains <span className="text-red-600 font-semibold">secure</span>, <span className="text-red-600 font-semibold">fast</span>, and <span className="text-red-600 font-semibold">transparent</span>—powering the next generation of decentralized trust.
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full max-w-[520px] h-[460px] rounded-[2rem] border border-black shadow-xl overflow-hidden bg-white group">
                  <Image
                    src="/block-validation/How-Blocks-Validate.jpg"
                    alt="Block validation visual"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 🔴 BACKBONE SECTION */}
          <section className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideInLeft}
                viewport={{ once: true, margin: "-50px" }}
              >
                <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Core Process</span>
                <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase mb-8">
                  The <span className="text-[#FF2D2D]">Backbone</span> of MST
                </h2>

                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Every transaction must be checked before joining the blockchain.",
                    "Validators are trusted nodes that do this verification.",
                    "Once approved, transactions are grouped into a block and sealed forever."
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="group flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 shadow-sm transition-all duration-300 hover:border-[#FF2D2D] hover:shadow-md hover:from-red-500/20 hover:-translate-y-1"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-black flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#FF2D2D] group-hover:border-[#FF2D2D] group-hover:text-white transition-colors">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <p className="text-zinc-900 text-sm leading-relaxed font-medium group-hover:text-black transition-colors mt-2">
                        {text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-black shadow-xl group"
                initial="hidden"
                whileInView="visible"
                variants={slideInRight}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Image
                  src="/block-validation/Backbone-of-MST-Square.jpg"
                  alt="Backbone of MST Blockchain"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </section>

          {/* 🔴 PROOF SECTION */}
          <section className="py-24 border-t border-slate-100">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Consensus</span>
              <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4">
                Proof of <span className="text-[#FF2D2D]">Staked Authority</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-medium max-w-2xl mx-auto uppercase tracking-widest">
                The mechanism powering MST Blockchain
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { num: "01", text: "Combines staking + identity verification" },
                { num: "02", text: "Only selected validators create blocks" },
                { num: "03", text: "Selection based on stake & reputation" },
                { num: "04", text: "Ensures fast blocks & low fees" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative flex flex-col p-6 sm:p-8 rounded-3xl bg-white border border-black shadow-sm transition-all duration-500 hover:border-[#FF2D2D] hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="text-[#FF2D2D] text-3xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity text-center">
                    {item.num}
                  </div>
                  <p className="text-black font-mono text-md text-center leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* 🔴 STEP FLOW */}
          <section className="py-24 border-t border-slate-100">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Workflow</span>
              <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4">
                How a <span className="text-[#FF2D2D]">Block is Born</span>
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  step: "Transaction Submission",
                  desc: "User sends transaction → goes into pending list (mempool).",
                },
                {
                  step: "Validator Selection",
                  desc: "System picks the validator for this block.",
                },
                {
                  step: "Transaction Verification",
                  desc: "Validator checks balances, signatures, and smart contract results.",
                },
                {
                  step: "Block Creation",
                  desc: "Valid transactions are bundled into a new block.",
                },
                {
                  step: "Block Broadcasting",
                  desc: "Block is shared with all validators for confirmation.",
                },
                {
                  step: "Finalization",
                  desc: "Block is added to the blockchain and can’t be changed.",
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative flex flex-col p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm transition-all duration-500 hover:border-[#FF2D2D] hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] border border-black flex items-center justify-center mb-6 text-black font-bold transition-all duration-500 group-hover:bg-[#FF2D2D] group-hover:text-white group-hover:border-[#FF2D2D]">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg uppercase tracking-wider text-black mb-3 transition-colors group-hover:text-[#FF2D2D]">
                    {item.step}
                  </h3>
                  <p className="text-zinc-700 text-[16px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* 🔴 WHY VALIDATORS */}
          <section className="py-24 border-t border-slate-100">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Incentives</span>
              <h2 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4">
                Why <span className="text-[#FF2D2D]">Validators</span> Participate
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  title: "Block Reward",
                  desc: "Earn native coins for validating blocks.",
                  icon: FaGem
                },
                {
                  title: "Transaction Fees",
                  desc: "Receive fees from processed transactions.",
                  icon: FaBolt
                },
                {
                  title: "Reputation",
                  desc: "Build trust and authority in the network.",
                  icon: FaTrophy
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative flex flex-col p-8 md:p-10 rounded-3xl bg-white border border-black shadow-sm transition-all duration-500 hover:border-[#FF2D2D] hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FAFAFA] border border-black flex items-center justify-center mb-6 text-black transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF2D2D] group-hover:text-white group-hover:border-[#FF2D2D]">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-xl uppercase tracking-wider text-black mb-3 transition-colors group-hover:text-[#FF2D2D]">
                    {item.title}
                  </h3>
                  <p className="text-zinc-700 text-[16px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* 🔴 TRUST SECTION */}
          <section className="py-24 border-t border-slate-100 mb-16">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="bungee-regular text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-black font-extrabold uppercase mb-6">
                Trust is Built Into <br />
                <span className="text-[#FF2D2D]">Every Block</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-medium max-w-xl mx-auto uppercase tracking-widest">
                Security, transparency, and decentralization working in harmony
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  title: "Double-spending is prevented",
                  icon: ShieldCheck
                },
                {
                  title: "Bad validators are penalized",
                  icon: UserX
                },
                {
                  title: "Decentralized & secure network",
                  icon: Network
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative flex flex-col items-center text-center p-10 rounded-[2rem] bg-black border border-black transition-all duration-500 hover:border-[#FF2D2D] hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF2D2D] group-hover:border-[#FF2D2D]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-white transition-colors group-hover:text-[#FF2D2D]">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </section>

        </main>
      </div>
    </div>
  );
}