'use client';

import dynamic from 'next/dynamic';

const Lanyard = dynamic(() => import('../components/Lanyard/Lanyard'), { ssr: false });

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const team = [
    { id: 1, title: 'OM', year: '2024', type: 'CORE', role: 'WEB DEV', name: 'OM ', img: '/assets/teams/om_animated.png', hoverImg: '/assets/teams/om.jpeg' },
    { id: 2, title: 'ajay', year: '2024', type: 'CORE', role: 'WEB DEV', name: 'AJAY ', img: '/assets/teams/ajayAnimated.png', hoverImg: '/assets/teams/ajay.jpeg' },
    { id: 3, title: 'datta', year: '2024', type: 'CORE', role: 'Designer', name: 'datta ', img: '/assets/teams/dattaanimated.png', hoverImg: '/assets/teams/datta.jpeg' },
    { id: 4, title: 'apurva', year: '2024', type: 'CORE', role: 'Devloper', name: 'Apurva ', img: '/assets/teams/appsAnimated.png', hoverImg: '/assets/teams/apps.jpeg' },
    { id: 5, title: 'smita', year: '2024', type: 'CORE', role: 'Devloper', name: 'smita ', img: '/assets/teams/smitaAnimated.png', hoverImg: '/assets/teams/smita.jpeg' },
    { id: 5, title: 'PULSE', year: 'CYBER', type: 'ESPORTS', role: 'NEON', name: 'VIRTUAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNwB9riItzhnx2IQCrH5woB9xOnauSFSCfNDgIYB18n9zEAjPx2FR15BO2a297yYb6Rv3vWqGppP9Jzq2ciDcXJ8pNrTAKIZe5G5I0ZFRH-2pBDKxdiecOdY0X9YuPAcMPfFXVZyT234HSEFHy5484cKQ3SJfGWAM5QZCX8OubZuXRLDnJmzy276WjkixR3buLPqpf1oLLyfibFhoBYjrTpCBx1yuig1KK1jGZtJECy1BLn19dNPYrI-s8KHK32jnov87GHGgQHO9R' },
    { id: 6, title: 'RACE', year: '2023', type: 'CHAMPIONSHIP', role: 'PRO SPEC', name: 'HANS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq3MgU7KVqSWL_bQ8ITLYFSaZ37nWf2NnhGC9mJym6S8oeLkkdpU1n0Sa4t5Ut2nfKcPpKOa7ViGqOkhYh3pz4_sZ-sDJBUPKRKB7MYuWal21ir8HJ1cyhVE6mLEaS5PAu7P6cfw2r0vKWMlcrf7dj0FGKfQUpkUEWE-U1BYur_U4WRsQzReaj_ASeX9oKzg1D8g24D3wdVYe9laYkzRXYq-aVLsjgqeQuVsd2ND229v9dzaBmJ1O1xAw0BToZ_ndVPRzBO1j9FnqO' },
    { id: 7, title: 'RAW', year: 'WEAVE', type: 'COMPOSITE', role: '6K WEAVE', name: 'ULTRALIGHT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxajFC4D1t9pFvPg25szC_BHyoQ_5hR0yNCfACLiyT0eH77-IryhClNEDuYsQHiF1uzxntPsVflfIQ61VbcEC8EYdMDqTrg2rPryWwlW4y2lJG_t_llsDGbzeHQnOkr1EgMTPYwBxi-U8RDATM1onWeWqC9LY5wS-a83FFKvW5ST6JkC8qIzCuSyfhWIETw23mCqfStFYAsvq6GfFYU_5E7anClZvjRDNl7S3liKQrRmswNvLZydB6OgW4GWeW3EjxtNxSGrqESokp' },
    { id: 8, title: 'CIRCUIT', year: 'NEON', type: 'HIGH-VIS', role: 'IRIDIUM', name: 'DAYLIGHT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR2l53cAqOqpEZ2ORP7v5-07hflg16NiF9CmxOVYCinb8YuHzNPgtVRs79GEEvSMhpdLCjp6_PQGU1hT0QZj5hodK5oYyYDI0lYB1gZOsjqxuVOiWVf35JpOyqmODLtoygi_VRH4kooRsuqOmNGcTkeMuI93Z2Wd5b2C2MQKRa_a6xCKT2VQwklqgPnY-PJmIgr6rXzNCM25xptbPuP78Tmm7OagIsH8YAOQn7bgjOimSj7n5BX_qKKsV7Ptps6z2-1xjnxqsRMRlF' },
    { id: 9, title: 'CORE', year: 'WHITE', type: 'BASE LAYER', role: 'FIBERGLASS', name: 'STUDIO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJIo_RwGLsfXiNgURgjTDb6C7PRbJJojR5Dj1q7dGwvgV5LMH4YTZ5rn13yk7MXrqtPZkhbvOu5oOKsJHShk5dcYHSaC0oa17mD110SSeAJWrQ1YyusPNYEP7gpeOAxD7O4YpZ6jVZATWdA_C_TRSOAhM_pm3s1GqFq3o4xGPz-SwfoAJaSsK8z7k1kXj8n4W9vMy-SuTZIaV5vwRIsk-1T1G_qdR-T7RA5vHBEs2Vv2R5k3ePoJuZ38f2_2wKjdrHuRQFhSCjoSb' },
    { id: 10, title: 'SILVER', year: 'SURGE', type: 'LAB SERIES', role: 'MIRROR', name: 'S-CLASS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUcaLV5w5FZfhsB-gi3TpFOMZzeoorVm5A3v2vlwM-lgGzbdWYuzIiQQUu6aHG5XG5-g60zQkQflXAKxc7LAT_Pqm5C29YBT8-2XlWfCBfPetl6wK727E__QBiiCZ7MHqC-8lIZWeYHOi61z-jVFNX8qa7U-QqtNkU05WxKO0i-r4RvI43hwNDYyCL1MWih89-zFUJXP1I8faghOFrESQkNLYegkuB_1AnBLK9JpksD_pmX1KZEJ0ujrVb5ETU08wz2hwiskDJSInl' },
    { id: 11, title: 'PHANTOM', year: 'ONE', type: 'BASE LAYER', role: 'CARBON', name: 'STUDIO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkjPrWK9UejxgSicj16Kxi46DQ4gOPRkUlaFbAoVRl8QgubpbuvgcgMKOBcyzv99_4DEqCl7i7UhP_7tOKVd4lpnTLHFfUXi1LLpw1_jamr6YZ6NQ2gvoKzSYBPuT-NjFIbLN5HNNUH6HA17TXEjwKdlredKHxTCQ_Vb_pgLq5Vzc1BYqfnp1cJcpw9J8a70ndqmhY2BiGSEqDj5YueWCgOxLGILV2Wd603BF7JzBb-i9oiGsGBbMOHn16XFGVhnrSIB7hoE96d_JD' },
    { id: 12, title: 'AUREUM', year: 'MX', type: 'ROYAL', role: 'GOLD', name: 'LTD', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRVjBgumfIEXNzq9nCBQGDe4mdilTu30I3uXKWHKArXHqTITRGyhbjrXuIlRjyuCiGUiaTs4KGseg0gQi6xTp0dTPMkOyFt6WMIaPcIBRZ0_52iFvRFliEzXn4_he1OrqXHz9AyH97zZgWVECkAIZyyO4ie6W68FMpOMfogF5591SwHwo1evDSUy6-sAfyygddRH9PWH08v-6rxwPQrvVxVazsswrrtD3ycOkGKlpRwsgqk2ENzktubi9-_evP2vJvIFIAA66_Ig71' },
    { id: 13, title: 'CYBER', year: 'WAVE', type: 'ESPORTS', role: 'NEON', name: 'VIRTUAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNwB9riItzhnx2IQCrH5woB9xOnauSFSCfNDgIYB18n9zEAjPx2FR15BO2a297yYb6Rv3vWqGppP9Jzq2ciDcXJ8pNrTAKIZe5G5I0ZFRH-2pBDKxdiecOdY0X9YuPAcMPfFXVZyT234HSEFHy5484cKQ3SJfGWAM5QZCX8OubZuXRLDnJmzy276WjkixR3buLPqpf1oLLyfibFhoBYjrTpCBx1yuig1KK1jGZtJECy1BLn19dNPYrI-s8KHK32jnov87GHGgQHO9R' },
    { id: 14, title: 'PRO', year: 'FLIGHT', type: 'AERO', role: 'CARBON', name: 'RACING', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq3MgU7KVqSWL_bQ8ITLYFSaZ37nWf2NnhGC9mJym6S8oeLkkdpU1n0Sa4t5Ut2nfKcPpKOa7ViGqOkhYh3pz4_sZ-sDJBUPKRKB7MYuWal21ir8HJ1cyhVE6mLEaS5PAu7P6cfw2r0vKWMlcrf7dj0FGKfQUpkUEWE-U1BYur_U4WRsQzReaj_ASeX9oKzg1D8g24D3wdVYe9laYkzRXYq-aVLsjgqeQuVsd2ND229v9dzaBmJ1O1xAw0BToZ_ndVPRzBO1j9FnqO' },
    { id: 15, title: 'VOID', year: 'CARBON', type: 'COMPOSITE', role: 'STEALTH', name: 'NIGHT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxajFC4D1t9pFvPg25szC_BHyoQ_5hR0yNCfACLiyT0eH77-IryhClNEDuYsQHiF1uzxntPsVflfIQ61VbcEC8EYdMDqTrg2rPryWwlW4y2lJG_t_llsDGbzeHQnOkr1EgMTPYwBxi-U8RDATM1onWeWqC9LY5wS-a83FFKvW5ST6JkC8qIzCuSyfhWIETw23mCqfStFYAsvq6GfFYU_5E7anClZvjRDNl7S3liKQrRmswNvLZydB6OgW4GWeW3EjxtNxSGrqESokp' },
    { id: 16, title: 'NEON', year: 'STRIKE', type: 'HIGH-VIS', role: 'IRIDIUM', name: 'RACE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR2l53cAqOqpEZ2ORP7v5-07hflg16NiF9CmxOVYCinb8YuHzNPgtVRs79GEEvSMhpdLCjp6_PQGU1hT0QZj5hodK5oYyYDI0lYB1gZOsjqxuVOiWVf35JpOyqmODLtoygi_VRH4kooRsuqOmNGcTkeMuI93Z2Wd5b2C2MQKRa_a6xCKT2VQwklqgPnY-PJmIgr6rXzNCM25xptbPuP78Tmm7OagIsH8YAOQn7bgjOimSj7n5BX_qKKsV7Ptps6z2-1xjnxqsRMRlF' },
    { id: 17, title: 'ZENITH', year: 'X', type: 'GP', role: 'CARBON', name: 'SUZUKA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJIo_RwGLsfXiNgURgjTDb6C7PRbJJojR5Dj1q7dGwvgV5LMH4YTZ5rn13yk7MXrqtPZkhbvOu5oOKsJHShk5dcYHSaC0oa17mD110SSeAJWrQ1YyusPNYEP7gpeOAxD7O4YpZ6jVZATWdA_C_TRSOAhM_pm3s1GqFq3o4xGPz-SwfoAJaSsK8z7k1kXj8n4W9vMy-SuTZIaV5vwRIsk-1T1G_qdR-T7RA5vHBEs2Vv2R5k3ePoJuZ38f2_2wKjdrHuRQFhSCjoSb' },
    { id: 18, title: 'TITAN', year: 'GLOSS', type: 'LAB', role: 'MIRROR', name: 'REFLECTIVE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUcaLV5w5FZfhsB-gi3TpFOMZzeoorVm5A3v2vlwM-lgGzbdWYuzIiQQUu6aHG5XG5-g60zQkQflXAKxc7LAT_Pqm5C29YBT8-2XlWfCBfPetl6wK727E__QBiiCZ7MHqC-8lIZWeYHOi61z-jVFNX8qa7U-QqtNkU05WxKO0i-r4RvI43hwNDYyCL1MWih89-zFUJXP1I8faghOFrESQkNLYegkuB_1AnBLK9JpksD_pmX1KZEJ0ujrVb5ETU08wz2hwiskDJSInl' },
    { id: 19, title: 'DARK', year: 'FORCE', type: 'MIDNIGHT', role: 'CARBON', name: 'NIGHT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkjPrWK9UejxgSicj16Kxi46DQ4gOPRkUlaFbAoVRl8QgubpbuvgcgMKOBcyzv99_4DEqCl7i7UhP_7tOKVd4lpnTLHFfUXi1LLpw1_jamr6YZ6NQ2gvoKzSYBPuT-NjFIbLN5HNNUH6HA17TXEjwKdlredKHxTCQ_Vb_pgLq5Vzc1BYqfnp1cJcpw9J8a70ndqmhY2BiGSEqDj5YueWCgOxLGILV2Wd603BF7JzBb-i9oiGsGBbMOHn16XFGVhnrSIB7hoE96d_JD' },
    { id: 20, title: 'ELITE', year: 'GOLD', type: 'ROYAL', role: '24K', name: 'LTD', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRVjBgumfIEXNzq9nCBQGDe4mdilTu30I3uXKWHKArXHqTITRGyhbjrXuIlRjyuCiGUiaTs4KGseg0gQi6xTp0dTPMkOyFt6WMIaPcIBRZ0_52iFvRFliEzXn4_he1OrqXHz9AyH97zZgWVECkAIZyyO4ie6W68FMpOMfogF5591SwHwo1evDSUy6-sAfyygddRH9PWH08v-6rxwPQrvVxVazsswrrtD3ycOkGKlpRwsgqk2ENzktubi9-_evP2vJvIFIAA66_Ig71' },
    { id: 21, title: 'GRID', year: 'RUNNER', type: 'ESPORTS', role: 'VIRTUAL', name: 'NEON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNwB9riItzhnx2IQCrH5woB9xOnauSFSCfNDgIYB18n9zEAjPx2FR15BO2a297yYb6Rv3vWqGppP9Jzq2ciDcXJ8pNrTAKIZe5G5I0ZFRH-2pBDKxdiecOdY0X9YuPAcMPfFXVZyT234HSEFHy5484cKQ3SJfGWAM5QZCX8OubZuXRLDnJmzy276WjkixR3buLPqpf1oLLyfibFhoBYjrTpCBx1yuig1KK1jGZtJECy1BLn19dNPYrI-s8KHK32jnov87GHGgQHO9R' },
    { id: 22, title: 'TEAM', year: 'ZERO', type: 'PRO', role: 'CARBON', name: 'RACING', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq3MgU7KVqSWL_bQ8ITLYFSaZ37nWf2NnhGC9mJym6S8oeLkkdpU1n0Sa4t5Ut2nfKcPpKOa7ViGqOkhYh3pz4_sZ-sDJBUPKRKB7MYuWal21ir8HJ1cyhVE6mLEaS5PAu7P6cfw2r0vKWMlcrf7dj0FGKfQUpkUEWE-U1BYur_U4WRsQzReaj_ASeX9oKzg1D8g24D3wdVYe9laYkzRXYq-aVLsjgqeQuVsd2ND229v9dzaBmJ1O1xAw0BToZ_ndVPRzBO1j9FnqO' },
    { id: 23, title: 'VOID', year: 'MX', type: 'MX', role: 'CARBON', name: 'CROSS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxajFC4D1t9pFvPg25szC_BHyoQ_5hR0yNCfACLiyT0eH77-IryhClNEDuYsQHiF1uzxntPsVflfIQ61VbcEC8EYdMDqTrg2rPryWwlW4y2lJG_t_llsDGbzeHQnOkr1EgMTPYwBxi-U8RDATM1onWeWqC9LY5wS-a83FFKvW5ST6JkC8qIzCuSyfhWIETw23mCqfStFYAsvq6GfFYU_5E7anClZvjRDNl7S3liKQrRmswNvLZydB6OgW4GWeW3EjxtNxSGrqESokp' },
    { id: 24, title: 'CIRCUIT', year: '2024', type: 'GP', role: 'NEON', name: 'SUZUKA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR2l53cAqOqpEZ2ORP7v5-07hflg16NiF9CmxOVYCinb8YuHzNPgtVRs79GEEvSMhpdLCjp6_PQGU1hT0QZj5hodK5oYyYDI0lYB1gZOsjqxuVOiWVf35JpOyqmODLtoygi_VRH4kooRsuqOmNGcTkeMuI93Z2Wd5b2C2MQKRa_a6xCKT2VQwklqgPnY-PJmIgr6rXzNCM25xptbPuP78Tmm7OagIsH8YAOQn7bgjOimSj7n5BX_qKKsV7Ptps6z2-1xjnxqsRMRlF' },
    { id: 25, title: 'APEX', year: 'ONE', type: 'PRO', role: 'CARBON', name: 'RACING', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJIo_RwGLsfXiNgURgjTDb6C7PRbJJojR5Dj1q7dGwvgV5LMH4YTZ5rn13yk7MXrqtPZkhbvOu5oOKsJHShk5dcYHSaC0oa17mD110SSeAJWrQ1YyusPNYEP7gpeOAxD7O4YpZ6jVZATWdA_C_TRSOAhM_pm3s1GqFq3o4xGPz-SwfoAJaSsK8z7k1kXj8n4W9vMy-SuTZIaV5vwRIsk-1T1G_qdR-T7RA5vHBEs2Vv2R5k3ePoJuZ38f2_2wKjdrHuRQFhSCjoSb' },
];

export default function TeamsPage() {
    const [activeMemberId, setActiveMemberId] = useState(null);

    const toggleActiveMember = (id) => {
        if (window.innerWidth < 1024) {
            setActiveMemberId(activeMemberId === id ? null : id);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Inter'] selection:bg-[#d2f000] selection:text-black overflow-x-hidden relative">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Space+Grotesk:wght@300;400;500;600;700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </Head>

            <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .helmet-card {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #000;
          background: #fdfdfd;
          /* Notch shape using clip-path */
          clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% calc(100% - 40px), 
            calc(100% - 140px) calc(100% - 40px), 
            calc(100% - 140px) 100%, 
            0% 100%
          );
        }
        .helmet-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 140px;
          height: 40px;
          border-left: 1px solid #000;
          border-top: 1px solid #000;
          background: transparent;
          pointer-events: none;
          z-index: 20;
        }
        .helmet-card:hover {
          background: #fff;
          transform: translateY(-5px);
        }
      `}</style>

            {/* Theme Background Orbits */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
            <main className="relative z-10 pt-32 pb-24 px-10 max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div className="mb-12 border-l-4 border-red-600 pl-6">
                    <h1 className="bungee-regular text-6xl md:text-7xl font-bold text-zinc-900 uppercase leading-[1.1] tracking-[-0.04em]">Meet Our <span className="text-red-600">Team</span> </h1>
                    <p className="text-lg text-zinc-600 max-w-2xl mt-4">
                        <span className='text-red-600 bungee-regular'>Core Contributors:</span> The driving forces behind the MST Ecosystem.
                    </p>
                </div>

                {/* Hero / Filter Box */}
                <div className="w-full h-[500px] p-10 rounded-lg mb-12 flex items-center justify-center relative overflow-hidden">
                    {/* Background Image with Opacity */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: "url('/assets/lanyard/nodes.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center-bottom',
                            backgroundRepeat: 'no-repeat',
                            // opacity: 0.5
                        }}
                    />

                    <div className="absolute inset-0 z-10 pointer-events-auto">
                        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} transparent={true} />
                    </div>
                </div>

                {/* Helmet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {team.map((helmet) => (
                        <motion.div
                            key={helmet.id}
                            onClick={() => toggleActiveMember(helmet.id)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (helmet.id % 5) * 0.1 }}
                            className={`helmet-card group relative aspect-[4/5] bg-zinc-100 border border-black overflow-hidden ${activeMemberId === helmet.id ? 'mobile-active' : ''}`}
                        >
                            {/* Normal Image */}
                            <img
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out lg:group-hover:opacity-0 ${activeMemberId === helmet.id ? 'opacity-0' : 'opacity-100'}`}
                                src={helmet.img}
                                alt={helmet.title}
                            />
                            {/* Hover Image */}
                            <img
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-110 ${activeMemberId === helmet.id ? 'opacity-100 scale-110' : ''}`}
                                src={helmet.hoverImg || helmet.img}
                                alt={helmet.title + " hover"}
                            />
                            {/* Notch Label (Visible Always) */}
                            <div className="absolute bottom-0 right-0 w-[140px] h-[40px] flex items-center justify-center px-4 z-30">
                                <p className="font-['Bungee'] text-[11px] font-bold text-zinc-900 tracking-[0.02em] whitespace-nowrap">
                                    <span className="capitalize">{helmet.title.toLowerCase()}</span> <span className="text-zinc-400 ml-1">{helmet.year}</span>
                                </p>
                            </div>

                            <div className={`absolute bottom-[25px] left-0 w-full p-6 translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ${activeMemberId === helmet.id ? 'translate-y-0' : ''}`}>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="font-['Bungee'] text-[10px] font-bold text-[#FF2D2D] tracking-[0.1em]">{helmet.role}</p>
                                        <p className="font-['Bungee'] text-[10px] font-bold text-zinc-900 tracking-[0.1em] uppercase">{helmet.name}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
