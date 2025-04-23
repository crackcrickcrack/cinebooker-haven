import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageViewMetrics() {
  const location = useLocation();

  useEffect(() => {
    // This would typically send analytics data
    console.log(`Page view: ${location.pathname}`);
    
    // You could integrate with a real analytics service here
    // Example: sendAnalyticsEvent('page_view', { path: location.pathname });
  }, [location]);
}