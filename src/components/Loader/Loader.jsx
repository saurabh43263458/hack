import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

function Loader({ loadingProgress }) {
  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.5 } }} // Fade out
    >
      <div className={styles.spinner}>
        {/* You can replace this with a more complex spinner if desired */}
        <motion.div
          className={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: `${loadingProgress}%` }}
          transition={{ duration: 0.1, ease: "linear" }} // Quick update for progress bar
        ></motion.div>
      </div>
      <p className={styles.percentage}>
        {Math.round(loadingProgress)}%
      </p>
    </motion.div>
  );
}

export default Loader;