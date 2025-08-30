// components/PerformanceCard.jsx
import React from 'react';
import { getScoreColor, formatTime, getScoreLabel } from '../utils/utils';

const PerformanceCard = ({ type, metrics }) => {
  const isDesktop = type === 'desktop';
  const icon = isDesktop ? '💻' : '📱';
  const title = isDesktop ? 'Desktop Performance' : 'Mobile Performance';
  const cardClass = isDesktop ? 'metric-card desktop' : 'metric-card mobile';

  return (
    <div className={cardClass}>
      <h3>{icon} {title}</h3>
      <div className="score-container">
        <div 
          className="score-circle"
          style={{ borderColor: getScoreColor(metrics.score) }}
        >
          <span className="score-number">{metrics.score}</span>
          <span className="score-label">/100</span>
        </div>
        <div className="score-status">{getScoreLabel(metrics.score)}</div>
      </div>
      
      <div className="metric-list">
        <div className="metric-item">
          <span className="metric-label">First Contentful Paint:</span>
          <span className="metric-value">
            {formatTime(metrics.firstContentfulPaint)}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Largest Contentful Paint:</span>
          <span className="metric-value">
            {formatTime(metrics.largestContentfulPaint)}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Cumulative Layout Shift:</span>
          <span className="metric-value">
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Speed Index:</span>
          <span className="metric-value">
            {formatTime(metrics.speedIndex)}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Time to Interactive:</span>
          <span className="metric-value">
            {formatTime(metrics.timeToInteractive)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;