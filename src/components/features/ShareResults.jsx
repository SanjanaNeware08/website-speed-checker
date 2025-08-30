// components/features/ShareResults.jsx
import React, { useState } from 'react';

const ShareResults = ({ speedData }) => {
  const [copied, setCopied] = useState(false);

  if (!speedData) return null;

  const generateShareText = () => {
    const { url, mobile, desktop } = speedData;
    return `🚀 Performance Test Results for ${url}

📱 Mobile: ${mobile.score}/100 - ${mobile.score >= 90 ? 'Fast' : mobile.score >= 50 ? 'Average' : 'Slow'}
💻 Desktop: ${desktop.score}/100 - ${desktop.score >= 90 ? 'Fast' : desktop.score >= 50 ? 'Average' : 'Slow'}

✨ Tested with Website Speed Checker
#WebPerformance #PageSpeed #WebDev`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard');
    }
  };

  const downloadReport = () => {
    const reportData = {
      url: speedData.url,
      testDate: new Date().toISOString(),
      mobile: speedData.mobile,
      desktop: speedData.desktop
    };
    
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `speed-test-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <div className="share-results">
      <h3>📤 Share Results</h3>
      <div className="share-actions">
        <button 
          className="share-button copy-button"
          onClick={copyToClipboard}
        >
          {copied ? '✅ Copied!' : '📋 Copy Summary'}
        </button>
        
        <button 
          className="share-button download-button"
          onClick={downloadReport}
        >
          💾 Download Report
        </button>
      </div>
    </div>
  );
};

export default ShareResults;