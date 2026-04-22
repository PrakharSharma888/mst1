'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, ArrowRight, Home } from 'lucide-react';
import { useState } from "react";
// import FormModal from "@/app/components/form/FormModal";

const featureItems = [
  {
    title: 'Automatic Claim Triggering',
    description: 'Define conditions in the smart contract. When verified events occur — delay, weather event, medical procedure — the payout triggers automatically with no forms required.',
    icon: ShieldCheck
  },
  {
    title: 'Full Policy Transparency',
    description: 'Policy terms are written in smart contract code that is publicly verifiable. Policyholders see exactly what conditions trigger their coverage — no fine print surprises.',
    icon: CheckCircle2
  },
  {
    title: 'Faster Payouts',
    description: 'Automated claims eliminate weeks of manual processing. Eligible policyholders receive payouts in hours instead of weeks — dramatically improving trust and satisfaction.',
    icon: Home
  }
];

const proofItems = [
  {
    title: 'Flight Delay Insurance',
    description: 'Policies that automatically pay out when verified flight delay data meets the defined threshold — no claims process required from the policyholder.',
    image: '/insurance-automation/Flight Delay Insurance.jpg',
    alt: 'National car manufacturer supply chain'
  },
  {
    title: 'Microinsurance for Low-Income Markets',
    description: 'Low-premium, high-frequency insurance products made economically viable by smart contract automation and MST"s low transaction fees.',
    image: '/insurance-automation/Microinsurance for Low-Income Markets.jpg',
    alt: 'Express shipping supply chain'
  },
  {
    title: 'Parametric Weather Insurance',
    description: 'Agricultural and business insurance that pays automatically when weather oracle data crosses defined thresholds — protecting farmers and businesses from crop loss.',
      image: '/insurance-automation/Parametric Weather Insurance.jpg',
    alt: 'Food and agriculture supply chain'
  }
];

const creatorSteps = [
  'Insurance policy terms and trigger conditions are written into an MST smart contract',
  'Policy is issued to the customer with all terms transparently recorded on-chain',
  'Claim event occurs — data from oracles or verified sources is submitted to the smart contract',
  'Smart contract evaluates the data against policy conditions automatically',
  'If conditions are met, payout is triggered and executed automatically; full record logged on-chain'
];

const verifierSteps = [
  'Policyholder purchases insurance — policy terms and coverage immediately visible on-chain',
  'Triggering event occurs — policyholder or oracle data submits the event to the smart contract',
'Smart contract evaluates eligibility in real time with no manual review required',
  'Policyholder receives instant notification of outcome — approved or details of why not met',
  'Payout credited automatically if approved; complete audit trail available for any review'
];

const stats = [
  { label: 'Auto', value: 'Claim Triggering' },
  { label: 'Hours', value: 'Payout Speed' },
  { label: 'Zero', value: 'Paperwork Required' },
  { label: 'Full%', value: 'Policy Transparency' }
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
                Insurance Automation
                </span>
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-black/68 sm:text-lg">
              Smart contracts replace slow manual claims. When conditions are met, payment happens automatically.
            </p>
          </div>

          {/* Responsive Button Group */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-start sm:items-center mt-6 mb-8 w-full">

                      {/* CONTACT */}
                      <button
                        onClick={() => {
                          setFormType("General Enquiry");
                          setOpenForm(true);
                        }}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff2d2d] text-white font-semibold transition-all duration-200 transform hover:scale-105"
                      >
                        Contact Us / Enquire
                      </button>

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
                  src="/insurance-automation/Insurance Automation.jpg"
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

      {/* INTRO */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-6 py-16 md:px-16 lg:grid-cols-2 lg:items-center">
        <SectionFade className="space-y-5">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
         What is Blockchain Insurance Automation?
          </h2>
          <p className="max-w-2xl text-base leading-8 text-black/70">
           Blockchain insurance automation means writing your policy conditions into a smart contract — self-executing code on the blockchain that triggers claims automatically when defined conditions are met. Imagine buying flight delay insurance. Instead of filing a claim, uploading boarding passes, and waiting two weeks for a decision, the smart contract monitors your flight data. If your flight is delayed by more than two hours, it automatically releases your payout. No forms. No waiting. No dispute.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[260px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))] sm:h-[330px]">
            <Image
              src="/insurance-automation/What is Blockchain Insurance Automation.jpg"
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

      {/* PROBLEM + SOLUTION */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-6 py-16 md:px-16 lg:grid-cols-2 lg:items-center">
        <SectionFade className="space-y-5 border-l-2 border-[#ff2d2d] pl-5 md:pl-6">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
            The Problem: Insurance Claims are Slow, Manual, and Frustrating
          </h2>
          <p className="text-base leading-8 text-black/70">
          Most people who have filed an insurance claim know the frustration — gathering documents, filling long forms, waiting for assessment, arguing with adjusters, and still not knowing when or whether they will be paid. This process is expensive for insurers to run and genuinely painful for customers to navigate. It erodes trust in insurance as a concept, and leaves many legitimate claimants without timely support.
          </p>

          <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 pt-2">How MST Fixes It</h3>
          <p className="text-base leading-8 text-black/70">
          An insurance policy on MST is built as a smart contract with clearly defined trigger conditions written into the code. When an event occurs — a flight delay, a weather threshold, a verified medical procedure — the trigger condition is checked against on-chain or oracle-sourced data. If conditions are met, the payout executes automatically. The policyholder can track every stage in real time and always knows exactly where their claim stands.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[280px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.05))] sm:h-[340px]">
            <Image
              src="/insurance-automation/Insurance Claims are Slow.jpg"
              alt="Problem and solution visual"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
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
          <section className='mx-auto text-center w-full max-w-[90rem] px-6 py-16 md:px-16'>
                  <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 pt-2">See How It Works Step by Step</h3>
        <p className="text-base leading-8 text-black/70">
         Two simple flows — one for whoever is issuing or creating, and one for whoever is verifying or using. Both powered by MST blockchain behind the scenes.
          </p>

<section
  className="mx-auto w-full max-w-[90rem] px-2 py-10 sm:px-6 sm:py-16 md:px-16
    grid grid-cols-1 gap-6
    lg:grid-cols-2 lg:gap-6
    min-h-0"
>

  {/* LEFT */}

  <SectionFade className="h-full min-h-0 flex flex-col">
    <div className="flex flex-col h-full min-h-0 flex-1 bg-white rounded-xl overflow-hidden">
      {/* Header (fixed) */}
      <div className="p-4 border-b font-semibold">Creator / Issuer Flow</div>
      {/* Scrollable content */}
      <div className="flex-1 w-full min-h-0 overflow-y-auto p-4">
        <StepFlow steps={creatorSteps} />
      </div>
    </div>
  </SectionFade>

  {/* RIGHT */}

  <SectionFade className="h-full min-h-0 flex flex-col">
    <div className="flex flex-col h-full min-h-0 flex-1 bg-white rounded-xl overflow-hidden">
      {/* Header (fixed) */}
      <div className="p-4 border-b font-semibold">User / Verifier Flow</div>
      {/* Scrollable content */}
      <div className="flex-1 w-full min-h-0 overflow-y-auto p-4">
        <StepFlow steps={verifierSteps} accent />
      </div>
    </div>
  </SectionFade>

</section>
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
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionFade>
      </section>

      {/* <FormModal 
  open={openForm} 
  setOpen={setOpenForm} 
  formType={formType}
/> */}
    </main>
  );
}