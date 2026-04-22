'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import { useState } from "react";
import FormModal from "@/app/components/form/FormModal";

const featureItems = [
  {
    title: 'Always-On, Real-Time Audit Trail',
    description: 'Every action, approval, and escalation in every workflow is permanently recorded on MST the moment it occurs. Audit preparation stops being a project — it becomes an automatic byproduct of doing business.',
    icon: CheckCircle2
  },
  {
    title: 'Automatic Escalation — No Manual Chasing',
    description: 'Smart contracts automatically escalate stalled approvals, send notifications to required participants, and advance workflows at every stage — no project manager needed to chase the process.',
    icon: ShieldCheck
  },
  {
    title: 'WASMify Connects Existing Enterprise Systems',
    description: "MST's WASMify Protocol connects existing ERP, CRM, and procurement platforms — SAP, Oracle, Salesforce — to blockchain workflows without any replacement or disruption of current systems.",
    icon: Database
  }
];

const proofItems = [
  {
    title: 'Multi-Department Purchase Approval',
    description: 'Procurement workflows with MST-recorded approvals at every level — automatic escalation on delays, complete audit trail from requisition to purchase order approval.',
    image: '/Enterprise-workflow/Multi-Department Purchase Approval.jpg',
    alt: 'National car manufacturer supply chain'
  },
  {
    title: 'Vendor Onboarding & Compliance',
    description: 'Vendor verification, legal review, compliance certification, and contract approval — all on MST with permanent records and automatic progression between stages.',
    image: '/Enterprise-workflow/Vendor Onboarding & Compliance.jpg',
    alt: 'Express shipping supply chain'
  },
  {
    title: 'Cross-Organization Contract Management',
    description: 'Multi-party contract review, negotiation, and sign-off workflows with permanent on-chain records — replacing fragmented email chains with auditable, transparent process execution.',
    image: '/Enterprise-workflow/Cross-Organization Contract Management.jpg',
    alt: 'Food and agriculture supply chain'
  }
];

const creatorFlow = [
  "Workflow configured with participants, stages, conditions, and escalation rules via SARAL Protocol interface",
  "Smart contract deployed on MST encoding complete workflow logic — Fortunax provides sub-second finality",
  "WASMify connects existing SAP, Oracle, or Salesforce — workflow events triggered by ERP system actions automatically",
  "Each participant action recorded on-chain the moment it occurs — Klethesia protects sensitive business data",
  "Complete workflow completion record permanently on MST — instant audit access for compliance teams",
];

const userFlow = [
  "Participant receives workflow notification in existing enterprise interface — no new system to learn",
  "Previews documents and approval requirements — linked from on-chain workflow record via existing ERP",
  "Approves, rejects, or escalates — action recorded on MST immediately with identity and timestamp",
  "Workflow auto-advances to next stage — next participant notified, all parties see updated state in real time",
  "Compliance team accesses permanent on-chain audit trail on demand — no reconstruction, no gaps",
];

