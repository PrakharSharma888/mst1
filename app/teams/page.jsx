"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, User, Briefcase, Globe, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import Navbar from "../components/navbar/Navbar";

/* ─── TEAM DATA (20 Members) ─── */
const team = [
    { id: "ceo", name: "Abhishek G", role: "Founder & CEO", image: "https://i.pravatar.cc/300?img=68", bio: "Visionary leader driving the future of MST Blockchain and the SARAL Protocol.", socials: { linkedin: "#", twitter: "#" }, pos: { x: 50, y: 15, size: 90 } },
    { id: "cto", name: "Vikram S", role: "CTO", image: "https://i.pravatar.cc/300?img=12", bio: "Architecting the L1 ecosystem and smart contract security standards.", socials: { linkedin: "#", github: "#" }, pos: { x: 35, y: 30, size: 75 } },
    { id: "design-lead", name: "Neha R", role: "Design Lead", image: "https://i.pravatar.cc/300?img=32", bio: "Defining the visual language and UX for the MST Ecosystem.", socials: { linkedin: "#", twitter: "#" }, pos: { x: 65, y: 30, size: 75 } },
    { id: "blockchain-1", name: "Rahul M", role: "Lead Blockchain Eng", image: "https://i.pravatar.cc/300?img=11", bio: "Specializing in EVM optimization and consensus design.", socials: { github: "#" }, pos: { x: 22, y: 40, size: 65 } },
    { id: "frontend-1", name: "Priya K", role: "Sr. Frontend Eng", image: "https://i.pravatar.cc/300?img=44", bio: "Building high-performance Web3 interfaces.", socials: { github: "#" }, pos: { x: 78, y: 40, size: 65 } },
    { id: "security-1", name: "Anand T", role: "Security Auditor", image: "https://i.pravatar.cc/300?img=3", bio: "Ensuring integrity through rigorous auditing.", socials: { linkedin: "#" }, pos: { x: 50, y: 38, size: 65 } },
    { id: "comm-1", name: "Sanya P", role: "Community Manager", image: "https://i.pravatar.cc/300?img=47", bio: "Fostering the MST developer community.", socials: { twitter: "#" }, pos: { x: 12, y: 52, size: 60 } },
    { id: "ops-1", name: "Karan J", role: "Ops Manager", image: "https://i.pravatar.cc/300?img=15", bio: "Managing cross-functional workflows.", socials: { linkedin: "#" }, pos: { x: 88, y: 52, size: 60 } },
    { id: "dev-1", name: "Sneha L", role: "Full Stack Dev", image: "https://i.pravatar.cc/300?img=26", bio: "Developing core Academy modules.", socials: { github: "#" }, pos: { x: 30, y: 55, size: 60 } },
    { id: "dev-2", name: "Amit B", role: "Solidity Dev", image: "https://i.pravatar.cc/300?img=59", bio: "Crafting efficient smart contracts.", socials: { github: "#" }, pos: { x: 70, y: 55, size: 60 } },
    { id: "node-1", name: "Manoj R", role: "Node Infrastructure", image: "https://i.pravatar.cc/300?img=60", bio: "Maintaining MST global node network.", socials: { linkedin: "#" }, pos: { x: 42, y: 60, size: 60 } },
    { id: "node-2", name: "Deepak S", role: "Network Engineer", image: "https://i.pravatar.cc/300?img=58", bio: "Optimizing P2P synchronization.", socials: { github: "#" }, pos: { x: 58, y: 60, size: 60 } },
    { id: "qa-1", name: "Anjali V", role: "QA Lead", image: "https://i.pravatar.cc/300?img=49", bio: "Testing edge cases in SARAL protocol.", socials: { linkedin: "#" }, pos: { x: 20, y: 68, size: 55 } },
    { id: "qa-2", name: "Rohit P", role: "Automation Eng", image: "https://i.pravatar.cc/300?img=57", bio: "Building automated test suites.", socials: { github: "#" }, pos: { x: 80, y: 68, size: 55 } },
    { id: "mark-1", name: "Isha D", role: "Marketing Lead", image: "https://i.pravatar.cc/300?img=43", bio: "Driving global brand awareness.", socials: { twitter: "#" }, pos: { x: 10, y: 35, size: 55 } },
    { id: "mark-2", name: "Vivek C", role: "Growth Hacker", image: "https://i.pravatar.cc/300?img=61", bio: "Scaling user acquisition.", socials: { linkedin: "#" }, pos: { x: 90, y: 35, size: 55 } },
    { id: "support-1", name: "Meera H", role: "Partner Support", image: "https://i.pravatar.cc/300?img=42", bio: "Managing enterprise integrations.", socials: { linkedin: "#" }, pos: { x: 38, y: 75, size: 55 } },
    { id: "support-2", name: "Aditya N", role: "Dev Rel", image: "https://i.pravatar.cc/300?img=62", bio: "Helping devs build on MST.", socials: { twitter: "#" }, pos: { x: 62, y: 75, size: 55 } },
    { id: "legal-1", name: "Shweta B", role: "Legal Counsel", image: "https://i.pravatar.cc/300?img=41", bio: "Ensuring regulatory compliance.", socials: { linkedin: "#" }, pos: { x: 25, y: 25, size: 55 } },
    { id: "hr-1", name: "Pooja W", role: "HR Head", image: "https://i.pravatar.cc/300?img=45", bio: "Building the dream team.", socials: { linkedin: "#" }, pos: { x: 75, y: 25, size: 55 } },
];

