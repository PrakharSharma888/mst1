"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Tag, Users, Video } from "lucide-react";

// Inline 3D card helpers (kept here to avoid extra files)
const CardContext = createContext({ isHovering: false });

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CardContainer({ children, className = "" }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CardContext.Provider value={{ isHovering }}>
      <div
        className={cn("[perspective:1200px]", className)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

function CardBody({ children, className = "", maxTilt = 10 }) {
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - rect.width / 2;
    const dy = y - rect.height / 2;

    const ry = (dx / (rect.width / 2)) * maxTilt;
    const rx = (-dy / (rect.height / 2)) * maxTilt;

    setRotate({ x: rx, y: ry });
  };

  const onLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "relative [transform-style:preserve-3d] transition-transform duration-200 ease-out",
        className
      )}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {children}
    </div>
  );
}

function CardItem({
  as: Comp = "div",
  children,
  className = "",
  translateZ = 0,
  style,
  ...props
}) {
  const { isHovering } = useContext(CardContext);

  const tz =
    typeof translateZ === "number"
      ? `${translateZ}px`
      : typeof translateZ === "string"
        ? translateZ
        : "0px";

  const mergedStyle = useMemo(() => {
    const base = {
      transform: `translateZ(${tz})`,
      transformStyle: "preserve-3d",
      transition: "transform 200ms ease-out",
    };

    // Subtle extra pop on hover
    if (isHovering && tz !== "0px") {
      base.transform = `translateZ(calc(${tz} + 10px))`;
    }

    return { ...base, ...(style || {}) };
  }, [isHovering, style, tz]);

  return (
    <Comp className={className} style={mergedStyle} {...props}>
      {children}
    </Comp>
  );
}

