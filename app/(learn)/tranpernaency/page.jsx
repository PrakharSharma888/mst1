"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function TransparencyPage() {
  return (
    <main className="relative bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden pt-12">
      
      {/* --- BACKGROUND ORBITAL ANIMATIONS --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Orbit 1: Inner Solid Ring */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[10%] left-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap uppercase">Use Cases</span>
          </motion.div>
        </motion.div>

        {/* Orbit 2: Middle Dashed Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-500 to-red-200" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap uppercase">9+ Active Nodes</span>
          </motion.div>
        </motion.div>

        {/* Orbit 3: Outer Faint Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
          >
            <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap uppercase">POSA Consensus</span>
          </motion.div>
        </motion.div>

        {/* Small floating local elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-40"
        >
          <div className="w-16 h-16 border border-red-500/20 rounded-full" />
          <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="pt-28 md:pt-32 pb-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">
              Transparency You Can Verify <span className="text-red-500">Live on MST Chain</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Every coin, every wallet, every burn — verifiable on-chain in real time.
            </p>
            <button className="px-8 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 transition-all">
              Explore Transparency
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl"
          >
            <Image
              src="/transperancy/transparency.jpg"
              alt="Transparency hero"
              fill
              className="object-cover hover:scale-105 transition duration-700"
              priority
            />
          </motion.div>
        </section>

        {/* COIN SUPPLY */}
        <section className="py-28 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0 text-red-500">Coin Supply Overview</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">
                Building Trust Through Transparent Coin Supply
              </h2>
              <p className="text-gray-600 text-lg">
                The MST Blockchain provides a detailed breakdown of coin distribution across rewards,
                operations, and reserves. All data is verifiable on-chain.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Total Supply after latest burn", value: "8,401,387,459 MSTC" },
                { title: "Most Recent Burn", value: "41,996,612,502 MSTC" },
                { title: "Burn Address", value: "0x0000...0000" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                  <p className="text-gray-700 break-all">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WALLETS */}
        <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="bungee-regular text-2xl md:text-2xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0 text-red-500">Official Wallets</h3>
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">Every Major Wallet — Trackable</h2>
            <div className="p-6 bg-white/80 backdrop-blur-sm shadow-lg border rounded-2xl hover:shadow-xl transition-all">
              <h4 className="mb-2 font-semibold">Master Wallet</h4>
              <p className="text-gray-600 break-all text-sm">0xA93c8f6922159954E26C6C6011d3ED7dd166E25D</p>
            </div>
          </div>
          <div className="space-y-6">
            {["Reward Wallet", "Operational Wallet"].map((wallet, i) => (
              <div key={i} className="p-6 bg-white/80 backdrop-blur-sm shadow-lg border rounded-2xl hover:shadow-xl transition-all">
                <h4 className="mb-2 font-semibold">{wallet}</h4>
                <p className="text-gray-600 break-all text-sm">0x7a4d434E68E018e3679F64DeA4F0f02E20C6809</p>
              </div>
            ))}
          </div>
        </section>

        {/* TABLE */}
        <section className="py-24 px-6">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0 text-center">Live Node Status Table</h2>
          <div className="overflow-x-auto max-w-7xl mx-auto bg-white/50 backdrop-blur-md rounded-xl border border-gray-200">
            <table className="min-w-full">
              <thead className="bg-gray-100/80">
                <tr>
                  <th className="p-4 text-left">Validator</th>
                  <th className="p-4 text-left">Address</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50/50 transition-all">
                    <td className="p-4">Validator Node {idx}</td>
                    <td className="p-4 font-mono text-xs">0x152...2fqwd2</td>
                    <td className="p-4 text-green-600 font-medium">Active</td>
                    <td className="p-4"><button className="text-blue-600 hover:underline">View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center relative">
          <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase m-0 p-0">Verify Everything Yourself</h2>
          <p className="text-gray-600 mb-10 text-lg">Check all data directly on-chain using MST Explorer.</p>
          <a
            href="https://mstscan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-red-500 text-white rounded-xl shadow-xl hover:bg-red-600 hover:scale-105 transition"
          >
            Open MST Explorer
          </a>
        </section>
      </div>
    </main>
  );
}