'use client';

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader3D from "../components/about/SectionHeader3D";
import {
  FiShield, FiCpu, FiLayers, FiGlobe,
  FiArrowRight, FiCheckCircle, FiLinkedin, FiCode
} from "react-icons/fi";

/** * DATA CONFIGURATION
 */
const stats = [
  { label: "Validators", value: "70,000+" },
  { label: "TPS", value: "4000+" },
  { label: "Global Nodes", value: "21" },
  { label: "Avg Block Time", value: "3s" },
];

const team = [
  {
    name: 'Pramod Borate',
    role: 'Chairman ,Founder & CEO',
    image: '/assets/Pramod Sir (2).png',
    bio: 'He leads MST Blockchain with a strong focus on building a scalable, reliable, and user-centric blockchain ecosystem. He drives the vision across protocol development, product innovation, and ecosystem growth, ensuring MST remains production-ready and accessible for real-world adoption.',
    bio2: 'Beyond his leadership role, Pramod is passionate about simplifying complex systems into practical solutions and actively mentors emerging builders in the Web3 space, helping them turn ideas into impactful products.',
    linkedinHandle: '@Pramod_Borate',
    linkedinHref: 'https://www.linkedin.com/in/pramod-borate?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    designation: 'Chairman ,Founder & CEO'
  },
  {
    name: 'Swapnil Dere',
    role: 'Co founder',
    image: '/assets/Swapnil Sir.jpeg',
    bio: 'He plays a key role in shaping MST Blockchain’s technical vision and system architecture, ensuring the platform is scalable, secure, and future-ready. He focuses on building a robust foundation that balances performance, reliability, and seamless composability for developers and users.',
    bio2: 'Driven by precision and innovation, he is committed to delivering a developer-friendly ecosystem that supports continuous growth and real-world adoption.',
    linkedinHandle: '@swapnil_Dere',
    linkedinHref: '#',
    designation: 'Co founder'
  },
  {
    name: 'Mahendra Dhomase',
    role: 'Chief Financial Officer (CFO)',
    image: '/assets/Mahendra.jpeg',
    bio: 'He oversees the financial strategy and operations at MST Blockchain, ensuring sustainable growth, capital efficiency, and long-term value creation. He manages financial planning, investor relations, and regulatory compliance while aligning financial decisions with MST’s strategic vision.',
    bio2: 'With a strong focus on scaling Web3 ventures, he plays a key role in budgeting, fundraising, and risk management, helping position MST Blockchain as a financially resilient and growth-driven ecosystem.',
    linkedinHandle: '@Mahendra_Dhomase',
    linkedinHref: 'https://www.linkedin.com/in/mahendra-dhomase?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    designation: 'Chief Financial Officer'
  },
  {
    name: 'Kamlesh Nagware',
    role: 'Director',
    image: '/assets/Kamlesh sir.jpg',
    bio: 'He plays a crucial role in strengthening MST Blockchain’s security, reliability, and core infrastructure. He focuses on developing secure smart contract patterns and robust system primitives that enable teams to build confidently and efficiently on the MST ecosystem.',
    bio2: 'Beyond development, he contributes by creating reference implementations, testing frameworks, and practical guides, turning best practices into scalable and repeatable development processe',
    linkedinHandle: '@kamlesh_Nagware',
    linkedinHref: 'https://www.linkedin.com/in/kamlesh-nagware-1456094b?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    designation: 'Director'
  },
  {
    name: 'Suresh Nair',
    role: 'Chief Operating Officer (COO)',
    image: '/assets/nigelsir.jpeg',
    bio: 'He oversees operations at MST Blockchain, ensuring a seamless alignment between product strategy, execution, and user experience. He plays a key role in shaping how builders and community members interact with the ecosystem,making MST intuitive, accessible, and efficient at every touchpoint.',
    bio2: 'Driven by a vision of delivering a premium and user-centric experience, he ensures that every interaction within MST reflects quality, precision, and ease of use.',
    linkedinHandle: '@mst_Suresh',
    linkedinHref: '#',
    designation: 'Chief Operating Officer'
  },
  {
    name: 'Kalika Mishra',
    role: 'Chief Technology Officer (CTO)',
    image: '/assets/Kalika Sir.png',
    bio: 'He leads the technology vision at MST Blockchain, driving the development of a scalable, secure, and high-performance blockchain infrastructure. She works across protocol engineering, system architecture, and integrations to ensure MST remains robust, efficient, and future-ready.',
    bio2: 'Passionate about building cutting-edge systems, she is committed to advancing MST as a developer-friendly and production-grade Web3 ecosystem.',
    linkedinHandle: '@kalika_Prasad',
    linkedinHref: 'https://www.linkedin.com/in/kalika-prasad-mishra-036b27103?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    designation: 'Chief Technology Officer'
  },
  {
    name: 'Ashish Kumar Jain',
    role: 'Chief Marketing Officer (CMO)',
    image: '/assets/Ashish Sir.jpeg',
    bio: 'He leads the marketing vision at MST Blockchain, driving brand strategy, growth initiatives, and global outreach. He focuses on positioning MST as a trusted and innovative Web3 ecosystem, connecting technology with real-world adoption.',
    bio2: 'Passionate about building impactful brands, he is committed to creating a premium, accessible, and growth-driven presence for MST in the global blockchain landscape.',
    linkedinHandle: '@Ashish_Kumar_Jain',
    linkedinHref: 'https://www.linkedin.com/in/c2ashish?utm_source=share_via&utm_content=profile&utm_medium=member_ios  ',
    designation: 'Chief Marketing Officer'
  },
];

