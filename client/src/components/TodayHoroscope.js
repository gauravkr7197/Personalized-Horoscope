import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const TodayHoroscope = ({ user }) => {
  const [horoscope, setHoroscope] = useState(null);
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

  const fetchHoroscope = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/horoscope/today', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setHoroscope(response.data.data);
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to fetch horoscope';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHoroscope();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p style={{ marginTop: '1rem', color: 'white' }}>Reading the stars...</p>
      </div>
    );
  }

  if (!horoscope) {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>Unable to fetch horoscope</h2>
        <p>Please try again later.</p>
        <button onClick={fetchHoroscope} className="btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>
          Today's Horoscope for {user.zodiacSign}
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <div className="zodiac-card">
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          {getZodiacEmoji(horoscope.zodiacSign)}
        </div>
        <h2>{horoscope.zodiacSign}</h2>
        <div className="content">
          {horoscope.content}
        </div>
        <div>
          <span className="mood">
            {getMoodEmoji(horoscope.mood)} {horoscope.mood}
          </span>
          <span className="lucky-number">
            🍀 Lucky Number: {horoscope.luckyNumber}
          </span>
        </div>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
          What's Next?
        </h3>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/history" className="btn" style={{ background: '#28a745' }}>
            📚 View Past Horoscopes
          </Link>
          <Link to="/" className="btn">
            🏠 Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="card" style={{ background: '#f8f9fa' }}>
        <h4 style={{ color: '#333', marginBottom: '1rem' }}>Daily Tips:</h4>
        <ul style={{ color: '#666', textAlign: 'left' }}>
          <li>🌟 Start your day with positive intentions</li>
          <li>🧘 Take a moment to reflect on your goals</li>
          <li>💫 Trust your intuition in decision-making</li>
          <li>🌙 Check back tomorrow for new insights</li>
        </ul>
      </div>
    </div>
  );
};

export default TodayHoroscope; 