import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/SearchResults.css';

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { results } = location.state || { results: [] };

  return (
    <div className="search-results-page">
      <div className="search-results-header">
        <button onClick={() => navigate('/')} className="back-button">
          חזור לחיפוש
        </button>
        <h1>תוצאות חיפוש</h1>
      </div>
      <div className="lawyers-grid">
        {results.map(lawyer => (
          <div key={lawyer.id} className="lawyer-card">
            <div className="lawyer-header">
              <span className="lawyer-avatar">{lawyer.image}</span>
              <h3>{lawyer.name}</h3>
            </div>
            <div className="lawyer-info">
              <p><strong>ניסיון:</strong> {lawyer.experience} שנים</p>
              <p><strong>מיקום:</strong> {lawyer.location}</p>
              <div className="expertise-tags">
                {lawyer.expertise.map((exp, index) => (
                  <span key={index} className="expertise-tag">{exp}</span>
                ))}
              </div>
            </div>
            <div className="lawyer-rating">
              <span className="stars">{'⭐'.repeat(Math.floor(lawyer.rating))}</span>
              <span>({lawyer.reviews})</span>
            </div>
            <button className="contact-button">
              צור קשר
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;