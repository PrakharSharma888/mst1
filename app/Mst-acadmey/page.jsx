"use client"; // Updated 2026-04-27


import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import TiltCard from "@/app/components/academy/TiltCard";



import {
    ArrowLeft, BookOpen, Code, Shield, Rocket, Layers, Cpu, Award,
    CheckCircle, Play, Clock, Video, ClipboardCheck,
    ChevronRight, Globe, Star, FileText
} from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import EnrollmentModal from "@/app/components/academy/EnrollmentModal";

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
    <TiltCard className="group">
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full h-full rounded-[2.5rem] p-8 transition-all duration-500 border cursor-pointer flex flex-col gap-6 overflow-hidden ${isSelected 
                ? "bg-white border-slate-900 shadow-[0_40px_100px_rgba(0,0,0,0.1)] scale-105 z-10" 
                : "bg-white border-slate-300 hover:border-slate-900 shadow-sm"
            }`}
        >
            {/* Background Decorative Pill */}
            <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 rounded-full -mr-10 -mt-10 transition-colors ${isSelected ? "bg-red-600" : "bg-slate-200"}`} />

            {/* Header: Module Number */}
            <div className="flex justify-between items-start relative z-10">
                <div className={`px-4 py-1.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-[0.2em] transition-colors ${isSelected ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-600"}`}>
                    Module_0{mod.num}
                </div>
            </div>

            {/* Content: Title & Description */}
            <div className="flex-1 min-h-[140px] relative z-10">
                <h4 className={`text-2xl bungee-regular tracking-tight leading-[1.15] mb-4 transition-colors ${isSelected ? "text-black" : "text-slate-950"}`}>
                    {mod.title}
                </h4>
                <p className={`text-[12px] font-medium leading-relaxed line-clamp-3 transition-colors ${isSelected ? "text-slate-700" : "text-slate-600"}`}>
                    {mod.desc}
                </p>
            </div>

            {/* Footer: Metadata */}
            <div className={`pt-6 border-t flex items-center justify-between relative z-10 transition-colors ${isSelected ? "border-slate-200" : "border-slate-100"}`}>
                <div className="flex items-center gap-2">
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-widest transition-colors ${isSelected ? "text-slate-900" : "text-slate-500"}`}>
                        {mod.duration}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-widest transition-colors ${isSelected ? "text-slate-900" : "text-slate-500"}`}>
                        {mod.lessons} Units
                    </span>
                </div>
            </div>

            {/* Indicator */}
            {isSelected && (
                <motion.div layoutId="node-border" className="absolute inset-0 rounded-[2.5rem] border-[2px] border-slate-950 pointer-events-none" />
            )}
        </motion.div>
    </TiltCard>
);

