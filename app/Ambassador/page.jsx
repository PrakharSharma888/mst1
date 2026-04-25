"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import {
  MapPin, GraduationCap, Briefcase,
  Gift, FileText, Handshake, Globe, Rocket, Users, Star, ArrowRight
} from "lucide-react";

/* ================= DATA ================= */

const ambassadorTracks = [
  {
    icon: MapPin,
    title: "City Ambassador",
    desc: "Lead blockchain adoption in your city by organizing meetups, workshops, and local Web3 communities. Build grassroots Web3 presence.",
    gradient: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/10",
    textColor: "text-cyan-600",
    perks: ["Host local meetups", "Organize workshops", "Community building", "Event sponsorship"],
  },
  {
    icon: GraduationCap,
    title: "Campus Ambassador",
    desc: "Bring MST to your university through student clubs, hackathons, and Web3 learning sessions. Inspire the next generation.",
    gradient: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/10",
    textColor: "text-violet-600",
    perks: ["University hackathons", "Student workshops", "Club partnerships", "Academic resources"],
  },
  {
    icon: Briefcase,
    title: "Industry Ambassador",
    desc: "Promote MST adoption within your industry and professional network for real-world blockchain use cases.",
    gradient: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/10",
    textColor: "text-amber-600",
    perks: ["Industry partnerships", "Professional networking", "Enterprise outreach", "Technical consulting"],
  },
];

const rewards = [
  { icon: Gift, text: "Earn up to ₹10,000 + $MSTC tokens", color: "text-emerald-600", bg: "bg-emerald-500/5", border: "border-emerald-500/20" },
  { icon: FileText, text: "Official MST Ambassador Certificate", color: "text-violet-600", bg: "bg-violet-500/5", border: "border-violet-500/20" },
  { icon: Handshake, text: "Mentorship with Web3 experts", color: "text-cyan-600", bg: "bg-cyan-500/5", border: "border-cyan-500/20" },
  { icon: Globe, text: "Global developer networking", color: "text-amber-600", bg: "bg-amber-500/5", border: "border-amber-500/20" },
  { icon: Rocket, text: "Early access to MST ecosystem", color: "text-rose-600", bg: "bg-rose-500/5", border: "border-rose-500/20" },
  { icon: Users, text: "Exclusive community events", color: "text-indigo-600", bg: "bg-indigo-500/5", border: "border-indigo-500/20" },
];

/* ================= COMPONENTS ================= */

const Heading = ({ children, className = "" }) => (
  <h2 className={`bungee-regular text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase ${className}`}>
    {children}
  </h2>
);

