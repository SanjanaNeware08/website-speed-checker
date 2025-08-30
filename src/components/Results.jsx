// components/Results.jsx - Updated to include comparison chart
import React from 'react';
import PerformanceCard from './PerformanceCard';
import PerformanceTips from './PerformanceTips';

const Results = ({ speedData }) => {
  if (!speedData) return null;

  return (
    <div className="results slide-in-up">
      <h2 className="results-title">
        Performance Results for {speedData.url}
      </h2>
      
      <div className="metrics-grid">
        <PerformanceCard 
          type="mobile" 
          metrics={speedData.mobile} 
        />
        <PerformanceCard 
          type="desktop" 
          metrics={speedData.desktop} 
        />
      </div>

      <PerformanceTips />
    </div>
  );
};

export default Results;