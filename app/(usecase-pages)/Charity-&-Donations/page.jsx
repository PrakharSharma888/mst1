'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import { useState } from "react";
import FormModal from "@/app/components/form/FormModal";

const featureItems = [
  {
    title: 'Every Rupee is Traceable in Real Time',
    description: 'All donations, transfers, and disbursements are recorded on MST the moment they happen. Donors log in and see their moneys exact location in the pipeline — not just a year-end report.',
    icon: CheckCircle2
  },
  {
    title: 'Funds Release Only on Verified Milestones',
    description: 'Smart contracts hold donations in escrow. They cannot be touched until a defined milestone is genuinely achieved and verified. Organizations cannot access funds ahead of their intended purpose.',
    icon: ShieldCheck
  },
  {
    title: 'Permanent Public Audit Trail',
    description: 'The complete disbursement history is permanently on MST blockchain — accessible to donors, tax authorities, regulators, and the general public for full independent verification at any time.',
    icon: Database
  }
];

const proofItems = [
  {
    title: 'NGO Campaign Fundraising',
    description: 'Charitable campaigns with on-chain milestone gates, live fund tracking, and transparent donor impact dashboards — every rupee verifiable by any donor at any time.',
    image: '/charity-donation/handshake-with-colorful.jpg',
    alt: 'National car manufacturer supply chain'
  },
  {
    title: 'Humanitarian Aid Distribution',
    description: 'Emergency relief management with verified beneficiary disbursements logged immutably at every distribution point — proving aid reached the right people.',
    image: '/charity-donation/digital-heart-hands.jpg',
    alt: 'Express shipping supply chain'
  },
  {
    title: 'Community Crowdfunding',
    description: 'Local community fundraising with full on-chain transparency and milestone-locked fund release — building local trust in small-scale organized giving.',
    image: '/charity-donation/3d-rendering-hand.jpg',
    alt: 'Food and agriculture supply chain'
  }
];

const creatorSteps = [
  'Campaign created using SARAL Protocol — any NGO launches in minutes with no blockchain expertise needed',
  'Smart contract configured with funding goals, milestone definitions, and beneficiary payment structure',
  'mUSD stablecoin used for donations — ensures stable value throughout campaign duration',
  'Donations received and recorded on MST via FortunaX consensus — real-time on-chain confirmation for donors',
  'Smart contract evaluates milestones and auto-releases funds — every disbursement permanently publicly logged'
];

const verifierSteps = [
  'Donor views campaign page with live on-chain funding progress and milestone status — not static estimates',
  'Donates in mUSD (rupee-stable) — transaction confirmed on MST in seconds with on-chain receipt',
  'Donor dashboard shows real-time fund pipeline — sees their rupees moving toward the milestone',
  'Milestone completion verified on-chain; beneficiary payout confirmed and publicly visible immediately',
  'Donor receives permanent on-chain record of contribution — provable impact for tax purposes and personal records'
];

const stats = [
  { label: 'Indian Charity Market   ', value: '₹26,000Cr%' },
  { label: 'Smart Contract Overhead', value: '<2%   ' },
  { label: 'Fund Traceability', value: '100%' },
  { label: 'Donor Visibility', value: 'Real-Time' }
];

const galleryItems = [
  {
    title: 'Program Launch Workshop',
    subtitle: 'Team planning and campaign strategy in the office.',
    image: '/img1.webp',
    alt: 'Team reviewing charity program plans'
  },
  {
    title: 'Milestone Verification',
    subtitle: 'Smart contract goals are reviewed and verified by stakeholders.',
    image: '/img2.jpg',
    alt: 'Colleagues verifying milestones'
  },
  {
    title: 'Field Coordination',
    subtitle: 'Distribution and audit teams collaborate for transparency.',
    image: '/img3.jpeg',
    alt: 'Field coordination meeting'
  }
];

function GalleryCard({ title, subtitle, image, alt }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] w-full h-[420px]">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mt-3 text-xl font-bold text-black">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-black/70">{subtitle}</p>
      </div>
    </article>
  );
}

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
      className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] w-full h-[400px]"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mt-3 text-xl font-bold text-black">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-black/70">{description}</p>
        <a href="#" className="mt-4 inline-block text-sm font-semibold text-[#ff2d2d] hover:underline">Read More</a>
      </div>
    </motion.article>
  );
}

