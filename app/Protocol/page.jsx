'use client'
import React, { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProtocolPage() {

  useEffect(() => {
    const grids = document.querySelectorAll(".grid-section");

    grids.forEach((grid) => {
      const image = grid.querySelector(".image-box");
      const text = grid.querySelector(".text-box");

      gsap.fromTo(
        image,
        { x: -120, opacity: 0, y: 40 },
        {
          x: 0,
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        text,
        { x: 100, opacity: 0, y: 30 },
        {
          x: 0,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="w-full py-20 bg-white">

      <div className="w-[min(1120px,92%)] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-6 pt-4">
          <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-red-600 font-extrabold uppercase m-0 p-0">
            PROTOCOLS.
          </h1>
          <p className="mt-2 text-base md:text-lg text-black/70 m-0 p-0">
            Core technologies powering secure Web3 ecosystem.
          </p>
        </div>

        {/* PROTOCOL 1 */}
        <div className="grid-section grid grid-cols-2 max-[900px]:grid-cols-1 gap-8 md:gap-x-16 items-center mb-12">

          <div className="image-box">
            <div className="relative rounded-2xl">
              <div className="absolute -inset-6 bg-red-500 opacity-30 blur-3xl rounded-2xl"></div>
              <div className="relative rounded-2xl border border-white/70 bg-white p-[3px]">
                <div className="rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                  <div className="relative w-full aspect-[16/10]">
                    <img
                      src="/Protocol/SARAL-No code deployment.jpg"
                      alt="SARAL Protocol"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-box">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-red-600 font-extrabold uppercase m-0 p-0">
              SARAL Protocol
            </h2>

            <p className="text-[#ff2d2d] font-semibold mb-2">
              Simplifying Web3 Access with Non-Custodial Key Infrastructure
            </p>

            <p className="text-black/75 leading-[1.7]">
              SARAL Protocol is a non-custodial key management solution designed
              to deliver a seamless user experience,much like OAuth does for Web2.
              By leveraging Multi-Party Computation (MPC), SARAL empowers developers
              to securely manage blockchain transactions and Web3 authentication
              without compromising user control or privacy.
            </p>
          </div>

        </div>

        {/* PROTOCOL 2 */}
        <div className="grid-section grid grid-cols-2 max-[900px]:grid-cols-1 gap-8 md:gap-x-16 items-center mb-12">

          <div className="text-box order-2 md:order-1">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-red-600 font-extrabold uppercase m-0 p-0">
              WASMify
            </h2>

            <p className="text-[#ff2d2d] font-semibold mb-2">
              Securely Connecting Blockchains to the Real World with ZK-Powered Trust
            </p>

            <p className="text-black/75 leading-[1.7]">
              WASMify enables real-world applications and blockchain networks to communicate seamlessly and securely. By leveraging zero-knowledge (ZK) technology, it ensures data privacy and trustless execution,bringing strong guarantees of security to every interaction.
            </p>
          </div>

          <div className="image-box order-1 md:order-2">
            <div className="relative rounded-2xl">

              <div className="absolute -inset-6 bg-red-500 opacity-30 blur-3xl rounded-2xl"></div>

              <div className="relative rounded-2xl border border-white/70 bg-white p-[3px]">

                <div className="rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                  <div className="relative w-full aspect-[16/10]">
                    <img
                      src="/Protocol/programming language.jpg"
                      alt="Wasmify Protocol"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* PROTOCOL 3 */}
        <div className="grid-section grid grid-cols-2 max-[900px]:grid-cols-1 gap-8 md:gap-x-16 items-center">

          <div className="image-box">
            <div className="relative rounded-2xl">

              <div className="absolute -inset-6 bg-red-500 opacity-30 blur-3xl rounded-2xl"></div>

              <div className="relative rounded-2xl border border-white/70 bg-white p-[3px]">

                <div className="rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                  <div className="relative w-full aspect-[16/10]">
                    <img
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                      alt= "Post quantum protocol"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="text-box">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-red-600 font-extrabold uppercase m-0 p-0">
              Post-quantum cryptography Protocol
            </h2>

            <p className="text-[#ff2d2d] font-semibold mb-2">
              Safeguarding Data with Advanced Quantum-Resistant Encryption
            </p>

            <p className="text-black/75 leading-[1.7]">
              Post-quantum cryptography (PQC) protocols are cryptographic algorithms designed to secure digital communications against future, powerful quantum computers, which are expected to break current public-key encryption methods like RSA and ECC. These protocols are primarily being standardized by the National Institute of Standards and Technology (NIST) and are designed to run on classical hardware while resisting quantum-based attacks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}