const allEvents = [
  {
    title: "Hackathon 2025",
    date: "Dec 5, 2025",
    location: "Dubai, UAE",
    format: "In-person",
    audience: "Builders • Students • Startups",
    about:
      "A 48-hour builder sprint focused on MST tooling, smart-contract patterns, and real-world use cases. Teams shipped MVPs, demos, and open-source integrations.",
    highlights: [
      "Workshops on MST architecture and tooling",
      "Mentorship hours + pitch practice",
      "Demo day with community judging",
    ],
    tags: ["Hackathon", "Builders", "Web3"],
    image: "/img1.webp",
    gallery: [
      {
        src: "/img1.webp",
        title: "Opening + Team Formation",
        description:
          "Builders kicked off with a quick orientation, problem statements, and rapid team formation.",
        points: ["Briefing + tracks", "Team matching", "Starter kits"],
      },
      {
        src: "/img2.jpg",
        title: "Workshops & Mentorship",
        description:
          "Hands-on sessions on MST architecture, smart contracts, and integration patterns.",
        points: ["Architecture deep-dive", "Code reviews", "Office hours"],
      },
      {
        src: "/img3.jpeg",
        title: "Build Sprint",
        description:
          "Teams shipped MVPs with iterative feedback loops and nightly checkpoints.",
        points: ["MVP shipping", "Testing", "Iteration"],
      },
      {
        src: "/1.png",
        title: "Demo Day",
        description:
          "Final presentations, community judging, and project showcases.",
        points: ["Pitching", "Live demos", "Awards"],
      },
    ],
  },
  {
    title: "Validator Training",
    date: "Jan 15, 2026",
    location: "Online",
    format: "Virtual",
    audience: "Node Operators • DevOps",
    about:
      "Hands-on training covering node setup, monitoring, upgrades, and best practices for running MST validators in production environments.",
    highlights: [
      "Step-by-step validator setup",
      "Security & key management best practices",
      "Monitoring + troubleshooting playbook",
    ],
    tags: ["Validators", "Infrastructure", "Training"],
    image: "/img3.jpeg",
    gallery: [
      {
        src: "/img3.jpeg",
        title: "Node Setup Walkthrough",
        description:
          "A complete validator setup from scratch with recommended parameters and safe defaults.",
        points: ["Install + config", "Sync checks", "First blocks"],
      },
      {
        src: "/1.png",
        title: "Security & Key Management",
        description:
          "Best practices for key rotation, backups, and operational security.",
        points: ["Secure storage", "Rotation policies", "Incident response"],
      },
      {
        src: "/img2.jpg",
        title: "Monitoring & Alerts",
        description:
          "Dashboards, metrics, and alerting strategies to keep validators healthy.",
        points: ["Health metrics", "Alert rules", "Runbooks"],
      },
      {
        src: "/img1.webp",
        title: "Troubleshooting Playbook",
        description:
          "Common failure modes and quick fixes for production operations.",
        points: ["Logs", "Resync", "Upgrade steps"],
      },
    ],
  },
  {
    title: "Community Meetup",
    date: "Mar 10, 2026",
    location: "Lahore, PK",
    format: "Hybrid",
    audience: "Community • Creators • Developers",
    about:
      "A community evening to share progress, product demos, and upcoming roadmap items. Meet builders, learn from talks, and connect with the MST ecosystem.",
    highlights: [
      "Lightning talks + demos",
      "Ecosystem partner spotlights",
      "Networking session",
    ],
    tags: ["Community", "Meetup", "Ecosystem"],
    image: "/img2.jpg",
    gallery: [
      {
        src: "/img2.jpg",
        title: "Welcome & Updates",
        description:
          "Project updates, roadmap highlights, and what’s coming next for MST.",
        points: ["Roadmap", "Milestones", "Announcements"],
      },
      {
        src: "/img1.webp",
        title: "Lightning Talks",
        description:
          "Short talks by community members on use cases, tooling, and lessons learned.",
        points: ["Talks", "Demos", "Q&A"],
      },
      {
        src: "/1.png",
        title: "Partner Spotlights",
        description:
          "Ecosystem partners shared integrations and opportunities for builders.",
        points: ["Integrations", "Grants", "Collaboration"],
      },
      {
        src: "/img3.jpeg",
        title: "Networking",
        description:
          "Meet builders, connect with teams, and explore collaboration ideas.",
        points: ["Meet & greet", "Ideas", "Hiring"],
      },
    ],
  },
  {
    title: "Mainnet Launch Event",
    date: "Apr 15, 2026",
    location: "Singapore",
    format: "In-person",
    audience: "Ecosystem • Partners • Media",
    about:
      "The official mainnet launch celebration: keynote, live network milestones, ecosystem announcements, and partner showcases.",
    highlights: [
      "Mainnet status + milestone reveal",
      "Partner showcases",
      "Roadmap & growth announcements",
    ],
    tags: ["Mainnet", "Launch", "Milestones"],
    image: "/1.png",
    gallery: [
      {
        src: "/1.png",
        title: "Keynote",
        description:
          "The mainnet vision, mission, and what it unlocks for builders and partners.",
        points: ["Vision", "Ecosystem", "Launch"],
      },
      {
        src: "/img3.jpeg",
        title: "Network Milestones",
        description:
          "Live milestones and performance highlights from the network.",
        points: ["Blocks", "Validators", "Uptime"],
      },
      {
        src: "/img1.webp",
        title: "Partner Showcases",
        description:
          "Partners demonstrated integrations, products, and upcoming launches.",
        points: ["Demos", "Integrations", "Announcements"],
      },
      {
        src: "/img2.jpg",
        title: "Celebration",
        description:
          "A closing celebration with community, media, and ecosystem partners.",
        points: ["Community", "Press", "Afterparty"],
      },
    ],
  },
];

const eventHighlights = [
  {
    label: "COMMUNITY MEETUP",
    alt: "Community meetup highlight",
    images: ["/img2.jpg", "/img3.jpeg", "/img1.webp", "/1.png"],
  },
  {
    label: "VALIDATOR TRAINING",
    alt: "Validator training highlight",
    images: ["/img3.jpeg", "/img2.jpg", "/1.png", "/img1.webp"],
  },
  {
    label: "HACKATHON 2025",
    alt: "Hackathon highlight",
    images: ["/img1.webp", "/1.png", "/img2.jpg", "/img3.jpeg"],
  },
];

