import { ctaSection } from "../../data/siteData";
import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <section className="relative bg-[#050505] -pt-23 pb-4 lg:pt-1 lg:pb-30 overflow-hidden border-t border-b border-white/[0.04]">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8A96A]/[0.025] rounded-full blur-[100px] pointer-events-none translate-y-1/2 translate-x-1/2" />

      {/* Wide Container */}
      <div className="relative mx-auto w-full max-w-none px-6 md:px-12 lg:px-20 xl:px-24">
        
        <div className="w-full">
          {/* Huge Title */}
          <Reveal>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-medium text-[#F7F2E8] tracking-tight leading-[1.1] text-justify w-full">
              Kami percaya karya <span className="text-[#C8A96A] italic">terbaik</span> lahir dari <span className="text-[#C8A96A] italic">kolaborasi</span>, <span className="text-[#C8A96A] italic">kepercayaan</span>, dan pemahaman <span className="text-[#C8A96A] italic">mendalam</span> antara tim dan klien
            </h2>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
