
"use client";


import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white pt-24">
      <footer className="relative bg-white pt-20 pb-10 rounded-t-[60px] md:rounded-t-[100px] border-t border-red-500 font-sans overflow-hidden">
        {/* 🔴 Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[400px] h-[400px] bg-red-500/20 blur-[120px] top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-red-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />
        </div>

        {/* 🛰️ ORBITAL ANIMATIONS (Background Layer) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

          {/* Orbit 1: Inner Solid Ring */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[10%] -left-[20%] w-[100%] h-[120%] border-[0.5px] border-red-500/20 rounded-full hidden lg:flex items-center justify-center z-0"
          >
            <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [-360, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[15%] left-[15%] flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              <span className="text-[9px] font-black tracking-[0.2em] text-red-400/60 uppercase whitespace-nowrap">Use Cases</span>
            </motion.div>
          </motion.div>

          {/* Orbit 2: Middle Dashed Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[20%] -left-[30%] w-[120%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center absolute inset-0 z-0 "
          >
            <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/60 backdrop-blur-[2px] rounded-full p-1 border border-black/10"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-500" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-black whitespace-nowrap z-0">9+ Active Nodes</span>
            </motion.div>
          </motion.div>

          {/* Orbit 3: Outer Faint Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[30%] -left-[40%] w-[150%] h-[160%] border-[0.5px] border-black/10 rounded-full hidden lg:flex items-center justify-center absolute inset-0 z-0 "
          >
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-[25%] left-[15%] flex items-center gap-2 opacity-40"
            >
              <span className="relative inline-flex rounded-full h-1 w-1 bg-red-400"></span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-red-400 whitespace-nowrap uppercase">POSA Consensus</span>
            </motion.div>
          </motion.div>

          {/* Small floating local elements */}
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 right-20 w-24 h-24 border border-red-500/20 rounded-full flex items-center justify-center opacity-40 absolute inset-0 z-0 "
          >
            <div className="w-16 h-16 border border-red-500/10 rounded-full" />
            <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
          </motion.div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* BRAND */}
            <div className="col-span-2 lg:col-span-3 mb-6 sm:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="1.png"
                  alt="MST logo"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="bungee-regular text-lg md:text-lg leading-tight tracking-tight text-black font-extrabold uppercase mb-6" >
                MST <span className="text-red-600">Blockchain</span>
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-[260px]" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
                STRUCTURAL PURITY IN DECENTRALIZED ARCHITECTURE. BUILT FOR THE HIGH-PERFORMANCE INTERNET.
              </p>
            </div>

            {/* ECOSYSTEM */}
            <div className="col-span-1 lg:col-span-3 mb-6 sm:mb-0 text-start">
              <h4 className="bungee-regular text-lg md:text-lg leading-tight tracking-tight text-red-600 font-extrabold uppercase mb-6" >Community</h4>
              <ul className="space-y-4  text-gray-600 text-sm">
                <li><Link href="/validator" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">Validators</Link></li>
                <li><Link href="/grant" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">Grants</Link></li>
                <li>
                  <a
                    href="https://future.forem.com/mst-chain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal"
                  >
                    Dev Support Forum
                  </a>
                </li>
                <li><Link href="#Events" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">Events</Link></li>
                <li>
                  <a
                    href="https://support.mstvalidator.com/portal/en/signin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal"
                  >
                    Support
                  </a>
                </li>

              </ul>
            </div>

            {/* USE CASES */}
            <div className="col-span-1 lg:col-span-3 mb-6 sm:mb-0 text-start">
              <h4 className="bungee-regular text-lg md:text-lg leading-tight tracking-tight text-red-600 font-extrabold uppercase mb-6" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>Use Cases</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li><Link href="/On-Chain-Certificate" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">On Chain Certificate</Link></li>
                <li><Link href="/Supply-Chain-Transparency" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">Supply Chain Transparency</Link></li>
                <li><Link href="/Tokenized-Real-Estate" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">Tokenized Real Estate</Link></li>
                <li><Link href="/Insurance-Automation" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">Insurance Automation</Link></li>
                <li><Link href="/NFT-Ticketing" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">NFT Ticketing</Link></li>

              </ul>
            </div>

            {/* RESOURCES */}
            <div className="col-span-1 lg:col-span-3 mb-6 sm:mb-0 text-start">
              <h4 className="bungee-regular text-lg md:text-lg leading-tight tracking-tight text-red-600 font-extrabold uppercase mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li>
                  <Link href="/about" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">Contact Us</Link>
                </li>
                <li>
                  <a
                    href="https://github.com/mst-chain/whitepaper/blob/main/WHITEPAPER.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal"
                  >
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.mstblockchain.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <Link href="/Career" className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal">Careers</Link>
                </li>
              </ul>
            </div>

            {/* NEWSLETTER + CONTACT */}
            <div className="col-span-2 lg:col-span-12">

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 w-full">
                {/* LEFT SIDE (INPUT GROUP) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md">
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="rounded-full px-5 py-2 border border-red-300 bg-white flex-1 text-black outline-none placeholder:text-gray-400 focus:border-red-500 transition"
                    style={{ fontFamily: 'aeonik', fontWeight: 400 }}
                  />

                  <button
                    type="button"
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition flex-shrink-0"
                  >
                    SUBMIT
                  </button>
                </div>

                {/* RIGHT SIDE (CONTACT + ICONS) */}
                <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 ml-0 md:ml-auto md:pl-0 lg:pl-10 mt-4 md:mt-0 w-full md:w-auto">
                  <a
                    href="mailto:support@mstblockchain.com"
                    className="hover:text-red-500 cursor-pointer transition font-aeonik font-normal text-sm whitespace-nowrap"

                  >
                    support@mstblockchain.com
                  </a>

                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
                    <a
                      href="https://x.com/MSTBlockchain"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaTwitter size={16} className="text-current" />
                    </a>
                    <a
                      href="https://www.facebook.com/mstblockchain"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaFacebook size={16} className="text-current" />
                    </a>
                    <a
                      href="https://www.instagram.com/mstblockchain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaInstagram size={16} className="text-current" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mstblockchain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaLinkedin size={16} className="text-current" />
                    </a>
                    <a
                      href="https://www.youtube.com/@MST_Blockchain"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaYoutube size={16} className="text-current" />
                    </a>
                    <a
                      href="https://t.me/mstblockchainchat"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Telegram"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaTelegram size={16} className="text-current" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-12 pt-8 border-t border-red-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs text-center md:text-left" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
              © 2024 MST PROTOCOL. ALL RIGHTS RESERVED. STRUCTURAL PURITY IS THE STANDARD.
            </p>

            <div className="flex gap-8 text-xs text-gray-500" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
              <span className="hover:text-red-500 cursor-pointer transition">Privacy Policy</span>
              <span className="hover:text-red-500 cursor-pointer transition">Terms of Service</span>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}