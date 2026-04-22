"use client";

import React, { useState } from "react";
import { Mail, Briefcase, MapPin, Send, Users, Globe, ArrowRight } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const careerBenefits = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "HR Inquiries",
    text: "hr@mstblockchain.com",
    href: "mailto:hr@mstblockchain.com",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Life at MST",
    text: "Join our 50+ team",
    href: "#",
    color: "text-indigo-600 bg-indigo-50",
  },
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", position: "", portfolio: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and a short intro.");
      return;
    }

    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1500)); // Simulate API call
      setSuccess("Application sent! Our HR team will reach out soon. 🚀");
      setForm({ name: "", email: "", position: "", portfolio: "", message: "" });
      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
      {/* --- Background Animated Orbits --- */}
      {/* Orbit 1 */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [-360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] flex items-center gap-2"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
          </span>
          <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">Use Cases</span>
        </motion.div>
      </motion.div>

      {/* Orbit 2 */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-2 h-2 bg-accent rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-red-200" />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">9+ Active Nodes</span>
        </motion.div>
      </motion.div>

      {/* Orbit 3 */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
        >
          <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
          <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus </span>
        </motion.div>
      </motion.div>

      {/* Floating Local Elements */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
      >
        <div className="w-16 h-16 border border-red-500/20 rounded-full" />
        <div className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
      </motion.div>

      {/* --- CAREER HERO --- */}
      <section className="relative pt-32 pb-20 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-rose-600 bg-rose-50 border border-rose-100 rounded-full mb-6">
            Join the Revolution
          </span>

          <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase">
            Build your <span className="text-transparent bg-clip-text bg-red-500">career</span> in <br />
            the  <span className="text-transparent bg-clip-text bg-red-500">Web3</span> world
          </h1>

          <p className="font-aeonik font-normal text-slate-500 mt-8 text-xl max-w-2xl mx-auto leading-relaxed">
            We’re looking for innovators, dreamers, and builders to help us shape the future of blockchain technology.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-12 gap-12 relative z-10">
        {/* LEFT: HR Info */}
        <div className="lg:col-span-4">
          <div className="relative ml-auto w-full max-w-[420px] pl-5 ">
            <div
              aria-hidden="true"
              className="absolute -inset-x-3 -top-3 -bottom-35 md:-bottom-35 translate-x-3 translate-y-3 rounded-2xl bg-white border border-black/50 shadow-sm pointer-events-none"
            />

            <div className="relative pt-9 md:pt-9 space-y-6" style={{ minHeight: '495px' }}>
              <h2 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase flex items-center gap-3">
                <Users className="text-rose-500 w-6 h-6" />
                Talent Acquisition
              </h2>

              <div className="space-y-4">
                {careerBenefits.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="group flex w-full items-center p-6 bg-white border border-slate-300 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className={`p-5 rounded-xl mr-5 ${item.color}`}>{item.icon}</div>
                    <div>
                      <p className="font-aeonik font-normal text-[11px] font-semibold uppercase tracking-wider text-black">{item.label}</p>
                      <p className="font-aeonik font-normal font-semibold text-slate-700 group-hover:text-rose-600 transition-colors">{item.text}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="w-full p-7 bg-white border border-slate-300 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-3 text-slate-800">
                  <MapPin className="text-rose-500 w-5 h-5" />
                  <span className="font-aeonik font-normal font-semibold">Work Location</span>
                </div>
                <p className="font-aeonik font-normal text-sm leading-relaxed text-slate-500">
                  Pimpri, Pune, India. <br />
                  <span className="text-rose-600 font-medium mt-2 block underline">

                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Application Form */}
        <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-black/50">
          <div className="mb-8">
            <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase mb-2">Quick Application</h3>
            <p className="font-aeonik font-normal text-slate-400 text-sm">Tell us who you are and what you're passionate about.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-aeonik font-normal text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border font-aeonik font-normal border-slate-200 p-4 rounded-2xl focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="font-aeonik font-normal text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="yourname@example.com"
                  type="email"
                  className="w-full border font-aeonik font-normal border-slate-200 p-4 rounded-2xl focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-aeonik font-normal text-sm font-bold text-slate-700 ml-1">Position</label>
                <input
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Engineer"
                  className="w-full border font-aeonik font-normal border-slate-200 p-4 rounded-2xl focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="font-aeonik font-normal text-sm font-bold text-slate-700 ml-1">Portfolio/LinkedIn URL</label>
                <input
                  name="portfolio"
                  value={form.portfolio}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full border font-aeonik font-normal border-slate-200 p-4 rounded-2xl focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-aeonik font-normal text-sm font-bold text-slate-700 ml-1">About You / Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly describe your experience and why you want to join MST..."
                rows={4}
                className="w-full border font-aeonik font-normal border-slate-200 p-4 rounded-2xl focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500 outline-none transition-all resize-none"
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-red-500 text-white font-black py-5 rounded-2xl flex justify-center items-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-rose-500/20"
            >
              {loading ? (
                <div className="animate-spin h-6 w-6 border-4 border-white border-t-transparent rounded-full" />
              ) : (
                <>
                  Submit Application
                  <ArrowRight size={20} />
                </>
              )}
            </button>

            {success && (
              <div className="flex items-center justify-center gap-3 p-5 bg-green-50 border border-green-100 rounded-2xl text-green-700 font-bold">
                <FiCheckCircle className="w-5 h-5" />
                {success}
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}