"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email Us",
    text: "support@mstblockchain.com",
    href: "mailto:support@mstblockchain.com",
    color: "bg-blue-50 text-blue-600",
  },

];

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        })
      });

      const result = await response.json();
      console.log("Response:", result); // Log the response for debugging

      if (result.status === "success") {
        toast.success("Message sent successfully 🚀");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong: " + (result.message || "Unknown error") + (result.details ? "\nDetails: " + result.details : ""));
      }
    } catch (err) {
      console.error("Error:", err); // Log the error for debugging
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fcfcfd] text-slate-900 font-sans mt-12 overflow-hidden">
      {/* --- ORBITAL BACKGROUND --- */}
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
          <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus</span>
        </motion.div>
      </motion.div>

      {/* Floating element */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
      >
        <div className="w-16 h-16 border border-red-500/20 rounded-full" />
        <div className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
      </motion.div>

      {/* --- HERO --- */}
      <section className="pt-20 pb-12 px-6 text-center relative z-10">
        <span className="px-4 py-1 text-sm font-semibold text-red-600 bg-red-50 rounded-full">
          Support Center
        </span>
        <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mt-6">
          Let’s build the{" "}
          <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
            future
          </span>
        </h1>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto">
          Have a technical query or partnership idea? We’re here to help.
        </p>
      </section>

      {/* --- MAIN --- */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6 relative z-10">
        {/* LEFT */}
        <div className="flex flex-col gap-2 border-[1px] border-gray-200 shadow rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MessageCircle className="text-red-500" />
            Get in Touch
          </h2>

          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center p-6 bg-white rounded-2xl border-[1px] border-gray-200 shadow mb-4 hover:shadow-md"
            >
              <div className={`p-3 rounded-lg mr-4 ${item.color}`}>{item.icon}</div>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="font-medium">{item.text}</p>
              </div>
            </a>
          ))}

          <div className="bg-black text-white p-6 rounded-2xl border-[1px] border-gray-200 mb-2">
            <MapPin className="text-red-400 mb-2" />
            <p className="text-sm text-gray-300">
               Pune, India, 411018
            </p>
          </div>

          <a
            href="https://support.mstvalidator.com/portal/en/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-red-600 rounded-2xl border-[1px] border-gray-200 shadow mb-4 mt-4 hover:bg-red-700 transition-colors duration-300"
          >
            <FiCheckCircle className="text-white w-6 h-6 mr-3" />
            <div>
              <p className="text-xs text-white/80">Support Portal</p>
              <p className="font-medium text-white">Create a Ticket</p>
            </div>
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border-[1px] border-gray-200 shadow relative z-10">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border p-3 rounded-lg"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="border p-3 rounded-lg"
            />
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border p-3 rounded-lg md:col-span-2"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="border p-3 rounded-lg md:col-span-2"
            />
            <button
              disabled={loading}
              className="bg-red-600 text-white py-3 rounded-lg md:col-span-2 flex justify-center items-center gap-2 hover:bg-red-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}