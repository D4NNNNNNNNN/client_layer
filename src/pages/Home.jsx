import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import LawyersMap from '../components/LawyersMap';
import { lawyersBySpecialty } from './SpecialtyPage';

function Home() {
  // State management
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Constants
  const specialties = [
    { id: 1, name: "דיני משפחה", icon: "👨‍👩‍👧‍👦" },
    { id: 2, name: "דיני עבודה", icon: "💼" },
    { id: 3, name: "נדל'ן", icon: "🏠" },
    { id: 4, name: "תעבורה", icon: "🚗" },
    { id: 5, name: "פלילי", icon: "⚖️" },
    { id: 6, name: "נזיקין", icon: "🤕" },
    { id: 7, name: "הוצאה לפועל", icon: "📋" },
    { id: 8, name: "דיני חברות", icon: "🏢" },
    { id: 9, name: "דיני ירושה", icon: "📜" },
    { id: 10, name: "דיני מיסים", icon: "💰" }
  ];

  // Get all lawyers with their specialty ID
  const getAllLawyers = useMemo(() => {
    const allLawyers = [];
    Object.entries(lawyersBySpecialty).forEach(([specialtyId, lawyers]) => {
      const lawyersWithSpecialty = lawyers.map(lawyer => ({
        ...lawyer,
        specialtyId: Number(specialtyId)
      }));
      allLawyers.push(...lawyersWithSpecialty);
    });
    return allLawyers;
  }, []);

  // Get unique locations
  const locations = useMemo(() => {
    return [...new Set(getAllLawyers.map(lawyer => lawyer.location))].sort();
  }, [getAllLawyers]);

  // Search handling
// ...existing code...

const handleSearch = (e) => {
  e.preventDefault();
  
  const filtered = getAllLawyers.filter(lawyer => {
    const nameMatch = !searchQuery || 
      lawyer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const specialtyMatch = !specialty || 
      specialties.find(sp => sp.name === specialty)?.id === lawyer.specialtyId;
    const locationMatch = !location || 
      lawyer.location === location;
    const experienceMatch = !experience || (
      (experience === '1-5' && lawyer.experience >= 1 && lawyer.experience <= 5) ||
      (experience === '6-10' && lawyer.experience >= 6 && lawyer.experience <= 10) ||
      (experience === '11-20' && lawyer.experience >= 11 && lawyer.experience <= 20) ||
      (experience === '20+' && lawyer.experience > 20)
    );

    return nameMatch && specialtyMatch && locationMatch && experienceMatch;
  });

  // במקום setSearchResults, נשתמש בניווט
  navigate('/search-results', { state: { results: filtered } });
};

// ...existing code...
  return (
    <div className="home-container">
      <div className="top-section">
        <div className="search-container">
          <h1>מצא את עורך הדין המתאים עבורך</h1>
          <p>אנחנו עוזרים לך למצוא את עורך הדין המושלם לצרכים שלך</p>

          <div className="search-box">
            {!isSearchOpen ? (
              <button 
                className="search-button"
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
                
                <select 
                  value={specialty} 
                  onChange={(e) => setSpecialty(e.target.value)}
                >
                  <option value="">📌 תחום התמחות</option>
                  {specialties.map((sp) => (
                    <option key={sp.id} value={sp.name}>
                      {sp.icon} {sp.name}
                    </option>
                  ))}
                </select>

                <select 
                  value={experience} 
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="">⌛ שנות ניסיון</option>
                  <option value="1-5">1-5 שנים</option>
                  <option value="6-10">6-10 שנים</option>
                  <option value="11-20">11-20 שנים</option>
                  <option value="20+">מעל 20 שנים</option>
                </select>

                <select 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">📍 בחר מיקום</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>

                <button type="submit" className="search-button">
                  🔍 חפש
                </button>
              </form>
            )}
          </div>

          {searchResults.length > 0 && (
            <div className="search-results">
              <h2>תוצאות חיפוש</h2>
              <div className="lawyers-grid">
                {searchResults.map(lawyer => (
                  <div key={lawyer.id} className="lawyer-card">
                    <div className="lawyer-header">
                      <span className="lawyer-avatar">{lawyer.image}</span>
                      <h3>{lawyer.name}</h3>
                    </div>
                    <div className="lawyer-info">
                      <p><strong>ניסיון:</strong> {lawyer.experience} שנים</p>
                      <p><strong>מיקום:</strong> {lawyer.location}</p>
                      <div className="expertise-tags">
                        {lawyer.expertise.slice(0, 2).map((exp, index) => (
                          <span key={index} className="expertise-tag">{exp}</span>
                        ))}
                      </div>
                    </div>
                    <div className="lawyer-rating">
                      <span className="stars">{'⭐'.repeat(Math.floor(lawyer.rating))}</span>
                      <span>({lawyer.reviews})</span>
                    </div>
                    <button 
                      className="contact-button"
                      onClick={() => navigate(`/lawyer/${lawyer.id}`)}
                    >
                      צפה בפרופיל
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
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