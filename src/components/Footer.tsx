import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import gsaLogo from "@/assets/gsa-logo.png";
const footerLinks = {
  services: [{
    name: "Advanced Geophysics",
    href: "#services"
  }, {
    name: "Precision Drilling",
    href: "#services"
  }, {
    name: "3D Modelling",
    href: "#3d-models"
  }, {
    name: "Digital Solutions",
    href: "#services"
  }, {
    name: "Environmental",
    href: "#services"
  }],
  company: [{
    name: "About Us",
    href: "#about"
  }, {
    name: "Our Process",
    href: "#about"
  }, {
    name: "Contact",
    href: "#contact"
  }],
  compliance: [{
    name: "SAMREC Code",
    href: "#"
  }, {
    name: "ISO 9001:2015",
    href: "#"
  }, {
    name: "Privacy Policy",
    href: "#"
  }]
};
export function Footer() {
  return <footer className="relative py-16 border-t border-border bg-inherit">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={gsaLogo} alt="GSA Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Your Mineral Exploration Partner. De-risking investments through 
              data integrity and innovation.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="mailto:info@geologicalservicesafrica.com" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map(link => <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Newsletter / Insights */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4">Insights</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest in mineral exploration.
            </p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:border-primary transition-colors" />
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Geological Services Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.compliance.map(link => <a key={link.name} href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
}