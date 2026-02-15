import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
}

export function PageLayout({ children, breadcrumbs }: PageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Breadcrumb Bar */}
      <div className="pt-32 pb-6 bg-slate-900 border-b border-white/10">
        <nav className="page-x" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm md:text-base">
            <li>
              <Link to="/" className="text-white/50 hover:text-primary transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-white/30" />
                {crumb.href ? (
                  <Link to={crumb.href} className="text-white/50 hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  );
}
