import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CookieConsent } from "@/components/CookieConsent";
import { useAnalytics } from "@/hooks/useAnalytics";

// Service pages
const GeophysicalSurveys = lazy(() => import("./pages/services/GeophysicalSurveys"));
const DrillingSampling = lazy(() => import("./pages/services/DrillingSampling"));
const SonicDrilling = lazy(() => import("./pages/services/SonicDrilling"));
const ResourceEstimation = lazy(() => import("./pages/services/ResourceEstimation"));
const DigitalSolutions = lazy(() => import("./pages/services/DigitalSolutions"));
const EnvironmentalClosure = lazy(() => import("./pages/services/EnvironmentalClosure"));
const Laboratory = lazy(() => import("./pages/services/Laboratory"));
const Sales = lazy(() => import("./pages/services/Sales"));
const Training = lazy(() => import("./pages/services/Training"));

// Geophysical sub-pages
const GPRSurveys = lazy(() => import("./pages/services/geophysical/GPRSurveys"));
const UAVMagnetics = lazy(() => import("./pages/services/geophysical/UAVMagnetics"));
const LiDARSurveys = lazy(() => import("./pages/services/geophysical/LiDARSurveys"));
const IPResistivity = lazy(() => import("./pages/services/geophysical/IPResistivity"));
const GravityMagnetics = lazy(() => import("./pages/services/geophysical/GravityMagnetics"));

// Team page
const Team = lazy(() => import("./pages/Team"));

// Commodity pages
const GoldExploration = lazy(() => import("./pages/commodities/GoldExploration"));
const DiamondsExploration = lazy(() => import("./pages/commodities/DiamondsExploration"));
const REEExploration = lazy(() => import("./pages/commodities/REEExploration"));

const queryClient = new QueryClient();

function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useAnalytics();
  return <>{children}</>;
}

const PageLoader = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Service Pages */}
              <Route path="/services/geophysical-surveys" element={<GeophysicalSurveys />} />
              <Route path="/services/drilling-sampling" element={<DrillingSampling />} />
              <Route path="/services/diamond-drilling" element={<DrillingSampling />} />
              <Route path="/services/sonic-drilling" element={<SonicDrilling />} />
              <Route path="/services/resource-estimation" element={<ResourceEstimation />} />
              <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
              <Route path="/services/environmental-closure" element={<EnvironmentalClosure />} />
              <Route path="/services/laboratory" element={<Laboratory />} />
              <Route path="/services/sales" element={<Sales />} />
              <Route path="/services/training" element={<Training />} />
              
              {/* Geophysical Sub-Pages */}
              <Route path="/services/geophysical/gpr-surveys" element={<GPRSurveys />} />
              <Route path="/services/geophysical/uav-magnetics" element={<UAVMagnetics />} />
              <Route path="/services/geophysical/lidar-surveys" element={<LiDARSurveys />} />
              <Route path="/services/geophysical/ip-resistivity" element={<IPResistivity />} />
              <Route path="/services/geophysical/gravity-magnetics" element={<GravityMagnetics />} />
              
              {/* Team */}
              <Route path="/team" element={<Team />} />
              
              {/* Commodity Pages */}
              <Route path="/commodities/gold-exploration" element={<GoldExploration />} />
              <Route path="/commodities/diamonds" element={<DiamondsExploration />} />
              <Route path="/commodities/rare-earth-elements" element={<REEExploration />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnalyticsProvider>
      </BrowserRouter>
      <CookieConsent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
