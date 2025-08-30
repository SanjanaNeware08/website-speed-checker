// config/config.js
const config = {
    // Replace with your actual Google PageSpeed Insights API key
    GOOGLE_PAGESPEED_API_KEY: 'AIzaSyD8X5JMYpUDZSBWKew9d2zcG9Nkt4zPNAE',
    
    // API endpoints
    GOOGLE_PAGESPEED_API_URL: 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed',
    
    // Performance thresholds
    PERFORMANCE_THRESHOLDS: {
      GOOD: 90,
      NEEDS_IMPROVEMENT: 50
    }
  };
  
  export default config;