function StepFlow({ title, steps, accent = false }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_34px_rgba(0,0,0,0.05)] min-h-[340px] flex flex-col h-full">
      <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase">
        {title}
      </h3>
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
                  Charity &
                  <span className="text-[#ff2d2d]"> Donations</span>
                </span>
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-black/68 sm:text-lg">
              Complete transparency in charitable giving. Donors watch their money reach its destination in real time.
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
                  src="/charity-donation/Charity and Donation.jpg"
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
              <div className="relative ">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">₹26,000Cr</p>
                <p className="mt-2 text-sm font-medium text-white/70">Charitable Donations in India Annually</p>
                <p className="mt-1 text-xs italic text-white/50">CAF India Giving Report 2024</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">63%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Donors Stop Giving Due to Lack of Transparency</p>
                <p className="mt-1 text-xs italic text-white/50">Giving Evidence 2024</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">30%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Average Charity Admin Cost (Old Model)</p>
                <p className="mt-1 text-xs italic text-white/50">Charity Navigator</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">2%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Overhead on MST Smart Contract Campaigns</p>
                <p className="mt-1 text-xs italic text-white/50">Blockchain by Design</p>
              </div>
            </div>
          </div>
        </SectionFade>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-6 py-16 md:px-16 lg:grid-cols-2 lg:items-center">
        <SectionFade className="space-y-5">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
            What is <span className="text-red-600">Blockchain </span>Charity on <span className="text-red-600">MST</span>?
          </h2>
          <p className="max-w-2xl text-base leading-8 text-black/70">
            When you donate to a cause, you usually just have to trust that the money is being used properly. MST changes this completely. Every rupee of every donation is traceable — in real time, by anyone. Fundraising is recorded on-chain. Fund releases are automated by smart contracts that only unlock money when defined milestones are genuinely met. Donors do not just receive a thank-you email — they watch their money move, milestone by milestone, to the beneficiary.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[260px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))] sm:h-[330px]">
            <Image
              src="/charity-donation/stunning-neon-glowing-heart.jpg"
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
          Why Build This on MST — <span className="text-red-600">Not the Traditional Way?</span> 
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
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> Donors receive an annual report — no way to verify how funds were actually used</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Live on-chain tracking — donors see every transaction the moment it occurs</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> Admin costs average 20–30% of donations — platforms and banks take their share    </span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Smart contract automation reduces overhead to under 2% — more reaches beneficiaries</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> No mechanism to enforce milestone-based fund release — organizations access funds freely</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Escrow smart contracts hold funds until milestone verification — structurally enforced</span></span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd] rounded-bl-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> Donation receipts are PDFs any organization can fabricate — unverifiable</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745] rounded-br-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">MST receipts are on-chain records — every rupees movement independently verifiable</span></span>
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
            The Problem: 63% of Donors Stop Giving Due to Opacity   
          </h2>
          <p className="text-base leading-8 text-black/70">
           The most common reason people stop donating is that they do not know where their money went. Annual reports are vague. Administrative costs are buried. Fund misuse is a documented problem in large-scale charitable operations globally. Even genuinely good organizations struggle to communicate their impact because the systems to prove it simply do not exist.
          </p>

          <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 pt-2">How MST Specifically Solves It</h3>
          <p className="text-base leading-8 text-black/70">
         MSTs milestone-locked smart contracts structurally prevent fund misuse — not by trusting the organization, but by making it technically impossible to access funds before milestones are met. mUSD stablecoin ensures donation value is preserved in rupees throughout the campaign. SARAL Protocol means any NGO from a small village organization to a national foundation can launch in minutes without technical help. The transparency is not optional — it is built into the architecture.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[280px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.05))] sm:h-[340px]">
            <Image
              src="/charity-donation/little-kid.jpg"
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
                MST was built specifically for real-world use cases — not adapted from DeFi tooling. Here is how MSTs unique protocols give this application capabilities no generic blockchain solution can match.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">FortunaX Consensus</p>
                  <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold tracking-[-0.01em] text-white">
                  Instant Transaction Confirmation
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Donation transactions are confirmed on MST in seconds via FortunaX — donors receive real-time confirmation and the on-chain record is immediately visible to all authorized parties.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">mUSD Stablecoin</p>
                  <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold tracking-[-0.01em] text-white">
                   Stable Donation Value in Rupees
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                  Donations made in mUSD maintain stable rupee value throughout the campaign — donors know their contribution is not subject to crypto volatility before it reaches beneficiaries.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">SARAL Protocol</p>
                  <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold tracking-[-0.01em] text-white">
                    Any NGO Can Launch in Minutes
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                  MSTs SARAL Protocol means any registered NGO, regardless of technical capacity, can launch a fully transparent on-chain donation campaign — with no blockchain expertise required.
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

      {/* PROGRAM & OFFICE PHOTO GALLERY */}
      <section className="mx-auto w-full max-w-[90rem] px-6 py-16 md:px-16">
        <SectionFade className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff2d2d]">Office Gallery</p>
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.03em] text-black sm:text-4xl">
            See Our Programs and Office in Action
          </h2>
          <p className="max-w-3xl text-base leading-8 text-black/70">
            A visual showcase of how MST supports every program stage — from planning and verification to field coordination and donor transparency.
          </p>
        </SectionFade>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryItems.map((item) => (
            <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
              <GalleryCard {...item} />
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