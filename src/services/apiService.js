// services/apiService.js
import axios from 'axios';
import config from '../config/config';

/**
 * Extract performance metrics from Lighthouse result
 * @param {Object} lighthouseResult - Lighthouse result data
 * @returns {Object} - Extracted metrics
 */
const extractMetrics = (lighthouseResult) => ({
  score: Math.round(lighthouseResult.categories.performance.score * 100),
  firstContentfulPaint: lighthouseResult.audits['first-contentful-paint'].numericValue,
  largestContentfulPaint: lighthouseResult.audits['largest-contentful-paint'].numericValue,
  cumulativeLayoutShift: lighthouseResult.audits['cumulative-layout-shift'].numericValue,
  speedIndex: lighthouseResult.audits['speed-index'].numericValue,
  timeToInteractive: lighthouseResult.audits['interactive'].numericValue
});

/**
 * Fetch PageSpeed data for a specific strategy (mobile/desktop)
 * @param {string} url - The URL to analyze
 * @param {string} strategy - 'mobile' or 'desktop'
 * @returns {Promise<Object>} - PageSpeed data
 */
const fetchPageSpeedData = async (url, strategy) => {
  const response = await axios.get(config.GOOGLE_PAGESPEED_API_URL, {
    params: {
      url,
      key: config.GOOGLE_PAGESPEED_API_KEY,
      strategy
    }
  });
  
  return response.data;
};

/**
 * Check website speed for both mobile and desktop
 * @param {string} url - The URL to analyze
 * @returns {Promise<Object>} - Complete speed analysis results
 */
export const checkWebsiteSpeed = async (url) => {
  try {
    // Fetch mobile data
    const mobileData = await fetchPageSpeedData(url, 'mobile');
    const mobileMetrics = extractMetrics(mobileData.lighthouseResult);
    
    // Fetch desktop data
    const desktopData = await fetchPageSpeedData(url, 'desktop');
    const desktopMetrics = extractMetrics(desktopData.lighthouseResult);
    
    return {
      url,
      mobile: mobileMetrics,
      desktop: desktopMetrics,
      loadingExperience: mobileData.loadingExperience
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};