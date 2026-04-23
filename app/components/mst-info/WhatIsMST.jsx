'use client';

import { motion } from 'framer-motion';
import { Blocks, Cpu, Share2 } from 'lucide-react';
import MSTCard from './MSTCard';
import { link } from 'framer-motion/client';


const cards = [
  {
    title: 'SARAL Protocol',
    description:
      'SARAL Protocol is a non-custodial key management solution designed to deliver a seamless user experience—much like OAuth does for Web2. By leveraging Multi-Party Computation (MPC), SARAL empowers developers to securely manage blockchain transactions and Web3 authentication without compromising user control or privacy.',
    ctaText: 'Explore',
    link: '/Protocol',
    icon: Blocks
  },
  {
    title: 'WASMify',
    description:
      'WASMify enables real-world applications and blockchain networks to communicate seamlessly and securely. By leveraging zero-knowledge (ZK) technology, it ensures data privacy and trustless execution—bringing strong guarantees of security to every interaction.',
    ctaText: 'Explore',
    href: '#',
    link: '/Protocol',
    isActive: true,
    icon: Share2
  },
  {
    title: 'Post-quantum',
    description:
      'Post-quantum cryptography (PQC) protocols are cryptographic algorithms designed to secure digital communications against future, powerful quantum computers, which are expected to break current public-key encryption methods like RSA and ECC. These protocols are primarily being standardized by the National Institute of Standards and Technology (NIST) and are designed to run on classical hardware while resisting quantum-based attacks.',
    link: '/Protocol',
    ctaText: 'Explore',
    icon: Cpu
  }
];

export default function WhatIsMST() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden"
    >
      <div className="pointer-events-none absolute right-[-6%] top-[10%] hidden h-[580px] w-[580px] lg:block z-0 opacity-90">
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[0%] -left-[35%] h-[110%] w-[110%] rounded-full border-[0.5px] border-red-300"
        >
          <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-red-600 shadow-[0_0_10px_#ff2d2d]" />

          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute left-[10%] top-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"></span></span>
            <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-300">Post-quantum</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[60%] -top-[20%] flex h-[140%] w-[140%] items-center justify-center rounded-full border-[0.5px] border-black/10 border-dashed"
        >
          <div className="absolute top-[12%] h-2 w-2 rounded-full bg-accent shadow-[0_0_15px_#ff2d2d]" />

          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-[5px] top-[50%] flex -translate-y-1/2 items-center gap-2 rounded-full border border-white/50 bg-white/40 p-1 pr-4 backdrop-blur-[2px]"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-red-200" />
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span></span>
            <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-400">WASMify</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[85%] -top-[35%] flex h-[170%] w-[170%] items-center justify-center rounded-full border-[0.5px] border-black/5"
        >
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
          >
            <span className="relative inline-flex h-1 w-1 rounded-full bg-black"></span>
            <span className="whitespace-nowrap text-[8px] font-bold tracking-[0.25em] text-red-300">SARAL Protocol</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-10 -top-5 flex h-24 w-24 items-center justify-center rounded-full border border-red-500 opacity-60"
        >
          <div className="h-16 w-16 rounded-full border border-red-500/20" />
          <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#ff2d2d]" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 py-10 sm:py-12 sm:px-5 lg:px-6">

        <h2 className="bungee-regular text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase">
          What is <span className='text-transparent bg-clip-text bg-red-600'> MST?</span>
        </h2>

        <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-black/70 md:text-lg">
          MST Blockchain (MST) is a public, EVM-compatible Layer 1 blockchain developed by India-based Masterstroke Technosoft, designed for high-speed (400 TPS) and low-cost decentralized applications. Using Proof of Stake Authority (PoSA), it focuses on security and efficiency for enterprise, fintech, supply chain, and digital identity use cases
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.14
              }
            }
          }}
          className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <MSTCard
              key={card.title}
              title={card.title}
              description={card.description}
              ctaText={card.ctaText}
              href={card.link || card.href}
              icon={card.icon}
              isActive={card.isActive}
            />
          ))}
        </motion.div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-black/15 to-transparent" />
      </div>
    </motion.section>
  );
}
