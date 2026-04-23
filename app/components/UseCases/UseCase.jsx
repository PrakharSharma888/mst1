"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useCases = [
  { id: "01", title: "On-Chain Certificate", desc: "Every certificate gets a unique fingerprint locked on the blockchain. Fraud becomes structurally impossible.", size: "tall", icon: "chain" },
  { id: "02", title: "NFT Ticketing", desc: "Every ticket is a unique on-chain asset. No fakes. No scalping. No lost entry. Real ownership for every fan.", size: "medium", icon: "building" },
  { id: "03", title: "Tokenized Real Estate", desc: "Real estate on MST blockchain — fractional, transparent, and permanently verifiable.", size: "small", icon: "droplet" },
  { id: "04", title: "Decentralized Voting", desc: "When votes live on the blockchain, results cannot be disputed, altered, or hidden.", size: "medium", icon: "shield" },
  { id: "05", title: "Healthcare Records", desc: "You control your medical records. Doctors get what they need instantly. MST is the secure bridge.", size: "tall", icon: "gamepad" },
  { id: "06", title: "Loyalty & Rewards", desc: "Loyalty tokens with real value. Transparent rules. No expiry surprises. Spend across any partner brand.", size: "small", icon: "fingerprint" },
  { id: "07", title: "Gaming Asset Ownership", desc: "Your sword. Your skin. Your character. Actually yours — on MST blockchain. Forever.", size: "medium", icon: "layers" },
  { id: "08", title: "Charity & Donations", desc: "Complete transparency in charitable giving. Donors watch their money reach its destination in real time.", size: "tall", icon: "leaf" },
  { id: "09", title: "Digital Identity & KYC", desc: "One MST verification. Trusted on every platform. Your data stays in your wallet.", size: "small", icon: "globe" },
  { id: "10", title: "Supply Chain Transparency", desc: "Complete supply chain visibility on MST. Every movement verified. Every record permanent.", size: "medium", icon: "briefcase" },
  { id: "11", title: "Education Credentials", desc: "Degrees that cannot be faked. Verified globally in seconds. Trusted forever.", size: "small", icon: "signal" },
  { id: "12", title: "Land Records", desc: "If it is on MST blockchain, it cannot be forged, duplicated, or disputed. Ever.", size: "tall", icon: "vote" },
  { id: "13", title: "Gold & Commodity Tokenization", desc: "The trust of gold. The accessibility of a wallet. The transparency of MST blockchain.", size: "medium", icon: "lock" },
  { id: "14", title: "Insurance Automation", desc: "MST smart contracts replace manual claims. When conditions are met, payment happens automatically.", size: "small", icon: "handshake" },
  { id: "15", title: "Freelance Marketplace", desc: "Work. Deliver. Get paid automatically. MST smart contracts replace informal trust in global freelancing.", size: "medium", icon: "umbrella" },
  { id: "16", title: "Carbon Credit Tracking", desc: "No double-counting. No greenwashing. Carbon offset claims that are actually mathematically provable.", size: "tall", icon: "diamond" },
  { id: "17", title: "Enterprise Workflow Automation", desc: "MST smart contracts replace slow manual approvals with automated workflows and instant audit trails.", size: "small", icon: "coins" },
  { id: "18", title: "Digital Asset Exchange", desc: "Trade on MST with confidence — non-custodial, instant settlement, and every transaction permanently verifiable.", size: "medium", icon: "clock" },
  { id: "19", title: "Decentralized Social Platforms", desc: "Your identity. Your content. Your community. All on MST blockchain. All permanently yours.", size: "tall", icon: "eye" },
];

const icons = {
  chain: <path d="M10 6H6a4 4 0 0 0 0 8h4M14 6h4a4 4 0 0 1 0 8h-4M8 12h8" />,
  building: <><path d="M3 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" /><path d="M15 21V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12" /><path d="M7 7h2M7 11h2M7 15h2" /></>,
  droplet: <path d="M12 2c0 0-7 7.5-7 12a7 7 0 0 0 14 0C19 9.5 12 2 12 2z" />,
  shield: <path d="M12 2l7 4v5c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z" />,
  gamepad: <><path d="M6 11h4M8 9v4" /><circle cx="15" cy="10" r="0.5" fill="currentColor" /><circle cx="17" cy="12" r="0.5" fill="currentColor" /><path d="M2 12a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" /></>,
  fingerprint: <><path d="M12 2a10 10 0 0 1 7 17" /><path d="M12 6a6 6 0 0 1 4.5 10" /><path d="M12 10a2 2 0 0 1 1.5 3.3" /><path d="M5 19a10 10 0 0 1-1-4" /><path d="M7.5 15A6 6 0 0 1 6 12" /></>,
  layers: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 12l10 5 10-5" /><path d="M2 17l10 5 10-5" /></>,
  leaf: <path d="M17 8C8 10 5.9 16.17 3.82 21.34M17 8A5 5 0 0 0 12 3c-5 0-8 4-8 8" />,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M2 12h20" /></>,
  signal: <><path d="M5 18v-4" /><path d="M9 18v-8" /><path d="M13 18V6" /><path d="M17 18v-10" /><path d="M21 18v-6" /></>,
  vote: <><path d="M20 6L9 17l-5-5" /><rect x="2" y="2" width="20" height="20" rx="2" /></>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  handshake: <><path d="M11 17l-1.5 1.5a2.12 2.12 0 0 1-3 0L4 16" /><path d="M20 8l-3-3-5.5 5.5" /><path d="M4 8l3-3 5.5 5.5" /><path d="M13 17l1.5 1.5a2.12 2.12 0 0 0 3 0L20 16" /></>,
  umbrella: <path d="M12 2v20M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12h20z" />,
  diamond: <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />,
  coins: <><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
  percent: <><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>,
};

