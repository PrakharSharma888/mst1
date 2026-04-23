"use client";
import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  { q: "What is MST Blockchain?", a: "MST is a high-performance Layer-1 blockchain designed for institutional-grade security and sub-second finality." },
  { q: "Is MST secure?", a: "Yes. MST is built with a robust multi-layered architecture, including secure consensus mechanisms and regular smart contract audits to ensure maximum network and asset protection." },
  { q: "How do I create a wallet?",  a: "You can easily connect using MetaMask or any WalletConnect-supported wallet by adding MST network RPC details and switching to the MST network."},
  { q: "What makes MST different?", a: "MST stands out with its combination of high scalability, ultra-low transaction costs, and full EVM compatibility, enabling developers to build efficiently without compromising performance." },
  { q: "Can I build dApps on MST?", a: "Yes. MST fully supports Solidity and popular development tools like Hardhat and Foundry, allowing developers to seamlessly deploy and scale decentralized applications." },
  { q: "What is the transaction speed?", a: "MST delivers high throughput with fast block confirmations, enabling near real-time transaction processing suitable for scalable Web3 applications." },
  { q: "Gas fees?", a: "Transaction fees on MST are extremely low, making it ideal for frequent transactions, micro-payments, and large-scale decentralized applications." },
  { q: "Open source?", a: "Yes. MST promotes transparency by making its core infrastructure and tools accessible, allowing developers and contributors to explore and build within the ecosystem." },
  { q: "NFT support?", a: "MST supports widely adopted NFT standards like ERC-721 and ERC-1155, enabling seamless creation, transfer, and management of digital assets." },
];

export default function FAQSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [openIndex, setOpenIndex] = useState(null);

  const showMore = () => setVisibleCount((prev) => prev + 2);
  const showLess = () => setVisibleCount(4);

  return (
            
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      
      {/* Soft Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full" />
      
      <div className="max-w-4xl mx-auto relative z-0">
       
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
         

          <h2 className="bungee-regular text-3xl sm:text-4xl md:text-6xl leading-tight text-black font-extrabold uppercase">
            Frequently Asked{" "}
            <span className="text-red-600">Questions</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-800 text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know about the MST ecosystem. Can’t find it? Ask our community.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 sm:gap-4 items-start">
          
          {faqs.slice(0, visibleCount).map((item, i) => (
            <div 
              key={i} 
              className={`group transition-all duration-300 border rounded-xl sm:rounded-2xl p-4 sm:p-6 ${
                openIndex === i 
                ? 'bg-red-50 border-red-500 shadow-md' 
                : 'bg-white border-gray-200 hover:border-red-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left outline-none"
              >
                <span className={`font-semibold text-base sm:text-lg transition-colors ${
                  openIndex === i ? 'text-red-500' : 'text-black'
                }`}>
                  {item.q}
                </span>

                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-red-500' : 'text-gray-400'
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-col items-center">
          {visibleCount < faqs.length ? (
            <button
              onClick={showMore}
              className="px-8 py-4 bg-red-500 text-white text-sm font-semibold tracking-wide  rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg hover:bg-red-600"
            >
              Load More Questions
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-8 py-4 border border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              Show Less
            </button>
          )}

          <div className="mt-12 flex items-center gap-2 text-gray-500 text-sm">
            <MessageCircle className="w-4 h-4 text-red-500" />
            <span>
              Still stuck?{" "}
            <a href="https://buddy.mstblockchain.com/chat" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <button className="text-black font-medium hover:underline">
                Chat with us
              </button>
              </a>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}