const TrackCard = ({ track, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [7, -7]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-7, 7]), { stiffness: 400, damping: 40 });

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative group h-full"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-red-600/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full flex flex-col p-7 md:p-8 rounded-[2rem] bg-white border-2 border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(220,38,38,0.06)] group-hover:border-red-600/20">

        <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 ${track.textColor} transition-all duration-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-600/20`}>
          <track.icon size={22} />
        </div>

        <h3 className="bungee-regular text-lg sm:text-xl font-black uppercase mb-3 tracking-tight text-slate-900 transition-colors group-hover:text-red-600">
          {track.title}
        </h3>

        <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow font-medium">
          {track.desc}
        </p>

        <div className="space-y-3 mb-8">
          {track.perks.map((perk, j) => (
            <div key={j} className="flex items-center gap-2.5 group/perk">
              <Star size={10} className={`${track.textColor} fill-current transition-transform duration-300 group-hover/perk:scale-125`} />
              <span className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400 group-hover/perk:text-slate-900 transition-colors">
                {perk}
              </span>
            </div>
          ))}
        </div>

        <button className="group/btn relative w-full py-4 overflow-hidden rounded-xl border-2 border-slate-100 text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 transition-all hover:border-red-600 hover:text-white">
          <span className="relative z-10">Apply as {track.title}</span>
          <div className="absolute inset-0 bg-red-600 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
        </button>
      </div>
    </motion.div>
  );
};

const RewardCard = ({ reward, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.6 }}
    className="relative group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 flex flex-col gap-4 transition-all duration-500 hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:border-red-600/20"
  >
    <div className={`w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center ${reward.color} shadow-sm group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500`}>
      <reward.icon size={22} />
    </div>
    <span className="text-[10px] font-black uppercase tracking-[0.08em] leading-relaxed text-slate-500 group-hover:text-slate-900 transition-colors">
      {reward.text}
    </span>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  </motion.div>
);

export default function AmbassadorPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white overflow-x-hidden">

      {/* Premium Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/[0.03] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/[0.02] blur-[150px] rounded-full" />
          
          {/* User Custom Orbital 1 - Top Left */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[10%] left-[10%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300 pointer-events-none opacity-40"
            style={{ zIndex: 1 }}
          >
            <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-red-600 shadow-[0_0_10px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [-360, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute left-[15%] top-[15%] flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-600"></span>
              </span>
              <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-300 uppercase">MST BLOCKCHAIN</span>
            </motion.div>
          </motion.div>

          {/* User Custom Orbital 2 - Top Left area */}
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute left-[35%] top-[35%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500 opacity-40 pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <div className="h-20 w-20 rounded-full border-2 border-red-500/20" />
            <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_10px_#ff2d2d]" />
          </motion.div>

          {/* User Custom Orbital 3 - Bottom Right */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full border-[2px] border-red-300 pointer-events-none opacity-30"
            style={{ zIndex: 1 }}
          >
            <div className="absolute top-[18%] left-[8%] h-[8px] w-[8px] rounded-full bg-red-600 shadow-[0_0_15px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
              className="absolute right-[10%] bottom-[10%] flex items-center gap-2"
            >
              <span className="whitespace-nowrap text-[8px] font-black tracking-[0.3em] text-red-400 uppercase">Global Nodes</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
            </motion.div>
          </motion.div>

          {/* User Custom Orbital 4 - Bottom Right area */}
          <motion.div
            animate={{ y: [20, -20, 20], x: [15, -15, 15], rotate: [360, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[25%] bottom-[20%] flex h-48 w-48 items-center justify-center rounded-full border border-red-500/10 opacity-30 pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <div className="h-32 w-32 rounded-full border border-red-500/5" />
            <div className="absolute bottom-0 h-2 w-2 rounded-full bg-red-600 shadow-[0_0_12px_#ff2d2d]" />
          </motion.div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </motion.div>
      </div>

      <div className="relative z-10">
        <main className="max-w-[1400px] mx-auto px-8 md:px-16">

          {/* Hero Section */}
          <section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-600/10 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                Applications Open 2024
              </div>

              <h1 className="bungee-regular text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-black font-black uppercase mb-10">
                MST Blockchain <br />
                <span className="text-red-600">Ambassador</span> Program
              </h1>

              <p className="text-slate-400 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed mb-14 uppercase tracking-tight">
                Become the voice of MST Blockchain in your community.   <span className="text-slate-900">Represent MST globally, earn rewards,</span> and shape the future of Web3.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button className="px-12 py-6 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-600/20">
                  Start Application
                </button>
                <button className="px-12 py-6 border-2 border-slate-900 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all">
                  Program Handbook
                </button>
              </div>
            </motion.div>
          </section>

          {/* Tracks Section */}
          <section className="py-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Choose Your Role</span>
                <Heading>Ambassador <span className="text-red-600">Tracks</span></Heading>
              </div>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {ambassadorTracks.map((track, i) => (
                <TrackCard key={track.title} track={track} index={i} />
              ))}
            </div>
          </section>

          {/* Rewards Section */}
          <section className="py-32 border-t border-slate-100">
            <div className="text-center mb-24">
             
              <Heading>Benefits & <span className="text-red-600">Rewards</span></Heading>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rewards.map((reward, i) => (
                <RewardCard key={i} reward={reward} index={i} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3.5rem] overflow-hidden bg-slate-900 p-16 md:p-28 text-center group"
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-red-600/20 blur-[150px] rounded-full group-hover:bg-red-600/30 transition-all duration-1000" />
                <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-blue-600/10 blur-[150px] rounded-full" />
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="bungee-regular text-4xl md:text-7xl leading-[0.95] tracking-tighter text-white font-black uppercase mb-12">
                  Ready to Lead the <br />
                  <span className="text-red-600">Future?</span>
                </h2>
                <p className="text-white/50 text-lg md:text-xl font-bold mb-14 leading-relaxed uppercase tracking-tight">
                  Join the elite network of MST ambassadors and shape the future of institutional blockchain.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <button
                      onClick={() => window.open("https://forms.gle/kDHDk3rJZkehBHok9", "_blank")}
                      className="px-14 py-7 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl shadow-white/5"
                    >
                      Become an Ambassador
                  </button>
                  <Link href="/contact" className="group/link flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">
                    Join Community <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>

        </main>

      </div>
    </div>
  );
}