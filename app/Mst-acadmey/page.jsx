"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft, BookOpen, Code, Shield, Rocket, Layers, Cpu, Award,
    CheckCircle, Play, Clock, Video, ClipboardCheck,
    ChevronRight, Globe, Star, FileText
} from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

/* ─── DATA ─── */
const categories = [
    { id: "all", label: "All Modules", icon: Globe, gradient: "from-red-600 to-red-500" },
    { id: "fundamentals", label: "Fundamentals", icon: BookOpen, gradient: "from-emerald-500 to-teal-500" },
    { id: "architecture", label: "Architecture", icon: Layers, gradient: "from-amber-500 to-yellow-500" },
    { id: "development", label: "Development", icon: Code, gradient: "from-red-500 to-rose-500" },
    { id: "deployment", label: "Deployment", icon: Rocket, gradient: "from-violet-500 to-purple-500" },
    { id: "security", label: "Security", icon: Shield, gradient: "from-slate-800 to-slate-900" },
];

const modules = [
    {
        num: 1, title: "Blockchain Fundamentals & MST Ecosystem",
        category: "fundamentals",
        gradient: "from-emerald-500 to-teal-600", borderColor: "border-emerald-500/20",
        textColor: "text-emerald-600", bgColor: "bg-emerald-500",
        shadowColor: "shadow-emerald-500/10", icon: BookOpen, duration: "4 hours", lessons: 6,
        desc: "Learn about blockchain architecture, cryptographic hashing, and MST's Layer 1 ecosystem",
        topics: ["Centralized vs Decentralized Systems", "Distributed Systems & Fault Tolerance", "Core Blockchain Concepts", "Gaps in Existing Blockchains", "Introduction to MST Blockchain", "MST Product Ecosystem"],
        assessment: { questions: 15, passingScore: "80%", type: "Multiple Choice + Short Answer" },
        row: 0, col: 1,
    },
    {
        num: 2, title: "MST Network & Transaction Architecture",
        category: "architecture",
        gradient: "from-amber-500 to-yellow-600", borderColor: "border-amber-500/20",
        textColor: "text-amber-600", bgColor: "bg-amber-500",
        shadowColor: "shadow-amber-500/10", icon: Layers, duration: "3 hours", lessons: 4,
        desc: "Understand nodes, validators, transaction lifecycle, gas mechanisms, and explorer debugging",
        topics: ["MST Network Architecture", "Transaction Lifecycle", "Gas Mechanism", "Explorer & Debugging"],
        assessment: { questions: 12, passingScore: "80%", type: "Practical + Theory" },
        row: 1, col: 0,
    },
    {
        num: 3, title: "Development Environment & MST SDK",
        category: "development",
        gradient: "from-red-500 to-rose-500", borderColor: "border-red-500/20",
        textColor: "text-red-600", bgColor: "bg-red-500",
        shadowColor: "shadow-red-500/10", icon: Code, duration: "5 hours", lessons: 5,
        desc: "Set up Hardhat, configure MST SDK, and build Web3 application architecture",
        topics: ["Web3 Application Architecture", "Development Setup", "MST Network Configuration", "MST SDK Integration", "SDK-Based Operations"],
        assessment: { questions: 10, passingScore: "75%", type: "Hands-on Coding Challenge" },
        row: 1, col: 1,
    },
    {
        num: 4, title: "Smart Contract Development",
        category: "development",
        gradient: "from-blue-500 to-indigo-600", borderColor: "border-blue-500/20",
        textColor: "text-blue-600", bgColor: "bg-blue-500",
        shadowColor: "shadow-blue-500/10", icon: FileText, duration: "6 hours", lessons: 5,
        desc: "Master Solidity fundamentals, data structures, events, and access control patterns",
        topics: ["Smart Contract Fundamentals", "Functions & Logic", "Data Structures", "Events & Logging", "Access Control"],
        assessment: { questions: 15, passingScore: "80%", type: "Contract Writing + Deploy" },
        row: 1, col: 2,
    },
    {
        num: 5, title: "Contract Deployment & Testnet",
        category: "deployment",
        gradient: "from-violet-500 to-purple-600", borderColor: "border-violet-500/20",
        textColor: "text-violet-600", bgColor: "bg-violet-500",
        shadowColor: "shadow-violet-500/10", icon: Rocket, duration: "4 hours", lessons: 4,
        desc: "Deploy contracts on MST Testnet, verify on explorer, and test interactions",
        topics: ["Contract Interaction", "Testing & Debugging", "Deployment on MST Testnet", "Explorer Verification"],
        assessment: { questions: 8, passingScore: "85%", type: "Live Deployment Test" },
        row: 1, col: 3,
    },
    {
        num: 6, title: "ERC-20 TOKEN DEVELOPMENT ON MST",
        category: "deployment",
        gradient: "from-cyan-500 to-teal-600", borderColor: "border-cyan-500/20",
        textColor: "text-cyan-600", bgColor: "bg-cyan-500",
        shadowColor: "shadow-cyan-500/10", icon: Cpu, duration: "8 hours", lessons: 6,
        desc: "Build a complete NFT minting DApp with smart contract, frontend, and MST SDK",
        topics: ["NFT Fundamentals", "NFT Smart Contract", "MST SDK Integration", "Frontend Development", "End-to-End DApp Flow", "Deployment"],
        assessment: { questions: 5, passingScore: "90%", type: "Full DApp Review" },
        row: 2, col: 1,
    },
    {
        num: 7, title: "Security, Optimization & Final Delivery",
        category: "security",
        gradient: "from-slate-800 to-slate-900", borderColor: "border-slate-800/20",
        textColor: "text-slate-800", bgColor: "bg-slate-800",
        shadowColor: "shadow-slate-800/10", icon: Shield, duration: "5 hours", lessons: 5,
        desc: "Secure your contracts, optimize gas, and deliver your final certified project",
        topics: ["Smart Contract Security", "Secure Development Practices", "Gas Optimization", "Performance Optimization", "Final Project Delivery"],
        assessment: { questions: 10, passingScore: "90%", type: "Final Project + Viva" },
        row: 2, col: 2,
    },
];


