'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import { useState } from "react";
import FormModal from "@/app/components/form/FormModal";

const featureItems = [
  {
    title: 'Cryptographically Unique Every Time',
    description: 'Each ticket minted on MST has a unique blockchain identity. Copying a ticket is cryptographically impossible — duplicate QR codes simply will not validate at the gate.',
    icon: CheckCircle2
  },
  {
    title: 'Organizer Sets All Rules',
    description: 'Resale price caps, transfer windows, maximum transfers, and post-event utility are all encoded into smart contracts. Rules enforce themselves — no staff required.',
    icon: ShieldCheck
  },
  {
    title: 'Post-Event Ticket Economy',
    description: 'After the show, tickets become collectibles, fan club tokens, or backstage access passes. MST turns a one-use pass into an ongoing relationship between artist and fan.',
    icon: Database
  }
];

const proofItems = [
  {
    title: 'Concert & Festival Passes',
    description: 'Large-scale event ticketing with anti-scalping rules and post-event collectible value built into every single ticket at mint.',
    image: '/NFT-Tickiting/Concert & Festival Passes.jpg',
    alt: 'National car manufacturer supply chain'
  },
  {
    title: 'Sports Venue Ticketing',
    description: 'Stadium passes with transparent ownership chain, loyalty tier recognition, and authentic secondary market management enforced on-chain.',
    image: '/NFT-Tickiting/Sports Venue Ticketing.jpg',
    alt: 'Express shipping supply chain'
  },
  {
    title: 'Conference & Professional Events',
    description: 'Professional event credentials with identity-linked entry and verifiable attendance records — useful for CPD points and professional accreditation.',
    image: '/NFT-Tickiting/Conference & Professional Events.jpg',
    alt: 'Food and agriculture supply chain'
  }
];

const creatorSteps = [
  'Organizer mints tickets on MST via SARAL Protocol integration — sets all rules in smart contract',
  'FortunaX consensus confirms ticket creation on-chain with near-instant finality',
  'Tickets distributed to buyers via Bridge-Key Wallet or existing app with no crypto setup needed',
  'Gate scanners verify each ticket against blockchain in real time — any duplicate rejected immediately',
  'Post-event smart contracts activate — tickets unlock rewards, collectible status, or community access'
];

const verifierSteps = [
  'Fan receives ticket in Bridge-Key Wallet or existing linked app — no crypto knowledge needed',
  'QR code generated from their wallet for presenting at the venue entrance gate',
  'Gate scanner verifies ticket authenticity on MST blockchain — result in milliseconds',
  'Smart contract confirms valid entry, marks ticket as used, prevents any rescan',
  'Post-event rewards activate automatically — fan receives collectible or loyalty token in their wallet'
];

