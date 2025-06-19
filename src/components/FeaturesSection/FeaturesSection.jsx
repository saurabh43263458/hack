import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'; // Correct path for hook
import FeaturesTabContent from './FeaturesTabContent.jsx'; // Correct path for component
import { features } from '../../data/featuresData.js'; // Correct path for data
import styles from './FeaturesSection.module.css';

function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(features[0].id); // Set initial active tab
  const [ref, isVisible] = useScrollAnimation(0.2); // Animate when 20% visible

  return (
    <section id="features" ref={ref} className={`${styles.featuresSection} section-padding`}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Powerful Features for Your Business
      </motion.h2>

      <motion.div
        className={styles.tabsContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <nav className={styles.tabsNav}>
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              className={`${styles.tabButton} ${activeTab === feature.id ? styles.active : ''}`}
              onClick={() => setActiveTab(feature.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={feature.icon} alt={feature.name} className={styles.tabIcon} />
              {feature.name}
            </motion.button>
          ))}
        </nav>

        <div className={styles.tabContentArea}>
          <AnimatePresence mode="wait">
            {features.map((feature) =>
              activeTab === feature.id && (
                <FeaturesTabContent key={feature.id} feature={feature} />
              )
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.button
        className={`${styles.bookMeetingButton} ${styles.primaryCta}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Book A Meeting
      </motion.button>
    </section>
  );
}

export default FeaturesSection;