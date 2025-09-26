import React from 'react';
import styles from './HomePage.module.css';

const symbolData = [
  // ... your symbol data remains unchanged
  { char: '!', top: '10%', left: '15%', color: '#09FE31', size: '2.5rem' },
  { char: '@', top: '15%', left: '85%', color: '#FFFFFF', size: '1.2rem' },
  { char: '#', top: '85%', left: '10%', color: '#FFFFFF', size: '2rem' },
  { char: '$', top: '80%', left: '80%', color: '#09FE31', size: '1.5rem' },
  { char: '%', top: '50%', left: '5%',  color: '#09FE31', size: '1.8rem' },
  { char: '^', top: '45%', left: '90%', color: '#FFFFFF', size: '2.2rem' },
  { char: '&', top: '5%',  left: '50%', color: '#FFFFFF', size: '1rem' },
  { char: '*', top: '90%', left: '45%', color: '#09FE31', size: '1.6rem' },
  { char: '?', top: '25%', left: '70%', color: '#09FE31', size: '2.8rem' },
  { char: '+', top: '70%', left: '25%', color: '#FFFFFF', size: '1.4rem' },
  { char: '=', top: '30%', left: '30%', color: '#09FE31', size: '1.1rem' },
];

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.symbolContainer}>
        {symbolData.map((item, index) => (
          <p 
            key={index}
            className={styles.symbol}
            style={{
              top: item.top, 
              left: item.left,
              color: item.color,
              fontSize: item.size,
            }}
          >
            {item.char}
          </p> 
        ))}
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title} data-text="RETRONOMIA">
          Retronomia
        </h1>
        <p className={styles.subtitle}>
          The future is retro. The annual fest is back.
        </p>
        <button className={styles.actionButton}>
          EXPLORE THE UNKNOWN
        </button>
      </div>

      {/* --- NEW FOOTER ELEMENT --- */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Maaya'25</h3>
            <p className={styles.footerText}>
              PES University <br />
              VM67+HVP, Hosur Rd <br />
              Konappana Agrahara, Electronic City <br />
              Bengaluru, Karnataka 560100
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <p className={styles.footerText}>
              Divyansh Sharma: +91 70220 17279 <br />
              Himank Jain : +91 95022 81002
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;