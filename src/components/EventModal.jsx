import React, { useEffect } from 'react';
import styles from './EventModal.module.css';

const EventModal = ({ event, onClose }) => {
  // useEffect hook to handle the 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener when the modal is mounted
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the modal is unmounted
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]); // Dependency array ensures this only runs if onClose changes

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