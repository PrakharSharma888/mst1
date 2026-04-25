"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CreditCard, PieChart, UserPlus } from "lucide-react";

function ImageOnlyCard({ src, alt }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative h-56 md:h-64">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 520px, 100vw"
        />
      </div>
    </div>
  );
}

function WhyCard({ number, title, description }) {
  return (
    <div className="relative rounded-2xl border border-red-200/70 bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white" />
      <div className="absolute -right-6 -bottom-10 text-[5rem] font-bold leading-none text-red-500/20 select-none">
        {number}
      </div>
      <div className="relative p-6">
        <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function BulletLine({ children }) {
  return (
    <div className="flex gap-4">
      <div className="mt-2 h-10 w-1 rounded-full bg-red-500" />
      <p className="text-lg leading-relaxed text-gray-700">{children}</p>
    </div>
  );
}

export default function ValidatorPage() {
  const steps = [
    {
      key: "create-account",
      Icon: CreditCard,
      title: "Create Account",
      description: "Sign up on our portal and complete KYC verification.",
      imageSrc: "/fractional-validator/Create Account-Banner.png",
      imageAlt: "Create account",
    },
    {
      key: "make-payment",
      Icon: PieChart,
      title: "Make Payment",
      description: "Pay securely in your preferred currency.",
      imageSrc: "/fractional-validator/Make Payment-Banner.jpg",
      imageAlt: "Make payment",
    },
    {
      key: "own-fraction",
      Icon: UserPlus,
      title: "Own Your Fraction",
      description: "After confirmation, get on-chain ownership and validator rewards.",
      imageSrc: "/fractional-validator/Own Fraction-Banner.jpg",
      imageAlt: "Own your fraction",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] text-black min-h-screen relative overflow-hidden">

      {/* 🔴 BACKGROUND EFFECTS */}

      {/* Soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-white to-white"></div>

      {/* Full-page orbital background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Orbit 1: Inner Ring */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />

          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">
              Use Cases
            </span>
          </motion.div>
        </motion.div>

        {/* Orbit 2: Middle Dashed Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />

          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-500 to-red-200" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">
              9+ Active Nodes
            </span>
          </motion.div>
        </motion.div>

        {/* Orbit 3: Outer Faint Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center"
        >
          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
          >
            <span className="relative inline-flex rounded-full h-1 w-1 bg-black" />
            <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">
              POSA Consensus
            </span>
          </motion.div>
        </motion.div>

        {/* Small floating local elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full hidden lg:flex items-center justify-center opacity-60"
        >
          <div className="w-16 h-16 border border-red-500/20 rounded-full" />
          <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
        </motion.div>
      </div>

      {/* Hero image (above circles) */}
      <div className="absolute right-6 md:right-10 lg:right-[4rem] top-28 md:top-36 lg:top-[14rem] z-[1] pointer-events-none select-none opacity-95 rounded-2xl border border-red-200/70 bg-white/60 p-2 overflow-hidden hidden lg:block shadow-xl backdrop-blur-md">
        <div className="relative w-[450px] xl:w-[550px] h-[250px] xl:h-[300px] rounded-xl overflow-hidden">
          <Image
            src="/fractional-validator/Piece of MST- Banner.png"
            alt="Piece of MST Banner"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 550px, 100vw"
          />
        </div>
      </div>

      {/* Circular lines */}
      <div className="absolute right-[-200px] top-[-100px] w-[800px] h-[800px] border border-red-200 rounded-full opacity-40"></div>
      <div className="absolute right-[50px] top-[100px] w-[600px] h-[600px] border border-red-300 rounded-full opacity-30"></div>

      {/* Glow blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-300 opacity-20 blur-[120px]"></div>

      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-32 left-0 w-full overflow-hidden pointer-events-none flex justify-center z-0 opacity-[0.03] select-none">
        <h1 className="text-[16vw] font-black text-black whitespace-nowrap leading-none tracking-tighter">
          FRACTIONAL
        </h1>
      </div>

      {/* 🔴 HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-[1fr_450px] gap-12 items-center min-h-[85vh]">
        
        {/* LEFT TEXT & UI */}
        <div className="flex flex-col items-start relative z-20">
          
          {/* Animated Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative mb-8 inline-flex items-center gap-3 rounded-full bg-white/70 backdrop-blur-md px-2 py-1 pr-4 shadow-[0_0_0_1px_rgba(239,68,68,0.2)] hover:shadow-[0_0_0_1px_rgba(239,68,68,0.5)] transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-red-100">
               <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-red-400 opacity-60"></span>
               <span className="relative h-2.5 w-2.5 rounded-full bg-red-600"></span>
            </span>
            <span className="relative text-[11px] font-bold uppercase tracking-widest text-gray-800">
              MST Mainnet <span className="text-red-600 font-black">Live</span>
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bungee-regular text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight text-black font-extrabold uppercase mb-6 drop-shadow-sm"
          >
            Own a piece of <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 pb-2">
              MST Blockchain
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 flex gap-4"
          >
            <div className="w-1.5 rounded-full bg-gradient-to-b from-red-500 to-red-200" />
            <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
              Start receiving validator rewards by owning a fraction of a node. Secure the network and earn yields with <strong className="text-gray-900">zero technical setup</strong>.
            </p>
          </motion.div>

          {/* Glowing CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <button className="relative w-full sm:w-auto group overflow-hidden rounded-2xl bg-red-600 px-8 py-4 font-bold uppercase tracking-[0.15em] text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_0_4px_rgba(239,68,68,0.1)] hover:shadow-[0_0_0_8px_rgba(239,68,68,0.25)]">
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm">
                Start Earning 
                <UserPlus className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-red-500 to-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -left-[100%] top-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
            </button>

            <button className="relative w-full sm:w-auto group overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-red-100 px-8 py-4 font-bold uppercase tracking-[0.15em] text-gray-800 transition-all hover:bg-white active:scale-[0.98] shadow-sm hover:shadow-md">
               <span className="relative z-10 flex items-center justify-center gap-3 text-sm">
                View Documentation
                <PieChart className="h-4 w-4 text-red-400 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              </span>
            </button>
          </motion.div>
          
          {/* Glassmorphic Stats Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 w-full max-w-lg rounded-3xl border border-white/80 bg-white/50 p-6 backdrop-blur-xl shadow-[0_8px_40px_rgb(239,68,68,0.08)] relative overflow-hidden"
          >
            {/* Subtle widget glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-400/10 blur-2xl" />
            
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-red-600 shadow-inner border border-red-100">
                  <PieChart className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Current Est. APY</p>
                  <p className="bungee-regular text-3xl text-black mt-1">12.5<span className="text-red-500 text-2xl">%</span></p>
                </div>
              </div>
              
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-red-200 to-transparent"></div>
              
              <div className="sm:text-right flex sm:block items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Active Nodes</p>
                <div className="flex items-center sm:justify-end gap-2 mt-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <p className="bungee-regular text-3xl text-black">1,402</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL STRUCTURE */}
        {/* We keep the empty div to enforce grid constraints so the left text doesn't overlap the absolute image */}
        <div className="hidden lg:block relative h-full min-h-[500px]"></div>
      </section>

      {/* 🔴 STEPS SECTION */}


      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-20">
        <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
          From Sign-Up to<br />
          <span className="text-red-600">Rewards in Minutes </span>
        </h1>

        {steps.map(({ key, Icon, title, description, imageSrc, imageAlt }) => (
          <div key={key} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 text-red-500">
                <Icon />
              </div>

              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 mt-6">{title}</h2>
              <p className="text-gray-500 mt-3">{description}</p>
            </div>

            <ImageOnlyCard src={imageSrc} alt={imageAlt} />
          </div>
        ))}
      </section>

      {/* 🔴 WHY FRACTIONAL VALIDATORS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl border border-red-100 bg-white/60 backdrop-blur-sm overflow-hidden shadow-lg">
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(239,68,68,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(239,68,68,0.12) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* glow */}
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-300/20 blur-[90px]" />

          <div className="relative px-6 py-14 md:px-10">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase text-center">
              Why Fractional
              <br />
              <span className="text-red-500">Validators?</span>
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_360px_1fr] lg:items-center">
              {/* left column */}
              <div className="space-y-6">
                <WhyCard
                  number="1"
                  title="Fully on-chain ownership"
                  description="Ownership is recorded on-chain with transparent reward distribution."
                />
                <WhyCard
                  number="3"
                  title="No expensive hardware"
                  description="No costly equipment or 24/7 uptime requirements to get started."
                />
              </div>

              {/* center visual */}
              <div className="relative hidden lg:block">
                <div className="mx-auto h-[360px] w-[360px] rounded-full border border-red-200/70" />
                <div className="absolute inset-10 rounded-full border border-red-200/50" />
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[1px]" />
              </div>

              {/* right column */}
              <div className="space-y-6">
                <WhyCard
                  number="2"
                  title="Share in block rewards"
                  description="Receive a share of MST block rewards per validated block."
                />
                <WhyCard
                  number="4"
                  title="Start small"
                  description="Purchase as little as a single fraction and scale up anytime."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 BLOCKCHAIN REWARDS (NO TECH BARRIERS) */}
      <section className="relative z-10 w-full pb-24">
        <div className="relative w-full overflow-hidden border-y border-red-100 bg-white/60 backdrop-blur-sm">
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(239,68,68,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(239,68,68,0.12) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          {/* background accents */}
          <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-red-300/20 blur-[120px]" />
          <div className="absolute -left-56 top-10 h-[520px] w-[520px] rounded-full border border-red-300/25" />
          <div className="absolute -left-44 top-24 h-[420px] w-[420px] rounded-full border border-red-300/20" />

          <div className="relative max-w-7xl mx-auto px-6 py-14 md:px-10">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase text-center">
              Blockchain Rewards
              <br />
              <span className="text-red-500">Without Technical Barriers</span>
            </h2>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* left bullets */}
              <div className="space-y-10">
                <BulletLine>No command line, no complex software setup.</BulletLine>

                <BulletLine>
                  Manage your fractions and rewards via a{" "}
                  <span className="text-red-500">simple web dashboard</span>.
                </BulletLine>

                <BulletLine>
                  Monitor validator performance, rewards, and payout history instantly.
                </BulletLine>
              </div>

              {/* right image card */}
              <div className="bg-white rounded-3xl border border-red-200/70 shadow-lg overflow-hidden lg:justify-self-end w-full lg:max-w-[480px]">
                <div className="relative h-56 sm:h-72 md:h-[360px]">
                  <Image
                    src="/fractional-validator/Blockchain Rewards Dashboard.jpg"
                    alt="Validator dashboard preview"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 480px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 SECURE YOUR FRACTION */}
      <section className="relative z-10 w-full pb-24">
        <div className="relative w-full overflow-hidden border-y border-red-500/15 border-2 bg-white/60 backdrop-blur-sm">
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(239,68,68,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(239,68,68,0.12) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* glow */}
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-300/20 blur-[120px]" />

          {/* geometric accents */}
          <div className="absolute -left-50 top-10 h-40 w-40 rotate-12 rounded-3xl border border-red-400 bg-red-400/30 blur-sm" />
          <div className="absolute left-16 bottom-10 h-56 w-56 -rotate-12 rounded-3xl border border-red-400 bg-red-400/30 blur" />
          <div className="absolute -right-16 top-16 h-64 w-64 rotate-6 rounded-3xl border border-red-400 bg-red-400/30 blur" />
          {/* Additional geometric accents for background */}
          <div className="absolute left-1/4 top-1/3 h-32 w-32 rotate-3 rounded-3xl border border-red-400 bg-red-400/30 blur-sm" />
          <div className="absolute right-24 bottom-24 h-28 w-28 -rotate-6 rounded-3xl border border-red-400 bg-red-400/30 blur" />
          <div className="absolute left-1/2 top-1/4 h-24 w-24 rotate-12 rounded-3xl border border-red-400 bg-red-400/30 blur-sm" />
          <div className="absolute right-1/3 top-1/2 h-36 w-36 -rotate-3 rounded-3xl border border-red-400 bg-red-400/30 blur" />
          {/* Even more geometric accents with random sizes and positions */}
          <div className="absolute left-10 top-1/2 h-16 w-16 rotate-2 rounded-3xl border border-red-400 bg-red-400/30 blur-sm" />
          <div className="absolute right-1/4 top-1/5 h-20 w-28 -rotate-9 rounded-3xl border border-red-400 bg-red-400/30 blur" />
          <div className="absolute left-2/3 bottom-10 h-12 w-24 rotate-6 rounded-3xl border border-red-400 bg-red-400/30 blur-sm" />
          <div className="absolute right-10 top-1/3 h-40 w-20 -rotate-12 rounded-3xl border border-red-400 bg-red-400/30 blur" />
          <div className="absolute left-1/5 bottom-1/4 h-24 w-12 rotate-8 rounded-3xl border border-red-400 bg-red-400/30 blur-sm" />
          <div className="absolute right-1/2 top-1/6 h-10 w-10 rotate-4 rounded-3xl border border-red-400 bg-red-400/30 blur-sm" />
          <div className="absolute left-1/3 bottom-1/6 h-32 w-10 -rotate-7 rounded-3xl border border-red-400 bg-red-400/30 blur" />

          <div className="relative max-w-7xl mx-auto px-6 py-16 md:px-10 md:py-20">
            <h2 className="text-center text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Secure Your Fraction
              <br />
              <span className="text-red-500">Today</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-center text-lg md:text-xl text-gray-700">
              Validator node fractions are limited. Once sold out, rewards are distributed to the
              holders , permanently recorded on-chain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}