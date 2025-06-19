// src/components/IntegrationsSection/IntegrationsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './IntegrationsSection.module.css';
import { integrations } from '../../data/integrationsData'; // Import your data

function IntegrationsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1, // Animate children (cards) with a slight delay
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className={styles.integrationsSection}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of section is in view
    >
      <motion.h2 className={styles.sectionTitle} variants={sectionVariants}>
        Seamlessly Integrates with Your Favorite Tools
      </motion.h2>

      <motion.div className={styles.integrationsGrid}>
        {integrations.map((integration) => (
          <motion.div
            key={integration.id}
            className={styles.integrationCard}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }} // Lift and shadow on hover
            whileTap={{ scale: 0.98 }}
          >
            <img src={integration.logo} alt={`${integration.name} Logo`} className={styles.integrationLogo} />
            <p className={styles.integrationName}>{integration.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default IntegrationsSection;