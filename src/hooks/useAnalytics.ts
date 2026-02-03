import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  trackPageView,
  trackScrollDepth,
  trackEngagementTime,
  hasAnalyticsConsent,
} from "@/lib/analytics";

// Hook to track page views on route changes
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;

    // Track page view
    trackPageView(location.pathname, document.title);
  }, [location]);
}

// Hook to track scroll depth
export function useScrollTracking() {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track at 25%, 50%, 75%, 90%, 100%
      const milestones = [25, 50, 75, 90, 100];
      
      for (const milestone of milestones) {
        if (scrollPercent >= milestone && !trackedDepths.current.has(milestone)) {
          trackedDepths.current.add(milestone);
          trackScrollDepth(milestone);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

// Hook to track time on page
export function useEngagementTracking() {
  const startTime = useRef<number>(Date.now());
  const trackedIntervals = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000);
      
      // Track at 30s, 60s, 120s, 300s, 600s
      const milestones = [30, 60, 120, 300, 600];
      
      for (const milestone of milestones) {
        if (elapsed >= milestone && !trackedIntervals.current.has(milestone)) {
          trackedIntervals.current.add(milestone);
          trackEngagementTime(milestone);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);
}

// Combined analytics hook
export function useAnalytics() {
  usePageTracking();
  useScrollTracking();
  useEngagementTracking();
}
