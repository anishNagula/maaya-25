import React, { useState } from 'react';
import styles from './EventsPage.module.css';
import { eventsData } from '../data/eventsData';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';

const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Miscellaneous', 'E-Sports'];

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter(event => 
    activeFilter === 'All' || event.category === activeFilter
  );

  return (
    <>
      <div className={styles.pageContainer}>
        <h1 className={styles.mainTitle}>[ EVENT DATABASE ]</h1>

        <div className={styles.filterContainer}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.gridContainer}>
          {filteredEvents.map(event => (
            <EventCard 
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>
      
      {selectedEvent && (
        <EventModal 
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

export default EventsPage;