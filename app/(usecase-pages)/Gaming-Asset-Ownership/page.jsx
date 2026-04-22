'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import { useState } from "react";
import FormModal from "@/app/components/form/FormModal";

const featureItems = [
  {
    title: 'Real Ownership — Not a Licence',
    description: 'Every item on MST is a verifiable blockchain asset in the player/s own wallet. The game company cannot take it away, modify its properties, or delete it — the player/s ownership is cryptographic.',
    icon: CheckCircle2
  },
  {
    title: 'Rarity That is Mathematically Provable',
    description: 'Scarcity is enforced by MST smart contracts. Rarity claims are verifiable on the blockchain explorer — players know for certain how many of an item exist, with no hidden minting by developers.',
    icon: ShieldCheck
  },
  {
    title: 'Developers Earn on Every Resale',
    description: 'MST smart contracts automatically pay developer royalties on every secondary market sale. Developers build thriving economies where they earn ongoing revenue — not just initial sales.',
    icon: Database
  }
];

const proofItems = [
  {
    title: 'Collectible Character Assets',
    description: 'Limited-edition game characters minted as unique blockchain assets with verifiable rarity and permanently transferable ownership.',
    image: '/gaming-asset/Collectible Character Assets.jpg',
    alt: 'National car manufacturer supply chain'
  },
  {
    title: 'In-Game Item Marketplace',
    description: 'Peer-to-peer item trading with smart contract escrow, automatic royalty payment, and full transaction transparency.',
    image: '/gaming-asset/In-Game Item Marketplace.jpg',
    alt: 'Express shipping supply chain'
  },
  {
    title: 'Achievement & Badge Tokens',
    description: 'In-game achievements anchored on-chain as verifiable credentials — portable across compatible game platforms.',
    image: '/gaming-asset/Achievement & Badge Tokens.jpg',
    alt: 'Food and agriculture supply chain'
  }
];

const creatorSteps = [
  'Developer mints the asset collection on MST with defined rarity tiers and utility rules',
  'Smart contract governs transfer conditions, secondary market royalties, and any burn mechanics',
  'Assets are linked to player accounts through an integrated game wallet or profile system',
  'Players earn or buy assets — ownership is recorded on the blockchain the moment of acquisition',
  'Developer dashboard tracks distribution, market activity, and automatic royalty accrual in real time'
];

const verifierSteps = [
  'Player views their owned assets in the in-game inventory or their blockchain wallet',
  'They check item rarity, full provenance history, and the complete previous ownership chain',
  'They list the item on a marketplace or initiate a direct peer-to-peer transfer',
  'Buyer confirms the purchase — smart contract executes the transfer and pays the developer royalty',
  'Both parties receive cryptographic confirmation; the full record is permanently logged on MST'
];

const stats = [
  { label: 'Market Disrupted', value: '$3.7B' },
  { label: 'Player Ownership', value: 'True' },
  { label: 'Rarity Enforcement', value: 'Proven' },
  { label: 'Platform Lock-In', value: 'Open' }
];

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

function FeatureCard({ title, description, icon: Icon }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/90 p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:border-[#ff2d2d]/50 hover:bg-red-600 hover:shadow-[0_20px_48px_rgba(255,45,45,0.12)] w-full min-h-[260px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[340px]"
    >
      <div className="group-hover:bg-black mb-4 inline-flex rounded-xl border border-[#ff2d2d]/20 bg-[#ff2d2d]/8 p-2.5">
        <Icon className="h-5 w-5 text-[#ff2d2d]" />
      </div>
      <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5 text-center w-full">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/68 text-center w-full">{description}</p>
    </motion.article>
  );
}

function ProofCard({ title, description, image, alt }) {
  return (
   <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_14px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_18px_42px_rgba(255,45,45,0.12)] min-h-[480px]"
    >
      <div className="relative h-[170px] overflow-hidden bg-[linear-gradient(135deg,rgba(255,45,45,0.16),rgba(0,0,0,0.04))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,45,45,0.25),transparent_65%)]" />
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/68">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#ff2d2d] transition-transform duration-300 group-hover:translate-x-1">
          Read More <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </motion.article>
  );
}

