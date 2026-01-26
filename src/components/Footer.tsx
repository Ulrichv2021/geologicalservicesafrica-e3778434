import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import gsaLogo from "@/assets/gsa-logo.png";
const footerLinks = {
  services: [{
    name: "Geophysical Surveys",
    href: "#services"
  }, {
    name: "Drilling & Sampling",
    href: "#services"
  }, {
    name: "Resource Estimation",
    href: "#services"
  }, {
    name: "Feasibility Studies",
    href: "#services"
  }, {
    name: "Digital Solutions",
    href: "#services"
  }],
  company: [{
    name: "About GSA",
    href: "#about"
  }, {
    name: "Technical Capabilities",
    href: "#services"
  }, {
    name: "Commodity Expertise",
    href: "#commodities"
  }, {
    name: "Contact Us",
    href: "#contact"
  }],
  compliance: [{
    name: "JORC (2012)",
    href: "#"
  }, {
    name: "SAMREC (2016)",
    href: "#"
  }, {
    name: "Privacy Policy",
    href: "#"
  }]
};
export function Footer() {
  return <footer className="relative border-t border-white/10 bg-slate-900 py-[10px]">
      <div className="page-x py-[5px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={gsaLogo} alt="GSA Logo" className="h-32 w-auto mb-6 rounded-2xl" />
            <p className="text-xl text-white/60 mb-6 leading-relaxed">​</p>
            <div className="space-y-4">
              <a href="mailto:ulrichv@geologicalservicesafrica.co.za" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-lg">​</span>
              </a>
              <a href="tel:+27790450207" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-lg">+27 79 045 0207</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">​</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map(link => <li key={link.name}>
                  <a href={link.href} className="text-lg text-white/60 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map(link => <li key={link.name}>
                  <a href={link.href} className="text-lg text-white/60 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-6 text-white">
          </h4>
            <p className="text-xl text-white/60 mb-6">
              Follow us for industry insights and project updates.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-white/70" />
              </a>
              <a href="mailto:ulrichv@geologicalservicesafrica.co.za" className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-white/70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg text-white/50">
            © 2019 Geological Services Africa (Pty) Ltd. All rights reserved. Est. 2019.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.compliance.map(link => <a key={link.name} href={link.href} className="text-base text-white/50 hover:text-primary transition-colors">
                {link.name}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
}