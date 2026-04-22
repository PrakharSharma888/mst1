'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, ArrowRight, Home } from 'lucide-react';
import { useState } from "react";
// import FormModal from "@/app/components/form/FormModal";

const featureItems = [
  {
    title: 'No More Duplicate Titles',
    description: 'Blockchain can only accept ownership records consistent with the existing chain. Fraudulent duplicate titles are rejected at the system level.',
    icon: ShieldCheck
  },
  {
    title: 'Instant Ownership Verification',
    description: 'Any buyer, bank, or legal party can verify current ownership and the complete ownership history of any property in seconds.',
    icon: CheckCircle2
  },
  {
    title: 'Permanent Historical Record',
    description: 'Every ownership transfer is permanently recorded and linked to the previous record. The complete provenance of a property is always accessible and verifiable.',
    icon: Home
  }
];

const proofItems = [
  {
    title: 'Land Title Registration',
    description: 'Government land titles secured with blockchain hashes — buyers and legal firms verify authenticity instantly without relying on paper documents.',
    image: '/land-records/Land Title Registration.jpg',
    alt: 'National car manufacturer supply chain'
  },
  {
    title: 'Tanzania Revenue Authority',
    description: 'TRA-issued tax and property documents secured with immutable blockchain records — eliminating counterfeiting and misuse.',
    image: '/land-records/Tanzania Revenue Authority.jpg',
    alt: 'Express shipping supply chain'
  },
  {
    title: 'Municipal Corporation Certificates',
    description: 'Civic, compliance, and operational certificates from municipal authorities anchored on MST for instant verification and fraud prevention.',
    image: '/land-records/Municipal Corporation Certificates.jpg',
    alt: 'Food and agriculture supply chain'
  }
];

const creatorSteps = [
  'Land parcel is mapped and registered with a verified digital record on MST blockchain',
  'Ownership record is anchored with a unique hash linked to the registered owner',
  'Any ownership transfer is recorded on-chain with authorized government or legal validation',
  'WASMify connects existing government registry databases to the blockchain verification layer',
  'All updates, transfers, and access events are permanently logged with full accountability'
];

const verifierSteps = [
  'Buyer, bank, or legal firm scans the QR code on the property title document   ',
  'They are taken to a results page showing current owner and full ownership history',
  'They verify the document appearance against the original blockchain record',
  'They can independently check the unique hash on the MST blockchain directly',
  'The event log shows every ownership change, update, and verification in chronological order'
];

const stats = [
  { label: 'Zero', value: 'Duplicate Titles Possible' },
  { label: 'Instant', value: 'Ownership Verification' },
  { label: 'Full', value: 'Historical Record' },
  { label: '100%', value: 'Tamper-Proof ' }
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
                Land Records
                </span>
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-black/68 sm:text-lg">
              If it is on the blockchain, it cannot be forged, duplicated, or disputed.
            </p>
          </div>

          {/* Responsive Button Group */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-start sm:items-center mt-6 mb-8 w-full">

                      {/* CONTACT */}
                      {/* <button
                        onClick={() => {
                          setFormType("General Enquiry");
                          setOpenForm(true);
                        }}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff2d2d] text-white font-semibold transition-all duration-200 transform hover:scale-105"
                      >
                        Contact Us / Enquire
                      </button> */}

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
                  src="/land-records/land Records.jpg"
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
         What are Blockchain Land Records?
          </h2>
          <p className="max-w-2xl text-base leading-8 text-black/70">
           Blockchain land records work exactly like a traditional land registry — except that the records are stored permanently on the blockchain and cannot be altered, duplicated, or destroyed. When a property is registered on MST, the ownership record is locked with a unique digital fingerprint. Transfers of ownership create new records linked to the original. Buyers, governments, legal firms, and banks can verify the current and historical ownership of any property instantly — without relying on paper documents or a single centralized government database.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[260px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))] sm:h-[330px]">
            <Image
              src="/land-records/What are Blockchain Land Records_.jpg"
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
           The Problem: Land Disputes and Title Fraud are Endemic
          </h2>
          <p className="text-base leading-8 text-black/70">
          In many regions across the world, land ownership records are still maintained on paper or in poorly secured digital systems. This creates enormous opportunities for fraud — duplicate titles, forged deeds, and deliberate ownership disputes. Legal battles over land can drag on for years and cost families their savings. In many cases, the fraudulent record is indistinguishable from the genuine one because both exist in the same vulnerable system.
          </p>

          <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5 pt-2">How MST Fixes It</h3>
          <p className="text-base leading-8 text-black/70">
          MST anchors land ownership records on the blockchain with a unique hash. Whenever ownership transfers, the new ownership is recorded in a way that links directly to the previous record — creating an unbroken chain of provenance. Anyone can verify the current owner and the complete ownership history instantly. Duplicate titles cannot exist because the blockchain only accepts records that are consistent with the existing chain. Fraud becomes structurally impossible.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[280px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.05))] sm:h-[340px]">
            <Image
              src="/land-records/land Disputes and Title.jpg"
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