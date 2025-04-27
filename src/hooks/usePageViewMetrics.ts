import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageViewMetrics = () => {
  const location = useLocation();
  
  useEffect(() => {
    // This would normally send metrics to a server
    // For now, we'll just log to console
    console.log(`Page view: ${location.pathname}`);
    
    // In a real implementation, you might do something like:
    // trackPageView(location.pathname);
  }, [location.pathname]);
};
