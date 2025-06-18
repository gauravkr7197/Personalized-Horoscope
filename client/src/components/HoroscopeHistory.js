import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const HoroscopeHistory = ({ user }) => {
  const [horoscopes, setHoroscopes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const getMoodEmoji = (mood) => {
    const emojis = {
      'Positive': '😊',
      'Neutral': '😐',
      'Challenging': '😔'
    };
    return emojis[mood] || '✨';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/horoscope/history', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setHoroscopes(response.data.data);
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to fetch horoscope history';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p style={{ marginTop: '1rem', color: 'white' }}>Loading your horoscope history...</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>
          Your Horoscope History
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          Last 7 days of personalized horoscopes for {user.zodiacSign}
        </p>
      </div>

      {horoscopes.length === 0 ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {getZodiacEmoji(user.zodiacSign)}
          </div>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
            No horoscope history yet
          </h3>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            Start your journey by getting your first horoscope today!
          </p>
          <Link to="/today" className="btn">
            🌟 Get Today's Horoscope
          </Link>
        </div>
      ) : (
        <div>
          {horoscopes.map((horoscope, index) => (
            <div key={index} className="history-item">
              <div className="date">
                📅 {formatDate(horoscope.date)}
              </div>
              <div className="content">
                {horoscope.content}
              </div>
              <div className="meta">
                <span>
                  {getMoodEmoji(horoscope.mood)} {horoscope.mood}
                </span>
                <span>
                  🍀 Lucky Number: {horoscope.luckyNumber}
                </span>
                <span>
                  {getZodiacEmoji(horoscope.zodiacSign)} {horoscope.zodiacSign}
                </span>
              </div>
            </div>
          ))}

          <div className="card" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
              Keep the Magic Going
            </h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/today" className="btn">
                🌟 Get Today's Horoscope
              </Link>
              <Link to="/" className="btn" style={{ background: '#6c757d' }}>
                🏠 Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="card" style={{ background: '#f8f9fa', marginTop: '2rem' }}>
        <h4 style={{ color: '#333', marginBottom: '1rem' }}>About Your History:</h4>
        <ul style={{ color: '#666', textAlign: 'left' }}>
          <li>📚 This shows your last 7 days of horoscopes</li>
          <li>🔄 New horoscopes are generated daily</li>
          <li>💫 Each horoscope is unique to your zodiac sign</li>
          <li>🌟 Check back daily to build your collection</li>
        </ul>
      </div>
    </div>
  );
};

export default HoroscopeHistory; 