import { useState, useEffect } from "react";
import { hero } from "../../data/siteData";
import { scrollToSection } from "../../lib/utils";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Sparkles from "../ui/Sparkles";
import CursorParticles from "../ui/CursorParticles";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SynchronizedAnimatedWords = () => {
  const [tick, setTick] = useState(0); // 0 to 12
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting) {
      if (tick < 12) {
        timeout = setTimeout(() => setTick((t) => t + 1), 200); // Slower typing speed
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 4000); // Pause when fully typed
      }
    } else {
      if (tick > 0) {
        timeout = setTimeout(() => setTick((t) => t - 1), 100); // Slower deleting speed
      } else {
        timeout = setTimeout(() => setIsDeleting(false), 1500); // Pause when empty
      }
    }
    return () => clearTimeout(timeout);
  }, [tick, isDeleting]);

  const word1 = "Tenang";
  const word2 = "Elegan";
  
  const length1 = Math.min(tick, 6);
  const length2 = Math.max(0, tick - 6);

  return (
    <>
      <span className="italic text-[#C8A96A] inline-flex items-center relative">
        <span>
          {word1.split("").map((char, index) => (
            <span key={index} style={{ visibility: index < length1 ? "visible" : "hidden" }}>
              {char}
            </span>
          ))}
        </span>
        {/* Show cursor on word1 if typing/deleting word1 */}
        {(tick < 6 || (isDeleting && tick <= 6 && tick > 0)) && (
          <span 
            className="animate-pulse w-[3px] h-[0.9em] bg-[#C8A96A] absolute" 
            style={{ left: `calc(${(length1 / word1.length) * 100}% + 2px)` }}
          />
        )}
      </span>
      {" "}
      <br className="hidden sm:block" /> 
      dan{" "}
      <span className="italic text-[#C8A96A] inline-flex items-center relative">
        <span>
          {word2.split("").map((char, index) => (
            <span key={index} style={{ visibility: index < length2 ? "visible" : "hidden" }}>
              {char}
            </span>
          ))}
        </span>
        {/* Show cursor on word2 if typing/deleting word2 */}
        {(tick >= 6 && tick <= 12) && (
          <span 
            className="animate-pulse w-[3px] h-[0.9em] bg-[#C8A96A] absolute" 
            style={{ left: `calc(${(length2 / word2.length) * 100}% + 2px)` }}
          />
        )}
      </span>
    </>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center overflow-hidden bg-[#050505] pt-28 md:pt-30 lg:pt-30 pb-10 px-6"
    >
      {/* Background Glows & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top center glow — warm champagne */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96A]/[0.15] blur-[120px]" />
        
        {/* Sparkles Effect */}
        <Sparkles count={50} />
      </div>

      {/* Cursor Particle Trail */}
      <CursorParticles color="#C8A96A" count={20} />

      {/* Main Content Text */}
      <div className="relative z-20 flex w-full max-w-4xl flex-col items-center text-center">
        <Reveal delay={0.2}>
          <h1 className="mb-6 font-serif text-5xl leading-[1.2] text-[#F7F2E8] sm:text-6xl lg:text-7xl drop-shadow-lg">
            Pernikahan yang <SynchronizedAnimatedWords />
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-[#A9A29A] sm:text-lg drop-shadow-md mx-auto italic">
            {hero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#C8A96A] to-[#BFA77A] px-6 py-2.5 text-sm font-medium text-[#050505] transition-all hover:scale-105"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="flex items-center gap-2">
                {hero.ctaPrimary}
                <ArrowRight size={14} />
              </span>
            </button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection("services")}
            >
              {hero.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Large Hero Mockup Image (Animated) */}
      <motion.div
        className="relative z-10 mt-8 w-full max-w-6xl mx-auto perspective-[1000px]"
        initial={{ y: 100, opacity: 0, rotateX: 10 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
      >
        {/* Enhanced back-glow for the mockup */}
        <div className="absolute left-1/2 top-0 h-[300px] w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[#C8A96A]/30 blur-[120px]" />
        
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-black/40 backdrop-blur-md shadow-[0_-20px_120px_rgba(200,169,106,0.25)] ring-1 ring-white/10">
          {/* Top glowing border line effect */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96A]/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-[30px] bg-gradient-to-b from-[#C8A96A]/20 to-transparent blur-md" />

          {/* Abstract Mockup Top Bar */}
          <div className="flex h-12 items-center gap-2 border-b border-white/[0.04] bg-white/[0.02] px-6">
            <div className="-ml-2 h-3 w-3 rounded-full bg-white/[0.1] hover:bg-red-500/50 transition-colors" />
            <div className="h-3 w-3 rounded-full bg-white/[0.1] hover:bg-yellow-500/50 transition-colors" />
            <div className="h-3 w-3 rounded-full bg-white/[0.1] hover:bg-green-500/50 transition-colors" />
            <div className="ml-2 flex h-6 flex-1 items-center justify-center rounded-md bg-white/[0.03] text-[10px] text-white/30 font-medium tracking-widest">
              kanarawedding.com
            </div>
          </div>

          {/* The main hero image representing the service */}
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src="/hero-image.jpg"
              alt="Kanara Wedding Experience"
              className="h-full w-full object-cover opacity-70"
            />
            {/* Overlay gradient so it fades out at the bottom if needed, or just keep it clean */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Partner Logos Marquee (Left to Right) */}
      <div className="relative z-10 mt-12 w-full overflow-hidden py-8">
        {/* Gradients for fading edges */}
        <div className="absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
        
        <motion.div
          className="flex w-max items-center pr-16 md:pr-24"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {/* Duplicate the list twice to create a seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
              {["VOGUE", "THE RITZ-CARLTON", "BVLGARI", "FOUR SEASONS", "HARPER'S BAZAAR", "ST. REGIS", "KEMPINSKI"].map((brand, index) => (
                <span key={index} className="font-serif text-lg md:text-xl tracking-[0.2em] text-[#A9A29A]/40 transition-colors hover:text-[#C8A96A]">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
