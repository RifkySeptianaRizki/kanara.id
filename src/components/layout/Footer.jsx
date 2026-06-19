import { brand, footer as footerData } from "../../data/siteData";
import { scrollToSection } from "../../lib/utils";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-8 overflow-hidden">
      
      {/* Background Gold Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#C8A96A]/[0.04] rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto w-full max-w-none px-6 md:px-12 lg:px-20 xl:px-24">
        
        {/* Top Section: Massive Text */}
        <div className="w-full flex justify-center items-center mb-16 lg:mb-24">
          <h1 className="font-poppins font-bold text-[#F7F2E8] tracking-tighter whitespace-nowrap text-[22vw] sm:text-[24vw] leading-none select-none">
            K<span className="relative inline-flex flex-col items-center justify-center">
              {/* Custom narrow macron (line) nudged slightly to the right */}
              <span className="absolute top-[0.05em] translate-x-[12%] w-[32%] h-[0.04em] bg-[#F7F2E8] rounded-sm" />
              A
            </span>NARA
          </h1>
        </div>

        {/* Middle Section: Links & Short Statement */}
        <div className="flex flex-col lg:flex-row justify-between mb-12 border-t border-white/[0.04] pt-12 gap-12 lg:gap-0">
          <div className="lg:w-1/3">
            <h3 className="font-serif text-2xl text-[#C8A96A] mb-4 italic">Kanara Wedding</h3>
            <p className="text-sm text-[#A9A29A] leading-relaxed">
              {brand.shortStatement}
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-end gap-16 lg:gap-32 w-full lg:w-auto">
            {footerData.sections.map((section, index) => (
              <div key={index} className="min-w-[120px]">
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#F7F2E8]">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-[#A9A29A] transition-colors hover:text-[#C8A96A] cursor-pointer text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Logo, Copyright, and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/[0.06] pt-8">
          
          {/* Left: Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Kanara Logo" 
              className="h-8 w-8 object-cover mix-blend-screen"
            />
            <span className="text-sm text-[#A9A29A]">
              {brand.copyright}
            </span>
          </div>

          {/* Right: Social & Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href={`mailto:${brand.email}`}
              className="text-sm font-medium text-[#A9A29A] transition-colors hover:text-[#C8A96A]"
            >
              Email
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#A9A29A] transition-colors hover:text-[#C8A96A]"
            >
              WhatsApp
            </a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#A9A29A] transition-colors hover:text-[#C8A96A]"
            >
              Instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
