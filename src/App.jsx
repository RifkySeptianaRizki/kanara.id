import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Values from "./components/sections/Values";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Packages from "./components/sections/Packages";
import Gallery from "./components/sections/Gallery";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F7F2E8] antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Packages />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
