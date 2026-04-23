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

        {/* 🔴 HERO */}
        <section className="relative pt-32 pb-28 px-6 bg white">

          <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-[1fr_1.25fr] gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-left"
            >
              <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">
                Own a Piece of MST <span className="text-red-500">Blockchain</span>
              </h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="text-gray-600 max-w-2xl text-lg"
              >
                Start receiving validator rewards by owning a fraction of a node — no hardware, no coding required.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
              className="relative h-[360px] md:h-[420px] rounded-2xl border border-red-500/20 overflow-hidden"
            >
              <Image
                src="/fractional-validator/Piece of MST- Banner.png"
                alt="Fractional validator"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* 🔴 PROCESS SECTION */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-10 p-0">
            From <span className="text-red-600">Sign-Up</span> to Rewards in Minutes
          </h2>

          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black border border-red-500/40 mb-4 group-hover:bg-white">
                <FaUserPlus className="text-red-400 group-hover:text-red-600 transition-colors duration-300" />
              </div>
              <div className="rounded-xl p-4 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                <div className="rounded-xl border border-red-300 p-6 transition-all duration-300 group-hover:border-red-600">
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0 group-hover:text-white transition-colors duration-300">Create <span className="text-red-600 group-hover:text-white transition-colors duration-300">Account</span></h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    Sign up on our portal and complete KYC <span className="text-red-600 group-hover:text-white transition-colors duration-300">verification</span>.
                  </p>
                </div>
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

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="order-1 md:order-2 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black border border-red-500/40 mb-4 group-hover:bg-white">
                <FaCreditCard className="text-red-400 group-hover:text-red-600 transition-colors duration-300" />
              </div>
              <div className="rounded-xl p-4 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                <div className="rounded-xl border border-red-300 p-6 transition-all duration-300 group-hover:border-red-600">
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0 group-hover:text-white transition-colors duration-300">Make <span className="text-red-600 group-hover:text-white transition-colors duration-300">Payment</span></h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    Pay securely in your preferred <span className="text-red-600 group-hover:text-white transition-colors duration-300">currency</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black border border-red-500/40 mb-4 group-hover:bg-white">
                <FaCube className="text-red-400 group-hover:text-red-600 transition-colors duration-300" />
              </div>
              <div className="rounded-xl p-4 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                <div className="rounded-xl border border-red-300 p-6 transition-all duration-300 group-hover:border-red-600">
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0 group-hover:text-white transition-colors duration-300">Own Your <span className="text-red-600 group-hover:text-white transition-colors duration-300">Fraction</span></h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    Get on-chain ownership and start earning validator rewards <span className="text-red-600 group-hover:text-white transition-colors duration-300">instantly</span>.
                  </p>
                </div>
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
        <section className="py-24 px-6 relative">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase text-center m-0 p-0">
            Why Fractional <span className="text-red-600">Validators</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { text: "Fully on-chain ownership with transparent rewards.", icon: <FaShieldAlt className="text-red-500 group-hover:text-red-300 transition-colors duration-300" /> },
              { text: "Receive a share of 200 MST block rewards.", icon: <FaCoins className="text-red-500 group-hover:text-red-300 transition-colors duration-300" /> },
              { text: "No expensive hardware or uptime needed.", icon: <FaServer className="text-red-500 group-hover:text-red-300 transition-colors duration-300" /> },
              { text: "Start small — even 1 fraction.", icon: <FaSeedling className="text-red-500 group-hover:text-red-300 transition-colors duration-300" /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="group p-6 rounded-xl border border-red-500/20 bg-white hover:bg-black hover:border-black transition duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-300">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔴 DASHBOARD SECTION */}
        <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">
              <span className="text-red-600">Blockchain</span> Rewards Without Technical Barriers
            </h2>

            <ul className="space-y-6 text-gray-600">
              <li className="flex items-start gap-3">
                <FaTerminal className="text-red-500 mt-1" />
                <span>No command line or complex setup</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTachometerAlt className="text-red-500 mt-1" />
                <span>
                  Manage everything via a{" "}
                  <span className="text-red-500">simple web dashboard</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaChartLine className="text-red-500 mt-1" />
                <span>Track rewards and performance instantly</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="relative h-80 rounded-xl border border-red-500/20 overflow-hidden"
          >
            <Image
              src="/fractional-validator/Blockchain Rewards Dashboard.jpg"
              alt="Blockchain rewards dashboard"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* 🔴 CTA */}
        <section className="py-28 text-center relative">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mb-6"
          >
            Secure Your <span className="text-red-600">Fraction</span> Today
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Validator node fractions are limited. Once sold out, rewards are permanently recorded on-chain.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 border border-red-500 bg-red-500 text-white rounded-lg hover:bg-black hover:text-white hover:border-black transition"
          >
            Get Started
          </motion.button>
        </section>

      </main>
    </>
  );
}