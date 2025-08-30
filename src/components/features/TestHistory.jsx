// components/features/TestHistory.jsx
import React, { useState, useEffect } from 'react';
import { getScoreColor, getScoreLabel } from '../../utils/utils';

const TestHistory = ({ currentTest }) => {
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (currentTest) {
      const newTest = {
        ...currentTest,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      
      setHistory(prev => {
        const updated = [newTest, ...prev.slice(0, 9)]; // Keep last 10 tests
        return updated;
      });
    }
  }, [currentTest]);

  if (history.length === 0) return null;

  return (
    <div className="test-history">
      <div className="history-header">
        <h3>📝 Recent Tests</h3>
        <button 
          className="toggle-history"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? '▼ Hide' : '▶ Show'} History ({history.length})
        </button>
      </div>
      
      {showHistory && (
        <div className="history-list">
          {history.map((test, index) => (
            <div key={test.id} className="history-item">
              <div className="history-info">
                <div className="history-url">{test.url}</div>
                <div className="history-time">
                  {new Date(test.timestamp).toLocaleString()}
                </div>
              </div>
              <div className="history-scores">
                <div className="score-badge mobile">
                  📱 <span style={{ color: getScoreColor(test.mobile.score) }}>
                    {test.mobile.score}
                  </span>
                </div>
                <div className="score-badge desktop">
                  💻 <span style={{ color: getScoreColor(test.desktop.score) }}>
                    {test.desktop.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestHistory;