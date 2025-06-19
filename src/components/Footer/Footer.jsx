import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.footerBrand}>
          <h3>YourCompany</h3>
          <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
        <div className={styles.footerLinks}>
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#customers">Customers</a></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <h4>Resources</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className={styles.footerSocial}>
          <h4>Connect</h4>
          {/* Replace with actual social media icons/links */}
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;