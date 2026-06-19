import { cn } from "../../lib/utils";
import { Check } from "lucide-react";
import { scrollToSection } from "../../lib/utils";

export default function PackageCard({
  title,
  description,
  features,
  price,
  cta,
  highlighted,
  index = 0,
  onOpenModal,
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-[2rem] p-6 lg:p-8 transition-all duration-300",
        "bg-[#111111]/80 backdrop-blur-2xl border border-white/[0.05]",
        highlighted ? "lg:-mt-4 lg:mb-[-16px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] ring-1 ring-[#C8A96A]/30" : "shadow-xl"
      )}
    >
      {/* Background Glow - Elegant Gold for all cards */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#C8A96A]/15 blur-[80px] pointer-events-none" />
      
      {/* Logo Watermark on the right */}
      <div className="absolute -right-12 -top-12 opacity-[0.06] pointer-events-none mix-blend-screen transition-transform duration-500 group-hover:scale-110">
        <img src="/logo.png" alt="" className="h-64 w-64 object-cover" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-8">
          {/* Small logo top left */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C8A96A]/[0.05] border border-[#C8A96A]/20 shadow-inner overflow-hidden">
            <img src="/logo.png" alt="logo" className="h-8 w-8 object-cover mix-blend-screen opacity-80" />
          </div>

          {highlighted && (
            <span className="rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 backdrop-blur-md px-3 py-1 text-[11px] tracking-wide text-[#C8A96A] uppercase font-medium">
              Most popular
            </span>
          )}
        </div>

        <h3 className="mb-3 font-serif text-2xl text-[#F7F2E8] tracking-wide">{title}</h3>
        <p className="mb-8 text-sm leading-relaxed text-[#A9A29A] min-h-[60px]">
          {description}
        </p>

        <div className="mb-6 flex items-baseline gap-1">
          {price === "Tersedia sesuai permintaan" ? (
             <span className="text-xl font-medium text-[#F7F2E8] tracking-wide">Custom Pricing</span>
          ) : (
            <span className="text-2xl font-medium text-[#F7F2E8] tracking-tight">{price}</span>
          )}
        </div>

          <button
            onClick={onOpenModal}
            className={cn(
              "mb-8 w-full rounded-2xl py-3.5 text-sm font-semibold transition-all duration-300",
              highlighted 
                ? "bg-gradient-to-r from-[#C8A96A] to-[#BFA77A] text-[#050505] hover:opacity-90 shadow-[0_8px_20px_rgba(200,169,106,0.3)]" 
                : "bg-white/[0.04] text-[#F7F2E8] hover:bg-white/[0.08] border border-white/[0.05]" 
            )}
          >
            Lihat Detail
          </button>

          <div className="w-full h-px bg-white/[0.05] mb-8 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] px-3 text-[9px] text-[#A9A29A]/60 tracking-[0.2em] uppercase whitespace-nowrap">
               {title} +
             </div>
          </div>

          <ul className="flex-1 space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#A9A29A]">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C8A96A]/20 border border-[#C8A96A]/30">
                  <Check size={10} className="text-[#C8A96A]" strokeWidth={3} />
                </div>
                <span className="leading-snug">{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}


