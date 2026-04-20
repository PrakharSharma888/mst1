'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// ===== MOCK DATA =====
const EVENTS = [
  {
    id: 1,
    title: 'MAIN NETWORK LAUNCH',
    date: 'APR 15, 2026',
    time: '10:00 AM UTC',
    description: 'Be part of the historic MST Mainnet launch event and explore new blockchain capabilities live.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    href: '#'
  },
  {
    id: 2,
    title: 'COMMUNITY MEETUP',
    date: 'MAR 10, 2026',
    time: '04:00 PM UTC',
    description: 'Join our validator and developer community for discussions, demos, and networking.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    href: '#'
  },
  {
    id: 3,
    title: 'PARTNERSHIP ANNOUNCEMENT',
    date: 'APR 25, 2026',
    time: '12:00 PM UTC',
    description: 'We are thrilled to announce new ecosystem partnerships driving adoption across multiple chains.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800',
    href: '#'
  },
  {
    id: 4,
    title: 'VALIDATOR TRAINING',
    date: 'JAN 15, 2026',
    time: '03:00 PM UTC',
    description: 'Interactive training session for new validators to join the network efficiently and securely.',
    image: 'https://images.unsplash.com/photo-1604079621895-2081e95ddc31?auto=format&fit=crop&q=80&w=800',
    href: '#'
  },
];

const parseEventDate = (dateStr) => {
  const parsed = new Date(dateStr);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
};

const isUpcomingEvent = (dateStr) => parseEventDate(dateStr) >= new Date();

function fillToMinimum(primary, pool, minCount = 2) {
  const result = [...(primary ?? [])];
  const usedIds = new Set(result.map((e) => e?.id));

  for (const candidate of pool ?? []) {
    if (result.length >= minCount) break;
    if (!candidate) continue;
    if (usedIds.has(candidate.id)) continue;
    usedIds.add(candidate.id);
    result.push(candidate);
  }

  return result;
}

function DotIndicators({ count, activeIndex, onSelect, className = '' }) {
  if (!count || count <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`.trim()}>
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          aria-label={`Go to card ${idx + 1}`}
          onClick={() => onSelect(idx)}
          className={
            `h-2 w-2 rounded-full transition-all duration-300 ` +
            (idx === activeIndex
              ? 'bg-red-500 shadow-[0_0_12px_rgba(255,45,45,0.7)]'
              : 'bg-black/15 hover:bg-black/25')
          }
        />
      ))}
    </div>
  );
}

function EventCard({ event, variant }) {
  const isUpcoming = variant === 'upcoming';

  // Determine the correct explore link based on event type and title
  let exploreHref = '#';
  if (isUpcoming) {
    exploreHref = '/upcoming-events';
  } else {
    exploreHref = '/past-event';
  }

  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-800 hover:bg-black/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-[210px] overflow-hidden sm:h-[230px]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        <div
          className="absolute left-4 top-4 z-20 rounded-full bg-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_0_18px_rgba(255,45,45,0.22)]"
        >
          {isUpcoming ? 'Upcoming' : 'Past'}
        </div>

        <motion.img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          initial={{ scale: 1.02 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className=" text-xs font-bold text-red-500">{event.date}</span>
            <span className="text-white/50">•</span>
            <span className=" text-xs text-white">{event.time}</span>
          </div>

          <h3 className="bungee-regular text-xl font-bold leading-tight tracking-tighter  transition-colors duration-300 text-red-500">
            {event.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-white" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
            {event.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          <a
            href={event.href ?? '#'}
            className="inline-flex min-w-[160px] flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_28px_rgba(255,45,45,0.22)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_26px_rgba(255,45,45,0.38)] active:scale-[0.99]"
            style={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            {isUpcoming ? 'Join Now' : 'View Recap'}
          </a>

          <a
            href={exploreHref}
            className="inline-flex min-w-[160px] flex-1 items-center justify-center rounded-xl border border-red-500/40 bg-transparent px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 transition-all duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-white hover:shadow-[0_0_22px_rgba(255,45,45,0.24)] active:scale-[0.99]"
            style={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Explore
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function RotatingEventPanel({ title, events, variant }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!events?.length || events.length <= 1) return;
    if (paused) return;

    const intervalId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [events, paused]);

  useEffect(() => {
    if (!events?.length) return;
    if (index > events.length - 1) setIndex(0);
  }, [events, index]);

  const activeEvent = events?.[index];

  return (
    <div
      className="flex h-[520px] flex-col overflow-hidden rounded-3xl border border-red-500/20 bg-transparent px-4 pt-4 pb-5 shadow-[0_0_28px_rgba(255,45,45,0.10)] sm:h-[560px] sm:px-5 sm:pt-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs font-bold uppercase tracking-widest text-red-500" style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>{title}</div>
      </div>

      <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          {activeEvent ? (
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-0 flex-1"
            >
              <EventCard event={activeEvent} variant={variant} />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <DotIndicators
          count={events?.length ?? 0}
          activeIndex={index}
          onSelect={(idx) => setIndex(idx)}
          className="mt-5"
        />
      </div>
    </div>
  );
}

export default function MSTEventSection() {
  const { upcomingEvents, pastEvents } = useMemo(() => {
    const upcoming = EVENTS.filter((e) => isUpcomingEvent(e.date)).sort(
      (a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime()
    );
    const past = EVENTS.filter((e) => !isUpcomingEvent(e.date)).sort(
      (a, b) => parseEventDate(b.date).getTime() - parseEventDate(a.date).getTime()
    );

    // Guarantee both sides can rotate even when one bucket has only 0–1 items.
    const upcomingFilled = fillToMinimum(upcoming, [...past, ...EVENTS], 2);
    const pastFilled = fillToMinimum(past, [...upcoming, ...EVENTS], 2);

    return {
      upcomingEvents: upcomingFilled,
      pastEvents: pastFilled
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-12 pb-8 text-black sm:pt-16 sm:pb-10">
      {/* Hero-style background treatment centered behind panels */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_50%)]" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/20 md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 border-dashed md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 95, repeat: Infinity, ease: 'linear' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[80px]"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase">
            ALL <span className="text-red-600">EVENTS</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-black/60" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
            Track what’s next, revisit what shipped
          </p>
        </div>

        {/* Two-column dynamic layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <RotatingEventPanel title="Upcoming Events" events={upcomingEvents} variant="upcoming" />
          <RotatingEventPanel title="Past Events" events={pastEvents} variant="past" />
        </div>
      </div>
    </section>
  );
}