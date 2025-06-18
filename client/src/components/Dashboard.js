import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const getZodiacEmoji = (zodiacSign) => {
    const emojis = {
      'Aries': '♈',
      'Taurus': '♉',
      'Gemini': '♊',
      'Cancer': '♋',
      'Leo': '♌',
      'Virgo': '♍',
      'Libra': '♎',
      'Scorpio': '♏',
      'Sagittarius': '♐',
      'Capricorn': '♑',
      'Aquarius': '♒',
      'Pisces': '♓'
    };
    return emojis[zodiacSign] || '✨';
  };

  return (
    <div className="dashboard">
      <h2>Welcome to Your Horoscope Journey</h2>
      <p className="welcome">
        Discover what the stars have in store for you today, {user.name}!
      </p>

      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            {getZodiacEmoji(user.zodiacSign)}
          </div>
          <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>
            {user.zodiacSign}
          </h3>
          <p style={{ color: '#666' }}>
            Your personalized horoscope awaits
          </p>
        </div>

        <div className="actions">
          <Link to="/today" className="btn">
            🌟 Get Today's Horoscope
          </Link>
          <Link to="/history" className="btn" style={{ background: '#28a745' }}>
            📚 View History
          </Link>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <h4 style={{ color: '#333', marginBottom: '1rem' }}>Quick Facts:</h4>
          <ul style={{ textAlign: 'left', color: '#666' }}>
            <li>✨ Your zodiac sign: <strong>{user.zodiacSign}</strong></li>
            <li>📧 Email: <strong>{user.email}</strong></li>
            <li>🎯 Daily horoscopes are personalized just for you</li>
            <li>📅 Check back daily for new insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 