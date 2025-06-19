import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturesSection.module.css'; // Use parent's styles for consistency

function FeaturesTabContent({ feature }) {
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.div
      className={styles.featureContent}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.featureDetails}>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <ul className={styles.detailList}>
          {feature.details.map((detail, index) => (
            <li key={index}>
              <strong>{detail.label}:</strong> {detail.value}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.featureImageContainer}>
        {feature.image && (
          <img src={feature.image} alt={feature.title} className={styles.featureImage} />
        )}
      </div>
    </motion.div>
  );
}

export default FeaturesTabContent;