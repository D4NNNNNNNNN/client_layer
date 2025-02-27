import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { logout, isLoggedIn } from '../Api/api';
import AddLawyerModal from './AddLawyerModal';

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [showAddLawyerModal, setShowAddLawyerModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // בדיקת סטטוס התחברות בכל פעם שהקומפוננטה מתרנדרת
    setLoggedIn(isLoggedIn());
    // בדיקת הרשאות אדמין
    const userData = JSON.parse(localStorage.getItem('userData'));
    setIsAdmin(userData?.Permission === 'admin');
  }, []);

  const handleAuthClick = () => {
    if (loggedIn) {
      // התנתקות
      logout();
      setLoggedIn(false);
      setIsAdmin(false);
      navigate('/login');
    } else {
      // מעבר לדף התחברות
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* לוגו + קישור לדף הבית */}
        <Link to="/" className="navbar-logo">LawLink</Link>

        {/* תפריט הניווט */}
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-links">🏠 דף הבית</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-links">ℹ️ אודות</Link></li>
          <li className="nav-item"><Link to="/articles" className="nav-links">📖 מאמרים משפטיים</Link></li>
          <li className="nav-item"><Link to="/news" className="nav-links">📰 חדשות ועדכונים</Link></li>
          <li className="nav-item"><Link to="/faq" className="nav-links">❓ שאלות ותשובות</Link></li>
          <li className="nav-item"><Link to="/info" className="nav-links">📚 מידע שימושי</Link></li>
          <li className="nav-item"><Link to="/specialties" className="nav-links">⚖️ תחומי התמחות</Link></li>
          <li className="nav-item"><Link to="/meeting" className="nav-links"> 📅 פגישה  </Link></li>
          <li className="nav-item">
            <Link to="/map" className="nav-links">🗺️ מפת עורכי דין</Link>
          </li>
          {!loggedIn && (
            <li className="nav-item"><Link to="/register" className="nav-links">👤 הרשמה</Link></li>
          )}
          {isAdmin && (
            <li className="nav-item">
              <Link to="/admin" className="nav-links admin-link">👑 ניהול</Link>
            </li>
          )}
        </ul>

        <div className="auth-controls">
          {loggedIn && (
            <button 
              className="add-lawyer-button" 
              onClick={() => setShowAddLawyerModal(true)}
            >
              ➕
            </button>
          )}
          <button className="auth-button" onClick={handleAuthClick}>
            {loggedIn ? 'התנתק' : 'התחבר'}
          </button>
        </div>

        {showAddLawyerModal && (
          <AddLawyerModal onClose={() => setShowAddLawyerModal(false)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
