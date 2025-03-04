import React from 'react';
import '../styles/Specialties.css';

function Specialties() {
    const specialtiesData = [
        {
            icon: "⚖",
            title: "דיני משפחה",
            description: "ליווי מקצועי ורגיש בהליכי משפחה",
            services: [
                { title: "גירושין", text: "ייצוג בהליכי גירושין, הסכמי גירושין והליכי בית דין" },
                { title: "משמורת", text: "טיפול בסוגיות משמורת והסדרי ראייה" },
                { title: "מזונות", text: "ייצוג בתביעות מזונות ילדים ובן/בת זוג" },
                { title: "ירושה", text: "טיפול בצוואות, ירושות וחלוקת רכוש" },
                { title: "אפוטרופסות", text: "הסדרת אפוטרופסות וייצוג בהליכים משפטיים" }
            ]
        },
        {
            icon: "💼",
            title: "דיני עבודה",
            description: "הגנה על זכויות עובדים ומעסיקים",
            services: [
                { title: "זכויות עובדים", text: "ייצוג בתביעות לזכויות עובדים ותנאי העסקה" },
                { title: "הסכמי עבודה", text: "ניסוח וייעוץ בהסכמי העסקה ושכר" },
                { title: "פיטורין", text: "ליווי בהליכי פיטורין והתפטרות" },
                { title: "הטרדות", text: "טיפול בתלונות הטרדה ואפליה במקום העבודה" },
                { title: "תביעות", text: "ייצוג בבתי הדין לעבודה" }
            ]
        },
        {
            icon: "🏠",
            title: "נדל\"ן",
            description: "ליווי עסקאות נדל\"ן מכל הסוגים",
            services: [
                { title: "עסקאות מכר", text: "ליווי ברכישה ומכירה של נכסים" },
                { title: "תמ\"א 38", text: "ייעוץ וליווי בפרויקטי תמ\"א 38" },
                { title: "שכירות", text: "הסכמי שכירות והגנת הדייר" },
                { title: "תכנון ובנייה", text: "טיפול בהיתרי בנייה וזכויות בנייה" },
                { title: "מיסוי", text: "ייעוץ במיסוי מקרקעין ומס שבח" }
            ]
        },
        {
            icon: "🚗",
            title: "תעבורה",
            description: "ייצוג בעבירות תנועה ותאונות דרכים",
            services: [
                { title: "עבירות תנועה", text: "ייצוג בתיקי תעבורה ועבירות מהירות" },
                { title: "שלילת רישיון", text: "טיפול בשלילות רישיון והחזרת רישיון" },
                { title: "תאונות דרכים", text: "ייצוג בתביעות נזיקין ופיצויים" },
                { title: "נהיגה בשכרות", text: "הגנה בתיקי נהיגה תחת השפעת אלכוהול" },
                { title: "נקודות", text: "טיפול בצבירת נקודות ופסילות מנהליות" }
            ]
        },
        {
            icon: "⚖",
            title: "משפט פלילי",
            description: "הגנה וייצוג בהליכים פליליים",
            services: [
                { title: "ייצוג בפלילים", text: "הגנה בכל סוגי התיקים הפליליים" },
                { title: "חקירות", text: "ליווי בחקירות משטרה והליכי מעצר" },
                { title: "צווארון לבן", text: "הגנה בעבירות כלכליות ומס" },
                { title: "ערעורים", text: "הגשת ערעורים לערכאות גבוהות" },
                { title: "מחיקת רישום", text: "טיפול במחיקת רישום פלילי" }
            ]
        }
    ];

    return (
        <div className="specialties-container">
            <div className="specialties-header">
                <h1>📌 תחומי התמחות</h1>
                <p className="header-description">
                    אנו מציעים מגוון רחב של שירותים משפטיים מקצועיים,
                    עם צוות מומחים בעל ניסיון רב בכל תחומי המשפט
                </p>
            </div>

            <div className="specialties-grid">
                {specialtiesData.map((specialty, index) => (
                    <div key={index} className="specialty-card">
                        <div className="specialty-header">
                            <span className="specialty-icon">{specialty.icon}</span>
                            <h2>{specialty.title}</h2>
                        </div>
                        <p className="specialty-description">{specialty.description}</p>
                        <div className="services-list">
                            {specialty.services.map((service, serviceIndex) => (
                                <div key={serviceIndex} className="service-item">
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Specialties;