const advisors = [
  {
    name: 'Prasanna Lohar',
    role: 'Technical Advisor',
    image: '/assets/Prasanna Lohar.jpg',
    bio: 'He supports MST Blockchain by bringing deep technical insight and strategic direction to the platform’s development and ecosystem growth.',
    bio2: 'He focuses on strengthening the technical foundation, guiding architecture decisions, and ensuring scalability, security, and long-term sustainability of the blockchain infrastructure.',
    designation: 'Technical Advisor'
  },
  {
    name: 'Adv. Ishita Sharma',
    role: 'Legal Advisor',
    image: '/assets/ishita.png',
    bio: 'Ishita Sharma advises MST Blockchain on legal frameworks, compliance strategy, and regulatory alignment within the evolving Web3 ecosystem.',
    bio2: 'Her expertise ensures that innovation is backed by strong legal foundations, enabling secure, compliant, and scalable growth across markets.',
    designation: 'Legal Advisor'
  },
];

const features = [
  {
    title: "Scalable Infrastructure",
    desc: "MST is a Layer 1 blockchain that runs on its own dedicated network. As the ecosystem grows, the chain keeps up. More users, more transactions and the same smooth performance throughout.",
    icon: <FiCpu className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Secure Transactions",
    desc: "Every transaction on MST is validated by a distributed network of nodes working together. Think of it as a team of record keepers where no single entry can ever be faked or changed",
    icon: <FiShield className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Developer Friendly",
    desc: "Clean APIs, proper documentation, and ready to use testing environments. We built MST so developers can go from idea to live product without spending weeks on setup and configuration.",
    icon: <FiLayers className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Decentralized World",
    desc: "MST is not controlled by one company or server. It runs on a global network of node operators and developers all working together. That shared ownership makes the network stronger and more reliable over time.",
    icon: <FiGlobe className="text-red-500 w-6 h-6" />,
  },
];

