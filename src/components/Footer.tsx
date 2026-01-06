import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import gsaLogo from "@/assets/gsa-logo.png";

const footerLinks = {
  services: [
    { name: "Geophysical Surveys", href: "#services" },
    { name: "Drilling & Sampling", href: "#services" },
    { name: "Resource Estimation", href: "#services" },
    { name: "Feasibility Studies", href: "#services" },
    { name: "Digital Solutions", href: "#services" },
  ],
  company: [
    { name: "About GSA", href: "#about" },
    { name: "Technical Capabilities", href: "#services" },
    { name: "Commodity Expertise", href: "#commodities" },
    { name: "Contact Us", href: "#contact" },
  ],
  compliance: [
    { name: "JORC (2012)", href: "#" },
    { name: "SAMREC (2016)", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/10 bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={gsaLogo} alt="GSA Logo" className="h-16 w-auto mb-6" />
            <p className="text-white/60 mb-6 leading-relaxed">
              Investment-grade geological consulting across Africa. 
              De-risking mineral investments through data integrity and technical excellence.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:ulrichv@geologicalservicesafrica.co.za" 
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">ulrichv@geologicalservicesafrica.co.za</span>
              </a>
              <a 
                href="tel:+27790450207" 
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">079 045 0207</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hout Bay, Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-6 text-white">Connect</h4>
            <p className="text-white/60 mb-6">
              Follow us for industry insights and project updates.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white/70" />
              </a>
              <a 
                href="mailto:ulrichv@geologicalservicesafrica.co.za" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-white/70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Geological Services Africa (Pty) Ltd. All rights reserved. Est. 2016.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.compliance.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-white/50 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
