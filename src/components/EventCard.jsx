import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ event, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick} role="button" tabIndex="0">
      <img src={event.image} alt={event.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{event.title}</h2>
        <p className={styles.cardCategory}>{event.category}</p>
      </div>
    </div>
  );
};

export default EventCard;