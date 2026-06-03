import { useState } from "react";
import { faq } from "../../data/siteData";
import Reveal from "../ui/Reveal";
import { cn } from "../../lib/utils";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-white/[0.08] last:border-b-0 py-6 sm:py-8">
      <button
        onClick={onClick}
        className="flex w-full items-start sm:items-center justify-between gap-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "font-serif text-lg sm:text-xl lg:text-2xl transition-colors duration-300 pr-4",
          isOpen ? "text-[#C8A96A]" : "text-[#F7F2E8] group-hover:text-[#C8A96A]"
        )}>
          {question}
        </span>
        <span className={cn(
          "flex shrink-0 transition-transform duration-500 ease-in-out mt-1 sm:mt-0",
          isOpen ? "text-[#C8A96A] rotate-45" : "text-[#A9A29A] group-hover:text-[#C8A96A]"
        )}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path d="M12 5v14M5 12h14" />
           </svg>
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4 sm:mt-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base leading-relaxed text-[#A9A29A] max-w-2xl pr-8 sm:pr-12">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative bg-[#050505] py-24 lg:py-32 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C8A96A]/[0.015] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column - Header (Sticky) */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-16 pt-2">
              <Reveal>
                <div className="flex justify-start mb-6">
                  <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold uppercase tracking-widest text-[#C8A96A] backdrop-blur-md">
                    FAQ
                  </span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-left text-[#F7F2E8] tracking-tight leading-none">
                  Tanya <br />
                  <span className="text-[#C8A96A] italic">Jawab</span>
                </h2>
                <p className="mt-8 text-left text-[#A9A29A] text-base md:text-lg leading-relaxed max-w-sm">
                  Pertanyaan yang sering diajukan mengenai layanan perencanaan dan koordinasi pernikahan kami.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="border-t border-white/[0.08]">
              {faq.map((item, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <FAQItem
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  />
                </Reveal>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
