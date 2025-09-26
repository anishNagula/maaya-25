import React from 'react';
import styles from './ConcertPage.module.css';

const ConcertPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.mainTitle}>[ MAAYA \'25 HEADLINER ]</h1>
      
      <div className={styles.ticket}>
        <div className={styles.ticketContent}>
          <p className={styles.ticketLabel}>ADMIT ONE</p>
          <h2 className={styles.comingSoonText}>
            Coming Soon
          </h2>
          <p className={styles.ticketSmallText}>Artist reveal incoming...</p>
        </div>
        <div className={styles.ticketPerforation}></div>
        <div className={styles.ticketStub}>
            <p className={styles.stubText}>MAAYA'25</p>
            <div className={styles.barcode}></div>
            <p className={styles.stubText}>#RETRONOMIA</p>
        </div>
      </div>

    </div>
  );
};

export default ConcertPage;