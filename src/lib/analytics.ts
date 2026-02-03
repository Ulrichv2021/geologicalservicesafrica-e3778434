// Google Analytics 4 Event Tracking Utilities
// Measurement ID: G-0400H8V120

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Check if consent has been granted
export const hasAnalyticsConsent = (): boolean => {
  return localStorage.getItem('gsa_analytics_consent') === 'granted';
};

// Set consent status
export const setAnalyticsConsent = (granted: boolean): void => {
  localStorage.setItem('gsa_analytics_consent', granted ? 'granted' : 'denied');
  
  // Update Google Consent Mode
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
    });
  }
};

// Initialize gtag function
const gtag = (...args: unknown[]): void => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
};

// Lead quality parameters interface
interface LeadQualityParams {
  service_type?: string;
  commodity_sector?: string;
  project_stage?: string;
  geographic_region?: string;
  company_type?: string;
}

// Contact form submission tracking
export const trackFormSubmission = (
  formId: string,
  formName: string,
  leadParams?: LeadQualityParams
): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'generate_lead', {
    event_category: 'form',
    event_label: formName,
    form_id: formId,
    form_name: formName,
    page_location: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || 'direct',
    // Lead quality parameters
    service_type: leadParams?.service_type || 'not_specified',
    commodity_sector: leadParams?.commodity_sector || 'not_specified',
    project_stage: leadParams?.project_stage || 'not_specified',
    geographic_region: leadParams?.geographic_region || 'not_specified',
    company_type: leadParams?.company_type || 'not_specified',
  });

  // Also fire as a conversion event
  gtag('event', 'conversion', {
    send_to: 'G-0400H8V120',
    event_category: 'lead',
    event_label: 'contact_form_submission',
  });
};

// Phone click tracking
export const trackPhoneClick = (
  phoneNumber: string,
  ctaText: string,
  location: string
): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'phone_click', {
    event_category: 'engagement',
    event_label: phoneNumber,
    phone_number: phoneNumber,
    cta_text: ctaText,
    click_location: location,
    page_location: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || 'direct',
  });

  // Fire as conversion
  gtag('event', 'conversion', {
    send_to: 'G-0400H8V120',
    event_category: 'lead',
    event_label: 'phone_click',
  });
};

// WhatsApp click tracking
export const trackWhatsAppClick = (
  whatsappNumber: string,
  ctaText: string,
  location: string
): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: whatsappNumber,
    whatsapp_number: whatsappNumber,
    cta_text: ctaText,
    click_location: location,
    page_location: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || 'direct',
  });

  // Fire as conversion
  gtag('event', 'conversion', {
    send_to: 'G-0400H8V120',
    event_category: 'lead',
    event_label: 'whatsapp_click',
  });
};

// Email click tracking
export const trackEmailClick = (
  email: string,
  ctaText: string,
  location: string
): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'email_click', {
    event_category: 'engagement',
    event_label: email,
    email_address: email,
    cta_text: ctaText,
    click_location: location,
    page_location: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || 'direct',
  });
};

// CTA button click tracking
export const trackCTAClick = (
  ctaText: string,
  ctaLocation: string,
  destination?: string
): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: ctaText,
    cta_text: ctaText,
    cta_location: ctaLocation,
    destination: destination || 'internal',
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
};

// Service interest tracking
export const trackServiceInterest = (
  serviceName: string,
  interactionType: 'view' | 'expand' | 'click'
): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'service_interest', {
    event_category: 'engagement',
    event_label: serviceName,
    service_name: serviceName,
    interaction_type: interactionType,
    page_location: window.location.href,
  });
};

// Commodity interest tracking
export const trackCommodityInterest = (
  commodityName: string,
  interactionType: 'view' | 'click'
): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'commodity_interest', {
    event_category: 'engagement',
    event_label: commodityName,
    commodity_name: commodityName,
    interaction_type: interactionType,
    page_location: window.location.href,
  });
};

// Scroll depth tracking
export const trackScrollDepth = (depth: number): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'scroll', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    percent_scrolled: depth,
    page_location: window.location.href,
  });
};

// Time on page tracking
export const trackEngagementTime = (seconds: number): void => {
  if (!hasAnalyticsConsent()) return;
  
  gtag('event', 'engagement_time', {
    event_category: 'engagement',
    event_label: `${seconds}s`,
    engagement_time_seconds: seconds,
    page_location: window.location.href,
  });
};
