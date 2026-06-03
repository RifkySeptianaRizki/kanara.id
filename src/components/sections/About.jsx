import { about } from "../../data/siteData";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-[#050505] pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C8A96A]/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-12">
        {/* Top small label */}
        <Reveal>
          <div className="flex justify-start mb-6">
            <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold uppercase tracking-widest text-[#C8A96A] backdrop-blur-md">
              Tentang Kami
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start">
          
          {/* Left — Huge Headline */}
          <div className="w-full lg:w-[60%]">
            <Reveal delay={0.2}>
              <h2 className="font-serif text-[10vw] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] uppercase tracking-tight">
                <span className="block text-[#F7F2E8] pb-1">Partner Anda</span>
                <span className="block text-[#F7F2E8] pb-1">Dalam Mewujudkan</span>
                <span className="block text-[#C8A96A] mt-2 whitespace-nowrap">
                  <span className="inline-block mr-2 md:mr-4 font-sans font-light tracking-normal">→</span>
                  Perayaan Yang
                </span>
                <div className="flex flex-wrap items-center gap-3 lg:gap-4 mt-2">
                  <span className="text-[#C8A96A]">Bermakna</span>
                  <div className="relative h-12 w-20 sm:h-16 sm:w-28 md:h-20 md:w-32 lg:h-24 lg:w-40 overflow-hidden rounded-[1rem] shrink-0 inline-block align-middle shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" 
                      className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" 
                      alt="Kanara Wedding Detail" 
                    />
                  </div>
                </div>
              </h2>
            </Reveal>
          </div>

          {/* Right — Copy */}
          <div className="w-full lg:w-[35%] lg:mt-4">
            <div className="space-y-6">
              {about.paragraphs.map((paragraph, index) => {
                // Apply the special arrow styling to the final paragraph
                if (index === about.paragraphs.length - 1) {
                  return (
                    <Reveal key={index} delay={0.4}>
                      <p className="text-xs md:text-sm leading-[1.8] text-[#A9A29A] uppercase tracking-[0.1em] font-medium">
                        <span className="text-[#C8A96A]">→ HASILNYA? </span>
                        {paragraph}
                      </p>
                    </Reveal>
                  );
                }
                
                return (
                  <Reveal key={index} delay={0.2 + (0.1 * index)}>
                    <p className="text-xs md:text-sm leading-[1.8] text-[#A9A29A] uppercase tracking-[0.1em]">
                      {paragraph}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
