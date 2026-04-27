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

      grids.forEach((grid, i) => {
        const { imageCard, textBlock } = getGridParts(grid);
        if (!imageCard || !textBlock) return;

        if (i === 0) {
          gsap.timeline()
            .fromTo(imageCard, imageFrom, imageTo)
            .fromTo(textBlock, { x: 100, opacity: 0, y: 30 }, { x: 0, opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.2);
        } else {
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
        }

        gsap.to(imageCard, {
          y: -40,
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
    <div className="min-h-screen bg-[#FAFAFA] text-black font-poppins selection:bg-[#FF2D2D] selection:text-white overflow-x-hidden">


      <section className="grant-section relative z-10">
        <div className="container">
          {/* HEADER */}
          <div className="header">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-[0.3em] mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D] animate-ping" />
              Empowering Innovation
            </div>
            <motion.h1
              className="bungee-regular text-6xl md:text-7xl leading-[0.95] tracking-tight text-black font-extrabold uppercase"
              variants={titleContainer}
              initial="hidden"
              animate="visible"
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
              We provide the fuel for your decentralized vision. From initial prototype to global scale, MST supports you at every milestone.
            </p>
          </div>

          {/* TRACK 1: initGrant */}
          <div className="grid relative overflow-hidden">
            {/* Track Background Orbits */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[5%] left-[5%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
              >
                <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
                <motion.div
                  animate={{ rotate: [-360, 0] }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-[15%] top-[15%] flex items-center gap-2"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF2D2D]"></span>
                  </span>
                  <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-500/50 uppercase">MST BLOCKCHAIN</span>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute left-[30%] top-[25%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500/20 pointer-events-none"
              >
                <div className="h-20 w-20 rounded-full border-2 border-red-500/10" />
                <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
              >
                <div className="absolute top-[18%] left-[8%] h-[8px] w-[8px] rounded-full bg-[#FF2D2D] shadow-[0_0_15px_#ff2d2d]" />
              </motion.div>
            </div>
            <div className="hero-wrapper">
              <div className="hero-card">
                <div className="hero-image-container">
                  <img src="/grant/init grant - Banner.jpg" className="hero-img active" alt="initGrant" />
                  <img src="/grant/init grant - Banner.jpg" className="hero-img" alt="initGrant" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="bungee-regular uppercase m-0 p-0">init<span className="text-red-600">Grant</span>()</h2>
              </div>
              <span className="track-amount">UP TO $1,000</span>

              <p className="font-medium text-zinc-600 mb-8">
                Ideal for developers exploring <span className="text-black font-bold">new ideas</span>, conducting <span className="text-black font-bold">experiments</span>, or building <span className="text-black font-bold">early-stage prototypes</span> on the MST Blockchain.
              </p>

              <div className="space-y-8">
                <div>
                  <span className="list-title">Key Activities</span>
                  <ul className="activities-list">
                    <li>MST Blockchain onboarding & academy sessions</li>
                    <li>Technical mentorship (group & 1:1)</li>
                    <li>Architecture review by MST engineering</li>
                    <li>Testnet optimization and debugging</li>
                    <li>Integration with ecosystem tools</li>
                    <li>Weekly progress tracking via Google Meet</li>
                  </ul>
                </div>

                <div>
                  <span className="list-title">Deliverables</span>
                  <ul className="deliverables-list">
                    <li>Working prototype (dApp or smart contract)</li>
                    <li>GitHub repository with structured codebase</li>
                    <li>Testnet deployment on MST Blockchain</li>
                    <li>Basic technical documentation</li>
                  </ul>
                </div>
              </div>

              <a href="https://forms.gle/4iZst79GuCS8zs6YA" target="_blank" rel="noopener noreferrer" className="apply-btn">
                APPLY FOR INITGRANT
              </a>
            </div>
          </div>

          {/* TRACK 2: buildGrant */}
          <div className="grid relative overflow-hidden">
            {/* Track Background Orbits */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[5%] left-[5%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
              >
                <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
                <motion.div
                  animate={{ rotate: [-360, 0] }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-[15%] top-[15%] flex items-center gap-2"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF2D2D]"></span>
                  </span>
                  <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-500/50 uppercase">MST BLOCKCHAIN</span>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute left-[30%] top-[25%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500/20 pointer-events-none"
              >
                <div className="h-20 w-20 rounded-full border-2 border-red-500/10" />
                <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
              >
                <div className="absolute top-[18%] left-[8%] h-[8px] w-[8px] rounded-full bg-[#FF2D2D] shadow-[0_0_15px_#ff2d2d]" />
              </motion.div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="bungee-regular uppercase m-0 p-0">build<span className="text-red-600">Grant</span>()</h2>
              </div>
              <span className="track-amount">UP TO $10,000</span>

              <p className="font-medium text-zinc-600 mb-8">
                Designed for <span className="text-black font-bold">testnet-ready projects</span> with functional prototypes and a comprehensive technical execution roadmap.
              </p>

              <div className="space-y-8">
                <div>
                  <span className="list-title">Key Activities</span>
                  <ul className="activities-list">
                    <li>Deep technical architecture refinement</li>
                    <li>Code refactoring and performance optimization</li>
                    <li>Security review & vulnerability assessment</li>
                    <li>Product usability and UX flow improvements</li>
                    <li>Controlled user pilot testing (Closed Beta)</li>
                    <li>Feedback-driven iteration based on real data</li>
                  </ul>
                </div>

                <div>
                  <span className="list-title">Deliverables</span>
                  <ul className="deliverables-list">
                    <li>Stable, production-quality testnet application</li>
                    <li>Finalized system architecture documentation</li>
                    <li>Security assessment report & fixes</li>
                    <li>User pilot results and insights report</li>
                    <li>Mainnet readiness approval checklist</li>
                  </ul>
                </div>
              </div>

              <a href="https://forms.gle/4iZst79GuCS8zs6YA" target="_blank" rel="noopener noreferrer" className="apply-btn">
                APPLY FOR BUILDGRANT
              </a>
            </div>

            <div className="hero-wrapper">
              <div className="hero-card">
                <div className="hero-image-container">
                  <img src="/grant/Copy of Scale grant - Banner.jpg" className="hero-img active" alt="buildGrant" />
                  <img src="/grant/Copy of Scale grant - Banner.jpg" className="hero-img" alt="buildGrant" />
                </div>
              </div>
            </div>
          </div>

          {/* TRACK 3: scaleGrant */}
          <div className="grid relative overflow-hidden">
            {/* Track Background Orbits */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[5%] left-[5%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
              >
                <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
                <motion.div
                  animate={{ rotate: [-360, 0] }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-[15%] top-[15%] flex items-center gap-2"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF2D2D]"></span>
                  </span>
                  <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-500/50 uppercase">MST BLOCKCHAIN</span>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute left-[30%] top-[25%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500/20 pointer-events-none"
              >
                <div className="h-20 w-20 rounded-full border-2 border-red-500/10" />
                <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
              >
                <div className="absolute top-[18%] left-[8%] h-[8px] w-[8px] rounded-full bg-[#FF2D2D] shadow-[0_0_15px_#ff2d2d]" />
              </motion.div>
            </div>
            <div className="hero-wrapper">
              <div className="hero-card">
                <div className="hero-image-container">
                  <img src="/grant/Build grant-Banner (4).jpg" className="hero-img active" alt="scaleGrant" />
                  <img src="/grant/Build grant-Banner (4).jpg" className="hero-img" alt="scaleGrant" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="bungee-regular uppercase m-0 p-0">scale<span className="text-red-600">Grant</span>()</h2>
              </div>
              <span className="track-amount">UP TO $50,000</span>

              <p className="font-medium text-zinc-600 mb-8">
                Targeting <span className="text-black font-bold">production-ready applications</span> with established teams and infrastructure ready for global scaling.
              </p>

              <div className="space-y-8">
                <div>
                  <span className="list-title">Key Activities</span>
                  <ul className="activities-list">
                    <li>Mainnet deployment and live system launch</li>
                    <li>Governance and engineering final approval</li>
                    <li>Scalability monitoring and infra tuning</li>
                    <li>Go-To-Market (GTM) strategy execution</li>
                    <li>Community building and user acquisition</li>
                    <li>Ecosystem partnership integrations</li>
                  </ul>
                </div>

                <div>
                  <span className="list-title">Deliverables</span>
                  <ul className="deliverables-list">
                    <li>Fully deployed Mainnet application</li>
                    <li>Verified real-user traction metrics</li>
                    <li>Live community and growth channels</li>
                    <li>GTM execution report with results</li>
                    <li>Long-term scaling roadmap</li>
                  </ul>
                </div>
              </div>

              <a href="https://forms.gle/4iZst79GuCS8zs6YA" target="_blank" rel="noopener noreferrer" className="apply-btn">
                APPLY FOR SCALEGRANT
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .grant-section footer {
          display: none !important;
        }
      `}</style>
    </div>
  );
}