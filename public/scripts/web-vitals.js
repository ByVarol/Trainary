/**
 * Web Vitals Performance Measurement Script
 * This is a secure implementation of web vitals measurement
 */
window.addEventListener('load', function() {
  // Only run in production mode or when explicitly enabled
  const isProduction = window.location.hostname !== 'localhost';
  const debugEnabled = window.localStorage.getItem('debug_performance') === 'true';
  
  if (!isProduction && !debugEnabled) return;
  
  try {
    if (typeof window.performance !== 'undefined' && 
        typeof window.performance.getEntriesByType !== 'undefined') {
      
      const perfData = window.performance.getEntriesByType('navigation')[0];
      const paintData = window.performance.getEntriesByType('paint');
      
      if (perfData && paintData.length) {
        // Safely log metrics
        const metrics = {
          dns: perfData.domainLookupEnd - perfData.domainLookupStart,
          tcp: perfData.connectEnd - perfData.connectStart,
          tls: perfData.requestStart - perfData.secureConnectionStart,
          ttfb: perfData.responseStart - perfData.requestStart,
          fcp: paintData.find(p => p.name === 'first-contentful-paint')?.startTime
        };
        
        // Log metrics securely
        console.log('Web Vitals:', metrics);
        
        // You would send this to your analytics service here
        // Example: safely send to server
        if (navigator.sendBeacon) {
          try {
            const blob = new Blob([JSON.stringify({
              event: 'web-vitals',
              metrics: metrics,
              url: window.location.pathname,
              timestamp: new Date().toISOString()
            })], {type: 'application/json'});
            
            // In production, you would send to your analytics endpoint
            // Currently disabled for security
            // navigator.sendBeacon('/api/analytics/web-vitals', blob);
          } catch (e) {
            // Silent fail for user experience
            console.error('Failed to send web vitals data');
          }
        }
      }
    }
  } catch (err) {
    // Fail silently - never impact user experience
    console.error('Error measuring performance:', err);
  }
}); 