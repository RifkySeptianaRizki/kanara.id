import { useState } from "react";
import { packages, packagesNote, brand } from "../../data/siteData";
import PackageCard from "../ui/PackageCard";
import Reveal from "../ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleWhatsApp = (pkg) => {
    const featuresList = pkg.features.map(f => `- ${f.title}`).join('\n');
    const text = `Halo Kanara Wedding, saya tertarik dengan paket *${pkg.title}*. Boleh mohon info lebih lanjut?\n\nBerikut detail paket yang saya lihat:\n${featuresList}`;
    window.open(`https://wa.me/${brand.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(text)}`, "_blank");
  };

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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-center">
          {packages.map((pkg, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <PackageCard 
                {...pkg} 
                index={index} 
                onOpenModal={() => setSelectedPackage(pkg)}
              />
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

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md"
              onClick={() => setSelectedPackage(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-[#111111] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Decorative glows */}
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[#C8A96A]/20 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#C8A96A]/10 blur-[80px] pointer-events-none" />
              
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-6 right-6 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] text-[#A9A29A] transition-colors hover:bg-white/[0.1] hover:text-white cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="p-8 lg:p-10 relative z-10 max-h-[85vh] overflow-y-auto">
                <div className="mb-4 inline-flex rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-3 py-1 text-[11px] tracking-wide text-[#C8A96A] uppercase font-medium">
                  Paket Detail
                </div>
                <h3 className="mb-3 font-serif text-3xl text-[#F7F2E8]">{selectedPackage.title}</h3>
                <p className="mb-8 text-[#A9A29A] text-sm leading-relaxed">{selectedPackage.description}</p>
                
                <div className="mb-8 pb-8 border-b border-white/[0.05]">
                  <div className="text-3xl font-medium text-[#F7F2E8] tracking-tight">
                    {selectedPackage.price}
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#A9A29A]">Termasuk dalam paket:</h4>
                  <ul className="space-y-4">
                    {selectedPackage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-sm text-[#F7F2E8]">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8A96A]/20 border border-[#C8A96A]/30">
                          <Check size={12} className="text-[#C8A96A]" strokeWidth={3} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="font-medium text-[#F7F2E8]">{feature.title}</span>
                          <span className="text-xs leading-relaxed text-[#A9A29A]">{feature.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleWhatsApp(selectedPackage)}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#C8A96A] to-[#BFA77A] py-4 text-sm font-semibold text-[#050505] transition-all hover:opacity-90 hover:scale-[1.02] shadow-[0_8px_20px_rgba(200,169,106,0.25)]"
                >
                  Pilih Paket Ini
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
