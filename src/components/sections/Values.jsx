import { values } from "../../data/siteData";
import Reveal from "../ui/Reveal";

export default function Values() {
  return (
    <section className="relative bg-[#050505] py-24 lg:py-32">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.1] backdrop-blur-sm">
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent rounded-t-3xl" />

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C8A96A]/[0.08] text-[#C8A96A]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2.5 font-serif text-lg text-[#F7F2E8]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A9A29A]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
