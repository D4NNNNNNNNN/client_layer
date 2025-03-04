import React, { useState, useEffect } from 'react';
import '../styles/UsefulInfo.css';

function UsefulInfo() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const legalInfo = {
        laws: [
            {
                id: "law1",
                title: "חוק החוזים (חלק כללי), תשל״ג-1973",
                description: "מידע מקיף על חוק החוזים והשפעתו על עסקאות יומיומיות",
                content: `חוק החוזים מהווה את התשתית המשפטית לכל התקשרות חוזית במדינת ישראל. 
                החוק מסדיר את אופן כריתת החוזה, החל משלב המשא ומתן, דרך גמירת הדעת והמסוימות, 
                ועד לשלב הביצוע או ההפרה.

                נושאים מרכזיים בחוק:
                1. חופש החוזים - הצדדים חופשיים לקבוע את תוכן החוזה כרצונם
                2. תום לב במשא ומתן - חובת הצדדים לנהוג בהגינות
                3. טעות והטעיה - השפעתן על תוקף החוזה
                4. עושק וכפייה - הגנה על צד חלש בחוזה
                5. תרופות בשל הפרת חוזה

                חשיבות מיוחדת:
                - מהווה בסיס לכל העסקאות המסחריות במשק
                - מגן על זכויות הצדדים לחוזה
                - מספק כלים משפטיים להתמודדות עם הפרות`,
                lastUpdated: "21.03.2024",
                importance: "גבוהה מאוד",
                relatedCases: [
                    "ע״א 1234/20 - פס״ד מנחה בנושא טעות בכריתת חוזה",
                    "ע״א 5678/21 - הלכה חדשה בנושא פיצויים"
                ]
            },
            {
                id: "law2",
                title: "חוק השכירות והשאילה, תשל״א-1971",
                description: "הסבר מקיף על זכויות וחובות בהשכרת נכסים",
                content: `חוק השכירות והשאילה מסדיר את היחסים המשפטיים בין משכיר לשוכר. 
                החוק קובע את המסגרת הבסיסית לעסקאות שכירות, תוך הגדרת זכויות וחובות הצדדים.

                עקרונות מרכזיים:
                1. חובות המשכיר:
                   - מסירת הנכס במצב תקין
                   - ביצוע תיקונים מהותיים
                   - הבטחת שימוש סביר בנכס

                2. חובות השוכר:
                   - תשלום דמי שכירות במועד
                   - שמירה על הנכס
                   - החזרת הנכס בתום התקופה

                3. זכויות הצדדים:
                   - תנאי סיום מוקדם
                   - אפשרויות להארכת השכירות
                   - הסדרי תחזוקה ותיקונים`,
                lastUpdated: "20.03.2024",
                importance: "גבוהה",
                relatedCases: [
                    "ת״א 9012/22 - פסיקה בנושא פינוי מושכר",
                    "ע״א 3456/23 - קביעת סטנדרט תחזוקה"
                ]
            },
            // ... עוד 5-6 חוקים מפורטים
        ],
        agreements: [
            {
                id: "agr1",
                title: "הסכם שכירות מגורים מקיף",
                description: "תבנית מפורטת להסכם שכירות דירה עם כל הסעיפים החיוניים",
                content: `הסכם שכירות מקיף זה נועד להסדיר את מערכת היחסים בין משכיר לשוכר
                באופן מפורט ומאוזן, תוך שמירה על זכויות שני הצדדים.

                סעיפים עיקריים בהסכם:
                1. פרטי הנכס והצדדים
                2. תקופת השכירות ואופציות הארכה
                3. דמי השכירות ותנאי תשלום
                4. בטחונות וערבויות
                5. אחריות לתיקונים ותחזוקה
                6. תנאי שימוש בנכס
                7. ביטוח ואחריות
                8. תנאי סיום מוקדם

                נספחים חשובים:
                - פרוטוקול מסירה
                - רשימת תכולה
                - אישורי ביטוח
                - טופס הוראת קבע`,
                downloadLink: "/templates/rental-agreement.pdf",
                lastUpdated: "19.03.2024",
                views: 1234,
                downloads: 567
            },
            // ... עוד 4-5 הסכמים מפורטים
        ],
        // ... ה
        // 
        // משך בחלק הבא


        tips: [
            {
                id: "tip1",
                title: "מדריך מקיף להתמודדות עם תביעות קטנות",
                description: "כל מה שצריך לדעת על הגשת וניהול תביעה בבית משפט לתביעות קטנות",
                content: `מדריך מקיף זה יסייע לכם בהתמודדות עם הליך התביעה הקטנה, 
                משלב ההכנה ועד לביצוע פסק הדין.

                שלבי ההליך המשפטי:

                1. הכנה לתביעה:
                   - איסוף מסמכים ועדויות
                   - תיעוד התכתבויות וראיות
                   - חישוב סכום התביעה
                   - בדיקת סמכות מקומית

                2. הגשת התביעה:
                   - מילוי כתב התביעה
                   - צירוף מסמכים תומכים
                   - תשלום אגרה
                   - הגשה למזכירות

                3. ניהול ההליך:
                   - הכנת טיעונים
                   - סדר הצגת ראיות
                   - התנהלות מול הצד שכנגד
                   - טקטיקות משא ומתן

                4. הדיון בבית המשפט:
                   - כללי התנהגות
                   - סדר הטיעונים
                   - הצגת ראיות
                   - חקירת עדים

                טיפים חשובים:
                - הגיעו מוכנים עם כל המסמכים
                - דברו בצורה ברורה ועניינית
                - התמקדו בעובדות ולא ברגשות
                - כבדו את הוראות השופט`,
                lastUpdated: "18.03.2024",
                views: 2345,
                likes: 890
            },
            // ... עוד 5-6 טיפים מפורטים
        ],
        rights: [
            {
                id: "right1",
                title: "זכויות עובדים - מדריך מקיף",
                description: "כל מה שצריך לדעת על זכויות עובדים בישראל",
                content: `מדריך מקיף זה מפרט את זכויות העובדים הבסיסיות והמורחבות 
                בהתאם לחוקי העבודה בישראל.

                זכויות בסיסיות:

                1. שכר ותנאי העסקה:
                   - שכר מינימום
                   - תשלום בגין שעות נוספות
                   - הפרשות פנסיוניות
                   - דמי הבראה
                   - ימי חופשה
                   - ימי מחלה

                2. תנאי עבודה:
                   - שעות עבודה ומנוחה
                   - הפסקות
                   - עבודה בשעות נוספות
                   - עבודה בימי מנוחה

                3. זכויות מיוחדות:
                   - הריון ולידה
                   - מילואים
                   - שמירת היריון
                   - הורות
                   
                4. סיום העסקה:
                   - הודעה מוקדמת
                   - פיצויי פיטורים
                   - שימוע לפני פיטורים`,
                lastUpdated: "17.03.2024",
                importance: "גבוהה",
                relatedLaws: [
                    "חוק שכר מינימום",
                    "חוק שעות עבודה ומנוחה",
                    "חוק פיצויי פיטורים"
                ]
            },
            // ... עוד זכויות מפורטות
        ]
    };

    return (
        <div className="useful-info-container">
            <div className="info-header">
                <h1>📚 מאגר מידע משפטי מקיף</h1>
                <p className="header-description">
                    מאגר מידע משפטי מקיף הכולל חוקים, תקנות, הסכמים לדוגמה,
                    טיפים משפטיים וזכויות אזרח. המידע מתעדכן באופן שוטף
                    ומותאם לשינויי החקיקה והפסיקה העדכניים.
                </p>
            </div>

            <div className="search-and-filter">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="חיפוש במאגר..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="search-icon">🔍</span>
                </div>

                <div className="category-filters">
                    {['הכל', 'חוקים', 'הסכמים', 'טיפים', 'זכויות'].map(category => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* תצוגת תוכן דינמית לפי קטגוריה */}
            <div className="info-content">
                {Object.entries(legalInfo).map(([category, items]) => (
                    <section
                        key={category}
                        className={`info-section ${activeCategory !== 'הכל' &&
                            !category.includes(activeCategory.toLowerCase()) ? 'hidden' : ''}`}
                    >
                        {items.map(item => (
                            <article key={item.id} className="info-card">
                                <div className="card-header">
                                    <h2>{item.title}</h2>
                                    {item.importance && (
                                        <span className="importance-badge">
                                            {item.importance}
                                        </span>
                                    )}
                                </div>

                                <p className="description">{item.description}</p>

                                <div className={`content ${expandedItems[item.id] ? 'expanded' : ''}`}>
                                    {item.content}
                                </div>

                                <button
                                    className="expand-btn"
                                    onClick={() => toggleExpand(item.id)}
                                >
                                    {expandedItems[item.id] ? 'הצג פחות ↑' : 'קרא עוד ↓'}
                                </button>

                                <div className="card-footer">
                                    <span className="update-date">
                                        עודכן: {item.lastUpdated}
                                    </span>
                                    {item.views && (
                                        <span className="views">
                                            👁 {item.views} צפיות
                                        </span>
                                    )}
                                </div>
                            </article>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    );
}

export default UsefulInfo;




