"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/audio-for-web.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Attempt auto-play on load
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      console.log("Autoplay prevented by browser policy");
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => console.log("Playback failed"));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#1A0A0A]/80 backdrop-blur-md rounded-full border border-[#D4A853]/50 flex items-center justify-center text-[#D4A853] hover:bg-[#D4A853] hover:text-[#1A0A0A] transition-colors shadow-[0_0_20px_rgba(212,168,83,0.3)] group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
      
      {/* Ripple effect when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border border-[#D4A853] animate-[ping_2s_ease-in-out_infinite] opacity-50" />
      )}
    </motion.button>
  );
}
