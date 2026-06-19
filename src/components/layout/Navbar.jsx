import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, brand } from "../../data/siteData";
import { scrollToSection, cn } from "../../lib/utils";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map((l) => l.href);
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold so that when the section is near the top it becomes active
          if (rect.top <= 250) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 z-50 transition-all duration-500",
          scrolled ? "top-4" : "top-6"
        )}
      >
        <nav 
          className={cn(
            "relative z-50 mx-auto flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-full px-4 py-2.5 lg:px-6",
            "bg-gradient-to-b from-white/[0.08] to-black/40 backdrop-blur-2xl border border-white/[0.15] shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-500",
            scrolled ? "from-white/[0.12] to-black/60 border-white/[0.2] shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.3)]" : ""
          )}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 transition-opacity hover:opacity-80 cursor-pointer pl-2"
          >
            <img 
              src="/logo.png" 
              alt="Kanara Logo" 
              className="h-8 w-8 lg:h-9 lg:w-9 object-cover mix-blend-screen"
            />
            <span className="font-serif text-lg tracking-wide text-[#F7F2E8] block lg:hidden">
              {brand.name}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-white/[0.1] text-[#F7F2E8] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] border border-white/[0.1]"
                      : "text-[#A9A29A] hover:bg-white/[0.04] hover:text-[#F7F2E8]"
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <button className="text-white hover:text-[#C8A96A] transition-colors p-2 cursor-pointer">
              <Search size={18} />
            </button>
            <Button
              size="sm"
              onClick={() => window.open(`https://wa.me/${brand.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(brand.whatsappMessage)}`, "_blank")}
            >
              Jadwalkan Konsultasi
            </Button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button className="rounded-full p-2 text-white transition-colors hover:bg-white/[0.06] cursor-pointer">
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-white transition-colors hover:bg-white/[0.06] cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "rounded-xl px-6 py-3 font-serif text-2xl transition-colors cursor-pointer",
                      isActive
                        ? "text-[#C8A96A] bg-white/[0.05]"
                        : "text-[#F7F2E8] hover:text-[#C8A96A]"
                    )}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
                className="mt-6"
              >
                <Button size="lg" onClick={() => { setIsOpen(false); window.open(`https://wa.me/${brand.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(brand.whatsappMessage)}`, "_blank"); }}>
                  Jadwalkan Konsultasi
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
