import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import gsaLogo from "@/assets/gsa-logo.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Commodities", href: "#commodities" },
  { name: "Contact", href: "#contact" },
];

const servicesSubMenu = [
  { name: "Geophysical Surveys", href: "#services" },
  { name: "Drilling & Sampling", href: "#services" },
  { name: "Digital Solutions", href: "#services" },
  { name: "Resource Estimation & BFS", href: "#services" },
  { name: "Environmental & Closure", href: "#services" },
  { name: "Laboratory", href: "#services" },
  { name: "Sales", href: "#services" },
  { name: "Training", href: "#services" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="page-x">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={gsaLogo}
              alt="Geological Services Africa"
              className="h-20 md:h-24 lg:h-40 w-auto transition-transform duration-300 group-hover:scale-105 rounded-2xl"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-12">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-2 text-2xl font-medium text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 w-80 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                      >
                        {servicesSubMenu.map((subItem, index) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsServicesOpen(false)}
                            className={`block px-6 py-4 text-base font-medium text-white/80 hover:text-primary hover:bg-white/5 transition-colors duration-200 ${
                              index !== servicesSubMenu.length - 1
                                ? "border-b border-white/5"
                                : ""
                            }`}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-white/80 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-white/10 mt-2"
          >
            <div className="page-x py-6 flex flex-col gap-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between min-h-[48px] px-4 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col ml-4 border-l-2 border-primary/30 pl-4 mt-2 mb-2"
                        >
                          {servicesSubMenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={handleMobileMenuClose}
                              className="min-h-[48px] flex items-center px-4 py-3 text-base font-medium text-white/70 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleMobileMenuClose}
                    className="min-h-[48px] flex items-center px-4 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
