'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGem, FaBolt, FaTrophy, FaShieldAlt, FaUserSlash, FaNetworkWired } from "react-icons/fa";
import Navbar from "@/app/components/navbar/Navbar";

export default function BlockValidationPage() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
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

      <main className="text-white overflow-hidden bg-white z-0 relative">
        {/* Background gradient effects */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        </div>

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
              <span className="text-[9px]  tracking-[0.2em] text-red-300 whitespace-nowrap">Use Cases</span>
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
              <span className="text-[10px]  tracking-[0.2em] text-red-400 whitespace-nowrap">9+ Active Nodes</span>
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
              <span className="text-[8px]  tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus</span>
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

        {/* 🔴 HERO SECTION */}
        <section className="min-h-screen relative flex items-center justify-center px-6 pt-32 pb-17 overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl -translate-x-1/2"
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            ></motion.div>
          </div>

          <div className="max-w-7xl mx-auto w-full z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                className="text-left"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                    <span className="text-extrabold text-black">How Blocks Are</span> <br />
                    <span className="relative">
                      <span className="relative z-10 text-red-500">
                        Validated
                      </span>
                    </span>
                    <br />
                    <span className="text-black">On MST Blockchain</span>
                  </h1>
                </motion.div>

                <motion.p
                  className="mt-6 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  From transaction to final block , <span className="text-red-400">secure</span>, <span className="text-red-400">fast</span>, and <span className="text-red-400">transparent</span>.
                </motion.p>

                <motion.div
                  className="mt-8 flex gap-4 justify-start flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-xl border border-red-500/50 bg-gradient-to-br from-red-500/10 to-red-500/5 backdrop-blur-xl text-red-500 font-bold text-base transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-xl shadow-lg shadow-red-500/0 group-hover:shadow-red-500/30 transition-shadow duration-300"></div>
                    <span className="relative flex items-center gap-2">
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <div className="relative w-full max-w-[520px] sm:max-w-[640px] h-[460px] rounded-3xl border border-red-500/30 overflow-hidden bg-gradient-to-b from-[#fbe1e2] via-[#f7d7d9] to-[#f3cbce] shadow-[0_20px_50px_rgba(239,68,68,0.15)]">
                  <Image
                    src="/block validation/How-Blocks-Validate.jpg"
                    alt="Block validation visual"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>

        </section>

        {/* 🔴 BACKBONE SECTION */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideInLeft}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  The Backbone of MST Blockchain
                </motion.h2>

                <motion.div
                  className="space-y-5"
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
                      className="group relative pl-6 py-4 rounded-lg px-4 transition-all duration-300 hover:bg-red-500/5"
                    >
                      <div className="absolute left-0 top-0 w-1->5 h-full bg-gradient-to-b from-red-500 via-red-500 to-transparent rounded-full group-hover:shadow-lg group-hover:shadow-red-500/30 transition-shadow duration-300"></div>
                      <p className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                variants={slideInRight}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Image
                  src="/block-validation/Backbone-of-MST-Square.jpg"
                  alt="Backbone of MST Blockchain"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 border border-red-500/30 rounded-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 🔴 PROOF SECTION */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                <span className="text-gray-700">Proof of</span>{" "}
                <span className="text-red-500">Staked Authority</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The consensus mechanism that powers MST Blockchain
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
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
                  className="group relative p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl hover:border-red-500/70 transition-all duration-500 overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-red-500/15 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/30 to-red-500/10 text-2xl font-bold text-red-500 mb-5 group-hover:from-red-500/50 group-hover:to-red-500/20 transition-all duration-300">
                      {item.num}
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-red-500/0 group-hover:shadow-red-500/40 transition-shadow duration-400 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🔴 STEP FLOW - VERTICAL TIMELINE */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                <span className="text-gray-700">Step-by-Step: How a</span>{" "}
                <span className="text-red-500">Block is Born</span>
              </h2>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    step: "Transaction Submission",
                    desc: "User sends transaction → goes into pending list (mempool).",
                    size: "sm:col-span-1 lg:col-span-2 h-[240px]"
                  },
                  {
                    step: "Validator Selection",
                    desc: "System picks the validator for this block.",
                    size: "sm:col-span-1 lg:col-span-1 h-[240px]"
                  },
                  {
                    step: "Transaction Verification",
                    desc: "Validator checks balances, signatures, and smart contract results.",
                    size: "sm:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-2 h-[240px]"
                  },
                  {
                    step: "Block Creation",
                    desc: "Valid transactions are bundled into a new block.",
                    size: "sm:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-2 h-[220px]"
                  },
                  {
                    step: "Block Broadcasting",
                    desc: "Block is shared with all validators for confirmation.",
                    size: "sm:col-span-1 lg:col-span-1 lg:col-start-3 lg:row-start-3 h-[220px]"
                  },
                  {
                    step: "Finalization",
                    desc: "Block is added to the blockchain and can’t be changed.",
                    size: "sm:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-3 h-[220px]"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`group relative rounded-2xl border border-red-500/30 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl p-7 md:p-8 transition-all duration-500 hover:from-white/20 hover:via-white/15 hover:border-red-500/70 hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)] overflow-hidden ${item.size}`}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/15 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative z-10 h-full flex flex-col gap-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-red-500/40 bg-gradient-to-br from-red-500/30 to-red-500/10 text-red-500 font-bold text-sm group-hover:from-red-500/50 group-hover:to-red-500/30 group-hover:border-red-500/60 transition-all duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <div className="flex-1 pt-1">
                        <h3 className="bungee-regular text-xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-4 group-hover:text-red-500 transition-all duration-500">
                          {item.step}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-500 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-red-500/0 group-hover:shadow-red-500/50 transition-shadow duration-500 pointer-events-none"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 🔴 WHY VALIDATORS SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                <span className="text-black">Why</span>{" "}
                <span className="text-red-500">Validators</span>{" "}
                <span className="text-black">Participate</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Understanding the incentives behind network security
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  title: "Block Reward",
                  desc: "Earn native coins for validating blocks.",
                  icon: <FaGem className="text-red-400" />
                },
                {
                  title: "Transaction Fees",
                  desc: "Receive fees from processed transactions.",
                  icon: <FaBolt className="text-red-400" />
                },
                {
                  title: "Reputation",
                  desc: "Build trust and authority in the network.",
                  icon: <FaTrophy className="text-red-400" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-3xl border border-red-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 hover:border-red-500/80 transition-all duration-500 p-8 md:p-10"
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl md:text-6xl mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/30 to-red-500/10 group-hover:from-red-500/50 group-hover:to-red-500/30 transition-all duration-300"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="bungee-regular text-2xl md:text-3xl leading-tight tracking-tight font-extrabold uppercase mb-4 text-white group-hover:text-red-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-red-500/0 group-hover:shadow-red-500/50 transition-shadow duration-400 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🔴 TRUST SECTION */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            ></motion.div>
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                <span className="text-black">Trust is Built Into</span> <br />
                <span className="text-red-500">Every Block</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
                Security, transparency, and decentralization working in harmony
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  title: "Double-spending is prevented",
                  icon: <FaShieldAlt className="text-red-400" />
                },
                {
                  title: "Bad validators are penalized",
                  icon: <FaUserSlash className="text-red-400" />
                },
                {
                  title: "Decentralized & secure network",
                  icon: <FaNetworkWired className="text-red-400" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-red-500/40 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl p-10 hover:border-red-500/80 transition-all duration-500"
                  whileHover={{ scale: 1.08, y: -12 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/25 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-500/30 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-red-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-6xl mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/30 to-red-500/10 group-hover:from-red-500/50 group-hover:to-red-500/30 transition-all duration-300"
                      whileHover={{ rotateZ: -10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <p className="text-lg font-bold text-black group-hover:text-red-600 transition-colors duration-300 leading-snug">
                      {item.title}
                    </p>
                  </div>

                  {/* Depth shadow */}
                  <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-red-500/0 group-hover:shadow-red-500/50 transition-shadow duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom accent line */}
            <motion.div
              className="mt-20 h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </section>

      </main>

    </>
  );
}