// App.jsx - Updated with CSS imports
import { useState } from 'react';
import './App.css'; // This imports all the modular CSS files

// Components
import Header from './components/Header';
import UrlInput from './components/UrlInput';
import LoadingSpinner from './components/LoadingSpinner';
import Results from './components/Results';
import Footer from './components/Footer';

// Feature Components
import TestHistory from './components/features/TestHistory';
import ShareResults from './components/features/ShareResults';

// Services and utilities
import { checkWebsiteSpeed } from './services/apiService';
import { validateUrl, formatUrl, parseApiError } from './utils/utils';

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [speedData, setSpeedData] = useState(null);

  const handleSpeedCheck = async () => {
    // Validate URL
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    // Reset states
    setLoading(true);
    setError('');
    setSpeedData(null);

    try {
      const formattedUrl = formatUrl(url);
      const data = await checkWebsiteSpeed(formattedUrl);
      setSpeedData(data);
    } catch (err) {
      const errorMessage = parseApiError(err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        
        <UrlInput
          url={url}
          setUrl={setUrl}
          onCheck={handleSpeedCheck}
          loading={loading}
          error={error}
        />

        {loading && <LoadingSpinner />}
        
        {speedData && (
          <>
            <Results speedData={speedData} />
            <ShareResults speedData={speedData} />
          </>
        )}
        
        <TestHistory currentTest={speedData} />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;