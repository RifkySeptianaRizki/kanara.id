import { services } from "../../data/siteData";
import Reveal from "../ui/Reveal";

const BentoCard = ({ service, highlighted }) => {
  return (
    <div className={`relative flex flex-col justify-between rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 group
      ${highlighted 
        ? 'min-h-[420px] bg-gradient-to-br from-[#C8A96A]/30 to-[#8A7342]/10 border border-[#C8A96A]/40 shadow-[0_0_60px_rgba(200,169,106,0.15)] ring-1 ring-[#C8A96A]/50' 
        : 'min-h-[340px] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04]'
      }`}
    >
      {/* Noise overlay for highlighted card */}
      {highlighted && (
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      )}
      
      {/* Inner glow behind the highlighted card to push the aura */}
      {highlighted && (
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#C8A96A]/20 blur-[80px] pointer-events-none" />
      )}

      <div className="flex justify-between items-start relative z-10">
         <span className={`text-xs uppercase tracking-widest font-medium ${highlighted ? 'text-[#F7F2E8]' : 'text-[#A9A29A]'}`}>
           Layanan Kami
         </span>
         <span className={`text-3xl font-light ${highlighted ? 'text-[#F7F2E8]' : 'text-[#A9A29A] group-hover:text-[#C8A96A]'} transition-colors`}>
           ↗
         </span>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className={`text-2xl md:text-3xl font-medium tracking-tight mb-3 ${highlighted ? 'text-[#F7F2E8]' : 'text-[#A9A29A] group-hover:text-[#F7F2E8]'} transition-colors`}>
          {service.title}
        </h3>
        <p className={`text-sm leading-relaxed ${highlighted ? 'text-[#F7F2E8]/90' : 'text-[#A9A29A]/50 group-hover:text-[#A9A29A]/90'} transition-colors`}>
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[#050505] pt-4 pb-12 lg:pt-8 lg:pb-16 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
      
      {/* Deep Center Glow */}
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A96A]/[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="flex justify-center mb-6">
            <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold uppercase tracking-widest text-[#C8A96A] backdrop-blur-md">
              Layanan Kami
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-center text-[#F7F2E8] tracking-tight max-w-3xl mx-auto leading-tight">
            Layanan Pernikahan yang Dirancang <span className="text-[#C8A96A] italic">Sepenuh Hati</span>
          </h2>
          <p className="mt-6 text-center text-[#A9A29A] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Dari perencanaan menyeluruh hingga koordinasi di hari H, setiap layanan kami dirancang khusus untuk memastikan perayaan Anda berjalan tenang, elegan, dan tertata sempurna.
          </p>
        </Reveal>

        {/* Bento Grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:pt-16">
            <Reveal delay={0.1}>
              <BentoCard service={services[0]} />
            </Reveal>
            <Reveal delay={0.2}>
              <BentoCard service={services[3]} />
            </Reveal>
          </div>
          
          {/* Column 2 - Center Highlight */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.3}>
              <BentoCard service={services[1]} highlighted={true} />
            </Reveal>
            <Reveal delay={0.4}>
              <BentoCard service={services[4]} />
            </Reveal>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:pt-16">
            <Reveal delay={0.5}>
              <BentoCard service={services[2]} />
            </Reveal>
            <Reveal delay={0.6}>
              <BentoCard service={services[5]} />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
