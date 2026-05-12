"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface ElementProps {
  id: number;
  type: "heart" | "rose";
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export default function RomanticBackground({ count = 35 }: { count?: number }) {
  const [elements, setElements] = useState<ElementProps[]>([]);

  useEffect(() => {
    // Generate initial elements
    const generated: ElementProps[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? "heart" : "rose",
      x: Math.random() * 100, // percentage for left
      y: -(Math.random() * 20 + 10), // start above screen
      size: Math.random() * 15 + 15, // px size (15 to 30)
      duration: Math.random() * 10 + 10, // 10-20s fall duration
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
    }));
    setElements(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Rose Light Ambient Background */}
      <motion.div 
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at 50% 50%, #e11d48 0%, transparent 60%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at 80% 20%, #be123c 0%, transparent 50%)"
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at 20% 80%, #f43f5e 0%, transparent 50%)"
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Falling Hearts and Roses */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          initial={{ 
            left: `${el.x}%`, 
            top: `${el.y}%`, 
            rotate: 0,
            opacity: 0 
          }}
          animate={{
            top: "110%",
            rotate: el.rotation + 360,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
            opacity: {
                times: [0, 0.1, 0.9, 1],
                duration: el.duration,
                repeat: Infinity,
                delay: el.delay
            }
          }}
          style={{ width: el.size, height: el.size }}
        >
          {el.type === "heart" ? (
            <Heart 
              color="#f43f5e" 
              fill="#e11d48" 
              size={el.size} 
              className="drop-shadow-[0_0_8px_rgba(225,29,72,0.6)]" 
            />
          ) : (
            <span 
              style={{ fontSize: `${el.size}px`, lineHeight: 1, display: "block" }}
              className="drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]"
            >
              🌹
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
