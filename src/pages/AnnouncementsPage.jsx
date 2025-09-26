import React from 'react';
import styles from './AnnouncementsPage.module.css';

const AnnouncementsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.mainTitle}>[ LATEST TRANSMISSIONS ]</h1>
      
      <div className={styles.announcementCard}>
        <h2 className={styles.cardTitle}>
          Maaya 2025 - 10th & 11th October
        </h2>
        <div className={styles.cardMeta}>
          <p>Event: Maaya</p>
          <p>Posted on 18 September 2025</p>
        </div>
      </div>

    </div>
  );
};

export default AnnouncementsPage;