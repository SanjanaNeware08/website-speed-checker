// components/PerformanceTips.jsx
import React from 'react';

const PerformanceTips = () => {
  const tips = [
    'Optimize images and use modern formats like WebP',
    'Minimize CSS and JavaScript files',
    'Enable browser caching',
    'Use a Content Delivery Network (CDN)',
    'Optimize server response time',
    'Implement lazy loading for images',
    'Use critical CSS inlining',
    'Minimize render-blocking resources'
  ];

  return (
    <div className="performance-tips">
      <h3>💡 Performance Tips</h3>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceTips; 