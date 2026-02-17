import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import gsaLogo from "@/assets/gsa-logo.png";
import { useActiveServiceStore, serviceIdMap } from "@/hooks/useActiveService";

const navLinks = [
  { name: "About", href: "#about", isHash: true },
  { name: "Services", href: "#services", hasDropdown: true, isHash: true },
  { name: "Commodities", href: "#commodities", hasDropdown: true, isHash: true },
  { name: "Team", href: "/team", isHash: false },
  { name: "Contact", href: "#contact", isHash: true },
];

const servicesSubMenu = [
  { name: "Geophysical Surveys", href: "/services/geophysical-surveys" },
  { name: "Diamond Drilling", href: "/services/diamond-drilling" },
  { name: "Sonic Drilling", href: "/services/sonic-drilling" },
  { name: "Resource Estimation & BFS", href: "/services/resource-estimation" },
  { name: "Digital Solutions", href: "/services/digital-solutions" },
  { name: "Environmental & Closure", href: "/services/environmental-closure" },
  { name: "Laboratory", href: "/services/laboratory" },
  { name: "Sales", href: "/services/sales" },
  { name: "Training", href: "/services/training" },
];

const commoditiesSubMenu = [
  { name: "Gold Exploration", href: "/commodities/gold-exploration" },
  { name: "Diamonds", href: "/commodities/diamonds" },
  { name: "Rare Earth Elements", href: "/commodities/rare-earth-elements" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const commoditiesDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        commoditiesDropdownRef.current && !commoditiesDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  };

  const getSubMenu = (name: string) => {
    if (name === "Services") return servicesSubMenu;
    if (name === "Commodities") return commoditiesSubMenu;
    return [];
  };

  const getDropdownRef = (name: string) => {
    if (name === "Services") return dropdownRef;
    if (name === "Commodities") return commoditiesDropdownRef;
    return null;
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
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={gsaLogo}
              alt="Geological Services Africa"
              className="h-16 sm:h-20 md:h-24 lg:h-40 w-auto transition-transform duration-300 group-hover:scale-105 rounded-2xl"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-12">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="relative" ref={getDropdownRef(link.name)}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className="flex items-center gap-2 text-2xl font-medium text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 w-80 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                      >
                        {getSubMenu(link.name).map((subItem, index) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-6 py-4 text-base font-medium text-white/80 hover:text-primary hover:bg-white/5 transition-colors duration-200 ${
                              index !== getSubMenu(link.name).length - 1
                                ? "border-b border-white/5"
                                : ""
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.isHash ? (
                isHomePage ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-medium text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={`/${link.href}`}
                    className="text-2xl font-medium text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                )
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-medium text-white/80 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
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
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileOpenDropdown(mobileOpenDropdown === link.name ? null : link.name);
                      }}
                      className="flex items-center justify-between min-h-[48px] px-4 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5 touch-manipulation"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          mobileOpenDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileOpenDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col ml-4 border-l-2 border-primary/30 pl-4 mt-2 mb-2 relative z-50"
                        >
                          {getSubMenu(link.name).map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={handleMobileMenuClose}
                              className="min-h-[48px] w-full text-left flex items-center px-4 py-3 text-base font-medium text-white/70 hover:text-primary active:text-primary transition-colors rounded-lg hover:bg-white/5 active:bg-white/10 touch-manipulation cursor-pointer select-none"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.isHash ? (
                  isHomePage ? (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleMobileMenuClose}
                      className="min-h-[48px] flex items-center px-4 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={`/${link.href}`}
                      onClick={handleMobileMenuClose}
                      className="min-h-[48px] flex items-center px-4 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                    >
                      {link.name}
                    </Link>
                  )
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={handleMobileMenuClose}
                    className="min-h-[48px] flex items-center px-4 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
