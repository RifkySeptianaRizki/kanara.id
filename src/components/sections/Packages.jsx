import { packages, packagesNote } from "../../data/siteData";
import PackageCard from "../ui/PackageCard";
import Reveal from "../ui/Reveal";

export default function Packages() {
  return (
    <section id="packages" className="relative bg-[#050505] pt-4 pb-12 lg:pt-8 lg:pb-16">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <Reveal>
          <div className="flex justify-center mb-6">
            <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold uppercase tracking-widest text-[#C8A96A] backdrop-blur-md">
              Paket Layanan
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-center text-[#F7F2E8] tracking-tight max-w-3xl mx-auto leading-tight">
            Paket <span className="text-[#C8A96A] italic">Pernikahan</span> yang Dirancang <span className="text-[#C8A96A] italic">untuk Anda</span>
          </h2>
          <p className="mt-6 text-center text-[#A9A29A] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Setiap perayaan itu unik. Pilih titik awal Anda, dan kami akan merangkai detailnya agar selaras dengan cerita, skala, dan visi Anda.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {packages.map((pkg, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <PackageCard {...pkg} index={index} />
            </Reveal>
          ))}
        </div>

        {/* Pricing note */}
        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm italic text-[#A9A29A]/70">
            {packagesNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
