'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MSTCard({ icon: Icon, title, description, ctaText, href = '#', isActive = false }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
      }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`group flex h-full flex-col rounded-xl sm:rounded-2xl border p-5 sm:p-8 hover:bg-red-500 transition-all duration-300 ${
        isActive
          ? 'border-accent bg-white shadow-[0_16px_40px_rgba(255,45,45,0.12)]'
          : 'border-black/12 bg-[#f5f5f6] hover:border-accent hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]'
      } group-hover:bg-black group-hover:border-accent`}
    >
      {Icon ? (
        <motion.div whileHover={{ rotate: 6, scale: 1.08 }}  transition={{ duration: 0.25 }} className="mb-7 w-fit rounded-xl border border-accent/20 bg-accent/5 p-3 group-hover:bg-black/10">
          <Icon className="h-5 w-5 text-accent" strokeWidth={1.9} />
        </motion.div>
      ) : null}

      <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-red-500 font-extrabold uppercase group-hover:text-black transition-colors duration-300">{title}</h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-black/68 group-hover:text-black/80 transition-colors duration-300">{description}</p>

      <div className="mt-8 border-t border-black/10 group-hover:border-accent pt-4 transition-colors duration-300">
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-[0.13em] transition-all duration-300 border border-black hover:bg-black hover:text-white group-hover:bg-black group-hover:text-white"
        >
          {ctaText}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
