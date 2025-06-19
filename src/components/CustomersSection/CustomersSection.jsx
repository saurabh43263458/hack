import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'; // Correct path for hook
import { testimonials } from '../../data/customerTestimonials.js'; // Correct path for data
import styles from './CustomersSection.module.css';

function CustomersSection() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className={`${styles.customersSection} section-padding`}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Trusted by Industry Leaders
      </motion.h2>

      <motion.div
        className={styles.testimonialsGrid}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {testimonials.map(testimonial => (
          <motion.div key={testimonial.id} className={styles.testimonialCard} variants={itemVariants}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <p className={styles.quoteText}>{testimonial.quote}</p>
            <div className={styles.authorInfo}>
              {testimonial.logo && <img src={testimonial.logo} alt={`${testimonial.author} logo`} className={styles.authorLogo} />}
              <div>
                <p className={styles.authorName}>{testimonial.author}</p>
                <p className={styles.authorTitle}>{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className={`${styles.meetCustomersBtn} ${styles.secondaryCta}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Meet Our Customers &rarr;
      </motion.button>
    </section>
  );
}

export default CustomersSection;