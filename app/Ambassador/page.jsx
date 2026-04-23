'use client';

import React from "react";
import { motion } from "framer-motion";
import { Globe, School, Briefcase, ChevronRight, Award, Zap, Users, Lightbulb } from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AmbassadorPage() {
  return (
    <div className="bg-[#fffaff] text-slate-900 overflow-x-hidden selection:bg-red-100 selection:text-red-600">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-50/50 via-transparent to-transparent">

        {/* Decorative Background Blur */}
        <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-red-200/20 blur-[120px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
              Join the Movement
            </span>
            <h1 className="bungee-regular text-6xl md:text-6xl leading-tight  text-black font-extrabold uppercase m-0 p-0">
              Become the Voice of MST in <br />
              <span className="text-red-600">
                Your World
              </span>
            </h1>

            <p className="mt-10 text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              The MST Community brings together developers, entrepreneurs, researchers,
              and everyday users who believe in building a decentralized, real-world ready
              blockchain. Whether you’re here to experiment, launch, or simply learn,
              you’ll find your place here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CITY ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                <Globe size={28} />
              </div>
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">City <span className="text-red-600">Ambassadors</span></h2>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="w-1.5 h-15 bg-red-600 rounded-full"></div>
              <p className=" bungee-regular text-2xl text-slate-800 leading-tight">
                Lead your city into the future of <span className="text-red-600">blockchain</span>.
              </p>
            </div>

            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Host meetups, workshops, and events that introduce MST to local developers, businesses, and enthusiasts.
            </p>

            <div className="bg-white border border-black/20 p-6 rounded-2xl shadow-sm mb-10">
              <p className="text-slate-600">
                <span className="text-red-600 font-bold uppercase text-sm tracking-wider mr-2">You’ll Get:</span>
                Recognition as a City Ambassador, event support, networking with global leaders, and early access to MST updates.
              </p>
            </div>

            <button className="group bg-black text-white px-8 py-4 rounded-2xl hover:bg-red-600 transition-all duration-300 font-bold flex items-center gap-2 shadow-xl shadow-slate-200">
              Apply as a City Ambassador <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-red-500/10 to-pink-500/10 blur-3xl rounded-[3rem]"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800" className="w-full h-full object-cover" alt="City" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CAMPUS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            <div className="absolute -inset-6 bg-red-500/10 blur-3xl rounded-[3rem]"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" className="w-full h-full object-cover" alt="Campus" />
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                <School size={28} />
              </div>
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight  text-black font-extrabold uppercase m-0 p-0">Campus <span className="text-red-600">Ambassadors</span></h2>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="w-1.5 h-10 bg-red-600 rounded-full"></div>
              <p className=" bungee-regular text-2xl text-slate-800 leading-tight">
                Bring <span className="text-red-600">MST</span> to your university.
              </p>
            </div>

            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Start a student club, host hackathons, and teach your peers how to build on MST Testnet.
            </p>

            <div className="bg-white border border-black/20 p-6 rounded-2xl shadow-sm mb-10">
              <p className="text-slate-600">
                <span className="text-red-600 font-bold uppercase text-sm tracking-wider mr-2">You’ll Get:</span>
                Official certificate, mentorship opportunities, access to grants, and exclusive learning sessions.
              </p>
            </div>

            <button className="group bg-black text-white px-8 py-4 rounded-2xl hover:bg-red-600 transition-all duration-300 font-bold flex items-center gap-2 shadow-xl shadow-slate-200">
              Apply as a Campus Ambassador <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= INDUSTRY ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                <Briefcase size={28} />
              </div>
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">Industry <span className="text-red-600">Ambassadors</span></h2>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="w-1.5 h-10 bg-red-600 rounded-full"></div>
              <p className=" bungee-regular text-2xl text-slate-800 leading-tight">
                Bring <span className="text-red-600">MST</span> to your industry.
              </p>
            </div>

            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Integrate MST into your professional network, showcase real-world use cases, and lead enterprise adoption.
            </p>

            <div className="bg-white border border-black/20 p-6 rounded-2xl shadow-sm mb-10">
              <p className="text-slate-600">
                <span className="text-red-600 font-bold uppercase text-sm tracking-wider mr-2">You’ll Get:</span>
                Official certificate, mentorship opportunities, access to grants, and exclusive learning sessions.
              </p>
            </div>

            <button className="group bg-black text-white px-8 py-4 rounded-2xl hover:bg-red-600 transition-all duration-300 font-bold flex items-center gap-2 shadow-xl shadow-slate-200">
              Apply as an Industry Ambassador <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            <div className="absolute -inset-6 bg-red-500/5 blur-3xl rounded-[3rem]"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" className="w-full h-full object-cover" alt="Industry" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className=" bg-red-800 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-6 relative z-10">
          <h2 className="bungee-regular text-4xl md:text-6xl leading-tight tracking-tight text-white font-extrabold uppercase mb-16 m-0 p-0">Why Join?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                text: "Be a recognized leader in your community.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
                icon: <Award className="text-red-400" />
              },
              {
                text: "Gain access to grants, resources, and mentorship.",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
                icon: <Zap className="text-red-400" />
              },
              {
                text: "Connect with a global network of builders.",
                img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
                icon: <Users className="text-red-400" />
              },
              {
                text: "Shape the future of blockchain adoption.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
                icon: <Lightbulb className="text-red-400" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-black/20 bg-white/5 backdrop-blur-sm"
              >
                <div className="h-[60%] p-8 flex flex-col items-center bg-gradient-to-b from-red-600/90 via-red-700/90 to-black">
                  <div className="mb-4 flex justify-center items-center w-16 h-16 shadow-lg">{item.icon}</div>
                  <p className="bungee-regular text-white text-xl text-center">
                    {item.text}
                  </p>
                </div>
                <div className="h-[40%] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="why join" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-20 m-0 p-0">How It Works</h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 w-full h-[1px] bg-black/20 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                "Submit your application through the MST Community Hub.",
                "Select your track: City, Campus, or Industry.",
                "Get onboarded with exclusive training and resources.",
                "Start leading, building, and creating impact."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="group"
                >
                  <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Circle Step */}
                    <div className="w-24 h-24 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100 flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <span className="text-3xl bungee-regular">0{i + 1}</span>
                    </div>

                    <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-red-600 font-extrabold uppercase m-0 p-0 mb-4">Step {i + 1}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium px-4 md:px-0">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Footer */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">© 2024 MST Community Protocol</p>
      </footer>
    </div>
  );
}