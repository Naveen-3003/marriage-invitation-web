"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./invite.css";

import PinkBackground from "./components/PinkBackground";
import HeroSection from "./components/HeroSection";
import CoupleIntroSection from "./components/CoupleIntroSection";
import InviteParentsSection from "./components/InviteParentsSection";
import VenueSection from "./components/VenueSection";
import ConclusionSection from "./components/ConclusionSection";
import AudioPlayer from "../components/AudioPlayer";

export default function InvitePage() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPageReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="relative overflow-hidden invite-scroll-container"
      style={{
        background:
          "linear-gradient(180deg, #1a0510 0%, #0d0208 30%, #120510 60%, #0d0208 100%)",
      }}
    >
      {/* Audio Player */}
      <AudioPlayer />

      {/* Pink ambient background */}
      <PinkBackground />

      {/* Page Entrance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={pageReady ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 1. Hero — Couple Image */}
        <HeroSection />

        {/* 2. Couple Names + Date/Time */}
        <CoupleIntroSection />

        {/* 3. Parents Section */}
        <InviteParentsSection />

        {/* 4. Venue — Map + Address */}
        <VenueSection />

        {/* 5. Conclusion — Warm ending */}
        <ConclusionSection />
      </motion.div>
    </main>
  );
}
