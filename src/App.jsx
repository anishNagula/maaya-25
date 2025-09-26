import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ConcertPage from './pages/ConcertPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar className="navbar"/>
        <main className="content-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/announcements" element={<AnnouncementsPage/>} />
            <Route path="/concert" element={<ConcertPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;