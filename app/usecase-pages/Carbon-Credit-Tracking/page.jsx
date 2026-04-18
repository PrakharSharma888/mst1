'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import { useState } from "react";
import FormModal from "@/app/components/form/FormModal";

const featureItems = [
  {
    title: 'No More Double-Counting',
    description: 'Once a carbon credit is retired on MST, the record is permanently locked. It cannot be re-used, re-sold, or claimed by any other party — ever.',
    icon: CheckCircle2
  },
  {
    title: 'Verifiable Sustainability Claims',
    description: 'Organizations can prove their carbon offset claims by pointing to specific on-chain retirement records — accessible to regulators and the public.',
    icon: ShieldCheck
  },
  {
    title: 'Full Lifecycle Transparency',
    description: 'Every credits journey from issuance through transfer to retirement is permanently visible. Buyers know exactly what they purchased and where it came from.',
    icon: Database
  }
];

const proofItems = [
  {
    title: 'Corporate Carbon Offsetting',
    description: 'Companies purchase and retire verified carbon credits on MST — with publicly auditable retirement records for every tonne claimed.',
    image: '/img3.jpeg',
    alt: 'Digital Gold Savings Products'
  },
  {
    title: 'Renewable Energy Certificates',
    description: 'Energy producers issue renewable energy certificates on-chain — buyers can verify the source, generation date, and retirement status instantly.',
    image: '/placeholder.png',
    alt: 'Commodity-Backed Collaterals'
  },
  {
    title: 'Forest Conservation Credits',
    description: 'Reforestation and conservation projects issue verified credits with satellite and on-ground verification data anchored to each credit on MST.',
    image: '/hero-visual-1.svg',
    alt: 'Cross-Border Commodity Tradings'
  }
];

const creatorSteps = [
  'Emission reduction activity is verified by an approved third-party auditor',
  'Carbon credits are issued as unique tokens on MST — one token per tonne of verified CO₂ reduction',
  'Issuance details and verification data are permanently anchored on-chain for public access',
  'Credits are transferred between buyers and sellers with every transaction logged immutably',
  'When a credit is retired by an organization, the retirement is permanently locked on-chain and publicly visible'
];

const verifierSteps = [
  'Buyer browses available carbon credits with full issuance and verification details on-chain',
  'They purchase credits — transaction recorded on MST with complete provenance from issuance',
  'Credits appear in their organizational sustainability portfolio.',
  'When ready to offset, they initiate retirement — smart contract locks the credit permanently.',
  'Public retirement record is immediately visible on-chain — proof of genuine offset for any audit.'
];

const stats = [
  { label: 'Double-Counting Possible', value: 'Zero' },
  { label: 'Retirement Permanence%', value: '100%' },
  { label: 'Lifecycle Visibility', value: 'Full' },
  { label: 'Audit Access', value: 'Instant' }
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
      className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_14px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_18px_42px_rgba(255,45,45,0.12)] min-h-[370px] flex flex-col"
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
      <div className="p-5 flex flex-col flex-1">
        <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase ">
          {typeof title === 'string' && title.includes(' ') ? (
            <>
              {(() => {
                const words = title.split(' ');
                return words.map((word, idx) => {
                  if (idx === 0 || idx === words.length - 1) {
                    return <span key={idx} className="text-red-600">{word}</span>;
                  }
                  return ' ' + word;
                });
              })()}
            </>
          ) : <span className="text-red-600">{title}</span>}
        </h3>
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
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_34px_rgba(0,0,0,0.05)] min-h-[340px] flex flex-col h-full">
      <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase">
        {typeof title === 'string' && title.includes(' ') ? (
          <>
            {(() => {
              const words = title.split(' ');
              return words.map((word, idx) => {
                if (idx === 0 || idx === words.length - 1) {
                  return <span key={idx} className="text-red-600">{word}</span>;
                }
                return ' ' + word;
              });
            })()}
          </>
        ) : <span className="text-red-600">{title}</span>}
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
              <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase">
                <span className="block">
                  Carbon Credit 
                </span>
                <span className="mt-2 block text-[#ff2d2d]">
                  Tracking
                </span>
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-black/68 sm:text-lg">
              No more double-counting. No more greenwashing. Carbon claims that are actually provable.
            </p>
          </div>
 

          <div className="overflow-hidden rounded-3xl bg-black shadow-none">
            <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-3xl bg-[linear-gradient(135deg,rgba(255,45,45,0.22),rgba(0,0,0,0.7))] sm:h-[380px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,45,45,0.22),transparent_24%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%,rgba(0,0,0,0.22))]" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/imgbanner.jpg"
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
          <h2 className="bungee-regular text-6xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase">
          What is <span className="text-red-600">Blockchain</span> Carbon <span className="text-red-600">Credit</span> Tracking?
          </h2>
          <p className="max-w-2xl text-base leading-8 text-black/70">
          A carbon credit represents one tonne of carbon dioxide reduced or removed from the atmosphere. Organizations buy these credits to offset their own emissions. The problem is that existing carbon markets are opaque — credits get double-counted, retirement records are unreliable, and organizations cannot always prove that the credits they bought are genuinely retired. MST Blockchain solves this by creating a transparent, permanent, publicly verifiable record for every carbon credit from issuance through to retirement.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[260px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.04))] sm:h-[330px]">
            <Image
              src="/img1.webp"
              alt="Supply chain intro"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </SectionFade>
      </section>

      {/* FEATURES */}
      <section className="mx-auto w-full max-w-[90rem] px-6 py-16 md:px-16 hover">
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
           <span className="text-red-600">The Problem:</span> Carbon Markets are Riddled with Credibility Issues
          </h2>
          <p className="text-base leading-8 text-black/70">
            Studies have found that a significant portion of carbon credits sold on voluntary markets do not represent genuine emission reductions. Credits get double-counted across different registries. Retirement records are easy to manipulate. Companies claiming carbon neutrality often cannot actually prove that their purchased offsets were genuinely retired. This undermines the entire purpose of carbon markets and erodes public trust in corporate sustainability claims.
          </p>

          <h3 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">How <span className="text-red-600">MST</span> Fixes It </h3>
          <p className="text-base leading-8 text-black/70">
           Every carbon credit issued on MST gets a unique on-chain token representing one tonne of verified CO₂ reduction. Every transfer between organizations is recorded. When a credit is retired, the retirement is permanently locked on-chain — it cannot be used again, transferred, or claimed by anyone else. External data sources like satellite imagery, IoT sensors, and third-party auditor reports can be fed into the system via WASMify to verify the underlying emission reduction activities.
          </p>
        </SectionFade>

        <SectionFade className="group overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative h-[280px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,45,45,0.08),rgba(0,0,0,0.05))] sm:h-[340px]">
            <Image
              src="/img2.jpg"
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
          <h2 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase"> Proofs<span className="text-red-600"> of </span>Concept</h2>
          <p className="max-w-2xl text-base leading-8 text-black/68">
            Real-world examples showing how this use case works in practice across different industries and regions.
          </p>
        </SectionFade>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {proofItems.map((item) => (
            <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
              <ProofCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STEPS */}
      <section className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-6 px-6 py-16 md:px-16 lg:grid-cols-2 items-stretch">
        <SectionFade>
          <StepFlow title="Creator / Issuer Flow" steps={creatorSteps} />
        </SectionFade>
        <SectionFade>
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
                  <p className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-red-600 font-extrabold uppercase">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionFade>
      </section>

      <FormModal 
  open={openForm} 
  setOpen={setOpenForm} 
  formType={formType}
/>
    </main>
  );
}