
import React, { useEffect, useState } from 'react';
import metricsService from '@/services/metricsService';

const MetricsEndpoint: React.FC = () => {
  const [metricsData, setMetricsData] = useState<string>("");
  
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const metrics = await metricsService.getMetrics();
        setMetricsData(metrics);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setMetricsData("Error fetching metrics");
      }
    };
    
    fetchMetrics();
  }, []);
  
  return (
    <div>
      <h1>Prometheus Metrics</h1>
      <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        {metricsData}
      </pre>
    </div>
  );
};

export default MetricsEndpoint;