const stats = [
  { label: '$1.7T', value: 'Process Inefficiency Cost' },
  { label: 'Real-Time', value: 'Audit Trail Creation' },
  { label: 'Zero', value: 'Lost Approvals' },
  { label: '<1s', value: 'Workflow State Confirmation' }
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
                  Enterprise Workflow Automation
                </span>
                {/* <span className="mt-2 block text-[#ff2d2d]">
                 Certificate
                </span> */}
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-black/68 sm:text-lg">
             MST smart contracts replace slow manual approvals with automated workflows and instant audit trails.
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
                  src="/Enterprise-workflow/Enterprise Workflow Automation.jpg"
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
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">$1.7T</p>
                <p className="mt-2 text-sm font-medium text-white/70">Annual Cost of Inefficient Business Processes</p>
                <p className="mt-1 text-xs italic text-white/50">IDC Research 2024</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">60%</p>
                <p className="mt-2 text-sm font-medium text-white/70">Finance Teams Spend Time on Manual Processes</p>
                <p className="mt-1 text-xs italic text-white/50">Deloitte CFO Survey 2024</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">47 Days</p>
                <p className="mt-2 text-sm font-medium text-white/70">Average Procurement Cycle (Large Enterprises)</p>
                <p className="mt-1 text-xs italic text-white/50">Hackett Group</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1a36] px-5 py-6 text-center text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Real-Time</p>
                <p className="mt-2 text-sm font-medium text-white/70">MST Workflow Audit Trail Speed</p>
                <p className="mt-1 text-xs italic text-white/50">MST Blockchain</p>
              </div>
            </div>
          </div>
        </SectionFade>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-6 py-16 md:px-16 lg:grid-cols-2 lg:items-center">
        <SectionFade className="space-y-5">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
         What is Blockchain Enterprise Workflow Automation on MST?
          </h2>
          <p className="max-w-2xl text-base leading-8 text-black/70">
         Enterprise workflow automation on MST means encoding your business processes — purchase approvals, vendor onboarding, compliance checks, multi-department sign-offs — into smart contracts on the blockchain. Instead of emails in inboxes, documents sitting on desks, and approval status being unknown, every step executes automatically with every action permanently recorded. Every participant sees exactly where a process is at any moment.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[260px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))] sm:h-[330px]">
            <Image
              src="/Enterprise-workflow/What is Blockchain Enterprise Workflow Automation on MST.jpg"
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
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> 60% of finance team time spent on manual process management — enormous human cost</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Smart contracts automate execution — finance teams focus on analysis, not chasing approvals</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span> 47-day average procurement cycle — each day costs large enterprises in opportunity cost and delay</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">MST automated approval chains with FortunaX finality — procurement cycles dramatically shorter</span></span>
                </td>
              </tr>
              <tr className="border-b border-[#f5eaea]">
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Audit trails reconstructed after the fact — compliance teams spend months assembling evidence</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745]">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">MST records every action in real time — audit evidence is always complete and instantly accessible</span></span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5 text-[#1a2745] bg-[#f8fafd] rounded-bl-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✗</span>Process visibility requires manual status update meetings — nobody has the real picture</span>
                </td>
                <td className="px-6 py-5 bg-[#fff3f3] text-[#1a2745] rounded-br-2xl">
                  <span className="inline-flex items-center gap-2"><span className="text-[#ff2d2d] text-lg">✓</span> <span className="font-semibold">Complete workflow state visible to all authorized participants in real time — always up to date</span></span>
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
           The Problem: Manual Enterprise Processes Cost $1.7 Trillion Annually
          </h2>
          <p className="text-base leading-8 text-black/70">
           Multi-step enterprise approvals involve dozens of people, fragmented systems, and manual tracking that nobody owns completely. Things get lost. Approvals are delayed with no reason. Audit trails are reconstructed after the fact. 60% of finance team time goes to managing these manual processes rather than the work that creates value.
          </p>

          <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 pt-2">How MST Specifically Solves It</h3>
          <p className="text-base leading-8 text-black/70">
          WASMify connects SAP, Oracle, and Salesforce without replacement — enterprises get blockchain benefits without infrastructure disruption. FortunaX finality means workflow confirmations appear in under a second. Klethesia keeps commercially sensitive terms private while keeping execution records auditable. The combination turns a 47-day procurement cycle into a process that moves at the speed of approval decisions — not paper.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[280px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.05))] sm:h-[340px]">
            <Image
              src="/Enterprise-workflow/Manual Enterprise Processes Cost $1.7 Trillion Annually.jpg"
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
                MST was built specifically for real-world use cases — not adapted from DeFi tooling. Here is how MST&apos;s unique protocols give this application capabilities no generic blockchain solution can match.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">WASMify Protocol</p>
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5 mt-3">
                    Connects SAP, Oracle, Salesforce
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                   WASMify's multi-language compatibility connects MST blockchain workflows to SAP, Oracle, Salesforce, and any custom enterprise system — without requiring enterprises to replace or rebuild existing infrastructure.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]">FortunaX Consensus</p>
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5 mt-3">
                    Sub-Second Workflow State Updates
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    FortunaX finality means workflow state changes are confirmed on MST in under a second — participants see approval confirmations, escalations, and completions in near real time.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff2d2d]"> Klethesia Protocol</p>
                  <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5 mt-3">
                    Sensitive Business Data Stays Private
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                  Klethesia ensures commercially sensitive workflow data — pricing, vendor terms, strategic decisions — remains private while the workflow execution record is auditably transparent to authorized parties.
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
      <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Step-by-Step: Creator & Verifier Flows
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Two parallel flows — one for the issuer or creator, one for the user or verifier — both powered by MST blockchain infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* CREATOR FLOW */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 bg-red-600" />
              <h3 className="text-sm tracking-wider font-semibold text-black uppercase">
                Creator / Issuer Flow
              </h3>
            </div>

            <div className="space-y-6">
              {creatorFlow.map((item, index) => (
                <div key={index} className="flex items-start gap-4">

                  {/* Number */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
                    {index + 1}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* USER FLOW */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 bg-red-600" />
              <h3 className="text-sm tracking-wider font-semibold text-black uppercase">
                User / Verifier Flow
              </h3>
            </div>

            <div className="space-y-6">
              {userFlow.map((item, index) => (
                <div key={index} className="flex items-start gap-4">

                  {/* Number */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold">
                    {index + 1}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

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
                  <p className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">{stat.label}</p>
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
                <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-white font-extrabold uppercase mb-5">
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