/* ─── COMPONENTS ─── */

const TreeNode = ({ mod, isSelected, onClick, index }) => (
    <motion.div
        onClick={onClick}
        className="relative cursor-pointer group px-4 py-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
    >
        <div className={`relative rounded-3xl border-2 overflow-hidden transition-all duration-500 bg-white ${isSelected
            ? `${mod.borderColor} shadow-[0_20px_40px_rgba(0,0,0,0.04)] ring-4 ring-slate-50`
            : "border-slate-200 hover:border-slate-400"
            }`}
            style={{ minWidth: 220, maxWidth: 260 }}
        >
            <div className={`h-1 bg-gradient-to-r ${mod.gradient}`} />

            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-400 flex items-center justify-center ${mod.textColor} transition-all duration-500 group-hover:bg-red-600 group-hover:text-white`}>
                        <mod.icon size={20} />
                    </div>
                    {isSelected && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                            <CheckCircle size={12} className="text-white" />
                        </motion.div>
                    )}
                </div>

                <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight mb-2 leading-tight">{mod.title}</h4>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed line-clamp-2">{mod.desc}</p>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-500">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                        <Clock size={10} /> {mod.duration}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                        <Video size={10} /> {mod.lessons}
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
);

const ModuleDetail = ({ mod }) => {
    const [expandedTopic, setExpandedTopic] = useState(null);

    return (
        <motion.div
            key={mod.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto"
        >
            <div className="relative rounded-[2.5rem] overflow-hidden mb-8 bg-white border-2 border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className={`h-1.5 bg-gradient-to-r ${mod.gradient}`} />
                <div className="p-8 md:p-12">
                    <div className="flex items-start gap-8 mb-8">
                        <div className={`w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center ${mod.textColor} shadow-sm`}>
                            <mod.icon size={32} />
                        </div>
                        <div className="flex-1">
                            <p className={`text-[10px] font-black uppercase tracking-[0.4em] ${mod.textColor} mb-3`}>Module {mod.num}</p>
                            <h3 className="bungee-regular text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">{mod.title}</h3>
                            <p className="text-slate-500 font-medium mt-4 leading-relaxed">{mod.desc}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        {[
                            { icon: Clock, text: mod.duration },
                            { icon: Video, text: `${mod.lessons} Lectures` },
                            { icon: ClipboardCheck, text: "Assessment Included" },
                        ].map((m, i) => (
                            <span key={i} className="flex items-center gap-2 text-[10px] text-slate-400 font-black uppercase tracking-widest">
                                <m.icon size={14} className={mod.textColor} /> {m.text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Video Player Placeholder */}
                <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-900 group">
                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.div
                            className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center cursor-pointer shadow-2xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Play size={28} className="text-white ml-1" fill="currentColor" />
                        </motion.div>
                        <p className="text-[10px] font-black text-white/40 mt-6 uppercase tracking-[0.3em]">Module {mod.num} Overview</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                        <motion.div className="h-full bg-red-600" initial={{ width: "0%" }} animate={{ width: "30%" }} />
                    </div>
                </div>

                {/* Topics List */}
                <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Curriculum</p>
                    {mod.topics.map((topic, ti) => (
                        <motion.button
                            key={ti}
                            onClick={() => setExpandedTopic(expandedTopic === ti ? null : ti)}
                            className={`w-full text-left rounded-2xl p-4 flex items-center gap-4 transition-all border-2 ${expandedTopic === ti ? "border-red-600/10 bg-red-50/30" : "border-slate-50 hover:border-slate-100 bg-white"
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${expandedTopic === ti ? "bg-red-600 text-white" : "bg-slate-50 text-slate-400"
                                }`}>
                                <span className="text-[10px] font-black">{ti + 1}</span>
                            </div>
                            <span className={`text-xs font-black uppercase tracking-tight flex-1 ${expandedTopic === ti ? "text-slate-900" : "text-slate-500"}`}>
                                {topic}
                            </span>
                            <ChevronRight size={14} className={`transition-transform duration-300 ${expandedTopic === ti ? "rotate-90 text-red-600" : "text-slate-200"}`} />
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Assessment Section */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 p-8 md:p-12 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none" />
                <div className="relative z-10">
                    <Award size={48} className="text-red-600 mx-auto mb-6" />
                    <h4 className="bungee-regular text-2xl text-white uppercase mb-4 tracking-tight">Knowledge Check</h4>
                    <p className="text-white/50 text-sm max-w-lg mx-auto mb-10 font-medium">Complete the module curriculum to unlock the knowledge check and earn your progress badge.</p>

                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
                        {[
                            { val: mod.assessment.questions, label: "Questions" },
                            { val: mod.assessment.passingScore, label: "To Pass" },
                            { val: "∞", label: "Attempts" },
                        ].map((a, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-xl font-black text-white">{a.val}</p>
                                <p className="text-[8px] font-black uppercase tracking-widest text-white/30">{a.label}</p>
                            </div>
                        ))}
                    </div>

                    <button className="px-12 py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all shadow-xl shadow-red-600/20">
                        Start Assessment
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function AcademyPage() {
    const [selectedModule, setSelectedModule] = useState(0);
    const [activeCategory, setActiveCategory] = useState("all");
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const filteredModules = activeCategory === "all" ? modules : modules.filter((m) => m.category === activeCategory);
    const rows = [
        filteredModules.filter(m => m.row === 0),
        filteredModules.filter(m => m.row === 1),
        filteredModules.filter(m => m.row === 2)
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div style={{ y: backgroundY }} className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/[0.02] blur-[150px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.01] blur-[150px] rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
                </motion.div>
            </div>

            <div className="relative z-10 pt-32">
                <main className="max-w-[1400px] mx-auto px-8">

                    {/* Hero */}
                    <section className="text-center mb-24">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-600/10 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                                MST Blockchain Academy
                            </span>
                            <h1 className="bungee-regular text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-black font-black uppercase mb-10">
                               Certified MST<br />
                                <span className="text-red-600">Blockchain </span> Developer
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed mb-12 uppercase tracking-tight">
                                Master blockchain development through interactive courses. <span className="text-slate-900">Deploy L1s, build dApps, and customize your own infrastructure</span> on MST Chain.
                            </p>

                            {/* Filters */}
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setActiveCategory(cat.id); setSelectedModule(0); }}
                                        className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${activeCategory === cat.id
                                            ? "border-red-600 bg-red-600 text-white shadow-xl shadow-red-600/20"
                                            : "border-slate-100 text-slate-400 hover:border-slate-200"
                                            }`}
                                    >
                                        <cat.icon size={14} />
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Tree View */}
                    <section className="pb-32 relative overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="min-w-[1000px]">
                            {rows.map((rowModules, rowIndex) => (
                                <div key={rowIndex} className="mb-12">
                                    <div className="flex justify-center items-center">
                                        {rowModules.map((mod, i) => {
                                            const globalIdx = modules.findIndex((m) => m.num === mod.num);
                                            return (
                                                <React.Fragment key={mod.num}>
                                                    <TreeNode
                                                        mod={mod}
                                                        index={i}
                                                        isSelected={selectedModule === globalIdx}
                                                        onClick={() => setSelectedModule(globalIdx)}
                                                    />
                                                    {i < rowModules.length - 1 && (
                                                        <div className="w-12 h-[2px] bg-red-600/10 -mx-4" />
                                                    )}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {/* Visual Connections */}
                                    {rowIndex < rows.length - 1 && rows[rowIndex + 1].length > 0 && (
                                        <div className="flex flex-col items-center mt-8">
                                            <div className="w-2 h-2 rounded-full bg-red-600 mb-1" />
                                            <div className="w-[2px] h-12 bg-gradient-to-b from-red-600 to-transparent" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Module Details */}
                    <section className="pb-32 border-t border-slate-50 pt-32">
                        <AnimatePresence mode="wait">
                            <ModuleDetail mod={modules[selectedModule]} />
                        </AnimatePresence>
                    </section>

                    {/* Final Certification CTA */}
                    <section className="pb-32">
                        <div className="relative rounded-[3.5rem] overflow-hidden bg-slate-900 p-16 md:p-24 text-center group">
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-red-600/10 blur-[150px] rounded-full" />
                                <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-blue-600/5 blur-[150px] rounded-full" />
                            </div>

                            <div className="relative z-10 max-w-3xl mx-auto">
                                <Award size={64} className="text-red-600 mx-auto mb-10" />
                                <h2 className="bungee-regular text-4xl md:text-6xl text-white uppercase mb-8 tracking-tighter leading-tight">
                                    Ready to become a<br />
                                    <span className="text-red-600">Certified MST </span> Developer?
                                </h2>
                                <p className="text-white/40 text-lg md:text-xl font-bold mb-14 leading-relaxed uppercase tracking-tight">
                                    Complete all 7 modules, pass assessments, and deliver your NFT DApp to earn certification.
                                </p>
                                <div className="flex gap-4 ml-10">
  <button className="px-14 py-7 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-600 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5">
    Start Your Journey
  </button>

  <button className="px-14 py-7 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-600 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5">
    Download Syallbus
  </button>
</div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
            <Footer />
        </div>
    );
}
