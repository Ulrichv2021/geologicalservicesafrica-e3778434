import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setAnalyticsConsent, hasAnalyticsConsent } from "@/lib/analytics";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const consentStatus = localStorage.getItem('gsa_analytics_consent');
    if (consentStatus === null) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setAnalyticsConsent(true);
    setShowBanner(false);
    // Reload to activate tracking
    window.location.reload();
  };

  const handleRejectAll = () => {
    setAnalyticsConsent(false);
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    setAnalyticsConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Main Banner */}
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Cookie & Privacy Settings
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  We use cookies and similar technologies to analyse site traffic, improve your experience, 
                  and understand how our services are used. Your data helps us deliver investment-grade 
                  geological consulting insights. You can manage your preferences below.
                </p>

                {/* Expandable Details */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-slate-900/50 rounded-xl p-4 mb-4 space-y-4">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                          <div>
                            <h4 className="text-white font-medium text-sm">Essential Cookies</h4>
                            <p className="text-white/60 text-xs">
                              Required for the website to function. Cannot be disabled.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Cookie className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <div>
                            <h4 className="text-white font-medium text-sm">Analytics Cookies (Google Analytics 4)</h4>
                            <p className="text-white/60 text-xs">
                              Help us understand how visitors interact with our website, enabling us to improve 
                              our services and content. Data includes page views, session duration, and geographic regions.
                            </p>
                          </div>
                        </div>

                        <div className="text-xs text-white/50 pt-2 border-t border-white/10">
                          <p>
                            We comply with GDPR, POPIA (South Africa), and other applicable privacy regulations. 
                            Your consent can be withdrawn at any time. For more information, see our{" "}
                            <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-primary hover:bg-primary/90 text-white font-medium"
                  >
                    Accept All
                  </Button>
                  
                  <Button
                    onClick={handleAcceptEssential}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Essential Only
                  </Button>
                  
                  <Button
                    onClick={handleRejectAll}
                    variant="ghost"
                    className="text-white/60 hover:text-white hover:bg-white/10"
                  >
                    Reject All
                  </Button>

                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-sm text-primary hover:underline ml-auto"
                  >
                    {showDetails ? "Hide Details" : "Show Details"}
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleAcceptEssential}
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors shrink-0"
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Cookie Settings Button for Footer
export function CookieSettingsButton() {
  const handleOpenSettings = () => {
    localStorage.removeItem('gsa_analytics_consent');
    window.location.reload();
  };

  return (
    <button
      onClick={handleOpenSettings}
      className="text-base text-white/50 hover:text-primary transition-colors"
    >
      Cookie Settings
    </button>
  );
}
