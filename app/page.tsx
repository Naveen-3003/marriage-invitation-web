"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import CloudHero from "./components/CloudHero";
import TempleSection from "./components/TempleSection";
import Birds from "./components/Birds";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const templeRef = useRef<HTMLDivElement>(null);

  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // Check if we are already in fullscreen. If not, show the guide.
    if (!document.fullscreenElement && typeof document.documentElement.requestFullscreen === 'function') {
      setShowGuide(true);
    }
  }, []);

  const handleFullscreenInteraction = () => {
    if (!document.fullscreenElement && typeof document.documentElement.requestFullscreen === 'function') {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Fullscreen error: ${err.message}`);
      });
    }
    setShowGuide(false); // Hide guide once they tap
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Global Parallax for sky background
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const handleScrollToTemple = () => {
    templeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden">
      {/* Fullscreen Interaction Guide Overlay */}
      {showGuide && (
        <div 
          onClick={handleFullscreenInteraction}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-white text-6xl mb-6"
          >
            👆
          </motion.div>
          <p className="text-white text-xl md:text-2xl tracking-[0.1em] text-center px-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Tap anywhere to view this page clearly
          </p>
        </div>
      )}

      {/* Global Background Sky */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-[150vh]">
        <motion.div 
          className="relative w-full h-full"
          style={{ y: skyY }}
        >
          <Image 
            src="/natural_sky.png" 
            alt="Natural Sky Background" 
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-10 w-full">
      <Birds count={8} />

      {/* Section 1: Cloud Sky + Wedding Invitation heading */}
      <CloudHero onScrollToTemple={handleScrollToTemple} />

      {/* Section 2: Temple emerging on scroll + entry interaction */}
      <TempleSection ref={templeRef} />
      </div>
    </main>
  );
}
