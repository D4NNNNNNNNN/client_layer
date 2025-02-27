import React from 'react';
import '../styles/Pages.css';


function Info() {
  const infoCategories = [
    {
      id: 1,
      title: "זכויות בסיסיות",
      icon: "⚖️",
      items: [
        {
          title: "זכויות עובדים",
          content: "מידע על שכר מינימום, שעות עבודה, חופשה שנתית ודמי הבראה",
          link: "/workers-rights"
        },
        {
          title: "זכויות צרכנים",
          content: "מדריך להגנת הצרכן, ביטול עסקה וזכויות במקרה של מוצר פגום",
          link: "/consumer-rights"
        },
        {
          title: "זכויות בדיור",
          content: "מידע על זכויות שוכרים, בעלי דירות ודיירים מוגנים",
          link: "/housing-rights"
        }
      ]
    },
    {
      id: 2,
      title: "טפסים ומסמכים",
      icon: "📄",
      items: [
        {
          title: "טפסים משפטיים",
          content: "טפסים נפוצים להורדה: תביעות קטנות, צוואות ועוד",
          link: "/legal-forms"
        },
        {
          title: "חוזים לדוגמה",
          content: "חוזי שכירות, הסכמי עבודה והסכמים נפוצים אחרים",
          link: "/contracts"
        },
        {
          title: "מכתבים משפטיים",
          content: "תבניות למכתבי התראה ופניות רשמיות",
          link: "/legal-letters"
        }
      ]
    },
    {
      id: 3,
      title: "מדריכים משפטיים",
      icon: "📚",
      items: [
        {
          title: "הליכים משפטיים",
          content: "מדריך מקיף להבנת ההליך המשפטי על שלביו השונים",
          link: "/legal-process"
        },
        {
          title: "בתי משפט",
          content: "מידע על מערכת בתי המשפט וסמכויותיהם",
          link: "/courts"
        },
        {
          title: "הוצאה לפועל",
          content: "מדריך להליכי הוצאה לפועל וגביית חובות",
          link: "/execution"
        }
      ]
    }
  ];

  return (
    <div className="info-container">
      <h1>מידע שימושי</h1>
      <div className="info-grid">
        {infoCategories.map(category => (
          <div key={category.id} className="info-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="info-items">
              {category.items.map((item, index) => (
                <div key={index} className="info-item">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <a href={item.link} className="info-link">
                    קרא עוד
                    <span className="arrow">←</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;