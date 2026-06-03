import { cn } from "../../lib/utils";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../../lib/utils";

export default function ServiceCard({ icon: Icon, title, description, cta }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-3xl p-7 transition-all duration-300",
        "bg-white/[0.03] border border-white/[0.08]",
        "hover:bg-white/[0.06] hover:border-[#C8A96A]/20",
        "backdrop-blur-xl"
      )}
    >
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent rounded-t-3xl" />

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96A]/10 text-[#C8A96A] transition-colors duration-300 group-hover:bg-[#C8A96A]/15">
        <Icon size={22} strokeWidth={1.5} />
      </div>

      <h3 className="mb-3 font-serif text-xl text-[#F7F2E8]">{title}</h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-[#A9A29A]">
        {description}
      </p>

      <button
        onClick={() => scrollToSection("contact")}
        className="inline-flex items-center gap-2 text-sm text-[#C8A96A] transition-all duration-300 hover:gap-3 cursor-pointer"
      >
        {cta}
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
