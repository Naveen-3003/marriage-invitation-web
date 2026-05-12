"use client";

import "./invite.css";

import PinkBackground from "./components/PinkBackground";
import HeroSection from "./components/HeroSection";
import CoupleIntroSection from "./components/CoupleIntroSection";
import InviteParentsSection from "./components/InviteParentsSection";
import VenueSection from "./components/VenueSection";
import ConclusionSection from "./components/ConclusionSection";
import AudioPlayer from "../components/AudioPlayer";
import Countdown from "./components/Countdown";

export default function InvitePage() {
  return (
    <main
      className="relative invite-scroll-container"
      style={{
        background:
          "linear-gradient(180deg, #1a0510 0%, #0d0208 30%, #120510 60%, #0d0208 100%)",
      }}
    >
      {/* Audio Player */}
      <AudioPlayer />

      {/* Countdown Timer */}
      <Countdown />

      {/* Pink ambient background */}
      <PinkBackground />

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
    </main>
  );
}
