'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { FaGlobe, FaTelegram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function SectionFade({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BlogDetailsPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-24 pb-16 md:px-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_30%)]" />
        <SectionFade className="relative mx-auto max-w-[90rem] space-y-6">

          {/* Title */}
          <h1 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
            MST Blockchain Goes Live on SafePal: <span className="text-[#ff2d2d]">A Big Step</span> for India's Web3 Future
          </h1>

          {/* Author + Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-black/60 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-xs">
                <User size={14} className="text-white" />
              </div>
              <span className="text-black font-semibold">
                Masterstroke Technosoft
              </span>
            </div>

            <span className="text-black/30">|</span>

            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#ff2d2d]" />
              <span>Apr 3, 2026</span>
            </div>

            <span className="text-black/30">|</span>

            <span className="bg-[#ff2d2d]/10 text-[#ff2d2d] px-3 py-1 rounded-full text-xs font-semibold uppercase">
              #Partnership
            </span>
          </div>
        </SectionFade>
      </section>

      {/* Blog Image */}
      <section className="mx-auto w-full max-w-[100rem] px-6 pb-16 md:px-16">
  <SectionFade>

    <div className="relative w-full aspect-[16/7] max-h-[500px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))]">

      {/* Image FULLY FILLS */}
      <Image
        src="/voting/Decentralized Voting.jpg"
        alt="Blog"
        fill
        sizes="(max-width: 900px) 100vw, 100rem"
        className="object-cover object-center"
      />

    </div>

  </SectionFade>
</section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 pb-20 md:px-16">
        <SectionFade>
          {/* Title Below Image */}
          <h2 className="bungee-regular text-xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-6">
            MST Blockchain Goes Live on SafePal: <span className="text-[#ff2d2d]">A Big Step</span> for India's Web3 Future
          </h2>

          {/* Tags */}
          <div className="text-black/50 mb-8 flex flex-wrap gap-2">
            <Tag size={14} className="text-[#ff2d2d]" />
            <span>#Partnership</span>
            <span>#Web3Security</span>
            <span>#SafePal</span>
            <span>#MSTBlockchain</span>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-black/70 leading-relaxed text-lg text-justify">
            <p className="text-black font-semibold text-xl">
              Big news from the MST ecosystem.
            </p>

            <p className="text-black font-semibold text-xl">
              Every day, millions of people are moving their financial lives onto
              the blockchain. They are storing assets, making transactions, and
              building wealth in a system that has no middleman. But with that
              freedom comes one big responsibility:{" "}
              <span className="text-[#ff2d2d] font-semibold">
                "keeping your assets safe".
              </span>{" "}
              In Web3, security is not something someone else handles for you. It
              starts with your wallet.
            </p>

            <p>
              That is exactly the thinking behind our latest announcement.
            </p>

            <p>
              MST Blockchain has officially joined hands with SafePal, a globally
              recognized hardware wallet provider. This is not just another
              partnership announcement. It is a step toward making sure that
              everyone who uses MST Chain, whether you are brand new to crypto or
              have been around for years, can do so without worrying about the
              safety of their assets.
            </p>

            <p>
              If you are just getting started in Web3, here is something nobody
              really tells you: the most important step is not finding the next big
              coin. It is protecting what you have.
            </p>
          </div>

         {/* Social Links */}
    <div className="mt-10 pt-6 border-t border-gray-200">
           <p className="text-lg font-semibold text-black mb-3">
             Stay connected with MST Blockchain:
          </p>

      <div className="flex flex-wrap items-center gap-2 text-base text-black">

    <a
      href="https://t.me/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:underline hover:text-[#ff2d2d] transition"
    >
      <FaTelegram className="text-sm" />
      Telegram
    </a>

    <span>|</span>

    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:underline hover:text-[#ff2d2d] transition"
    >
      <FaTwitter className="text-sm" />
      X (Twitter)
    </a>

    <span>|</span>

    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:underline hover:text-[#ff2d2d] transition"
    >
      <FaLinkedin className="text-sm" />
      LinkedIn
    </a>

  </div>
  </div>
          
        </SectionFade>
      </section>
    </main>
  );
}