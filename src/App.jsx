import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // Make sure this is imported
import HeroSection from './components/HeroSection/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection/FeaturesSection.jsx';
import IntegrationsSection from './components/IntegrationsSection/IntegrationsSection.jsx';
import CustomersSection from './components/CustomersSection/CustomersSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loader from './components/Loader/Loader.jsx'; // Make sure this import is correct

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Check initial state is true
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate a loading process
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2; // Increment progress by 2%
      if (progress <= 100) {
        setLoadingProgress(progress);
      } else {
        clearInterval(interval);
        // Add a slight delay before hiding the loader to ensure 100% is seen
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    }, 50); // Update every 50ms for a smooth animation

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    // AnimatePresence is crucial for the exit animation of the Loader
    <AnimatePresence>
      {isLoading ? ( // This conditional rendering determines if loader shows
        <Loader loadingProgress={loadingProgress} />
      ) : (
        // Only render main content once loading is complete
        <div className="App">
          <HeroSection />
          <FeaturesSection />
          <IntegrationsSection />
          <CustomersSection />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;