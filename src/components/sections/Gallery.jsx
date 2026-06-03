import { gallery } from "../../data/siteData";
import Reveal from "../ui/Reveal";
import { cn } from "../../lib/utils";

const scatterStyles = [
  "-rotate-6 -translate-x-2 md:-rotate-3 md:translate-y-4 md:translate-x-0 z-10",
  "-mt-16 rotate-3 translate-x-6 md:mt-0 md:rotate-2 md:-translate-y-2 md:translate-x-0 z-20",
  "-mt-24 -rotate-3 -translate-x-4 md:mt-0 md:-rotate-2 md:translate-y-6 md:translate-x-0 z-30",
  "-mt-20 rotate-6 translate-x-4 md:mt-0 md:rotate-3 md:-translate-y-4 md:translate-x-0 z-40",
  "-mt-16 -rotate-2 -translate-x-6 md:mt-0 md:-rotate-2 md:translate-y-2 md:translate-x-0 z-[45]",
  "-mt-16 rotate-3 translate-x-2 md:mt-0 md:rotate-2 md:-translate-y-6 md:translate-x-0 z-50",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#050505] min-h-screen pt-8 pb-24 md:pt-16 md:pb-32 overflow-hidden flex flex-col justify-center">
      
      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="font-serif text-[25vw] md:text-[28vw] leading-none text-[#C8A96A] opacity-[0.15] tracking-tighter mix-blend-screen whitespace-nowrap">
          Gallery
        </h2>
      </div>

      {/* Decorative Scribble / Signature */}
      <div className="absolute bottom-10 right-6 md:bottom-20 md:right-20 pointer-events-none text-[#C8A96A] opacity-30 z-0">
        <svg width="250" height="100" viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,80 Q50,20 80,60 T140,50 T220,90" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M70,30 Q90,90 120,40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M160,20 Q170,80 190,30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-6 lg:px-12 w-full">
        
        {/* Restored Header Section */}
        <Reveal>
          <div className="flex justify-center mb-6 mt-12 md:mt-0">
            <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold uppercase tracking-widest text-[#C8A96A] backdrop-blur-md">
              Galeri
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-center text-[#F7F2E8] tracking-tight max-w-4xl mx-auto leading-tight">
            Arahan <span className="text-[#C8A96A] italic">Visual</span> & Referensi <span className="text-[#C8A96A] italic">Mood</span>
          </h2>
          <p className="mt-6 text-center text-[#A9A29A] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Kumpulan referensi estetika dan mood yang menjadi inspirasi kami. Foto portfolio asli akan segera hadir.
          </p>
        </Reveal>

        {/* Scattered Gallery Images */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-0 md:gap-8 lg:gap-12 mt-24 md:mt-20">
          {gallery.slice(0, 6).map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className={cn(
                "group relative w-[240px] md:w-[220px] lg:w-[280px] transition-all duration-700 hover:scale-110 hover:z-50 cursor-pointer",
                scatterStyles[index]
              )}>
                
                {/* Photo Print Style */}
                <div className="bg-[#E5E5E5] p-2 md:p-3 shadow-2xl rounded-3xl">
                  <div className="relative aspect-[3/4] overflow-hidden bg-black rounded-2xl">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 h-full w-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100" 
                      loading="lazy" 
                    />
                  </div>
                </div>

                {/* Tiny Floating Text */}
                {index % 2 === 0 ? (
                  <div className="absolute -bottom-8 -right-8 w-24 text-left pointer-events-none hidden md:block">
                    <p className="text-[#C8A96A]/60 text-[7px] uppercase tracking-widest leading-tight">
                      When we are clear about things, we find truth.
                    </p>
                  </div>
                ) : (
                  <div className="absolute -top-8 -left-8 w-24 text-right pointer-events-none hidden md:block">
                    <p className="text-[#C8A96A]/60 text-[7px] uppercase tracking-widest leading-tight">
                      The search is rewarded.
                    </p>
                  </div>
                )}
                
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
