import React from 'react';
import '../styles/About.css'; // קובץ CSS מסודר

function About() {
  let x = 6; 
  return (
    <div className="about-container">
      <h1 className="about-title">אודות LawLink</h1>
      <p className="about-subtitle">
        פלטפורמה חכמה המחברת בין לקוחות לעורכי דין, ומנגישה שירותים משפטיים לכל אזרח.
      </p>

      <div className="about-content">
        {/* מי אנחנו */}
        <section className="about-section">
          <h2>👨‍⚖️ מי אנחנו</h2>
          <p>
            LawLink היא מערכת חכמה שמאפשרת חיפוש עורכי דין בצורה מהירה, יעילה ומותאמת אישית. 
            הפלטפורמה שלנו מחברת לקוחות עם עורכי דין מומחים על בסיס תחום התמחות, אזור וזמינות.
          </p>
        </section>

        {/* החזון שלנו */}
        <section className="about-section">
          <h2>🎯 החזון שלנו</h2>
          <p>
            להפוך את השירות המשפטי לנגיש, יעיל ושקוף לכל אזרח. 
            אנו מתחייבים לשפר את הדרך בה אנשים מוצאים ייעוץ משפטי באמצעות טכנולוגיה מתקדמת.
          </p>
        </section>

        {/* הערכים שלנו */}
        <section className="about-section">
          <h2>📜 הערכים שלנו</h2>
          <ul className="about-values">
            <li>✅ מקצועיות ושירות ללא פשרות</li>
            <li>✅ שקיפות מלאה בתהליך הבחירה</li>
            <li>✅ זמינות ונגישות לכל משתמש</li>
            <li>✅ חדשנות טכנולוגית לייעול השירותים</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
