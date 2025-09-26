import React, { useEffect } from 'react';
import styles from './EventModal.module.css';

const EventModal = ({ event, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!event) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h1 className={styles.modalTitle}>{event.title}</h1>
        <p className={styles.modalDescription}>{event.description}</p>
        
        <div className={styles.modalDetails}>
          <p><strong>Registration Fee:</strong> {event.registrationFee}</p>
          <p><strong>Prize Pool:</strong> {event.prizePool}</p>
        </div>

        <button className={styles.registerButton}>Register Now</button>
      </div>
    </div>
  );
};

export default EventModal;