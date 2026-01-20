import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import gsaLogo from "@/assets/gsa-logo.png";
const navLinks = [{
  name: "About",
  href: "#about"
}, {
  name: "Services",
  href: "#services"
}, {
  name: "Commodities",
  href: "#commodities"
}, {
  name: "3D Models",
  href: "#3d-models"
}, {
  name: "Contact",
  href: "#contact"
}];
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={gsaLogo} alt="Geological Services Africa" className="h-48 md:h-64 lg:h-96 w-auto transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-white/80 hover:text-primary transition-colors duration-300">
                {link.name}
              </a>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+27790450207" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+27 79 045 0207</span>
            </a>
            <a href="#contact" className="btn-hero text-xs px-6 py-3">
              Request Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-white/10 mt-2">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/80 hover:text-primary transition-colors">
                  {link.name}
                </a>)}
              <div className="pt-4 border-t border-white/10">
                <a href="tel:+27790450207" className="flex items-center gap-2 text-white/70 mb-4">
                  <Phone className="w-4 h-4" />
                  <span>079 045 0207</span>
                </a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-hero text-center block">
                  Request Consultation
                </a>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
}