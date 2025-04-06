
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import metricsService from '@/services/metricsService';

const MetricsEndpoint: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchAndReturnMetrics = async () => {
      try {
        const metrics = await metricsService.getMetrics();
        
        // Create a plain text response
        const blob = new Blob([metrics], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        // Open the metrics in a new tab
        window.open(url);
        
        // Navigate back to the previous page
        navigate(-1);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        navigate(-1);
      }
    };
    
    fetchAndReturnMetrics();
  }, [navigate]);
  
  return (
    <div>Loading metrics...</div>
  );
};

export default MetricsEndpoint;
