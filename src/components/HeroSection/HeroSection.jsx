import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DynamicCard from '../DynamicCard/DynamicCard.jsx';
import { heroCards } from '../../data/heroCardData.js'; // Ensure this path is correct
import styles from './HeroSection.module.css';

function HeroSection() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    // Interval for cycling through dynamic cards
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % heroCards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentCard = heroCards[currentCardIndex];

  // Framer Motion variants for text highlighting (reveal effect)
  const textVariants = {
    hidden: { opacity: 0, x: -20 }, // Animate from left, completely hidden
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.4, ease: "easeIn" } }, // Animate to right on exit
  };

  // Framer Motion variants for staggered reveal of main content (headline, subheadline, buttons)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between child animations
        delayChildren: 0.3,   // Initial delay for first child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={styles.heroSection}>
      {/* Video Background - Ensure 'ripple-effect.mp4' is in src/assets/videos/ */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile autoplay
        className={styles.videoBackground}
        src="/assets/videos/ripple-effect.mp4"
      ></video>
      <div className={styles.videoOverlay}></div> {/* Optional overlay for text readability */}

      <motion.div
        className={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust Indicators - Updated to match homepage.mp4 video content */}
        <motion.div
          className={styles.ratings}
          variants={itemVariants}
        >
          <span>⭐ 4.8 rating on Capterra</span> | <span>⭐ 4.8 rating on G</span> | <span>⭐ 350+ reviews on Xero</span> | <span>⭐ 550+ reviews on Quickbooks</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 className={styles.headline} variants={itemVariants}>
          Create{' '}
          {/* AnimatePresence manages the entering and exiting animations of the highlight word */}
          <AnimatePresence mode="wait" initial={false}> 
           
            <div className={styles.highlightWrapper}>
              <motion.span
                key={currentCard.id} // Key changes to re-trigger the animation
                className={styles.highlight}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {currentCard.text}
              </motion.span>
            </div>
          </AnimatePresence>
          <br /> & consolidations
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className={styles.subheadline}
          variants={itemVariants}
        >
          Now with powerful AI-insights.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className={styles.ctaButtons}
          variants={itemVariants}
        >
          <motion.button
            className={styles.primaryCta}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255, 69, 96, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start 14-day free trial
          </motion.button>
          <motion.a
            href="#features"
            className={styles.secondaryCta}
            whileHover={{ x: 5 }}
          >
            See what we do &rarr;
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Dynamic Product Mockup Card */}
      <motion.div
        className={styles.mockupContainer}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {/* DynamicCard component displays the current card data and image */}
          <DynamicCard key={currentCard.id} data={currentCard} />
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default HeroSection;