const ModuleDetail = ({ mod }) => {
    const [expandedTopic, setExpandedTopic] = useState(null);

    return (
        <motion.div
            key={mod.num}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl mx-auto"
        >
            {/* 🧪 LABORATORY MODULE HEADER */}
            <div className="relative rounded-[2.5rem] overflow-hidden mb-12 bg-slate-950 text-white shadow-2xl border border-white/5 group">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent" />
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${mod.gradient} opacity-50`} />
                
                <div className="relative z-10 p-8 md:p-14 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-5 mb-8">
                            <div className="relative">
                                <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${mod.textColor} shadow-2xl`}>
                                    <mod.icon size={32} />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-600 animate-ping" />
                            </div>
                            <div>
                                <p className={`font-mono text-[10px] font-bold uppercase tracking-[0.4em] ${mod.textColor}`}>Session_ID // 0{mod.num}</p>
                                <p className="font-mono text-white/30 text-[9px] uppercase tracking-widest mt-1">Uplink: Synchronized</p>
                            </div>
                        </div>
                        
                        <h3 className="bungee-regular text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
                            {mod.title}
                        </h3>
                        
                        <p className="text-white/50 text-lg font-medium leading-relaxed max-w-2xl">
                            {mod.desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                        {[
                            { icon: Clock, label: "Duration", val: mod.duration, color: "text-amber-400" },
                            { icon: Video, label: "Tactical Units", val: `${mod.lessons} Files`, color: "text-blue-400" },
                            { icon: Globe, label: "Network", val: "MST_LAYER_1", color: "text-emerald-400" },
                            { icon: Award, label: "Certification", val: "Tier 1 Earnable", color: "text-red-500" },
                        ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-4 hover:bg-white/[0.06] transition-all duration-300">
                                <div className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center ${item.color}`}>
                                    <item.icon size={16} />
                                </div>
                                <div>
                                    <p className="font-mono text-[8px] uppercase tracking-widest text-white/30 mb-0.5">{item.label}</p>
                                    <p className="font-mono text-xs font-bold text-white tracking-tight">{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
                {/* 📹 ANALYTIC TACTICAL PLAYER */}
                <div className="space-y-6">
                    <div className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-black group border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        {/* Scanline & Grain Overlay */}
                        <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] transition-opacity group-hover:opacity-[0.05]" />
                        
                        {/* High-Tech HUD Overlay */}
                        <div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between font-mono">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_#ef4444]" />
                                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">REC // SESSION_0{mod.num}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-700 text-[8px] text-white tracking-widest">
                                        <p>CIPHER: AES-MST-256</p>
                                        <p>PROXY: 192.168.MST.01</p>
                                    </div>
                                </div>
                                <div className="text-right space-y-1 opacity-40 group-hover:opacity-100 transition-opacity duration-700 text-[9px] tracking-widest">
                                    <p className="text-red-500 font-bold">BITRATE: 48.4 MBPS</p>
                                    <p className="text-white uppercase">Buffer: Opti-Stream</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div animate={{ x: [-48, 48] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-red-600/50" />
                                    </div>
                                    <span className="text-[8px] text-white/40 uppercase tracking-[0.2em]">Signal: Secure</span>
                                </div>
                                <div className="px-4 py-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                                    <p className="text-[8px] font-bold text-white/60 uppercase tracking-[0.4em]">Authorized Access Only</p>
                                </div>
                            </div>
                        </div>

                        {/* Central Play Interaction */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-40 bg-slate-950/20 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-700">
                            <motion.button
                                className="w-24 h-24 rounded-full bg-white text-slate-950 flex items-center justify-center cursor-pointer shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(239,68,68,0.4)] transition-shadow duration-500"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Play size={28} className="ml-1 fill-current" />
                            </motion.button>
                            <div className="mt-8 flex flex-col items-center gap-2">
                                <p className="font-mono text-[9px] font-bold text-white uppercase tracking-[0.8em] animate-pulse">Initialize Link</p>
                                <div className="w-[1px] h-10 bg-gradient-to-b from-red-600 to-transparent" />
                            </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)] opacity-50" />
                    </div>

                    {/* Mentor Info */}
                    <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden group hover:border-red-600/20 transition-all duration-500">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-lg">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <p className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Assigned Mentor</p>
                                    <p className="text-lg font-bold text-slate-950 tracking-tight">MST Lab Command</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="font-mono text-[8px] font-bold text-slate-500 uppercase tracking-widest">Status: Monitoring Session</span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 transition-all duration-300 shadow-lg shadow-slate-900/10">
                                <FileText size={14} /> Data Packet
                            </button>
                        </div>
                    </div>
                </div>

                {/* 📑 INTELLIGENT CURRICULUM & ASSESSMENT */}
                <div className="space-y-6">
                    <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-8 px-2">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Curriculum Data</p>
                            <span className="font-mono text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-lg">{mod.topics.length} Segments</span>
                        </div>
                        
                        <div className="space-y-2">
                            {mod.topics.map((topic, ti) => (
                                <motion.button
                                    key={ti}
                                    onClick={() => setExpandedTopic(expandedTopic === ti ? null : ti)}
                                    className={`w-full text-left rounded-2xl p-4 flex items-center gap-4 transition-all group ${
                                        expandedTopic === ti 
                                        ? "bg-slate-950 text-white shadow-xl -translate-y-1" 
                                        : "bg-slate-50 hover:bg-slate-100"
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 font-mono text-xs font-bold ${
                                        expandedTopic === ti ? "bg-red-600 text-white" : "bg-white text-slate-400"
                                    }`}>
                                        0{ti + 1}
                                    </div>
                                    <div className="flex-1">
                                        <span className={`text-[11px] font-bold uppercase tracking-tight block transition-colors ${expandedTopic === ti ? "text-white" : "text-slate-700"}`}>
                                            {topic}
                                        </span>
                                        <AnimatePresence>
                                            {expandedTopic === ti && (
                                                <motion.p 
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-[10px] text-white/60 font-medium mt-2 leading-relaxed"
                                                >
                                                    Detailed technical walkthrough covering the core principles and hands-on implementation of this segment.
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <ChevronRight size={14} className={`transition-transform duration-500 ${expandedTopic === ti ? "rotate-90 text-red-500" : "text-slate-300 group-hover:text-slate-400"}`} />
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* 🛡️ TACTICAL ASSESSMENT CONSOLE */}
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-950 p-8 shadow-2xl group border border-white/5">
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-red-600" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 shadow-inner">
                                        <Shield size={22} />
                                    </div>
                                    <h4 className="text-xl bungee-regular tracking-tighter text-white">Mission Assessment</h4>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-red-600/10 text-[9px] font-mono font-bold uppercase tracking-widest text-red-500 border border-red-600/20">
                                    Status: Locked
                                </div>
                            </div>
                            
                            <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-8 leading-relaxed">
                                <span className="text-red-500 font-bold">Verification:</span> Complete all tactical segments to initialize examination.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center group-hover:bg-white/[0.05] transition-colors">
                                    <p className="font-mono text-2xl font-bold text-white mb-1">{mod.assessment.questions}</p>
                                    <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">Total Queries</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center group-hover:bg-white/[0.05] transition-colors">
                                    <p className="font-mono text-2xl font-bold text-white mb-1">{mod.assessment.passingScore}</p>
                                    <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">Survival Threshold</p>
                                </div>
                            </div>

                            <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-red-600 hover:text-white transition-all duration-500 shadow-xl flex items-center justify-center gap-3 group/btn relative overflow-hidden">
                                <span className="relative z-10">Initialize Examination</span>
                                <ChevronRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


export default function AcademyPage() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [selectedModule, setSelectedModule] = useState(0);
    const [activeCategory, setActiveCategory] = useState("all");
    const containerRef = useRef(null);
    const detailRef = useRef(null);
    const gridRef = useRef(null);

    const scrollToDetail = () => {
        if (detailRef.current) {
            const offset = 80;
            const elementPosition = detailRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    const scrollToGrid = () => {
        if (gridRef.current) {
            const offset = 100;
            const elementPosition = gridRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    const handleCategorySelect = (id) => {
        setActiveCategory(id);
        setTimeout(scrollToGrid, 100);
    };

    const handleModuleSelect = (idx) => {
        setSelectedModule(idx);
        setTimeout(scrollToDetail, 100);
    };

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const filteredModules = activeCategory === "all" ? modules : modules.filter((m) => m.category === activeCategory);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-red-600 selection:text-white overflow-x-hidden font-sans">
            <Navbar />

            {/* Premium Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div style={{ y: backgroundY }} className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-red-600/[0.03] blur-[150px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/[0.02] blur-[150px] rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
                </motion.div>
            </div>

            <div className="relative z-10">
                {/* 🔴 PREMIUM HERO SECTION - Full Width */}
                <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-32 overflow-hidden">
                    
                    {/* Background Mesh Gradient - Absolute Edges */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <motion.img 
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                            src="/academy_hero_mesh_1777268427771.png" 
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                            alt="Mesh Background"
                        />
                        {/* Refined gradient blend */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black opacity-30" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-20" />
                    </div>

                    <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                        {/* Top Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-600/10 bg-white/50 backdrop-blur-md text-red-600 mb-12 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                            </span>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">MST Academy // Enrollment Open</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="bungee-regular text-6xl text-white md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-slate-950 font-bold mb-10"
                        >
                            Master the <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-800 pb-2">
                                Future of Web3
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-16"
                        >
                            Comprehensive blockchain education designed for engineers. From smart contract security to L1 architecture, <span className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-xl font-bold shadow-lg shadow-red-600/20 transform -rotate-1 ml-1 hover:rotate-0 transition-transform duration-300">build your career on MST.</span>
                        </motion.p>

                        {/* CTAs */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-5"
                        >
                            <button 
                                onClick={() => setIsEnrollModalOpen(true)}
                                className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-2xl shadow-slate-900/20"
                            >
                                Start Your Journey
                            </button>
                            <button className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-slate-50 transition-all duration-300">
                                Download Syllabus
                            </button>
                        </motion.div>
                    </div>
                </section>

                <main className="max-w-[1440px] mx-auto px-8">

                    {/* Glassmorphic Category Selector */}
                    <section id="curriculum" className="relative z-30 mb-20 mt-15">
                        <div className="max-w-fit mx-auto p-2 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/20 shadow-xl">
                            <div className="flex flex-wrap justify-center gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleCategorySelect(cat.id)}
                                        className={`relative group flex items-center gap-3 px-6 py-4 rounded-3xl text-[11px] font-bold uppercase tracking-widest transition-all duration-500 ${activeCategory === cat.id
                                            ? "text-white"
                                            : "text-slate-500 hover:text-slate-950 hover:bg-white/50"
                                            }`}
                                    >
                                        {activeCategory === cat.id && (
                                            <motion.div 
                                                layoutId="active-pill" 
                                                className="absolute inset-0 bg-slate-950 rounded-3xl shadow-lg" 
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <div className="relative z-10 flex items-center gap-3">
                                            <cat.icon size={16} />
                                            <span>{cat.label}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3D Module Grid */}
                    <section ref={gridRef} className="pb-32 px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                            {filteredModules.map((mod, i) => {
                                const globalIdx = modules.findIndex((m) => m.num === mod.num);
                                return (
                                    <TreeNode
                                        key={mod.num}
                                        mod={mod}
                                        index={i}
                                        isSelected={selectedModule === globalIdx}
                                        onClick={() => handleModuleSelect(globalIdx)}
                                    />
                                );
                            })}
                        </div>
                    </section>

                    {/* Refined Module Details */}
                    <section ref={detailRef} className="pb-40 pt-20 border-t border-slate-100">
                        <AnimatePresence mode="wait">
                            <ModuleDetail mod={modules[selectedModule]} />
                        </AnimatePresence>
                    </section>

                    {/* 🛡️ PREMIUM FINAL CERTIFICATION CTA */}
                    <section className="pb-10 pt-0">
                        <div className="relative rounded-[2rem] overflow-hidden bg-slate-950 border border-white/5 shadow-2xl group">
                            {/* Immersive Background Decor */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 blur-[150px] rounded-full -mr-40 -mt-40" />
                                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -ml-40 -mb-40" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px]" />
                            </div>

                            <div className="relative z-10 p-6 md:p-12 lg:p-14 grid lg:grid-cols-2 gap-10 items-center">
                                {/* Left Content: Value Prop */}
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 mb-4"
                                    >
                                        <Award size={16} />
                                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em]">Final Mission // Certification</span>
                                    </motion.div>

                                    <motion.h2 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.1 }}
                                        className="text-4xl md:text-6xl font-bungee text-white tracking-tighter leading-[0.95] mb-4"
                                    >
                                        Become a <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400">
                                            Certified MST
                                        </span> <br />
                                        Developer
                                    </motion.h2>

                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="text-white/40 text-base md:text-lg font-medium max-w-xl mb-8 leading-relaxed"
                                    >
                                        Prove your mastery of blockchain architecture. Complete the curriculum, pass the tactical assessments, and deploy a production-grade DApp to earn your <span className="text-white">on-chain NFT certification.</span>
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="flex flex-wrap gap-5"
                                    >
                                        <button 
                                            onClick={() => setIsEnrollModalOpen(true)}
                                            className="px-12 py-6 bg-slate-950 text-white rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-red-600 hover:scale-105 transition-all duration-500 shadow-2xl shadow-slate-900/10 flex items-center gap-4 group/btn"
                                        >
                                            Initialize Enrollment
                                            <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                        <div className="flex -space-x-3 items-center">
                                            {[1,2,3,4].map((i) => (
                                                <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover opacity-80" />
                                                </div>
                                            ))}
                                            <div className="pl-6 font-mono text-[9px] text-white/40 uppercase tracking-widest">
                                                +1.2k Developers Certified
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right Content: 3D Certificate Preview */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative hidden lg:block"
                                >
                                    <TiltCard>
                                        <div className="relative w-full aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 overflow-hidden group/cert shadow-2xl">
                                            {/* Holographic Overlays */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-blue-600/5" />
                                            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 blur-[100px] rounded-full rotate-45 group-hover/cert:translate-x-full transition-transform duration-1000" />
                                            
                                            {/* Certificate Content */}
                                            <div className="relative z-10 h-full flex flex-col justify-between font-mono">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="text-red-500 font-bold text-[10px] tracking-[0.4em] mb-2 uppercase">Official_Certificate</p>
                                                        <p className="text-white/30 text-[8px] uppercase tracking-widest">Hash: 0x71C...MST2026</p>
                                                    </div>
                                                    <Award size={40} className="text-red-600/50" />
                                                </div>

                                                <div className="space-y-4">
                                                    <p className="text-white/20 text-[9px] uppercase tracking-[0.5em]">Verified Developer</p>
                                                    <h4 className="text-4xl text-white  bungee-regular tracking-tighter uppercase leading-none border-b border-white/10 pb-6">
                                                        YOUR_NAME <br /> HERE
                                                    </h4>
                                                </div>

                                                <div className="flex justify-between items-end">
                                                    <div className="space-y-1">
                                                        <p className="text-white/40 text-[8px] uppercase tracking-widest">Issued By</p>
                                                        <p className="text-white text-xs font-bold tracking-tight">MST Lab Command</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="w-16 h-16 bg-white/10 rounded-lg p-2 flex items-center justify-center opacity-40">
                                                            <div className="w-full h-full border-2 border-white/20 rounded-sm border-dashed" />
                                                        </div>
                                                        <p className="text-white/20 text-[7px] mt-2 uppercase tracking-widest">QR_Verification_ID</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TiltCard>

                                </motion.div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
            
            <EnrollmentModal 
                isOpen={isEnrollModalOpen} 
                onClose={() => setIsEnrollModalOpen(false)} 
            />
        </div>
    );
}
