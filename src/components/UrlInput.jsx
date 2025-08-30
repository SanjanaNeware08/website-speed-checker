// components/UrlInput.jsx
import React from 'react';

const UrlInput = ({ 
  url, 
  setUrl, 
  onCheck, 
  loading, 
  error 
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onCheck();
    }
  };

  return (
    <div className="input-section">
      <div className="url-input-container">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL (e.g., google.com)"
          className="url-input"
          onKeyPress={handleKeyPress}
        />
        <button 
          onClick={onCheck} 
          disabled={loading}
          className="check-button"
        >
          {loading ? 'Checking...' : 'Check Speed'}
        </button>
      </div>
      
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UrlInput;