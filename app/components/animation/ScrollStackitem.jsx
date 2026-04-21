
import * as React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { ArrowDown, Github, Instagram, Twitter, Menu } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
}

interface CardProps {
  section: Section;
  progress: MotionValue<number>;
  range: [number, number];
  index: number;
}

const SECTIONS: Section[] = [
  {
    id: '01',
    title: 'Alpine Echo',
    subtitle: 'High Altitude Serenity',
    description: 'Experience the crisp mountain air and the silence of the peaks. A journey through the highest reaches of the world.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000',
    color: 'bg-stone-900',
  },
  {
    id: '02',
    title: 'Oceanic Depth',
    subtitle: 'Abyssal Exploration',
    description: 'Descending into the deep blue. Discovering bioluminescent wonders and ancient coral structures hidden from sunlight.',
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=2000',
    color: 'bg-slate-900',
  },
  {
    id: '03',
    title: 'Neon Pulse',
    subtitle: 'Cybernetic Twilight',
    description: 'The heartbeat of the mega-city. Electric dreams and synthetic memories reflected in the rain-slicked asphalt.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2000',
    color: 'bg-zinc-900',
  },
  {
    id: '04',
    title: 'Solar Winds',
    subtitle: 'Cosmic Drift',
    description: 'Traversing the stars on tides of radiation. Gold dust and nebula clouds stretching into the infinite void.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000',
    color: 'bg-neutral-900',
  },
];

const Card: React.FC<CardProps> = ({ section, progress, range, index }) => {
  // Each card stays at the top. As we scroll further, it scales down slightly.
  const scale = useTransform(progress, range, [1, 1 - (SECTIONS.length - index) * 0.04]);
  const opacity = useTransform(progress, range, [1, 0.9]);
  
  return (
    <div className="h-screen sticky top-0 flex items-center justify-center -mt-[2vh]">
      <motion.div 
        id={`section-${section.id}`}
        style={{ scale, opacity }}
        className="card-grid relative w-full h-[600px] max-w-7xl mx-4 sm:mx-15 bg-[#1a1a1a] rounded-[4px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5 transition-transform"
      >
        {/* Left Side: Image */}
        <div id={`image-container-${section.id}`} className="relative h-full bg-[#2a2a2a] overflow-hidden">
          <img 
            src={section.image} 
            alt={section.title}
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
        </div>
        
        {/* Right Side: Content */}
        <div id={`content-container-${section.id}`} className="p-10 sm:p-20 flex flex-col justify-center bg-[#1a1a1a]">
          <div className="flex flex-col max-w-sm">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif italic text-sm text-white/50 mb-6"
            >
              Vol. 01 — Edition {section.id}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-[64px] font-bold leading-[0.95] tracking-[-0.04em] text-white mb-8"
            >
              {section.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>{word}{i % 2 === 0 ? <br /> : ' '}</React.Fragment>
              ))}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#E5E5E5]/70 text-base leading-[1.6] mb-12"
            >
              {section.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white group">
                Explore Narrative <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div className="bg-[#121212] font-sans selection:bg-white selection:text-[#121212] min-h-screen">
      {/* Navigation */}
      <nav id="main-nav" className="fixed top-0 left-0 w-full z-50 p-10 sm:p-15 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-3">
          <span className="font-sans font-black text-sm tracking-[0.2em] uppercase text-white">VANTAGE — EDITIONS</span>
        </div>
        
        <div className="flex items-center gap-12">
          <div className="hidden lg:flex gap-10 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60">
            <a href="#" className="hover:text-white transition-colors">Archive</a>
            <a href="#" className="hover:text-white transition-colors">Series</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
          </div>
          <button id="menu-trigger" className="group flex items-center gap-4 text-white">
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60">Menu</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden bg-[#121212]">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-white/30"
          >
            A Visual Monograph
          </motion.span>
          <h1 className="text-[10vw] font-bold leading-[0.85] tracking-tighter mb-12 uppercase text-white">
            Silent<br />Structures
          </h1>
          <div className="font-serif italic text-white/40 text-xl sm:text-2xl h-8 overflow-hidden">
             <motion.p
               animate={{ y: [0, -32, -64, -96, 0] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             >
                the arctic monolith
                <br />
                the abyssal rhythm
                <br />
                the urban pulse
                <br />
                the cosmic drift
             </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-12 flex flex-col items-center gap-4 z-10"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">Next Section ↓</span>
        </motion.div>
      </section>

      {/* Stacked Content */}
      <div ref={containerRef} id="stack-container" className="relative pb-20">
        {SECTIONS.map((section, index) => {
          return (
            <Card 
              key={section.id} 
              section={section} 
              index={index} 
              progress={scrollYProgress} 
              range={[index * (1 / SECTIONS.length), 1]}
            />
          );
        })}
      </div>

      {/* Refined Footer */}
      <footer id="main-footer" className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#1a1a1a] relative border-t border-white/5">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl sm:text-8xl font-bold tracking-tight mb-12 leading-[0.9] text-white">
              Vantage<br /><span className="text-white/20">Studio.</span>
            </h3>
            <p className="max-w-md text-[#E5E5E5]/40 mb-10 leading-relaxed font-light">
              Crafting minimal digital monographs and series that explore the intersection of brutalist architecture and organic forms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-4 bg-white text-black rounded-[4px] font-bold uppercase tracking-[0.2em] text-[9px] hover:bg-[#E5E5E5] transition-colors">
                Contact
              </button>
              <button className="px-10 py-4 border border-white/10 text-white rounded-[4px] font-bold uppercase tracking-[0.2em] text-[9px] hover:bg-white/5 transition-colors">
                Archive
              </button>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-20 lg:items-end">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
              <div className="flex flex-col gap-6">
                <span className="text-white/60">Edition</span>
                <p>Vol. 2026</p>
                <p>Issue 01</p>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-white/60">Journal</span>
                <a href="#" className="hover:text-white transition-colors">Latest</a>
                <a href="#" className="hover:text-white transition-colors">Essays</a>
              </div>
              <div className="flex flex-col gap-6 hidden sm:flex">
                <span className="text-white/60">Connect</span>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 lg:text-right">
              <span className="font-black text-6xl sm:text-8xl tracking-tight text-white/5 select-none uppercase">VANTAGE</span>
              <div className="font-serif italic text-[11px] tracking-wide text-white/20 flex flex-col lg:items-end gap-1">
                <p>© 2026 Vantage Collective</p>
                <p>All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>

        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-12 p-5 rounded-full border border-white/5 bg-[#121212] hover:bg-white hover:text-black transition-all flex items-center justify-center text-white"
        >
          <ArrowDown className="w-5 h-5 rotate-180" />
        </motion.button>
      </footer>
    </div>
  );
}