const stats = [
  { label: 'Counterfeit Rate', value: 'Zero' },
  { label: 'Gate Verification', value: '<1s' },
  { label: 'Organizer Control', value: '100%' },
  { label: 'Ongoing Value', value: 'Post-Event' }
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
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
      <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">{title}</h3>
      <div className="mt-6 space-y-4">
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

export default function SupplyChainPage() {
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
                  NFT Ticketing
                </span>
                {/* <span className="mt-2 block text-[#ff2d2d]">
                 Certificate
                </span> */}
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-black/68 sm:text-lg">
             Every ticket is a unique on-chain asset. No fakes. No scalping. No lost entry. Real ownership for every fan.
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
                  src="/NFT-Tickiting/NFT Ticketing.jpg"
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
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">$9.2B</p>
                <p className="mt-2 text-sm font-medium text-white/70">Annual Event Ticket Fraud Losses</p>
                <p className="mt-1 text-xs italic text-white/50">FBI Economic Crime Report</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">12%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Tickets Sold Are Fraudulent</p>
                <p className="mt-1 text-xs italic text-white/50">UK Music Industry Report 2024</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">300%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Average Scalper Markup on Popular Events</p>
                <p className="mt-1 text-xs italic text-white/50">StubHub Internal Data</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Zero</p>
                <p className="mt-2 text-sm font-medium text-white/70">Counterfeit Rate on MST NFT Tickets</p>
                <p className="mt-1 text-xs italic text-white/50">Blockchain by Design
</p>
              </div>
            </div>
          </div>
        </SectionFade>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-6 py-16 md:px-16 lg:grid-cols-2 lg:items-center">
        <SectionFade className="space-y-5">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
          What is NFT Ticketing on MST?
          </h2>
          <p className="max-w-2xl text-base leading-8 text-black/70">
         An NFT ticket is a digital ticket that lives on the blockchain. Unlike a PDF or a barcode that can be copied, each MST ticket has a unique cryptographic identity that cannot be duplicated. When someone buys a ticket on MST Blockchain, it belongs to them — provably, permanently. At the gate, it is scanned and verified in real time against the blockchain. After the event, it can become a collectible, a loyalty reward, or an access pass to exclusive communities.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[260px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))] sm:h-[330px]">
            <Image
              src="/NFT-Tickiting/What is NFT Ticketing on MST.jpg"
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
        <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 mb-2">
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
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> PDF and barcode tickets copied and resold hundreds of times with zero detection</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Each MST ticket has a unique on-chain identity — duplication fails at first scan</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> Organizers lose all visibility once a ticket is sold — no data on resales or holders</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Full on-chain transfer history — organizers see every hand a ticket has passed through</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Scalpers use bots to buy in bulk and resell at 2–3x price — fans pay the penalty</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Smart contract resale caps and transfer limits enforced automatically — no bots possible</span></span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd] rounded-bl-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Ticket has zero value post-event — disposable and forgotten</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745] rounded-br-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">MST tickets unlock post-event utility — collectibles, community access, loyalty rewards</span></span>
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
           The Problem: The Ticketing Industry is Broken
          </h2>
          <p className="text-base leading-8 text-black/70">
           Fake tickets cost event organizers millions every year and destroy fan trust. Once a ticket is sold through traditional systems, organizers lose all visibility. Scalpers buy thousands of tickets using bots and resell at inflated prices. Genuine fans either pay too much or arrive with fraudulent tickets and get turned away at the gate.
          </p>

          <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 pt-2">How MST Specifically Solves It</h3>
          <p className="text-base leading-8 text-black/70">
           MST's FortunaX consensus verifies tickets against the blockchain in milliseconds — fast enough for any venue gate. The Bridge-Key Wallet means even fans who have never heard of crypto can use MST tickets with a simple app. SARAL Protocol connectors integrate with Ticketmaster, EventBrite, and custom ticketing systems without requiring organizers to rebuild anything. This is not a blockchain ticket layered on top of the old system — it replaces the vulnerability at the source.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[280px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.05))] sm:h-[340px]">
            <Image
              src="/NFT-Tickiting/The Ticketing industry is broken.jpg"
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
              <h2 className="font-[var(--font-space-grotesk)] text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                What Makes MST the Right Blockchain for This
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-white/70">
                MST was built specifically for real-world use cases — not adapted from DeFi tooling. Here is how MST&apos;s unique protocols give this application capabilities no generic blockchain solution can match.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">FortunaX Consensus</p>
                  <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold tracking-[-0.01em] text-white">
                    Real-Time Gate Verification
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    MST's FortunaX protocol provides near-instant finality — gate scans verify against the blockchain in milliseconds, meaning zero delays at busy venue entrances.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">Bridge-Key Wallet</p>
                  <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold tracking-[-0.01em] text-white">
                    Non-Crypto Fans Can Participate
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    MST's Bridge-Key Wallet lets fans who have never used crypto buy, hold, and scan NFT tickets using familiar Web2 interfaces — no wallet setup required.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">SARAL Protocol</p>
                  <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold tracking-[-0.01em] text-white">
                    Simple Integration for Promoters
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                   Event promoters integrate MST ticketing into existing platforms using SARAL Protocol connectors. No blockchain development team needed — just API access.
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
            Real-world applications showing how MST blockchain delivers this use case across different industries and contexts.
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

      {/* JOURNEY */}
      <section className="mx-auto w-full max-w-[90rem] px-6 py-16 md:px-16">
        <SectionFade className="space-y-3">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.03em] text-black sm:text-4xl">
            The Journey: How It Unfolds
          </h2>
          <p className="max-w-3xl text-base leading-8 text-black/68">
            Follow the journey from both sides — how the platform sets up the system and how the user experiences it in practice.
          </p>
        </SectionFade>

        <SectionFade className="mt-8 space-y-5">
          {creatorSteps.map((issuerStep, index) => (
            <div key={`journey-row-${index}`} className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch">
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#ff2d2d]" />
                <div className="pointer-events-none absolute right-4 top-2 text-5xl font-extrabold leading-none text-slate-200">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold tracking-[-0.01em] text-black">
                  Issuer: Step {index + 1}
                </h3>
                <p className="mt-2 pr-14 text-[13px] leading-6 text-black/70">{issuerStep}</p>
              </div>

              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#ff2d2d]" />
                <div className="pointer-events-none absolute right-4 top-2 text-5xl font-extrabold leading-none text-slate-200">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold tracking-[-0.01em] text-black">
                  User: Step {index + 1}
                </h3>
                <p className="mt-2 pr-14 text-[13px] leading-6 text-black/70">{verifierSteps[index]}</p>
              </div>
            </div>
          ))}
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
                <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
                  Ready to Build NFT Ticketing on MST?
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  Our team will walk you through exactly how MST&apos;s protocols — SARAL, WASMify, Klethesia, and FortunaX — deliver this use case for your organization.
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