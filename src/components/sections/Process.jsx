import { process as processSteps } from "../../data/siteData";
import Reveal from "../ui/Reveal";

export default function Process() {
  return (
    <section id="process" className="relative bg-[#050505] pt-4 pb-12 lg:pt-8 lg:pb-16 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C8A96A]/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header Section */}
        <Reveal>
          <div className="flex flex-col items-end text-right">
            <div className="flex justify-end mb-6">
              <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold uppercase tracking-widest text-[#C8A96A] backdrop-blur-md">
                Proses Kami
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#F7F2E8] tracking-tight max-w-4xl leading-tight">
              Dari <span className="text-[#C8A96A] italic">Percakapan Pertama</span> Hingga <span className="text-[#C8A96A] italic">Perayaan Sempurna</span>
            </h2>
            <p className="mt-6 text-[#A9A29A] max-w-2xl text-sm md:text-base leading-relaxed">
              Pendekatan langkah demi langkah yang terencana dengan baik untuk memastikan setiap detail diperhatikan dan setiap momen mengalir dengan indah.
            </p>
          </div>
        </Reveal>

        {/* Modern Clean Row-Based Timeline */}
        <div className="mt-20 flex flex-col">
          {processSteps.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group relative border-t border-white/[0.08] py-6 md:py-8 transition-colors hover:bg-white/[0.02] px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                  
                  {/* Number */}
                  <div className="md:col-span-2">
                    <span className="font-serif text-5xl md:text-6xl text-[#C8A96A]/40 group-hover:text-[#C8A96A] transition-colors duration-500">
                      {item.step}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="md:col-span-4 md:pt-4">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#F7F2E8] group-hover:text-[#C8A96A] transition-colors duration-500">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-6 md:pt-5">
                    <p className="text-[#A9A29A] text-sm md:text-base leading-relaxed group-hover:text-[#F7F2E8]/90 transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
          {/* Final bottom border */}
          <div className="border-t border-white/[0.08] mt-2" />
        </div>
        
      </div>
    </section>
  );
}
