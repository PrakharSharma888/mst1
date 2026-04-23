"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Tag,
  Users,
  Video,
} from "lucide-react";

const upcomingEvents = [
  {
    title: "MST Developer Summit",
    date: "May 10, 2026",
    time: "11:00 AM GMT",
    location: "pune",
    format: "In-person",
    audience: "Builders • Startups • Researchers",
    about:
      "A premium, hands-on summit focused on MST core concepts, smart-contract patterns, and production-grade integrations. Expect deep dives, live demos, and curated networking.",
    highlights: [
      "Core protocol deep-dive + roadmap",
      "Hands-on integration workshops",
      "Demo showcase + partner networking",
    ],
    agenda: [
      { label: "Keynote", detail: "MST vision + ecosystem updates" },
      { label: "Workshops", detail: "Contracts, tooling, and integrations" },
      { label: "Showcase", detail: "Partner demos + product launches" },
      { label: "Networking", detail: "Curated founder/builder sessions" },
    ],
    tags: ["Summit", "Developers", "Ecosystem"],
    heroImage: "/img1.webp",
    gallery: ["/img1.webp", "/img2.jpg", "/1.png"],
    ctaLabel: "Request Invite",
    ctaHref: "/contact",
    urgency: "Registrations closing soon",
    interest: "1,240+ interested",
  },
  {
    title: "Validator Readiness Bootcamp",
    date: "Jun 02, 2026",
    time: "5:00 PM UTC",
    location: "Online",
    format: "Virtual",
    audience: "Node Operators • DevOps • Infra Teams",
    about:
      "A practical bootcamp for validator operators: setup, monitoring, upgrades, security practices, and incident playbooks. Built for real-world operations.",
    highlights: [
      "Step-by-step validator deployment",
      "Security + key management playbook",
      "Monitoring + troubleshooting drills",
    ],
    agenda: [
      { label: "Setup", detail: "Node installation + configuration" },
      { label: "Security", detail: "Keys, access, and hardening" },
      { label: "Monitoring", detail: "Alerts, dashboards, log strategy" },
      { label: "Drills", detail: "Failure scenarios + recovery" },
    ],
    tags: ["Validators", "Infrastructure", "Training"],
    heroImage: "/img3.jpeg",
    gallery: ["/img3.jpeg", "/img2.jpg", "/1.png"],
    ctaLabel: "Register",
    ctaHref: "/contact",
    urgency: "Limited seats • secure your slot",
    interest: "980+ interested",
  },
  {
    title: "MST Use-Case Showcase",
    date: "Jul 18, 2026",
    time: "2:00 PM GMT",
    location: "pune",
    format: "Hybrid",
    audience: "Enterprise • Creators • Community",
    about:
      "A curated showcase of MST use-cases: enterprise workflows, tokenization, on-chain transparency, and community-led products,plus a lightning-pitch segment.",
    highlights: [
      "Real-world case studies",
      "Lightning pitches + community voting",
      "Partner booths + demos",
    ],
    agenda: [
      { label: "Case studies", detail: "Live product stories + metrics" },
      { label: "Lightning pitches", detail: "Rapid demos + Q&A" },
      { label: "Community vote", detail: "Top demos recognized" },
      { label: "Expo", detail: "Partner booths + meetings" },
    ],
    tags: ["Showcase", "Use-cases", "Community"],
    heroImage: "/img2.jpg",
    gallery: ["/img2.jpg", "/img1.webp", "/img3.jpeg"],
    ctaLabel: "Get Tickets",
    ctaHref: "/contact",
    urgency: "Early access pricing ends soon",
    interest: "1,520+ interested",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UpcomingEventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  const selectedGallery = useMemo(() => {
    if (!selectedEvent) return [];
    const g = Array.isArray(selectedEvent.gallery) ? selectedEvent.gallery : [];
    return g.length ? g : selectedEvent.heroImage ? [selectedEvent.heroImage] : [];
  }, [selectedEvent]);

  const countdownText = useMemo(() => {
    if (!selectedEvent?.date) return null;

    const target = new Date(selectedEvent.date);
    if (Number.isNaN(target.getTime())) return null;

    const diff = target.getTime() - now;
    const dayMs = 1000 * 60 * 60 * 24;
    const daysLeft = Math.floor(diff / dayMs);

    if (daysLeft >= 0) {
      if (daysLeft <= 3) return `Happening in ${daysLeft} day${daysLeft === 1 ? "" : "s"}`;
      return `${daysLeft} days left`;
    }

    return "Starting soon";
  }, [now, selectedEvent?.date]);

  const openEvent = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const closeEvent = () => {
    setIsOpen(false);
  };

  // Lock scroll + hide navbar while modal open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.hideNavbar = "true";

    const navbar = document.getElementById("site-navbar");
    const prevNavDisplay = navbar?.style?.display;
    if (navbar) navbar.style.display = "none";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeEvent();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      delete document.body.dataset.hideNavbar;
      if (navbar) navbar.style.display = prevNavDisplay || "";
    };
  }, [isOpen]);

  // Update countdown while modal is open
  useEffect(() => {
    if (!isOpen || !selectedEvent) return;
    const id = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(id);
  }, [isOpen, selectedEvent?.title]);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-12 pt-28 md:px-16 md:pb-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-black/5 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.25]" />
          </div>

          <div className="relative mx-auto max-w-6xl">


            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-black md:text-6xl">
              Upcoming <span className="text-red-600">Events</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              Join MST’s next set of community, developer, and infrastructure events.
              Explore what’s coming, open the full details, and secure your spot.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black/90"
              >
                Browse events <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black shadow-sm backdrop-blur transition-colors hover:bg-white"
              >
                Contact team
              </a>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="px-6 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.35)] backdrop-blur md:grid-cols-[1.15fr_0.85fr] md:p-8">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                  Featured
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-black md:text-3xl">
                  {upcomingEvents[0].title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-black/70">
                  {upcomingEvents[0].about}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                    <div className="flex items-center gap-2 text-black/60">
                      <Calendar className="h-4 w-4 text-red-500" />
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Date</span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-black">
                      {upcomingEvents[0].date}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                    <div className="flex items-center gap-2 text-black/60">
                      <MapPin className="h-4 w-4 text-red-500" />
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Location</span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-black">
                      {upcomingEvents[0].location}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openEvent(upcomingEvents[0])}
                    className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600"
                  >
                    View details <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={upcomingEvents[0].ctaHref}
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black shadow-sm backdrop-blur transition-colors hover:bg-white"
                  >
                    {upcomingEvents[0].ctaLabel}
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/0 to-transparent" />
                <Image
                  src={upcomingEvents[0].heroImage}
                  alt={upcomingEvents[0].title}
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* List */}
        <section id="events" className="px-6 pb-20 pt-14 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                  Calendar
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-black md:text-3xl">
                  Reserve your spot
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/70">
                  Open an event to view agenda, highlights, and quick metadata.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group overflow-hidden rounded-3xl border border-red-200/70 bg-white/70 shadow-[0_22px_70px_-44px_rgba(0,0,0,0.45)] backdrop-blur transition-colors hover:border-red-300"
                >
                  <div className="relative h-44 w-full bg-black/5">
                    <Image
                      src={event.heroImage}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <div className="absolute left-4 right-4 bottom-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                        {event.format}
                      </p>
                      <p className="mt-1 line-clamp-1 text-lg font-extrabold text-white">
                        {event.title}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-black/60">
                          <Calendar className="h-4 w-4 text-red-500" />
                          <span className="text-xs font-semibold text-black/80">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-black/60">
                          <Clock className="h-4 w-4 text-red-500" />
                          <span className="text-xs font-semibold text-black/80">{event.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-black/60">
                        <MapPin className="h-4 w-4 text-red-500" />
                        <span className="text-xs font-semibold text-black/80">{event.location}</span>
                      </div>

                      <div className="mt-1 flex flex-wrap gap-2">
                        {event.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openEvent(event)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600"
                      >
                        View <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {isOpen && selectedEvent ? (
          <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8">
            <motion.div
              className="absolute inset-0 bg-black/45 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeEvent}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedEvent.title} details`}
              initial={{ opacity: 0, y: 20, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.985 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex w-full max-w-[1100px] min-h-0 flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_120px_-40px_rgba(0,0,0,0.55)] ring-1 ring-black/5 max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-black/10 bg-white px-6 py-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-black truncate">{selectedEvent.title}</p>
                  <p className="text-xs text-black/60 mt-1">{selectedEvent.date}</p>
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    type="button"
                    onClick={closeEvent}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-xl border border-black/10 bg-white px-3.5 py-2 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-black/[0.03]"
                  >
                    Close
                  </motion.button>
                </div>
              </div>

              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain touch-pan-y"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {/* Hero image */}
                <div className="relative h-[220px] w-full bg-black/5 sm:h-[260px] md:h-[300px] lg:h-[320px]">
                  <Image
                    src={selectedEvent.heroImage}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1100px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />

                  <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                        Upcoming Event
                      </p>
                      <p className="mt-1 truncate text-lg font-extrabold text-white md:text-xl">
                        {selectedEvent.title}
                      </p>
                      <p className="mt-1 text-xs text-white/70">{selectedEvent.date}</p>
                    </div>
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-black shadow-sm">
                      {selectedEvent.format}
                    </span>
                  </div>

                  {/* Conversion + urgency */}
                  <div className="absolute left-5 right-5 bottom-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                        <Clock className="h-4 w-4 text-red-400" />
                        {selectedEvent?.urgency ?? countdownText ?? "Registrations closing soon"}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                        <Users className="h-4 w-4 text-red-400" />
                        {selectedEvent?.interest ?? "1,000+ interested"}
                      </span>
                    </div>

                    <motion.a
                      href={selectedEvent.ctaHref}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_-18px_rgba(239,68,68,0.85)] transition-colors hover:bg-red-600 sm:w-auto"
                    >
                      {selectedEvent.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="grid gap-8 border-t border-black/10 bg-black/[0.03] p-6 md:grid-cols-[7fr_3fr] md:p-8">
                  {/* LEFT */}
                  <div className="space-y-6">
                    {/* About */}
                    {selectedEvent.about ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"
                      >
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                          About
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-black/70">
                          {selectedEvent.about}
                        </p>
                      </motion.div>
                    ) : null}

                    {/* Highlights */}
                    {selectedEvent.highlights?.length ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut", delay: 0.03 }}
                        className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"
                      >
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                          Highlights
                        </p>
                        <ul className="mt-4 space-y-3 text-sm text-black/70">
                          {selectedEvent.highlights.map((h, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-red-500/10 text-[12px] font-extrabold text-red-600">
                                →
                              </span>
                              <span className="leading-relaxed font-semibold text-black/80">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}

                    {/* Agenda */}
                    {selectedEvent.agenda?.length ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
                        className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
                      >
                        <div className="border-b border-black/10 p-5">
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                            Agenda
                          </p>
                          <p className="mt-2 text-sm text-black/70">
                            A quick outline of what to expect.
                          </p>
                        </div>
                        <div className="divide-y divide-black/10">
                          {selectedEvent.agenda.map((a, idx) => (
                            <div key={`${a.label}-${idx}`} className="flex items-start gap-3 p-5">
                              <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-black/5 text-xs font-extrabold text-black">
                                {idx + 1}
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-black">{a.label}</p>
                                <p className="mt-1 text-sm leading-relaxed text-black/70">
                                  {a.detail}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}

                    {/* Tags */}
                    {selectedEvent.tags?.length ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut", delay: 0.06 }}
                        className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"
                      >
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                          Tags
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedEvent.tags.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </div>

                  {/* RIGHT (metadata) */}
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="self-start rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:sticky md:top-6"
                  >
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                      Event details
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-2 text-black/60">
                          <Calendar className="h-4 w-4 text-red-500" />
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Date</span>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-black">
                          {selectedEvent.date}
                        </p>
                      </div>

                      <div className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-2 text-black/60">
                          <Clock className="h-4 w-4 text-red-500" />
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Time</span>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-black">
                          {selectedEvent.time}
                        </p>
                      </div>

                      <div className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-2 text-black/60">
                          <MapPin className="h-4 w-4 text-red-500" />
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Location</span>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-black">
                          {selectedEvent.location}
                        </p>
                      </div>

                      <div className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-2 text-black/60">
                          <Video className="h-4 w-4 text-red-500" />
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Format</span>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-black">
                          {selectedEvent.format}
                        </p>
                      </div>

                      <div className="col-span-2 rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-2 text-black/60">
                          <Users className="h-4 w-4 text-red-500" />
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Audience</span>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-black">
                          {selectedEvent.audience}
                        </p>
                      </div>

                      <div className="col-span-2 rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-2 text-black/60">
                          <Tag className="h-4 w-4 text-red-500" />
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Quick links</span>
                        </div>
                        <a
                          href={selectedEvent.ctaHref}
                          className={cn(
                            "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600",
                            "focus:outline-none focus:ring-2 focus:ring-red-500/30"
                          )}
                        >
                          {selectedEvent.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </main>
    </>
  );
}