'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  FiShield, FiCpu, FiLayers, FiGlobe,
  FiArrowRight, FiCheckCircle, FiLinkedin, FiCode
} from "react-icons/fi";

/** * DATA CONFIGURATION
 */
const stats = [
  { label: "Validators", value: "120+" },
  { label: "TPS", value: "100k+" },
  { label: "Global Nodes", value: "15" },
  { label: "Partners", value: "50+" },
];

const team = [
  {
    name: 'Pramod Borate',
    role: 'Chairman ,Founder & CEO',
    image:
      '/assets/Pramod Sir (2).png',
    bio:
      'He leads MST Blockchain with a strong focus on building a scalable, reliable, and user-centric blockchain ecosystem. He drives the vision across protocol development, product innovation, and ecosystem growth, ensuring MST remains production-ready and accessible for real-world adoption.',
    bio2:
      'Beyond his leadership role, Pramod is passionate about simplifying complex systems into practical solutions and actively mentors emerging builders in the Web3 space, helping them turn ideas into impactful products.',
    linkedinHandle: '@Pramod_Borate',
    linkedinHref: 'https://www.linkedin.com/in/pramod-borate?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  },
  {
    name: 'Swapnil Dere',
    role: 'Co founder',
    image:
      '/assets/Swapnil Sir.jpeg',
    bio:
      'He plays a key role in shaping MST Blockchain’s technical vision and system architecture, ensuring the platform is scalable, secure, and future-ready. He focuses on building a robust foundation that balances performance, reliability, and seamless composability for developers and users.',
    bio2:
      'Driven by precision and innovation, he is committed to delivering a developer-friendly ecosystem that supports continuous growth and real-world adoption.',
    linkedinHandle: '@swapnil_Dere',
    linkedinHref: '#'
  },
  {
    name: 'Kamlesh Nagware',
    role: 'Director',
    image:
      '/assets/Kamlesh Sir.jpg',
    bio:
      'He plays a crucial role in strengthening MST Blockchain’s security, reliability, and core infrastructure. He focuses on developing secure smart contract patterns and robust system primitives that enable teams to build confidently and efficiently on the MST ecosystem.',
    bio2:
      'Beyond development, he contributes by creating reference implementations, testing frameworks, and practical guides, turning best practices into scalable and repeatable development processe',
    linkedinHandle: '@kamlesh_Nagware',
    linkedinHref: 'https://www.linkedin.com/in/kamlesh-nagware-1456094b?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  },
  {
    name: 'Suresh Nair',
    role: 'COO',
    image:
      '/assets/nigelsir.jpeg',
    bio:
      'He oversees operations at MST Blockchain, ensuring a seamless alignment between product strategy, execution, and user experience. He plays a key role in shaping how builders and community members interact with the ecosystem,making MST intuitive, accessible, and efficient at every touchpoint.',
    bio2:
      'Driven by a vision of delivering a premium and user-centric experience, he ensures that every interaction within MST reflects quality, precision, and ease of use.',
    linkedinHandle: '@mst_Suresh',
    linkedinHref: '#'
  },
  {
    name: 'Kalika Mishra',
    role: 'CTO',
    image:
      '/assets/Kalika Sir.png',
    bio:
      'He leads the technology vision at MST Blockchain, driving the development of a scalable, secure, and high-performance blockchain infrastructure. She works across protocol engineering, system architecture, and integrations to ensure MST remains robust, efficient, and future-ready.',
    bio2:
      'Passionate about building cutting-edge systems, she is committed to advancing MST as a developer-friendly and production-grade Web3 ecosystem.',
    linkedinHandle: '@kalika_Prasad',
    linkedinHref: 'https://www.linkedin.com/in/kalika-prasad-mishra-036b27103?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  },
  {
    name: 'Ashish Kumar Jain',
    role: 'CMO',
    image:
      '/assets/Ashish Sir.jpeg',
    bio:
      'He leads the marketing vision at MST Blockchain, driving brand strategy, growth initiatives, and global outreach. He focuses on positioning MST as a trusted and innovative Web3 ecosystem, connecting technology with real-world adoption.',
    bio2:
      'Passionate about building impactful brands, he is committed to creating a premium, accessible, and growth-driven presence for MST in the global blockchain landscape.',
    linkedinHandle: '@Ashish_Kumar_Jain',
    linkedinHref: 'https://www.linkedin.com/in/c2ashish?utm_source=share_via&utm_content=profile&utm_medium=member_ios  '
  },

];

const advisors = [
  {
    name: 'Prasanna Lohar',
    role: 'Technical Advisor',
    image: '/assets/Prasanna Lohar.jpg',
    bio: 'He supports MST Blockchain by bringing deep technical insight and strategic direction to the platform’s development and ecosystem growth.',
    bio2: 'He focuses on strengthening the technical foundation, guiding architecture decisions, and ensuring scalability, security, and long-term sustainability of the blockchain infrastructure.',
    // linkedinHandle: '',
    // linkedinHref: '',
  },
  {
    name: 'Adv. Ishita Sharma',
    role: 'Legal Advisor',
    image: '/assets/Ishita.png',
    bio: 'Ishita Sharma advises MST Blockchain on legal frameworks, compliance strategy, and regulatory alignment within the evolving Web3 ecosystem.',
    bio2: 'Her expertise ensures that innovation is backed by strong legal foundations, enabling secure, compliant, and scalable growth across markets.'
    // linkedinHandle: '',
    // linkedinHref: '',
  },
];

const features = [
  {
    title: "Scalable Infrastructure",
    desc: "High-performance ecosystem that scales with global demand without compromising speed.",
    icon: <FiCpu className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Secure Transactions",
    desc: "Advanced multi-layered cryptography ensuring military-grade safety for every asset.",
    icon: <FiShield className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Developer Friendly",
    desc: "Comprehensive SDKs and documentation for building complex dApps in record time.",
    icon: <FiLayers className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Decentralized World",
    desc: "A truly permissionless environment for the next wave of DeFi and NFT innovation.",
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

            <p className="mt-8 text-gray-600 text-xl leading-relaxed max-w-xl">
              Redefining digital systems with speed, trust, and decentralization.
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
              text: "To democratize finance by creating a global, permissionless infrastructure that is lightning-fast and cost-effective.",
              icon: <FiCode className="w-10 h-10 text-red-500" />
            },
            {
              title: "Our Vision",
              text: "A world where digital ownership is absolute, and technology empowers individuals over centralized entities.",
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
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Designed for builders who require high-throughput and absolute reliability.</p>
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
        <div className="relative bg-[#1a1a1a] py-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.42em] text-white md:text-base">
            Meet the Core Team
          </p>
          <span className="pointer-events-none absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[16px] border-r-[16px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#1a1a1a]" />
        </div>


        <div className="mx-auto max-w-6xl">
          {team.map((member, idx) => (
            <div key={member.name} className="group border-b border-black/10">
              <div
                className={
                  `flex min-h-[440px] flex-col items-stretch md:flex-row ` +
                  (idx % 2 === 1 ? 'md:flex-row-reverse' : '')
                }
              >
                {/* Photo side */}
                <div className="relative w-full overflow-hidden h-48 sm:h-56 md:h-auto md:w-1/2 flex items-end md:block">
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 transition-opacity duration-500 group-hover:opacity-90 hidden md:block" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.10),transparent_55%)] transition-opacity duration-500 group-hover:opacity-70 hidden md:block" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain px-8 transition-transform duration-700 ease-out will-change-transform group-hover:-translate-y-1 group-hover:scale-[1.03] md:absolute md:inset-x-0 md:bottom-0 md:px-10"
                  />
                </div>

                {/* Content side */}
                <div className="flex w-full items-center bg-white px-7 py-10 md:w-1/2 md:px-12">
                  <div className="max-w-lg">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-red-600">
                      {member.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-black tracking-[0.12em] text-gray-800 md:text-3xl">
                      {member.name}
                    </h3>

                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600">
                      <p>{member.bio}</p>
                      <p>{member.bio2}</p>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href={member.linkedinHref}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1da1f2] text-white transition-transform hover:scale-105"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin />
                      </a>
                      <span className="text-xs font-black uppercase tracking-[0.22em] text-[#1da1f2]">
                        {member.linkedinHandle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ADVISORS () */}
      <section className="bg-gray-100 pb-7 md:pb-11">
        {/* <div className="relative bg-[#1a1a1a] py-4 text-center">
          <p className="text-sm font-black uppercase tracking-[0.42em] text-white md:text-base">
            Meet the Advisors
          </p>
          <span className="pointer-events-none absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[16px] border-r-[16px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#1a1a1a]" />
        </div> */}

        <div className="relative mx-auto max-w-7xl pt-6 md:pt-8">
          <div aria-hidden="true" className="pointer-events-none absolute bottom-4 left-1/2 top-6 hidden w-px -translate-x-1/2 bg-black/40 md:block md:top-8" />

          <div className="grid items-stretch md:grid-cols-2">
            {advisors.map((member, idx) => {
              const initials = member.name
                .split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map((part) => part[0].toUpperCase())
                .join('');

              return (
                <div
                  key={member.name}
                  className={
                    'group h-full py-0 ' +
                    (idx === 0
                      ? 'border-b border-black/10 md:border-b-0 md:pr-16'
                      : 'md:pl-16')
                  }
                >
                  <div
                    className={
                      'flex h-full min-h-[110px] flex-col items-stretch md:flex-row md:gap-2 ' +
                      (idx === 1 ? 'md:flex-row-reverse' : '')
                    }
                  >
                    {/* Photo side */}
                    <div className={
                      "relative w-full overflow-visible h-48 sm:h-56 md:h-full md:min-h-[240px] md:flex-[1.9] flex items-end md:block " +
                      (idx === 0 ? "md:-ml-8 lg:-ml-12" : "md:-mr-8 lg:-mr-12")
                    }>
                      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 transition-opacity duration-500 group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.10),transparent_55%)] transition-opacity duration-500 group-hover:opacity-70" />

                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className={
                            "w-full h-full object-contain px-0 transition-transform duration-700 ease-out will-change-transform group-hover:-translate-y-1 group-hover:scale-[1.03] md:absolute md:inset-x-0 md:bottom-0 " +
                            (idx === 1 ? "md:object-right" : "md:object-left")
                          }
                        />
                      ) : (
                        <div
                          className={
                            "absolute inset-0 flex items-center justify-center " +
                            (idx === 1 ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10")
                          }
                        >
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 text-xl font-black tracking-[0.12em] text-gray-700 shadow-sm ring-1 ring-black/10 transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03]">
                            {initials}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content side */}
                    <div className="flex h-full w-full items-start bg-white px-7 py-4 md:flex-[1.4] md:px-10">
                      <div className={"w-full max-w-none " + (idx === 0 ? "md:text-right" : "md:text-left")}
                      >
                        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-red-600">
                          {member.role}
                        </p>
                        <h3 className="mt-1 text-2xl font-black tracking-[0.12em] text-gray-800 md:text-3xl">
                          {member.name}
                        </h3>

                        <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-600">
                          <p>{member.bio}</p>
                          <p>{member.bio2}</p>
                        </div>

                        {/* No LinkedIn icon for advisors */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MST SECTION */}
      <section className="pt-24 pb-8">
        <div className="max-w-5xl mx-auto px-6 bg-gradient-to-br from-white to-red-50/30 border border-gray-100 rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-red-100/20">
          <h2 className="bungee-regular text-6xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase text-center mb-12">Why Builders Choose <span className="text-red-600">MST</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Lightning-fast (100k+ TPS)", "Near zero gas fees",
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