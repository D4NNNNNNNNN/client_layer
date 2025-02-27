import React from "react";
import Carousel from "../components/Carousel";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LawyersMap from '../components/LawyersMap';



function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const navigate = useNavigate();

  const specialties = [
    { id: 1, name: 'דיני משפחה', icon: '👨‍👩‍👧‍👦' },
    { id: 2, name: 'דיני עבודה', icon: '💼' },
    { id: 3, name: "נדל\"ן", icon: '🏠' },
    { id: 4, name: 'תעבורה', icon: '🚗' },
    { id: 5, name: 'פלילי', icon: '⚖️' },
    { id: 6, name: 'נזיקין', icon: '🤕' },
    { id: 7, name: 'הוצאה לפועל', icon: '📋' },
    { id: 8, name: 'דיני חברות', icon: '🏢' },
    { id: 9, name: 'דיני ירושה', icon: '📜' },
    { id: 10, name: 'דיני מיסים', icon: '💰' }
  ];

  const locations = ['תל אביב', 'ירושלים', 'חיפה', 'באר שבע', 'אשדוד'];

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (searchQuery) queryParams.append('q', searchQuery);
    if (experience) queryParams.append('experience', experience);
    if (location) queryParams.append('location', location);
    if (specialty) queryParams.append('specialty', specialty);
    navigate(`/search?${queryParams.toString()}`);
  };

  return (
    <div className="home-container">
      <div className="top-section">
        <div className="search-container">
          <h1>מצא את עורך הדין המתאים עבורך</h1>
          <p>אנחנו עוזרים לך למצוא את עורך הדין המושלם לצרכים שלך</p>

          <div className="search-box">
            {!isSearchOpen ? (
              <button 
                className="button search-button"
                onClick={() => setIsSearchOpen(true)}
              >
                🔎 התחל לחפש
              </button>
            ) : (
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="🔍 חפש לפי שם עורך דין..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Carousel />
                
                <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                  <option value="">📌 תחום התמחות</option>
                  {specialties.map((sp) => (
                    <option key={sp.id} value={sp.name}>{sp.icon} {sp.name}</option>
                  ))}
                </select>

                <select value={experience} onChange={(e) => setExperience(e.target.value)}>
                  <option value="">⌛ שנות ניסיון</option>
                  <option value="1-3">1-3 שנים</option>
                  <option value="4-7">4-7 שנים</option>
                  <option value="8-12">8-12 שנים</option>
                  <option value="13+">13+ שנים</option>
                </select>

                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                  <option value="">📍 בחר מיקום</option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc}>{loc}</option>
                  ))}
                </select>

                <button type="submit" className="button">🔍 חפש</button>
              </form>
            )}
          </div>
        </div>

        <div className="map-container">
          <LawyersMap />
        </div>
      </div>
      
      <section className="specialties-section">
        <h2>📌 תחומי התמחות</h2>
        <div className="specialties-grid">
          {specialties.map((sp) => (
            <div 
              key={sp.id} 
              className="specialty-card"
              onClick={() => navigate(`/specialty/${sp.id}`)}
            >
              <span className="specialty-icon">{sp.icon}</span>
              <h3>{sp.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
