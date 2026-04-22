'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import { useState } from "react";
import FormModal from "@/app/components/form/FormModal";

const featureItems = [
  {
    title: 'Fractional Ownership — Any Amount',
    description: 'MST tokenization removes the ₹50 lakh minimum barrier. Any investor can hold a fractional stake in premium real estate — verified, liquid, and tradeable on-chain.',
    icon: CheckCircle2
  },
  {
    title: 'Title Fraud is Structurally Impossible',
    description: 'Duplicate property titles cannot coexist on MST blockchain. The FortunaX consensus mechanism rejects any ownership record inconsistent with the verified chain of title.',
    icon: ShieldCheck
  },
  {
    title: 'Automated Rental Distribution',
    description: "Smart contracts distribute rental income to token holders proportionally and automatically — no property manager, no delay, no errors. Payments on schedule every time.",
    icon: Database
  }
];

const proofItems = [
  {
    title: 'Land Title Verification System',
    description: 'Property titles anchored on MST — buyers, banks, and legal firms verify authenticity and ownership history in seconds, not days.',
    image: '/tokenized-estate/Land Title Verification System.jpg',
    alt: 'National car manufacturer supply chain'
  },
  {
    title: 'Fractional Commercial Real Estate',
    description: 'Premium commercial property divided into accessible tokens — with automated rental income distribution to all fractional holders.',
    image: '/tokenized-estate/Fractional Commercial Real Estate.jpg',
    alt: 'Express shipping supply chain'
  },
  {
    title: 'Residential Crowdfunding',
    description: 'Residential development projects tokenized for community co-investment — transparent on-chain progress tracking and proportional return distribution.',
    image: '/tokenized-estate/Residential Crowdfunding.jpg',
    alt: 'Food and agriculture supply chain'
  }
];

const issuerSteps = [
  {
    title: "Issuer: Step 1",
    desc: "Real estate asset is registered, legally verified, and tokenized through the MST platform via SARAL Protocol",
  },
  {
    title: "Issuer: Step 2",
    desc: "FortunaX consensus anchors the ownership record permanently — no duplicate title can be created",
  },
  {
    title: "Issuer: Step 3",
    desc: "Smart contract defines fractional ownership, income distribution schedule, and governance rights",
  },
  {
    title: "Issuer: Step 4",
    desc: "Tokens issued to investors at any fraction size — recorded on-chain at moment of transfer",
  },
  {
    title: "Issuer: Step 5",
    desc: "All subsequent transfers, income events, and governance decisions logged permanently on MST",
  },
];

const userSteps = [
  {
    title: "User: Step 1",
    desc: "Investor accesses property token in their Bridge-Key Wallet or MST investor portal",
  },
  {
    title: "User: Step 2",
    desc: "Views fractional stake, co-investor count, rental yield history, and upcoming distributions",
  },
  {
    title: "User: Step 3",
    desc: "Scans property title QR to verify legal document authenticity against blockchain record",
  },
  {
    title: "User: Step 4",
    desc: "Checks complete on-chain ownership history — every transfer since tokenization visible",
  },
  {
    title: "User: Step 5",
    desc: "Receives mUSD rental distributions automatically at scheduled intervals via smart contract",
  },
];


