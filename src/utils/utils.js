// utils/utils.js
import config from '../config/config';

/**
 * Validates URL format
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const validateUrl = (url) => {
  try {
    new URL(url.startsWith('http') ? url : `https://${url}`);
    return true;
  } catch {
    return false;
  }
};

/**
 * Formats URL to include protocol
 * @param {string} url - The URL to format
 * @returns {string} - Formatted URL
 */
export const formatUrl = (url) => {
  return url.startsWith('http') ? url : `https://${url}`;
};

/**
 * Get score color based on performance score
 * @param {number} score - Performance score (0-100)
 * @returns {string} - Color hex code
 */
export const getScoreColor = (score) => {
  const { GOOD, NEEDS_IMPROVEMENT } = config.PERFORMANCE_THRESHOLDS;
  
  if (score >= GOOD) return '#10b981'; // Green
  if (score >= NEEDS_IMPROVEMENT) return '#f59e0b'; // Yellow
  return '#ef4444'; // Red
};

/**
 * Format time in milliseconds to readable format
 * @param {number} ms - Time in milliseconds
 * @returns {string} - Formatted time string
 */
export const formatTime = (ms) => {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
};

/**
 * Get score label based on performance score
 * @param {number} score - Performance score (0-100)
 * @returns {string} - Score label
 */
export const getScoreLabel = (score) => {
  const { GOOD, NEEDS_IMPROVEMENT } = config.PERFORMANCE_THRESHOLDS;
  
  if (score >= GOOD) return 'Fast';
  if (score >= NEEDS_IMPROVEMENT) return 'Average';
  return 'Slow';
};

/**
 * Parse API error and return user-friendly message
 * @param {Error} error - The error object
 * @returns {string} - User-friendly error message
 */
export const parseApiError = (error) => {
  if (error.response?.status === 403) {
    return 'Invalid API key. Please check your Google PageSpeed Insights API key.';
  } else if (error.response?.status === 400) {
    return 'Invalid URL or API request. Please check the URL and try again.';
  } else if (error.response?.status === 429) {
    return 'API quota exceeded. Please try again later.';
  } else {
    return 'Failed to check website speed. Please try again.';
  }
};