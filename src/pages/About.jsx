import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">אודות LawLink</h1>
                <p className="about-subtitle">
                    פלטפורמה חכמה המחברת בין לקוחות לעורכי דין, ומנגישה שירותים משפטיים לכל אזרח בישראל
                </p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <div className="section-card">
                        <h2>👨‍⚖ מי אנחנו</h2>
                        <p>
                            LawLink היא מערכת חכמה מבוססת AI שמאפשרת חיפוש עורכי דין בצורה מהירה, יעילה ומותאמת אישית.
                            הפלטפורמה שלנו מחברת לקוחות עם עורכי דין מומחים על בסיס:
                        </p>
                        <ul className="features-list">
                            <li>התאמה מדויקת לתחום ההתמחות הנדרש</li>
                            <li>מיקום גיאוגרפי ונגישות</li>
                            <li>זמינות ולוח זמנים גמיש</li>
                            <li>דירוג ומשובי לקוחות קודמים</li>
                            <li>ניסיון וותק מקצועי</li>
                        </ul>
                    </div>
                </section>

                <section className="about-section">
                    <div className="section-card">
                        <h2>🎯 החזון שלנו</h2>
                        <p>
                            להפוך את השירות המשפטי לנגיש, יעיל ושקוף לכל אזרח בישראל.
                            אנו שואפים ליצור מהפכה בעולם המשפטי באמצעות:
                        </p>
                        <div className="vision-grid">
                            <div className="vision-item">
                                <h3>🤝 נגישות</h3>
                                <p>הנגשת שירותים משפטיים לכל שכבות האוכלוסייה</p>
                            </div>
                            <div className="vision-item">
                                <h3>💡 חדשנות</h3>
                                <p>שילוב טכנולוגיות מתקדמות בעולם המשפט</p>
                            </div>
                            <div className="vision-item">
                                <h3>⚖️ שקיפות</h3>
                                <p>מידע מלא ושקוף על שירותים ומחירים</p>
                            </div>
                            <div className="vision-item">
                                <h3>🎯 דיוק</h3>
                                <p>התאמה מדויקת בין לקוח לעורך דין</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <div className="section-card">
                        <h2>📜 הערכים שלנו</h2>
                        <div className="values-container">
                            <div className="value-card">
                                <span className="value-icon">✅</span>
                                <h3>מקצועיות</h3>
                                <p>סטנדרטים גבוהים של שירות ומקצועיות ללא פשרות</p>
                            </div>
                            <div className="value-card">
                                <span className="value-icon">🔍</span>
                                <h3>שקיפות</h3>
                                <p>מידע מלא ושקוף בכל שלבי תהליך הבחירה</p>
                            </div>
                            <div className="value-card">
                                <span className="value-icon">⚡</span>
                                <h3>זמינות</h3>
                                <p>שירות זמין ונגיש 24/7 לכל פנייה</p>
                            </div>
                            <div className="value-card">
                                <span className="value-icon">💡</span>
                                <h3>חדשנות</h3>
                                <p>שימוש בטכנולוגיות מתקדמות לשיפור השירות</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;