// ... (keep the useCases and icons objects exactly as they are)

const sizeMap = {
  small: "min-h-[120px] sm:min-h-[140px]",
  medium: "min-h-[160px] sm:min-h-[190px]",
  tall: "min-h-[200px] sm:min-h-[250px]",
};

const Card = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    // Map titles to their exact folder names for routing
    const titleToFolder = {
      "On-Chain Certificate": "On-Chain-Certificate",
      "NFT Ticketing": "NFT-Ticketing",
      "Tokenized Real Estate": "Tokenized-Real-Estate",
      "Decentralized Voting": "Decentralized-Voting",
      "Healthcare Records": "Healthcare-Records",
      "Loyalty & Rewards": "Loyalty-Rewards",
      "Gaming Asset Ownership": "Gaming-Asset-Ownership",
      "Charity & Donations": "Charity-Donations",
      "Digital Identity & KYC": "Digital-Identity-KYC",
      "Supply Chain Transparency": "Supply-Chain-Transparency",
      "Education Credentials": "Education-Credentials",
      "Land Records": "Land-Records",
      "Gold & Commodity Tokenization": "Gold-Commodity-Tokenization",
      "Insurance Automation": "Insurance-Automation",
      "Freelance Marketplace": "Freelance-Marketplace",
      "Carbon Credit Tracking": "Carbon-Credit-Tracking",
      "Enterprise Workflow Automation": "Enterprise-Workflow-Automation",
      "Digital Asset Exchange": "Digital-Asset-Exchange",
      "Decentralized Social Platforms": "Decentralized-Social-Platforms"
    };
    if (titleToFolder[item.title]) {
      router.push(`/${encodeURIComponent(titleToFolder[item.title])}`);
      return;
    }
    // fallback to slug logic
    const slug = item.title.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
    router.push(`/usecase-pages/${slug}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border 
        p-4 sm:p-6 flex flex-col justify-end transition-all duration-500 ease-out
        ${sizeMap[item.size]}
        ${isHovered
          ? "bg-red-600 border-red-600 shadow-xl shadow-red-500/20 translate-y-[-4px]"
          : "bg-white border-zinc-200 shadow-sm"}
      `}
      style={{
        breakInside: "avoid",
        backgroundImage: !isHovered ? `url('/usecaselogos/${Number(item.id)}.png')` : 'none',
        backgroundSize: "60px",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
        borderColor: "black",
      }}
    >
      {/* Subtle Gradient Overlay for non-hover state to keep text readable */}
      {!isHovered && <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-80" />}

      {/* Small Icon - Top Right */}
      <div className={`absolute top-4 right-4 sm:top-7 sm:right-7 transition-all duration-500 ${isHovered ? "text-black scale-110 -rotate-12" : "text-zinc-300"}`}>
        <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {icons[item.icon]}
        </svg>
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col">
          <h3 className={`
            font-semibold leading-tight transition-colors duration-300
            ${isHovered ? "text-white text-sm" : "text-zinc-900 text-[13px]"}
            uppercase tracking-wider
          `}>
            {item.title}
          </h3>

          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-[11px] leading-relaxed mt-2 text-red-50 font-medium"
              >
                {item.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const UseCases = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-14 sm:py-18 md:py-24 min-h-screen relative overflow-hidden font-poppins">
      {/* Background Orbits (Keeping your existing orbit code but lowering opacity for professionalism) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {/* ... (Insert your existing Orbit motion.divs here) ... */}
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <header className="mb-10 sm:mb-14 md:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-600 font-bold tracking-[0.3em] text-xs uppercase mb-3 block"
          >
            Capabilities
          </motion.span>
          <h2 className="bungee-regular text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase">
            Use <span className="text-red-600">case</span>
          </h2>
        </header>

        {/* Masonry Layout with improved spacing */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4 md:gap-5 space-y-3 sm:space-y-4 md:space-y-5">
          {useCases.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;