export default function PastEventsPage() {
  const [highlightIndexes, setHighlightIndexes] = useState(() =>
    eventHighlights.map(() => 0)
  );

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [eventSlideIndex, setEventSlideIndex] = useState(0);
  const carouselRef = useRef(null);

  const selectedGallery =
    selectedEvent?.gallery?.length
      ? selectedEvent.gallery
      : selectedEvent?.images?.length
        ? selectedEvent.images.map((src, idx) => ({
            src,
            title: `Moment ${idx + 1}`,
            description: "",
            points: [],
          }))
        : selectedEvent?.image
          ? [{ src: selectedEvent.image, title: "", description: "", points: [] }]
          : [];

  const activeGalleryItem = selectedGallery.length
    ? selectedGallery[eventSlideIndex % selectedGallery.length]
    : null;

  const activeEventSrc = activeGalleryItem?.src || "/img1.webp";

  const galleryLen = selectedGallery.length;
  const activeSlide = galleryLen ? eventSlideIndex % galleryLen : 0;
  const progressLeft = galleryLen ? (activeSlide / galleryLen) * 100 : 0;
  const progressWidth = galleryLen ? (1 / galleryLen) * 100 : 0;

  const scrollToEventSlide = (index, behavior = "smooth") => {
    const el = carouselRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: width * index, behavior });
  };

  const setEventSlide = (index, behavior = "smooth") => {
    const len = selectedGallery.length;
    if (!len) return;
    const next = ((index % len) + len) % len;
    setEventSlideIndex(next);
    scrollToEventSlide(next, behavior);
  };

  const openEvent = (event) => {
    setSelectedEvent(event);
    setIsEventOpen(true);
    setEventSlideIndex(0);
  };

  const closeEvent = () => {
    setIsEventOpen(false);
  };

  const nextEventSlide = () => setEventSlide(eventSlideIndex + 1);
  const prevEventSlide = () => setEventSlide(eventSlideIndex - 1);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHighlightIndexes((prev) =>
        prev.map((idx, i) => {
          const len = eventHighlights[i]?.images?.length || 1;
          return (idx + 1) % len;
        })
      );
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!isEventOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousHideNavbar = document.body.dataset.hideNavbar;

    const navbarEl = document.getElementById("site-navbar");
    const previousNavbarDisplay = navbarEl?.style?.display;

    document.body.style.overflow = "hidden";
    document.body.dataset.hideNavbar = "true";

    if (navbarEl) navbarEl.style.display = "none";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeEvent();
      if (e.key === "ArrowLeft") prevEventSlide();
      if (e.key === "ArrowRight") nextEventSlide();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      if (previousHideNavbar === undefined) {
        delete document.body.dataset.hideNavbar;
      } else {
        document.body.dataset.hideNavbar = previousHideNavbar;
      }

      if (navbarEl) {
        navbarEl.style.display = previousNavbarDisplay || "";
      }

      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isEventOpen, selectedGallery.length, eventSlideIndex]);

  useEffect(() => {
    if (!isEventOpen) return;
    // Ensure we always start from the first slide when opening / switching events
    scrollToEventSlide(0, "auto");
  }, [isEventOpen, selectedEvent?.title]);

  const featureImages = eventHighlights[0]?.images ?? [];
  const featureSrc = featureImages.length
    ? featureImages[highlightIndexes[0] % featureImages.length]
    : "/img1.webp";

  return (
    <>
      <main className="relative overflow-hidden bg-white text-black">
        {/* Orbit background (full page) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Orbit 1 */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 h-[110vmax] w-[110vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5px] border-red-300/70 hidden lg:flex items-center justify-center"
          >
            <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-red-600 shadow-[0_0_10px_#ff2d2d]" />

            {/* Orbital Text Node */}
            <motion.div
              animate={{ rotate: [-360, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-[10%] left-[10%] flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              </span>
              <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-300">
                Use Cases
              </span>
            </motion.div>
          </motion.div>

          {/* Orbit 2: Middle Dashed Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5px] border-black/10 border-dashed hidden lg:flex items-center justify-center"
          >
            <div className="absolute top-[12%] h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_#ff2d2d]" />

            {/* Orbital Text Node */}
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-4 rounded-full bg-white/50 p-1 backdrop-blur-[2px] border border-white/60"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-500 to-red-200" />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="whitespace-nowrap text-[10px] font-black tracking-[0.2em] text-red-400">
                9+ Active Nodes
              </span>
            </motion.div>
          </motion.div>

          {/* Orbit 3: Outer Faint Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 h-[170vmax] w-[170vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5px] border-black/5 hidden lg:flex items-center justify-center"
          >
            {/* Orbital Text Node */}
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
            >
              <span className="relative inline-flex h-1 w-1 rounded-full bg-black" />
              <span className="whitespace-nowrap text-[8px] font-bold tracking-[0.25em] text-red-300">
                POSA Consensus
              </span>
            </motion.div>
          </motion.div>

          {/* Small floating local elements */}
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-10 top-24 hidden lg:flex h-24 w-24 items-center justify-center rounded-full border border-red-500/70 opacity-50"
          >
            <div className="h-16 w-16 rounded-full border border-red-500/70" />
            <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_#ff2d2d]" />
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15], rotate: [0, -90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 hidden lg:flex h-32 w-32 items-center justify-center rounded-full border border-red-500/70 border-dashed opacity-40"
          >
            <div className="absolute bottom-2 right-4 h-2 w-2 rounded-full bg-black" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">

        {/* HERO SECTION */}
        <section className="text-center pt-36 md:pt-44 pb-20 px-6 md:px-16">
          <h1 className="text-[60px] md:text-[100px] font-bold leading-none">
            THE <span className="text-red-600">EVENT</span> GALLERY
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Explore and relive the most impactful moments of MST events — 
            from hackathons to global meetups and launches.
          </p>
        </section>

        {/* FEATURE SECTION */}
        <section className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-4">
              WE BUILD EXPERIENCES FOR THE FUTURE
            </h2>
            <p className="text-gray-600 mb-6">
              Our events bring together builders, innovators, and thinkers to shape
              the decentralized future through collaboration and experimentation.
            </p>
 
          </div>

          <CardContainer className="w-full">
            <CardBody className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_60px_-30px_rgba(0,0,0,0.35)]">
              <CardItem translateZ={80} className="relative h-full w-full">
                <Image
                  src={featureSrc}
                  alt="MST events feature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </CardItem>

              <CardItem
                translateZ={40}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 via-black/0 to-transparent"
              />
            </CardBody>
          </CardContainer>
        </section>

        {/* EXHIBITIONS GRID */}
        <section className="px-6 md:px-16 py-20">
          <h2 className="text-3xl font-bold mb-10">
            EVENT <span className="text-red-500">HIGHLIGHTS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {eventHighlights.map((highlight, i) => {
              const images = highlight.images || [];
              const activeIndex = highlightIndexes[i] || 0;
              const src = images.length ? images[activeIndex % images.length] : "/img1.webp";

              return (
                <div key={highlight.label} className="space-y-6">
                  <div className="relative h-[250px]">
                    <Image
                      src={src}
                      alt={highlight.alt}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-sm text-gray-500">{highlight.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* MID BANNER SECTION */}
        <section className="bg-red-500 text-white text-center py-20 px-6">
          <h2 className="text-5xl font-bold">
            HARMONY & IMPACT 
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Every event is crafted to inspire innovation and create meaningful
            connections within the Web3 ecosystem.
          </p>
        </section>

        {/* TIMELINE / LIST */}
        <section className="px-6 md:px-16 py-20">
          <h2 className="text-3xl font-bold mb-10">
            ALL EVENTS
          </h2>

          <div className="space-y-6">

            {allEvents.map((event) => (
              <div
                key={event.title}
                className="flex items-center justify-between gap-4 border-b pb-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {event.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative hidden h-12 w-16 overflow-hidden rounded-xl border border-black/10 bg-black/5 sm:block">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => openEvent(event)}
                    className="text-red-500 hover:underline whitespace-nowrap"
                  >
                    View →
                  </button>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* ALL EVENTS: View modal slider */}
        {isEventOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:items-center">
            <div
              className="absolute inset-0 bg-black/45 backdrop-blur-xl"
              onClick={closeEvent}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={
                selectedEvent ? `${selectedEvent.title} gallery` : "Event gallery"
              }
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex w-full max-w-[1100px] flex-col overflow-hidden rounded-3xl border border-white/30 bg-white/70 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.55)] ring-1 ring-black/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 max-h-[92vh]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-black/10 bg-white/60 px-5 py-4 backdrop-blur">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-black truncate">
                    {selectedEvent?.title ?? "Event"}
                  </p>
                  <p className="text-xs text-black/60 mt-1">
                    {selectedEvent?.date ?? ""}
                  </p>
                </div>

                <motion.button
                  type="button"
                  onClick={closeEvent}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-black/10 bg-white/70 px-3.5 py-2 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-white"
                >
                  Close
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="overflow-hidden bg-white/55 shadow-[0_18px_70px_-38px_rgba(0,0,0,0.45)] backdrop-blur">
                  {/* Carousel (scroll left/right) */}
                  <div className="relative overflow-hidden">
                    <div
                      ref={carouselRef}
                      onScroll={() => {
                        const el = carouselRef.current;
                        if (!el) return;
                        const width = el.clientWidth || 1;
                        const idx = Math.round(el.scrollLeft / width);
                        if (idx !== eventSlideIndex) setEventSlideIndex(idx);
                      }}
                      className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                      style={{ WebkitOverflowScrolling: "touch" }}
                    >
                      {selectedGallery.map((item, idx) => (
                        <div
                          key={`${item.src}-${idx}`}
                          className="w-full flex-none snap-center"
                        >
                          <div className="relative h-[220px] w-full bg-black/5 sm:h-[260px] md:h-[300px] lg:h-[320px]">
                            <motion.div
                              className="absolute inset-0"
                              initial={{ scale: 1.06 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <div className="relative h-full w-full">
                                <Image
                                  src={item.src}
                                  alt={
                                    selectedEvent?.title
                                      ? `${selectedEvent.title} image ${idx + 1}`
                                      : `Event image ${idx + 1}`
                                  }
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, 1100px"
                                  priority={idx === 0}
                                />
                              </div>
                            </motion.div>

                            {/* Strong overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/0 to-transparent" />

                            {/* Title + date on top of image */}
                            <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                                  Event Gallery
                                </p>
                                <p className="mt-1 truncate text-lg font-extrabold text-white md:text-xl">
                                  {selectedEvent?.title ?? "Event"}
                                </p>
                                <p className="mt-1 text-xs text-white/70">
                                  {selectedEvent?.date ?? ""}
                                </p>
                              </div>

                              <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-black shadow-sm">
                                {idx + 1}/{selectedGallery.length}
                              </span>
                            </div>

                            {/* Slide title chip */}
                            {item.title ? (
                              <div className="absolute left-4 bottom-3 right-4 flex items-center justify-between gap-3">
                                <span className="inline-flex max-w-full rounded-full bg-black/55 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                                  {item.title}
                                </span>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Controls */}
                    {selectedGallery.length > 1 && (
                      <>
                        <motion.button
                          type="button"
                          onClick={prevEventSlide}
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.98 }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/70 px-3 py-2 text-sm font-semibold text-black shadow-lg backdrop-blur transition-all duration-300 ease-out hover:bg-white"
                          aria-label="Previous image"
                        >
                          ←
                        </motion.button>

                        <motion.button
                          type="button"
                          onClick={nextEventSlide}
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.98 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/70 px-3 py-2 text-sm font-semibold text-black shadow-lg backdrop-blur transition-all duration-300 ease-out hover:bg-white"
                          aria-label="Next image"
                        >
                          →
                        </motion.button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails + progress */}
                  {selectedGallery.length > 1 && (
                    <div className="bg-white/55 px-4 py-4 backdrop-blur">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                          Thumbnails
                        </p>
                      </div>

                      <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {selectedGallery.map((thumb, idx) => (
                          <motion.button
                            key={`${thumb.src}-thumb-${idx}`}
                            type="button"
                            onClick={() => setEventSlide(idx)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-none"
                            aria-label={`Open preview ${idx + 1}`}
                          >
                            <div
                              className={
                                idx === activeSlide
                                  ? "relative h-14 w-20 overflow-hidden rounded-xl border-2 border-red-500 shadow-[0_0_0_1px_rgba(239,68,68,0.22),0_18px_38px_-24px_rgba(239,68,68,0.85)]"
                                  : "relative h-14 w-20 overflow-hidden rounded-xl border border-black/10 opacity-90 transition-all duration-300 ease-out hover:opacity-100"
                              }
                            >
                              <Image
                                src={thumb.src}
                                alt={`Preview ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                              />
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      <div className="mt-3 h-1.5 w-full rounded-full bg-black/10">
                        <motion.div
                          className="h-full rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.55)]"
                          animate={{ left: `${progressLeft}%`, width: `${progressWidth}%` }}
                          transition={{ type: "spring", stiffness: 260, damping: 28 }}
                          style={{ position: "relative" }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Info (placed under the main image) */}
                  <div className="grid gap-8 p-6 md:grid-cols-[7fr_3fr]">
                    {/* LEFT: 70% */}
                    <div className="space-y-5">
                      {/* Step story */}
                      <div className="rounded-xl border border-black/10 bg-white/70 p-5 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur">
                        <motion.div
                          key={activeSlide}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="space-y-4"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                                Step {activeSlide + 1}
                              </p>
                              <p className="text-xs text-black/60">
                                {activeSlide + 1}/{galleryLen}
                              </p>
                            </div>

                            <div className="mt-2 h-1.5 w-full rounded-full bg-black/10">
                              <motion.div
                                className="h-full rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.5)]"
                                animate={{
                                  width: `${galleryLen ? ((activeSlide + 1) / galleryLen) * 100 : 0}%`,
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                              />
                            </div>

                            <p className="mt-4 text-xl font-extrabold text-black md:text-2xl">
                              {activeGalleryItem?.title || selectedEvent?.title || ""}
                            </p>
                            {activeGalleryItem?.description ? (
                              <p className="mt-2 text-sm leading-relaxed text-black/70">
                                {activeGalleryItem.description}
                              </p>
                            ) : null}
                          </div>

                          {activeGalleryItem?.points?.length ? (
                            <ul className="space-y-2 text-sm text-black/70">
                              {activeGalleryItem.points.map((p, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-500/10 text-[12px] font-extrabold text-red-600">
                                    ✓
                                  </span>
                                  <span className="leading-relaxed">{p}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </motion.div>

                        {/* Quick navigation */}
                        {selectedGallery.length > 1 && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut", delay: 0.05 }}
                            className="mt-5 border-t border-black/10 pt-4"
                          >
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                              Jump to
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                              {selectedGallery.map((_, idx) => (
                                <motion.button
                                  key={idx}
                                  type="button"
                                  onClick={() => setEventSlide(idx)}
                                  whileHover={{ scale: 1.04 }}
                                  whileTap={{ scale: 0.98 }}
                                  aria-label={`Go to image ${idx + 1}`}
                                  className={
                                    idx === activeSlide
                                      ? "h-2.5 w-10 rounded-full bg-red-500"
                                      : "h-2.5 w-6 rounded-full bg-black/15 hover:bg-black/25"
                                  }
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Tags (moved to left) */}
                      {selectedEvent?.tags?.length ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.24, ease: "easeOut", delay: 0.04 }}
                          className="rounded-xl border border-black/10 bg-white/70 p-5 shadow-[0_10px_36px_-28px_rgba(0,0,0,0.3)] backdrop-blur"
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

                      {/* About + Highlights (moved to left) */}
                      {(selectedEvent?.about || selectedEvent?.highlights?.length) && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.24, ease: "easeOut", delay: 0.06 }}
                          className="overflow-hidden rounded-xl border border-black/10 bg-white/70 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur"
                        >
                          <div className="divide-y divide-black/10">
                            {selectedEvent?.about ? (
                              <div className="p-5">
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                                  About
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-black/70">
                                  {selectedEvent.about}
                                </p>
                              </div>
                            ) : null}

                            {selectedEvent?.highlights?.length ? (
                              <div className="p-5">
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                                  Highlights
                                </p>
                                <ul className="mt-3 space-y-2.5 text-sm text-black/70">
                                  {selectedEvent.highlights.map((h, idx) => (
                                    <li key={idx} className="flex gap-2.5">
                                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-500/10 text-[12px] font-extrabold text-red-600">
                                        →
                                      </span>
                                      <span className="leading-relaxed">{h}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* RIGHT: 30% (minimal metadata panel) */}
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="self-start rounded-2xl border border-black/10 bg-white/70 p-5 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur md:sticky md:top-6"
                    >
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                        Event details
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-black/10 bg-white/70 px-3 py-2.5">
                          <div className="flex items-center gap-2 text-black/60">
                            <Calendar className="h-4 w-4 text-red-500" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Date</span>
                          </div>
                          <p className="mt-1 text-sm font-semibold text-black">
                            {selectedEvent?.date ?? "-"}
                          </p>
                        </div>

                        <div className="rounded-xl border border-black/10 bg-white/70 px-3 py-2.5">
                          <div className="flex items-center gap-2 text-black/60">
                            <MapPin className="h-4 w-4 text-red-500" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Location</span>
                          </div>
                          <p className="mt-1 text-sm font-semibold text-black">
                            {selectedEvent?.location ?? "-"}
                          </p>
                        </div>

                        <div className="rounded-xl border border-black/10 bg-white/70 px-3 py-2.5">
                          <div className="flex items-center gap-2 text-black/60">
                            <Video className="h-4 w-4 text-red-500" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Format</span>
                          </div>
                          <p className="mt-1 text-sm font-semibold text-black">
                            {selectedEvent?.format ?? "-"}
                          </p>
                        </div>

                        <div className="rounded-xl border border-black/10 bg-white/70 px-3 py-2.5">
                          <div className="flex items-center gap-2 text-black/60">
                            <Users className="h-4 w-4 text-red-500" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">Audience</span>
                          </div>
                          <p className="mt-1 text-sm font-semibold text-black">
                            {selectedEvent?.audience ?? "-"}
                          </p>
                        </div>
                      </div>

                      {selectedEvent?.highlights?.length ? (
                        <div className="mt-8 border-t border-black/10 pt-6">
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-black/50">
                            Highlights
                          </p>
                          <ul className="mt-4 space-y-2.5 text-sm text-black/70">
                            {selectedEvent.highlights.map((h, idx) => (
                              <li key={idx} className="flex gap-2.5">
                                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-500/10 text-[12px] font-extrabold text-red-600">
                                  →
                                </span>
                                <span className="leading-relaxed">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* FAQ STYLE SECTION */}
        <section className="px-6 md:px-16 py-20">
          <h2 className="text-5xl font-bold mb-10">
            FAQ
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border p-6 rounded-xl">
              <h3 className="font-semibold">How to join events?</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Register via our platform and stay updated with announcements.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-semibold">Are events free?</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Most events are free with limited seats.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-semibold">Where are events held?</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Both online and offline across multiple cities.
              </p>
            </div>

          </div>
        </section>

        </div>
      </main>

    </>
  );
}