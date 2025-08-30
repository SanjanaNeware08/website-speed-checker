// components/features/ComparisonChart.jsx
import React from 'react';
import { getScoreColor } from '../../utils/utils';

const ComparisonChart = ({ speedData }) => {
  if (!speedData) return null;

  const metrics = [
    { name: 'Performance Score', mobile: speedData.mobile.score, desktop: speedData.desktop.score, unit: '/100' },
    { name: 'First Contentful Paint', mobile: speedData.mobile.firstContentfulPaint, desktop: speedData.desktop.firstContentfulPaint, unit: 'ms' },
    { name: 'Largest Contentful Paint', mobile: speedData.mobile.largestContentfulPaint, desktop: speedData.desktop.largestContentfulPaint, unit: 'ms' },
    { name: 'Speed Index', mobile: speedData.mobile.speedIndex, desktop: speedData.desktop.speedIndex, unit: 'ms' },
  ];

  const getBarWidth = (value, maxValue) => {
    return Math.min((value / maxValue) * 100, 100);
  };

  const maxValues = metrics.reduce((acc, metric) => {
    acc[metric.name] = Math.max(metric.mobile, metric.desktop);
    return acc;
  }, {});

  return (
    <div className="comparison-chart">
      <h3>📊 Mobile vs Desktop Comparison</h3>
      <div className="chart-container">
        {metrics.map((metric, index) => (
          <div key={index} className="chart-row">
            <div className="chart-label">{metric.name}</div>
            <div className="chart-bars">
              <div className="bar-container mobile-bar">
                <span className="bar-label">📱</span>
                <div className="bar-track">
                  <div 
                    className="bar-fill mobile"
                    style={{ 
                      width: `${getBarWidth(metric.mobile, maxValues[metric.name])}%`,
                      background: metric.name === 'Performance Score' ? getScoreColor(metric.mobile) : '#f093fb'
                    }}
                  ></div>
                </div>
                <span className="bar-value">{metric.mobile}{metric.unit}</span>
              </div>
              <div className="bar-container desktop-bar">
                <span className="bar-label">💻</span>
                <div className="bar-track">
                  <div 
                    className="bar-fill desktop"
                    style={{ 
                      width: `${getBarWidth(metric.desktop, maxValues[metric.name])}%`,
                      background: metric.name === 'Performance Score' ? getScoreColor(metric.desktop) : '#4facfe'
                    }}
                  ></div>
                </div>
                <span className="bar-value">{metric.desktop}{metric.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonChart;