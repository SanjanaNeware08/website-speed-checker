// components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Analyzing website performance...</p>
      <p className="loading-note">
        This may take a few moments for both mobile and desktop analysis
      </p>
    </div>
  );
};

export default LoadingSpinner;