function StepFlow({ title, steps, accent = false }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
      <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">{title}</h3>
      <div className="mt-6 flex-1 space-y-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-start gap-3">
            <div className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm ${accent ? 'bg-[#ff2d2d]' : 'bg-black'}`}>
              {index + 1}
            </div>
            <div className="pt-0.5">
              <p className="text-sm leading-relaxed text-black/74">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HealthcarePage() {
  const [openForm, setOpenForm] = useState(false);
const [formType, setFormType] = useState("General Enquiry");
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-24 pb-16 md:px-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_30%)]" />
        <SectionFade className="relative mx-auto max-w-[90rem] space-y-6">
          <div className="max-w-4xl space-y-5">
            <div className="relative inline-block">
              <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
                <span className="block">
                 Gaming Asset
 
 <span className="text-[#ff2d2d]"> Ownership</span>
                </span>
                {/* <span className="mt-2 block text-[#ff2d2d]">
                 Certificate
                </span> */}
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-black/68 sm:text-lg">
           Your sword. Your skin. Your character. Actually yours — on the blockchain.
            </p>
          </div>

          {/* Responsive Button Group */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-start sm:items-center mt-6 mb-8 w-full">
                      {/* DEMO */}
                      <button
                        onClick={() => {
                          setFormType("Book a Demo");
                          setOpenForm(true);
                        }}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/80 border border-white/20 text-white font-semibold hover:bg-[#ff2d2d]"
                      >
                        Book a Demo
                      </button>

                      {/* EXPERT */}
                      <button
                        onClick={() => {
                          setFormType("Talk to Expert");
                          setOpenForm(true);
                        }}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/80 border border-white/20 text-white font-semibold hover:bg-[#ff2d2d]"
                      >
                        Talk to an Expert
                      </button>
            </div>

          <div className="overflow-hidden rounded-3xl bg-black shadow-none">
            <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-3xl bg-[linear-gradient(135deg,rgba(255,45,45,0.22),rgba(0,0,0,0.7))] sm:h-[380px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,45,45,0.22),transparent_24%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%,rgba(0,0,0,0.22))]" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/gaming-asset/Gaming Asset Ownership.jpg"
                  alt="Supply chain banner"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 90rem"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </SectionFade>
      </section>

      {/* STATS */}
      <section className="mx-auto w-full max-w-[90rem] px-6 py-6 md:px-16">
        <SectionFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">$3.7B</p>
                <p className="mt-2 text-sm font-medium text-white/70">Citizens Distrust Electronic Voting
</p>
                <p className="mt-1 text-xs italic text-white/50">MIT Election Lab 2024</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">$184B</p>
                <p className="mt-2 text-sm font-medium text-white/70">In-Game Asset Market Size 2024</p>
                <p className="mt-1 text-xs italic text-white/50">Newzoo Gaming Report</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">87%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Players Believe They Should Own Assets</p>
                <p className="mt-1 text-xs italic text-white/50">Mythical Games Survey 2024</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Zero</p>
                <p className="mt-2 text-sm font-medium text-white/70">Compensation When Games Shut Down (Today)</p>
                <p className="mt-1 text-xs italic text-white/50">Industry Standard</p>
              </div>
            </div>
          </div>
        </SectionFade>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-6 py-16 md:px-16 lg:grid-cols-2 lg:items-center">
        <SectionFade className="space-y-5">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
         What is Blockchain Gaming Asset Ownership?

          </h2>
          <p className="max-w-2xl text-base leading-8 text-black/70">
         In every traditional game, the items you earn or buy belong to the game company — not you. They exist in that company's database. If the game shuts down, a server goes offline, or your account gets banned, everything is gone. Blockchain gaming changes this completely. When game assets are minted on MST Blockchain, they are yours — truly, permanently. They live in your wallet, not in a company's database. You can sell them, trade them, or hold them across any game that supports them.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[260px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))] sm:h-[330px]">
            <Image
              src="/gaming-asset/What is Blockchain Gaming Asset Ownership_.jpg"
              alt="Supply chain intro"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </SectionFade>
      </section>

      {/* FEATURES */}
      <section className="mx-auto w-full max-w-[90rem] px-6 py-16 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featureItems.map((feature) => (
            <motion.div key={feature.title} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MST vs Traditional Table */}
      <section className="mx-auto w-full max-w-[90rem] px-6 pt-10 pb-8 md:px-16">
        <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
          Why Build This on MST — Not the Traditional Way?
        </h2>
        <p className="text-base text-black/70 mb-7 max-w-2xl">
          Solutions like this exist in Web2 today. Here is exactly why MST blockchain changes the outcome — and why MST specifically is the right choice.
        </p>
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-black/10 bg-white">
          <table className="min-w-full text-left text-base">
            <thead>
              <tr>
                <th className="bg-[#e9eef7] text-[#1a2745] font-bold px-6 py-4 rounded-tl-2xl">TRADITIONAL / WEB2 APPROACH</th>
                <th className="bg-[#0b1a36] text-white font-bold px-6 py-4 rounded-tr-2xl">MST BLOCKCHAIN <span className="font-normal text-xs text-[#b3c2e0]">SPECIFIC ADVANTAGE</span></th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> Players spend $3.7B on items they legally own nothing of — platform licence only</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">MST items are owned by the player, recorded permanently on blockchain — provably theirs</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Game shutdown = total loss of all purchased items with no compensation possible</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">MST items exist on blockchain — independent of any game server or company decision</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> Rarity claims unverifiable — developers can secretly mint more items of any type</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Smart contract enforces total supply — no developer can mint beyond what was declared</span></span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd] rounded-bl-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Grey market trading exposes players to scams with zero purchase protection </span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745] rounded-br-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Smart contract escrow on MST — trades execute atomically with zero counterparty risk</span></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-6 py-16 md:px-16 lg:grid-cols-2 lg:items-center">
        <SectionFade className="space-y-5 border-l-2 border-[#ff2d2d] pl-5 md:pl-6">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
            The Problem: Players Own Nothing
          </h2>
          <p className="text-base leading-8 text-black/70">
           The global gaming market generates hundreds of billions in revenue — much of it from players buying in-game items. But players own none of it. The items are just entries in a company's database. Game studios can modify item values, remove items entirely, or shut down the game with no compensation to players. Meanwhile, thriving grey markets of unregulated item trading expose players to fraud and scams with zero protection.
          </p>

          <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 pt-2">How MST Fixes It</h3>
          <p className="text-base leading-8 text-black/70">
          MST allows game developers to mint in-game items as blockchain assets. Rarity, utility, and transfer rules are defined in smart contracts. Once minted, ownership transfers to the player and is permanently recorded on the blockchain. Players can trade freely on open marketplaces. Developers earn programmable royalties on every secondary sale. When a game evolves, items can persist and carry value across compatible platforms.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[280px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.05))] sm:h-[340px]">
            <Image
              src="/gaming-asset/Players Own Nothing.jpg"
              alt="Problem and solution visual"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </SectionFade>
      </section>

      {/* WHAT MAKES MST RIGHT */}
      <section className="mx-auto w-full max-w-[90rem] px-6 py-16 md:px-16">
        <SectionFade>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1a36] px-6 py-12 text-white shadow-[0_26px_70px_rgba(0,0,0,0.24)] md:px-12 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_40%),linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.22))]" />

            <div className="relative">
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5">
                What Makes MST the Right Blockchain for This
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-white/70">
                MST was built specifically for real-world use cases — not adapted from DeFi tooling. Here is how MST's unique protocols give this application capabilities no generic blockchain solution can match.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">WASMify Protocol</p>
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5 mt-3">
                   Any Game Language Can Mint Items
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                   WASMify's multi-language WASM support means game developers in Unity, Unreal, or any engine can mint MST blockchain assets without learning Solidity or adopting a new tech stack.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">FortunaX Consensus</p>
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5 mt-3">
                    High-Frequency Gaming Transactions
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                   Gaming requires thousands of item transactions per second. MST's FortunaX consensus handles high-throughput in-game economies at transaction fees so low that even ₹1 micro-items are viable.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">Bridge-Key Wallet</p>
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5 mt-3">
                    Mainstream Players Onboard Instantly
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    The Bridge-Key Wallet eliminates the Web3 onboarding barrier — mainstream players with no crypto experience can own, trade, and hold MST game assets from day one using familiar interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionFade>
      </section>

      {/* PROOFS */}
      <section className="mx-auto w-full max-w-[90rem] px-6 py-16 md:px-16">
        <SectionFade className="space-y-3">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">Proofs of Concept</h2>
          <p className="max-w-2xl text-base leading-8 text-black/68">
            Real-world examples showing how this use case works in practice across different industries and regions.

          </p>
        </SectionFade>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {proofItems.map((item) => (
            <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
              <ProofCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STEPS */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-6 px-6 py-16 md:px-16 lg:grid-cols-2 lg:items-stretch">
        <SectionFade className="h-full">
          <StepFlow title="Creator / Issuer Flow" steps={creatorSteps} />
        </SectionFade>
        <SectionFade className="h-full">
          <StepFlow title="User / Verifier Flow" steps={verifierSteps} accent />
        </SectionFade>
      </section>

      {/* STATS */}
      <section className="mx-auto w-full max-w-[90rem] px-6 pb-20 pt-6 md:px-16">
        <SectionFade>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-6 py-8 text-white shadow-[0_22px_56px_rgba(0,0,0,0.22)] md:px-10 md:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,45,45,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />
            <div className="relative grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">{stat.label}</p>
                  <p className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionFade>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-[90rem] px-6 pb-8 md:px-16">
        <SectionFade>
          <div className="relative overflow-hidden rounded-3xl bg-[#ff2d2d] px-6 py-7 text-white md:px-10 md:py-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5">
                  See How MST Protects Patient Medical Records
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  Secure, patient-controlled healthcare records with instant provider access and full audit trails.
                </p>
              </div>

              <div className="md:shrink-0">
                <button
                  onClick={() => {
                    setFormType("Talk to Expert");
                    setOpenForm(true);
                  }}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-[#ff2d2d] shadow-[0_18px_44px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:scale-[1.02] md:w-auto"
                >
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </SectionFade>
      </section>

      <FormModal open={openForm} setOpen={setOpenForm} formType={formType} />
    </main>
  );
}