/* ─── TEAM TREE SECTION WITH MEMBER IMAGES ─── */
const TreeSection = ({ onSelect }) => {
  return (
    <div className="relative w-full aspect-[16/10] max-w-6xl mx-auto py-20 flex items-center justify-center overflow-visible">
      {/* TREE BACKGROUND */}
      <svg
        viewBox="0 0 1000 800"
        className="absolute inset-0 w-full h-full text-[#8B4513] opacity-90 pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 0 10px rgba(139,69,19,0.2))" }}
      >
        <defs>
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#5D2E0A" }} />
            <stop offset="50%" style={{ stopColor: "#8B4513" }} />
            <stop offset="100%" style={{ stopColor: "#5D2E0A" }} />
          </linearGradient>
        </defs>

        {/* MAIN TRUNK */}
        <path
          d="M500 800 C 500 700, 480 600, 480 500 L 520 500 C 520 600, 500 700, 500 800"
          fill="url(#trunkGradient)"
        />

        {/* PRIMARY & SECONDARY BRANCHES */}
        <path d="M490 500 Q 400 450, 350 300" fill="none" stroke="#8B4513" strokeWidth="15" strokeLinecap="round" />
        <path d="M510 500 Q 600 450, 650 300" fill="none" stroke="#8B4513" strokeWidth="15" strokeLinecap="round" />
        <path d="M500 500 L 500 200" fill="none" stroke="#8B4513" strokeWidth="12" strokeLinecap="round" />
        <path d="M380 380 Q 250 350, 220 400" fill="none" stroke="#8B4513" strokeWidth="10" strokeLinecap="round" />
        <path d="M620 380 Q 750 350, 780 400" fill="none" stroke="#8B4513" strokeWidth="10" strokeLinecap="round" />
        <path d="M400 320 Q 300 280, 250 250" fill="none" stroke="#8B4513" strokeWidth="8" strokeLinecap="round" />
        <path d="M600 320 Q 700 280, 750 250" fill="none" stroke="#8B4513" strokeWidth="8" strokeLinecap="round" />
        <path d="M480 600 Q 200 550, 120 520" fill="none" stroke="#8B4513" strokeWidth="10" strokeLinecap="round" />
        <path d="M520 600 Q 800 550, 880 520" fill="none" stroke="#8B4513" strokeWidth="10" strokeLinecap="round" />
        <path d="M480 650 Q 350 620, 300 550" fill="none" stroke="#8B4513" strokeWidth="7" strokeLinecap="round" />
        <path d="M520 650 Q 650 620, 700 550" fill="none" stroke="#8B4513" strokeWidth="7" strokeLinecap="round" />
        <path d="M420 550 Q 400 580, 420 600" fill="none" stroke="#8B4513" strokeWidth="6" strokeLinecap="round" />
        <path d="M580 550 Q 600 580, 580 600" fill="none" stroke="#8B4513" strokeWidth="6" strokeLinecap="round" />
        <path d="M220 400 Q 150 350, 100 350" fill="none" stroke="#8B4513" strokeWidth="5" strokeLinecap="round" />
        <path d="M780 400 Q 850 350, 900 350" fill="none" stroke="#8B4513" strokeWidth="5" strokeLinecap="round" />
        <path d="M300 550 Q 250 650, 200 680" fill="none" stroke="#8B4513" strokeWidth="5" strokeLinecap="round" />
        <path d="M700 550 Q 750 650, 800 680" fill="none" stroke="#8B4513" strokeWidth="5" strokeLinecap="round" />
        <path d="M450 650 Q 400 720, 380 750" fill="none" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" />
        <path d="M550 650 Q 600 720, 620 750" fill="none" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" />
      </svg>

      {/* MEMBER IMAGES (FRUITS) */}
      <div className="absolute inset-0 w-full h-full z-10">
        {team.map((member, index) => (
          <motion.button
            key={member.id}
            onClick={() => onSelect(member.id)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.15, zIndex: 50 }}
            className="absolute group -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
            style={{ left: `${member.pos.x}%`, top: `${member.pos.y}%` }}
          >
            <div
              className="relative rounded-full p-1 bg-white shadow-xl border-2 border-white group-hover:border-red-600 transition-all duration-300 overflow-hidden"
              style={{ width: member.pos.size, height: member.pos.size }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 bg-slate-950 text-white text-[10px] rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-2xl z-50 border border-white/10 pointer-events-none">
                <p className="font-bold">{member.name}</p>
                <p className="text-red-500 font-mono text-[8px] uppercase tracking-widest">{member.role}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* RANDOM LEAVES */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 text-emerald-700 fill-current"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${15 + Math.random() * 70}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.17,20C14.33,20 19,15.33 19,9.17C19,8.75 19,8.33 18.93,7.91C18.44,8.12 17.75,8.13 17,8Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamCard = ({ member, isSelected }) => {
    return (
        <motion.div
            id={`card-${member.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`group relative p-8 rounded-[3rem] bg-white border transition-all duration-700 overflow-hidden ${
                isSelected ? "border-red-600 shadow-[0_40px_100px_rgba(220,38,38,0.15)] -translate-y-4" : "border-slate-100 hover:border-slate-200"
            }`}
        >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-[0.03] rounded-full -mr-20 -mt-20 transition-colors ${isSelected ? "bg-red-600" : "bg-slate-400"}`} />

            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
                <div className="relative w-40 h-40 rounded-[2.5rem] overflow-hidden shadow-2xl flex-shrink-0 group-hover:scale-105 transition-transform duration-700">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]" />
                </div>

                <div className="flex-1 space-y-6 text-center md:text-left">
                    <div>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-2">
                            <h3 className="text-3xl font-bold text-slate-950 tracking-tight">{member.name}</h3>
                            <div className="px-4 py-1.5 rounded-full bg-slate-950 text-[9px] font-bold uppercase tracking-[0.3em] text-white">
                                Node_Verified
                            </div>
                        </div>
                        <p className="text-red-600 font-bungee text-sm tracking-widest">{member.role}</p>
                    </div>

                    <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl italic">
                        "{member.bio}"
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-5 pt-2">
                        {member.socials.linkedin && (
                            <a href={member.socials.linkedin} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm">
                                <FaLinkedin size={20} />
                            </a>
                        )}
                        {member.socials.github && (
                            <a href={member.socials.github} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300 transition-all shadow-sm">
                                <FaGithub size={20} />
                            </a>
                        )}
                        {member.socials.twitter && (
                            <a href={member.socials.twitter} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-sky-500 hover:bg-sky-50 hover:border-sky-200 transition-all shadow-sm">
                                <FaTwitter size={20} />
                            </a>
                        )}
                        <div className="h-10 w-px bg-slate-100 mx-2 hidden md:block" />
                        <a href={`mailto:${member.id}@mstblockchain.com`} className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-950 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-slate-900/10">
                            <Mail size={16} /> Contact
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function TeamsPage() {
    const [selectedId, setSelectedId] = useState(null);

    const handleSelectMember = (id) => {
        setSelectedId(id);
        const element = document.getElementById(`card-${id}`);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-red-600 selection:text-white font-sans overflow-x-hidden">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-48 pb-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-red-600/[0.04] blur-[150px] rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:60px_60px] opacity-20" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-red-600/10 bg-white/60 backdrop-blur-xl text-red-600 mb-10 shadow-sm"
                    >
                        <Globe size={16} />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em]">The MST Human Network // 20 Nodes Active</span>
                    </motion.div>

                    <h1 className="font-bungee text-6xl md:text-8xl lg:text-9xl text-slate-950 leading-tight tracking-tighter mb-10">
                        The <span className="text-red-600 underline decoration-red-600/20 underline-offset-[1rem]">Growth</span> <br />
                        of MST
                    </h1>
                    
                    <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-16">
                        Explore our organizational DNA through this interactive hierarchy. Every member is a vital node in our decentralized mission.
                    </p>
                </div>
            </section>

            {/* TREE SECTION */}
            <section className="relative px-6 pb-40">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center mb-10">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[3px] h-16 bg-gradient-to-b from-red-600 to-transparent rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                            <p className="font-mono text-[10px] font-black text-slate-950 uppercase tracking-[0.6em]">System Architecture</p>
                        </div>
                    </div>
                    
                    <TreeSection onSelect={handleSelectMember} />
                </div>
            </section>

            {/* TEAM CARDS GRID */}
            <section className="py-40 px-6 bg-white border-y border-slate-100">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center mb-24">
                        <h2 className="font-bungee text-4xl md:text-6xl text-slate-950 mb-6 tracking-tighter">Node Manifest</h2>
                        <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mb-6" />
                        <p className="text-slate-400 font-mono text-[11px] font-bold uppercase tracking-[0.4em]">Directory // Authorized Access Only</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {team.map((member) => (
                            <TeamCard 
                                key={member.id} 
                                member={member} 
                                isSelected={selectedId === member.id} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER CALLOUT */}
            <section className="py-40 px-6 text-center bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full -mr-40 -mb-40" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center text-red-500 mx-auto mb-10 shadow-2xl">
                        <Briefcase size={32} />
                    </div>
                    <h3 className="font-bungee text-4xl md:text-6xl mb-8 tracking-tighter">Become a Node</h3>
                    <p className="text-white/50 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                        We're actively seeking architects, builders, and visionaries to expand our network. Your talent could be the next vital branch.
                    </p>
                    <a 
                        href="/Career" 
                        className="px-12 py-6 bg-red-600 text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-slate-950 hover:scale-105 transition-all duration-500 shadow-2xl shadow-red-600/20 flex items-center gap-4 mx-auto w-fit group"
                    >
                        Apply for a Position
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
}