/** * ANIMATION VARIANTS
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const AboutUs = () => {
  return (
    <div className="bg-[#fffaff] text-gray-900 selection:bg-red-100 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Animated Background Orbits */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] border border-red-200/50 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 -right-1/4 w-[70%] h-[70%] border border-pink-200/50 rounded-full border-dashed"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 mb-8 sm:mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full">
              POWERING THE DECENTRALIZED FUTURE
            </span>
            <h1 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">MST Blockchain</span>
            </h1>

            <p className="mt-8 text-gray-600 text-xl leading-relaxed max-w-2xl">
              Redefining digital systems with speed, trust, and decentralization. We provide the robust, high-performance infrastructure needed to power the next generation of global decentralized economies.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center h-full w-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-[2.5rem] opacity-20 blur-2xl animate-pulse hidden sm:block" />
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-none aspect-[4/3] sm:aspect-[5/3] md:aspect-[16/7] md:h-[450px] md:w-full md:col-span-1 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center md:items-stretch md:justify-stretch mx-auto md:mx-0">
              <img
                src="https://images.unsplash.com/photo-1669060475569-a7e0c78bce30?q=80&w=1032&auto=format&fit=crop"
                alt="blockchain"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                style={{ aspectRatio: 'inherit' }}
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* 2. STATS SECTION */}
      <section className="px-4 sm:px-6 mt-2 sm:mt-0 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/90 backdrop-blur-2xl border border-white p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[3rem] shadow-2xl shadow-gray-200/50">
          {stats.map((item, i) => (
            <div key={i} className="text-center lg:border-r last:border-0 border-gray-100 py-2">
              <h3 className="text-4xl font-black text-gray-900">{item.value}</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Mission",
              text: "We are here to make blockchain practical. Not just for crypto enthusiasts or expert developers, but for any business or person who wants a reliable digital network they can actually use. MST gives developers the tools to build faster, gives businesses infrastructure they can trust, and gives everyday users a secure place to participate in the growing Web3 world.",
              icon: <FiCode className="w-10 h-10 text-red-500" />
            },
            {
              title: "Our Vision",
              text: "We see a future where digital systems are open, transparent, and built on trust. MST is working to connect traditional technology with decentralized networks so neither world has to compromise. Our goal is to build a global platform where developers and companies can create the next generation of digital services, services that are fast, fair, and built to last.",
              icon: <FiGlobe className="w-10 h-10 text-red-500" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-12 rounded-[3rem] bg-white border border-gray-100 hover:border-red-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="bungee-regular text-3xl md:text-3xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">{item.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FEATURES (CORE INFRASTRUCTURE) */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="bungee-regular text-4xl md:text-4xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">Core <span className="text-red-600">Infrastructure</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Every part of MST is built to handle real workloads. Here is what makes the network work the way it does.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-4 text-gray-900">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. MEET THE TEAM (SCREENSHOT-STYLE) */}
      <section className="bg-gray-100">
        <div className="pt-24 pb-16 px-6 text-center">
          <h2 className="bungee-regular text-5xl md:text-7xl leading-tight tracking-tight text-black font-extrabold uppercase mb-8">
            The People Behind MST
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            These are the people building MST from the ground up. Each one brings something different to the table and together they are shaping what blockchain infrastructure looks like for the next decade.
          </p>
        </div>

        {/* 5. THE ARCHITECTS SECTION */}
        <SectionHeader3D title="THE ARCHITECTS" subtitle="Founding Visionaries" />

        <div className="mx-auto max-w-7xl px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 gap-16 md:gap-32">
            {team.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Component with Hover Parallax */}
                <div className="relative group w-full md:w-1/2 aspect-square max-w-[400px] lg:max-w-[500px] mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-full w-full overflow-hidden rounded-[3rem] border border-gray-200 bg-white p-4 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    <motion.img
                      whileInView={{ scale: [0.95, 1], filter: ["grayscale(50%)", "grayscale(0%)"] }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.8 }}
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-contain md:grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Floating Role Badge */}
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 md:right-0 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-2xl z-20 transform md:rotate-3 md:group-hover:rotate-0 transition-transform">
                    {/* <p className="text-[10px] font-black uppercase tracking-[0.3em] leading-none mb-1">Position</p> */}
                    <p className="text-xs md:text-sm font-bold">{member.role}</p>
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full md:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="inline-block text-red-600 font-black text-xs tracking-[0.4em] uppercase"
                    >
                      {member.designation}
                    </motion.span>
                    <h3 className="bungee-regular text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight">
                      {member.name.split(' ')[0]}{' '}
                      <span className="text-red-600">{member.name.split(' ').slice(1).join(' ')}</span>
                    </h3>
                  </div>

                  <div className="space-y-6 text-gray-500 text-lg leading-relaxed max-w-xl">
                    <p className="font-medium text-gray-900">{member.bio}</p>
                    <p>{member.bio2}</p>
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <a
                      href={member.linkedinHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-gray-900 no-underline"
                    >
                      <div className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <FiLinkedin className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Connect</span>
                        <span className="text-sm font-bold">{member.linkedinHandle}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Render Advisors in the same flow */}
            {advisors.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-16 ${ (team.length + idx) % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Component */}
                <div className="relative group w-full md:w-1/2 aspect-square max-w-[400px] lg:max-w-[500px] mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-full w-full overflow-hidden rounded-[3rem] border border-gray-200 bg-white p-4 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    <motion.img
                      whileInView={{ scale: [0.95, 1], filter: ["grayscale(50%)", "grayscale(0%)"] }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.8 }}
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-contain md:grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Floating Role Badge */}
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 md:right-0 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-2xl z-20 transform md:rotate-3 md:group-hover:rotate-0 transition-transform">
                    <p className="text-xs md:text-sm font-bold">{member.role}</p>
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full md:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="inline-block text-red-600 font-black text-xs tracking-[0.4em] uppercase"
                    >
                      {member.designation}
                    </motion.span>
                    <h3 className="bungee-regular text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight">
                      {member.name.split(' ')[0]}{' '}
                      <span className="text-red-600">{member.name.split(' ').slice(1).join(' ')}</span>
                    </h3>
                  </div>

                  <div className="space-y-6 text-gray-500 text-lg leading-relaxed max-w-xl">
                    <p className="font-medium text-gray-900">{member.bio}</p>
                    <p>{member.bio2}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MST SECTION */}
      <section className="pt-24 pb-8">
        <div className="max-w-5xl mx-auto px-6 bg-gradient-to-br from-white to-red-50/30 border border-gray-100 rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-red-100/20">
          <h2 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase text-center mb-12">Why Builders Choose <span className="text-red-600">MST</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Lightning-fast (4000+ TPS)", "Near zero gas fees",
              "EVM Compatible", "Enterprise grade security",
              "24/7 Developer Support", "Growing global ecosystem"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-1 rounded-full">
                  <FiCheckCircle className="text-green-600" />
                </div>
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-gray-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20 -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full blur-[150px] opacity-10 -ml-32 -mb-32" />

          <div className="relative z-10">
            <h2 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-white font-extrabold uppercase">Ready to <span className="text-red-600">Build</span> <br />the <span className="text-red-600">Future?</span></h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of developers and visionaries building on the world's most scalable blockchain protocol.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://t.me/mstblockchain"
                rel="noopener noreferrer"
                target="_blank">
                <button className="bg-blue-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-400 transition-all shadow-xl shadow-blue-900/40 text-lg">
                  Join our Telegram
                </button>
              </a>
              <a href="https://whatsapp.com/channel/0029Vb6jTUk0VycBIjCEe11x"
                rel="noopener noreferrer"
                target="_blank">
                <button className="bg-green-600 text-white border border-white/20  px-8 py-3 rounded-2xl font-semibold hover:bg-green-500 shadow-xl shadow-green-900/40 transition-all backdrop-blur-md text-lg">
                  Join Our Community
                </button></a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutUs;