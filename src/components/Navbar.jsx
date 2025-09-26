import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu (used when a link is clicked)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.brand} onClick={closeMenu}>
          MAAYA '25
        </NavLink>

        {/* Hamburger Menu Button - only visible on mobile */}
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            // "X" (Close) Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            // "Hamburger" Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Events</NavLink>
          <NavLink to="/announcements" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Announcements</NavLink>
          <NavLink to="/concert" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Concert</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Maaya'24</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;