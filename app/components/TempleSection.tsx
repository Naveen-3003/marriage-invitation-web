"use client";

import { useRef, useState, useCallback, forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TempleSection = forwardRef<HTMLDivElement>(function TempleSection(_, ref) {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isEntering, setIsEntering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Camera scroll down parallax (sky to land)
  const templeY = useTransform(scrollYProgress, [0, 0.4], [300, 0]);
  const templeScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7],
    [0.85, 1, 1.05]
  );
  
  // Fog and light rays opacity
  const atmosphereOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const handleEnterTemple = useCallback(() => {
    if (isEntering) return;
    setIsEntering(true);
    setTimeout(() => {
      router.push("/invite");
    }, 1500);
  }, [isEntering, router]);

  return (
    <div ref={ref}>
      <div
        ref={sectionRef}
        className="relative min-h-[100vh] md:min-h-[100vh] w-full"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-end relative">
          
          {/* Transition overlay on enter */}
          {isEntering && (
            <motion.div
              className="fixed inset-0 z-[100] pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Blur and flash */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 1] }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </motion.div>
          )}





          {/* Temple image */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-10 w-full flex justify-center"
            style={{
              y: templeY,
              scale: templeScale,
              bottom: "-2%",
            }}
          >
            <motion.div
  className="relative 
             w-[140vw] 
             h-[90vh] 
             sm:w-[450px] sm:h-[500px] 
             md:w-[600px] md:h-[650px] 
             lg:w-[800px] lg:h-[800px] 
             flex justify-center items-end cursor-pointer"
              onClick={handleEnterTemple}
              animate={
                isEntering
                  ? {
                      scale: [1, 3.5],
                      filter: ["blur(0px)", "blur(8px)"],
                      y: [0, 150], // Moving towards door
                    }
                  : {}
              }
              transition={
                isEntering
                  ? { duration: 1.4, ease: [0.4, 0, 0.2, 1] }
                  : {}
              }
            >
              {/* Click instruction text */}
              <motion.div
                className="absolute top-[15%] sm:top-[5%] text-center z-30 w-full pointer-events-none md:hidden"
                animate={isEntering ? { opacity: 0 } : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p 
                  className="text-4xl text-[#2d4a22] drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]"
                  style={{ fontFamily: "var(--font-cursive)" }}
                >
                  Click the temple to enter
                </p>
              </motion.div>

              {/* Desktop click instruction text */}
              <motion.div
                className="absolute top-[-5%] text-center z-30 w-full pointer-events-none hidden md:block"
                animate={isEntering ? { opacity: 0 } : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p 
                  className="text-5xl text-[#2d4a22] drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]"
                  style={{ fontFamily: "var(--font-cursive)" }}
                >
                  Click the temple to enter
                </p>
              </motion.div>

              {/* Lord Murugan Image (Behind Temple) */}
              <div className="absolute top-[20%] sm:top-[12%] md:top-[8%] left-0 w-full h-[90%] sm:h-[100%] z-10 pointer-events-none">
                <Image
                  src="/murugan.png"
                  alt="Lord Murugan"
                  fill
                  className="object-contain object-top opacity-95 drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Temple Image */}
              <Image
                src="/temple.png"
                alt="South Indian Temple Gopuram"
                fill
                className="object-contain object-bottom drop-shadow-2xl relative z-20 pointer-events-none"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Side Trees (Foreground frame) */}
          <motion.div
             className="block absolute left-[-45%] w-[70%] sm:left-[-10%] sm:w-[60%] md:w-[40%] bottom-[-5%] sm:bottom-[-7%] h-[70%] sm:h-[80%] z-[15] pointer-events-none opacity-90 mix-blend-multiply"
             style={{ y: useTransform(scrollYProgress, [0, 0.5], [100, 0]) }}
          >
            <Image src="/side_trees.png" alt="Trees left" fill className="object-contain object-left-bottom animate-wind" />
          </motion.div>

          <motion.div
             className="block absolute right-[-45%] w-[70%] sm:right-[-10%] sm:w-[60%] md:w-[40%] bottom-[-5%] sm:bottom-[-7%] h-[70%] sm:h-[80%] z-[15] pointer-events-none opacity-90 mix-blend-multiply scale-x-[-1]"
             style={{ y: useTransform(scrollYProgress, [0, 0.5], [100, 0]) }}
          >
            <Image src="/side_trees.png" alt="Trees right" fill className="object-contain object-left-bottom animate-wind" />
          </motion.div>



          {/* "Enter Temple" CTA button */}
          

        </div>
      </div>
    </div>
  );
});

export default TempleSection;
