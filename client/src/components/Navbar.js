import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>✨ Personalized Horoscope</h1>
        </Link>
        <div className="nav-links">
          {user ? (
            <>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Dashboard
              </Link>
              <Link to="/today" className={location.pathname === '/today' ? 'active' : ''}>
                Today's Horoscope
              </Link>
              <Link to="/history" className={location.pathname === '/history' ? 'active' : ''}>
                History
              </Link>
              <div className="user-info">
                <span>
                  Welcome, {user.name} ({user.zodiacSign})
                </span>
                <button onClick={onLogout} className="btn" style={{ background: '#e74c3c' }}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                Login
              </Link>
              <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 