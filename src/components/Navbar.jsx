import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.brand}>
          MAAYA '25
        </NavLink>
        <div className={styles.navLinks}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Events</NavLink>
          <NavLink to="/concert" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Concert</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Maaya'24</NavLink>
          <NavLink to="/announcements" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Announcements</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;