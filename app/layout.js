"use client";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import MstBuddy from "./components/MstBuddy/BuddyPanel";
import Footer from "./components/footer/Footer";
// import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <MstBuddy/>
        <Footer />
      </body>
    </html>
  );
}
