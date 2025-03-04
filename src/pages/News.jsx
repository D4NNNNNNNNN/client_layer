import React from 'react';
import '../styles/News.css';

function News() {
    const newsData = [
        {
            category: "חדשות משפטיות",
            date: "21.03.2024",
            title: "תקדים משפטי: פסיקה חדשה בנושא דיני עבודה",
            content: "בית המשפט העליון קבע הלכה חדשה בנושא זכויות עובדים בעידן העבודה מרחוק",
            image: "🏛️",
            tags: ["בית משפט עליון", "דיני עבודה", "תקדים"]
        },
        {
            category: "עדכוני חקיקה",
            date: "19.03.2024",
            title: "חוק חדש בתחום הנדל\"ן נכנס לתוקף",
            content: "הכנסת אישרה חוק חדש המסדיר את נושא השכירות ההוגנת בישראל",
            image: "📜",
            tags: ["חקיקה", "נדל\"ן", "דיור"]
        },
        {
            category: "מאמרים משפטיים",
            date: "15.03.2024",
            title: "השפעת הבינה המלאכותית על עולם המשפט",
            content: "סקירה מקיפה של השינויים הצפויים בעולם המשפט עם כניסת טכנולוגיות AI",
            image: "🤖",
            tags: ["טכנולוגיה", "חדשנות", "עתיד המשפט"]
        },
        {
            category: "עדכוני פסיקה",
            date: "12.03.2024",
            title: "פסק דין תקדימי בתחום דיני המשפחה",
            content: "בית המשפט לענייני משפחה קבע הלכה חדשה בנושא הסדרי ראייה",
            image: "⚖️",
            tags: ["דיני משפחה", "פסיקה", "הסדרי ראייה"]
        },
        {
            category: "כנסים והרצאות",
            date: "10.03.2024",
            title: "כנס שנתי בנושא משפט וטכנולוגיה",
            content: "הכנס השנתי יתקיים בחודש הבא ויעסוק בהשפעות הטכנולוגיה על עולם המשפט",
            image: "🎯",
            tags: ["כנס", "טכנולוגיה", "נטוורקינג"]
        }
    ];

    return (
        <div className="news-container">
            <div className="news-header">
                <h1>📰 חדשות ועדכונים משפטיים</h1>
                <p className="header-description">
                    עדכונים שוטפים מעולם המשפט: פסיקות חדשות, שינויי חקיקה, מאמרים וכנסים
                </p>
            </div>

            <div className="news-grid">
                {newsData.map((item, index) => (
                    <article key={index} className="news-card">
                        <div className="news-card-header">
                            <span className="news-icon">{item.image}</span>
                            <span className="news-category">{item.category}</span>
                            <span className="news-date">{item.date}</span>
                        </div>

                        <div className="news-content">
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>

                        <div className="news-tags">
                            {item.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="tag">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default News;