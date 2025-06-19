import React from 'react';
import { motion } from 'framer-motion';
import styles from './DynamicCard.module.css';

function DynamicCard({ data }) {
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  return (
    <motion.div
      key={data.id}
      className={styles.dynamicCard}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className={styles.cardHeader}>
        <h3>{data.title}</h3>
      </div>
      <div className={styles.cardBody}>
        {data.imageSrc && (
          <img
            src={data.imageSrc}
            alt={data.title}
            className={styles.cardImage}
          />
        )}
        <p className={styles.cardValue}>{data.value}</p>
      </div>
    </motion.div>
  );
}

export default DynamicCard;
