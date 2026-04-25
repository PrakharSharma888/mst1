'use client'
import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./GrantTracks.css";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const title = 'GRANT TRACKS.';

  const titleContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.15
      }
    }
  };

  const titleChar = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    }
  };

  useEffect(() => {
    const intervals = [];
    const containers = document.querySelectorAll(".hero-image-container");

    containers.forEach((container) => {
      let images = container.querySelectorAll(".hero-img");
      let index = 0;

      const id = setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 4500);

      intervals.push(id);
    });

    const ctx = gsap.context(() => {
      const grids = gsap.utils.toArray('.grid');
      const imageFrom = {
        x: -120,
        y: 40,
        opacity: 0,
        scale: 0.9,
        rotate: -3,
        filter: 'blur(8px)'
      };
      const imageTo = {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: 'blur(0px)',
        duration: 1.1,
        ease: 'power3.out'
      };

      const getGridParts = (grid) => {
        const imageCard = grid.querySelector('.hero-card');
        const textBlock = Array.from(grid.children).find(
          (child) => child.tagName === 'DIV' && !child.classList.contains('hero-wrapper')
        );
        return { imageCard, textBlock };
      };

      const firstGrid = grids[0];
      if (firstGrid) {
        const { imageCard, textBlock } = getGridParts(firstGrid);

        if (imageCard && textBlock) {
          gsap.timeline()
            .fromTo(
              imageCard,
              imageFrom,
              imageTo
            )
            .fromTo(
              textBlock,
              { x: 100, opacity: 0, y: 30 },
              { x: 0, opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
              0.2
            );
        }
      }

      grids.slice(1).forEach((grid) => {
        const { imageCard, textBlock } = getGridParts(grid);
        if (!imageCard || !textBlock) return;

        gsap.set(imageCard, imageFrom);
        gsap.set(textBlock, { x: 100, opacity: 0, y: 30 });

        ScrollTrigger.create({
          trigger: grid,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.timeline()
              .to(imageCard, imageTo)
              .to(textBlock, { x: 0, opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.2);
          }
        });

        gsap.to(imageCard, {
          y: -24,
          ease: 'none',
          scrollTrigger: {
            trigger: grid,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });
    });

    return () => {
      intervals.forEach((id) => clearInterval(id));
      ctx.revert();
    };
  }, []);

  return (
    <section className="grant-section relative overflow-hidden bg-white z-0 relative"> 
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40">
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />

          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[10%] left-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span></span>
            <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">Use Cases</span>
          </motion.div>
        </motion.div>

        {/* Orbit 2: Middle Dashed Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          <div className="absolute w-2 h-2 bg-accent rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />

          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-red-200" />
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
            <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">9+ Active Nodes</span>
          </motion.div>
        </motion.div>

        {/* Orbit 3: Outer Faint Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
          >
            <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus</span>
          </motion.div>
        </motion.div>

        {/* Small floating local elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
        >
          <div className="w-16 h-16 border border-red-500/20 rounded-full" />
          <div className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
        </motion.div>
      </div>

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="header">
          <motion.h1
            className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase"
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            style={{margin:0,padding:0}}
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={titleChar}
                className={`inline-block ${char !== ' ' && index >= 6 ? 'red-text' : ''}`}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="subtitle">
            Empowering builders through structured and scalable funding programs.
          </p>
        </div>

{/* TRACK 1 */}
<div className="grid">

  <div className="hero-wrapper">
    <div className="hero-card">
      <div className="hero-image-container">
        <img src="/grant/init grant - Banner.jpg" className="hero-img active" />
        <img src="/grant/init grant - Banner.jpg" className="hero-img" />
      </div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
    </div>
  </div>

  <div>
    <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase" style={{margin:0,padding:0}}>initGrant()</h2>
    <p className="red-text">Up to $1,000</p>

    <p>
      For developers starting <span className="red-text">new ideas</span>, <span className="red-text">experiments</span>, or <span className="red-text">early-stage prototypes</span> on MST.
    </p>

  {/* REQUIREMENTS */}
<p style={{ fontWeight: "bold", marginTop: "10px" }}>Activities</p>
<ul style={{ listStyleType: "disc", paddingLeft: "18px", margin: "0" }}>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>MST Blockchain onboarding & academy sessions</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Dedicated technical mentorship (group & 1:1 sessions)</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Architecture review by MST engineering team</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Testnet optimization and debugging support</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Integration with MST ecosystem tools (Wallet, Explorer, Bridge)</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>User testing and feedback cycles</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Smart contract and Web3 development workshops</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Weekly progress tracking via Google Meet sessions</li>
</ul>

{/* DELIVERABLES */}
<p style={{ fontWeight: "bold", marginTop: "8px" }}>Deliverables</p>

<ul style={{ listStyleType: "disc", paddingLeft: "18px", margin: "0" }}>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Working prototype (dApp or smart contract)</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>GitHub repository with structured codebase</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Testnet deployment on MST Blockchain</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Basic technical documentation</li>
  <li style={{ margin: "2px 0", fontWeight: "400" }}>Initial demo showcasing functionality</li>
</ul>

{/* APPLY BUTTON */}
<button className="apply-btn">
  APPLY FOR INITGRANT →
</button>
  </div>

</div>
{/* TRACK 2 */}
<div className="grid">

  <div>
    <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase" style={{margin:0,padding:0}}>buildGrant()</h2>
    <p className="red-text">Up to $10,000</p>

    <p>
      For <span className="red-text">testnet-ready projects</span> with <span className="red-text">working prototypes</span> and a clear execution roadmap.
    </p>

    {/* REQUIREMENTS */}
    <p style={{ fontWeight: "bold", marginTop: "10px" }}>Activities</p>
    <ul style={{ listStyleType: "disc", paddingLeft: "18px", margin: "0" }}>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Deep technical architecture refinement with MST engineering team</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Code refactoring, optimization, and performance improvements</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Security review and vulnerability assessment (pre-mainnet readiness)</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Product usability improvements (UX flow, onboarding, reliability)</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Advanced integration with MST ecosystem services</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Controlled user pilot testing (early adopters & closed beta groups)</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Feedback-driven iteration cycles based on real usage data</li>
    </ul>

    {/* DELIVERABLES */}
    <p style={{ fontWeight: "bold", marginTop: "8px" }}>Deliverables</p>
    <ul style={{ listStyleType: "disc", paddingLeft: "18px", margin: "0" }}>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Stable, production-quality testnet application</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Finalized system architecture and technical documentation</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Security assessment report & fixes implemented</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>User pilot results and insights report</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Mainnet readiness approval checklist</li>
    </ul>

    {/* APPLY BUTTON */}
    <button className="apply-btn">
      APPLY FOR BUILDGRANT →
    </button>
  </div>

  <div className="hero-wrapper">
    <div className="hero-card">
      <div className="hero-image-container">
        <img src="/grant/Copy of Scale grant - Banner.jpg" className="hero-img active" />
        <img src="/grant/Copy of Scale grant - Banner.jpg" className="hero-img" />
      </div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
    </div>
  </div>

</div>

{/* TRACK 3 */}
<div className="grid">

  <div className="hero-wrapper">
    <div className="hero-card">
      <div className="hero-image-container">
        <img src="/grant/Build grant-Banner (4).jpg" className="hero-img active" />
        <img src="/grant/Build grant-Banner (4).jpg" className="hero-img" />
      </div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
    </div>
  </div>

  <div>
    <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase" style={{margin:0,padding:0}}>scaleGrant()</h2>
    <p className="red-text">Up to $50,000</p>

    <p>
      For <span className="red-text">production-ready applications</span> with strong teams and scalable infrastructure.
    </p>

    {/* REQUIREMENTS */}
    <p style={{ fontWeight: "bold", marginTop: "10px" }}>Activities</p>
    <ul style={{ listStyleType: "disc", paddingLeft: "18px", margin: "0" }}>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Mainnet deployment and live system launch</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Governance and engineering final review approval</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Scalability monitoring and infrastructure tuning</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Go-To-Market (GTM) strategy execution</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Community building and developer/user acquisition</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Ecosystem partnership integrations and collaborations</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Growth experiments (funnels, retention, activation strategies)</li>
    </ul>

    {/* DELIVERABLES */}
    <p style={{ fontWeight: "bold", marginTop: "8px" }}>Deliverables</p>
    <ul style={{ listStyleType: "disc", paddingLeft: "18px", margin: "0" }}>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Fully deployed Mainnet application</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Verified real-user traction metrics (usage, retention, activity)</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Live community and growth channels</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>GTM execution report with results</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Ecosystem integrations completed</li>
      <li style={{ margin: "2px 0", fontWeight: "400" }}>Long-term scaling roadmap</li>
      
    </ul>

    {/* APPLY BUTTON */}
    <button className="apply-btn">
      APPLY FOR SCALEGRANT →
    </button>
  </div>

</div>
      </div>

      <style jsx>{`
        .grant-section footer {
          display: none !important;
        }
      `}</style>
    </section>
  );
}