const stats = [
  { label: '$326T', value: 'Market Being Disrupted' },
  { label: '100%', value: 'Fraud-Proof Title' },
  { label: 'Minutes', value: 'Settlement Time' },
  { label: 'Any₹', value: 'Minimum Investment' }
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
            <div
              className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm ${accent ? 'bg-[#ff2d2d]' : 'bg-black'}`}
            >
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
               Tokenized
                </span>
                <span className="mt-2 block text-[#ff2d2d]">
                 Real Estate
                </span>
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-black/68 sm:text-lg">
            Real estate on MST blockchain — fractional, transparent, and permanently verifiable.
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
                  src="/tokenized-estate/tokenized Real Estate.jpg"
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
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">$326T</p>
                <p className="mt-2 text-sm font-medium text-white/70">Global Real Estate Market Value</p>
                <p className="mt-1 text-xs italic text-white/50">Savills World Research 2024</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">$4T</p>
                <p className="mt-2 text-sm font-medium text-white/70">Tokenized Asset Market by 2030</p>
                <p className="mt-1 text-xs italic text-white/50">Grand View Research</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">43%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Property Transactions Have Title Issues</p>
                <p className="mt-1 text-xs italic text-white/50">ALTA 2024 Survey</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">92%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Reduction in Settlement Time via Blockchain</p>
                <p className="mt-1 text-xs italic text-white/50">World Economic Forum
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
        What is Tokenized Real Estate on MST?
          </h2>
          <p className="max-w-2xl text-base leading-8 text-black/70">
          Tokenizing real estate means turning a physical property into digital tokens on MST blockchain. Think of it like dividing a building into thousands of digital shares — each representing real, verifiable ownership. Anyone can buy a fraction, whether that's worth ₹1,000 or ₹1 crore. Ownership is permanently recorded and cannot be disputed, forged, or manipulated. Property transfers that used to take weeks of paperwork happen in minutes.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[260px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))] sm:h-[330px]">
            <Image
              src="/tokenized-estate/What is tokenized Real.jpg"
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
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Minimum property investment starts at ₹50L+ — most Indians are excluded entirely</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Tokenization allows ₹1,000 fractional investments — any Indian can participate</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Title searches take 7–15 days and still miss historical fraud in many registries</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Instant on-chain ownership verification — complete 100-year history in one lookup</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> Rental income distribution requires property managers, accountants, and bank transfers</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Smart contracts distribute rental income automatically to every token holder on schedule</span></span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd] rounded-bl-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Property sales take 45–90 days of paperwork, lawyers, and stamp duty complexity</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745] rounded-br-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">On-chain transfer of property tokens executes in minutes with transparent fee structure</span></span>
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
           The Problem: India's Real Estate Market Has a Trust and Access Crisis
          </h2>
          <p className="text-base leading-8 text-black/70">
          Property transactions involve mountains of paperwork, expensive legal fees, and long waiting periods. Most Indians are completely locked out as investors. Land records in many states are still paper-based — duplicate titles, forged deeds, and ownership disputes drain courts and families alike. The World Bank estimates India loses $13 billion annually to land disputes.
          </p>

          <h2 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">How MST Specifically Solves It</h2>
          <p className="text-base leading-8 text-black/70">
         MST's FortunaX consensus makes duplicate titles technically impossible — the chain only accepts ownership records consistent with the existing verified history. mUSD stablecoin means rental distributions are stable in value — not subject to crypto price swings. Fractional node ownership on MST means even the validation of these property records is decentralized and not controlled by any single government or corporation.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[280px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.05))] sm:h-[340px]">
            <Image
              src="/tokenized-estate/India's Real Estate Market.jpg"
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
                    Fraud-Proof Title Chain
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                   FortunaX's energy-efficient consensus permanently rejects duplicate title records. Historical fraudulent titles cannot coexist with the verified on-chain record — ever.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p>mUSD Stablecoin</p>
                  <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold tracking-[-0.01em] text-white">
                    Rupee-Stable Distributions
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Rental income and property sale proceeds are distributed in mUSD — MST's hybrid reserve-backed stablecoin — protecting investors from crypto volatility on their returns.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">Klethesia Protocol</p>
                  <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold tracking-[-0.01em] text-white">
                   Private Investor Identities
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Klethesia ensures investor identities remain private while ownership records stay fully verifiable. KYC data is kept off-chain; only cryptographic proofs are public.
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

      {/* STEPS */}
      <section className="w-full bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-[var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.03em] text-black sm:text-4xl">
          Case Study: End-to-End Walkthrough
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative mt-10">

        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-300" />

        {/* ISSUER STEPS */}
        <div className="space-y-10">
          {issuerSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 relative">

              {/* Circle */}
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-semibold">
                {index + 1}
              </div>

              {/* Content */}
              <div>
                <h4 className="font-semibold text-black">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm max-w-xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="h-12" />

        {/* USER STEPS */}
        <div className="space-y-10">
          {userSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 relative">

              {/* Circle */}
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-semibold">
                {index + 1}
              </div>

              {/* Content */}
              <div>
                <h4 className="font-semibold text-black">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm max-w-xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

      {/* STATS */}
      <section className="mx-auto w-full max-w-[90rem] px-6 pb-20 pt-6 md:px-16">
        <SectionFade>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-6 py-8 text-white shadow-[0_22px_56px_rgba(0,0,0,0.22)] md:px-10 md:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,45,45,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />
            <div className="relative grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                  <p className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl" >{stat.label}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55" >
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
                  Ready to Build On-Chain Certificate on MST?
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