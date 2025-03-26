import React, { useState } from 'react';
import '../styles/Pages.css';


function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "?איך בוחרים עורך דין מתאים",
      answer: "בחירת עורך דין מתאימה תלויה במספר גורמים: תחום ההתמחות הספציפי, ניסיון, מוניטין, זמינות ותקציב. מומלץ לקרוא המלצות, לבדוק ניסיון קודם ולקיים פגישת היכרות ראשונית."
    },
    {
      id: 2,
      question: "?מה העלות הממוצעת של ייעוץ משפטי",
      answer: "העלות משתנה בהתאם לסוג השירות, מורכבות התיק והניסיון של עורך הדין. ישנם עורכי דין הגובים לפי שעה ואחרים לפי תיק. מומלץ לברר מראש את מבנה שכר הטרחה."
    },
    {
      id: 3,
      question: "?כמה זמן לוקח הליך משפטי ממוצע",
      answer: "משך ההליך המשפטי תלוי בסוג התיק ומורכבותו. תיקים פשוטים יכולים להסתיים תוך מספר חודשים, בעוד תיקים מורכבים עשויים להימשך שנה ויותר."
    },
    {
      id: 4,
      question: "?האם אפשר להחליף עורך דין באמצע הליך",
      answer: "כן, ניתן להחליף עורך דין במהלך ההליך המשפטי. עם זאת, חשוב לקחת בחשבון את ההשלכות של החלפה כזו על התיק ועל העלויות."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>שאלות ותשובות נפוצות</h1>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div key={item.id} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '−' : ''}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;