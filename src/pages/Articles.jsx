import React, { useState, useEffect } from 'react';
import '../styles/Articles.css';

function Articles() {
    const [activeCategory, setActiveCategory] = useState('הכל');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortMethod, setSortMethod] = useState('newest');
    const [filteredArticles, setFilteredArticles] = useState([]);

    const categories = [
        'הכל',
        'דיני משפחה',
        'דיני עבודה',
        'נדל"ן',
        'משפט פלילי',
        'דיני חברות',
        'קניין רוחני',
        'דיני נזיקין',
        'הוצאה לפועל'
    ];

    const articlesData = [
        {
            id: 1,
            title: "השפעת הבינה המלאכותית על עולם המשפט בישראל",
            author: "עו״ד רונית כהן",
            date: "21.03.2024",
            category: "חדשנות משפטית",
            readTime: "12 דקות קריאה",
            content: `בשנים האחרונות אנו עדים למהפכה טכנולוגית משמעותית בעולם המשפט. 
                     הבינה המלאכותית משנה את האופן בו עורכי דין עובדים ומשפיעה על כל תחומי המשפט.
                     במאמר זה נסקור את ההשפעות העיקריות של הAI על עולם המשפט בישראל...`,
            tags: ["בינה מלאכותית", "טכנולוגיה", "חדשנות"],
            likes: 156,
            comments: 23,
            image: "🤖"
        },
        {
            id: 2,
            title: "חידושים בדיני משפחה: פסיקה תקדימית בנושא משמורת משותפת",
            author: "עו״ד יעל לוי",
            date: "19.03.2024",
            category: "דיני משפחה",
            readTime: "15 דקות קריאה",
            content: `בית המשפט העליון קבע לאחרונה הלכה חדשה בנושא משמורת משותפת,
                     המשנה את האופן בו בתי המשפט מתייחסים לחלוקת זמני השהות בין הורים.
                     הפסיקה החדשה מדגישה את חשיבות השוויון בין ההורים...`,
            tags: ["משמורת", "הורות משותפת", "טובת הילד"],
            likes: 234,
            comments: 45,
            image: "👨‍👩‍👧‍👦"
        },
        // ... עוד 10-15 מאמרים דומים
    ];

    useEffect(() => {
        filterAndSortArticles();
    }, [activeCategory, searchQuery, sortMethod]);

    const filterAndSortArticles = () => {
        let filtered = [...articlesData];

        // סינון לפי קטגוריה
        if (activeCategory !== 'הכל') {
            filtered = filtered.filter(article => article.category === activeCategory);
        }

        // סינון לפי חיפוש
        if (searchQuery) {
            filtered = filtered.filter(article =>
                article.title.includes(searchQuery) ||
                article.content.includes(searchQuery) ||
                article.tags.some(tag => tag.includes(searchQuery))
            );
        }

        // מיון
        filtered.sort((a, b) => {
            switch (sortMethod) {
                case 'newest':
                    return new Date(b.date) - new Date(a.date);
                case 'popular':
                    return b.likes - a.likes;
                case 'commented':
                    return b.comments - a.comments;
                default:
                    return 0;
            }
        });

        setFilteredArticles(filtered);
    };

    return (
        <div className="articles-main-container">
            <div className="articles-header">
                <h1>📚 מאמרים משפטיים</h1>
                <p className="header-description">
                    מאגר מאמרים מקצועיים בנושאי משפט מגוונים, נכתב על ידי מיטב המומחים בתחום
                </p>
            </div>

            <div className="articles-controls">
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="חיפוש מאמרים..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <span className="search-icon">🔍</span>
                </div>

                <div className="sort-section">
                    <select
                        value={sortMethod}
                        onChange={(e) => setSortMethod(e.target.value)}
                        className="sort-select"
                    >
                        <option value="newest">חדש ביותר</option>
                        <option value="popular">הכי פופולרי</option>
                        <option value="commented">הכי מדובר</option>
                    </select>
                </div>
            </div>

            <div className="categories-bar">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="articles-grid">
                {filteredArticles.map(article => (
                    <article key={article.id} className="article-card">
                        <div className="article-header">
                            <span className="article-icon">{article.image}</span>
                            <div className="article-meta">
                                <span className="article-category">{article.category}</span>
                                <span className="article-date">{article.date}</span>
                            </div>
                        </div>

                        <div className="article-content">
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </div>

                        <div className="article-footer">
                            <div className="author-section">
                                <span className="author-avatar">👤</span>
                                <span className="author-name">{article.author}</span>
                            </div>
                            <span className="read-time">{article.readTime}</span>
                        </div>

                        <div className="article-tags">
                            {article.tags.map((tag, index) => (
                                <span key={index} className="tag">#{tag}</span>
                            ))}
                        </div>

                        <div className="article-stats">
                            <span className="likes">
                                ❤️ {article.likes}
                            </span>
                            <span className="comments">
                                💬 {article.comments}
                            </span>
                        </div>

                        <button className="read-more-button">
                            קרא עוד
                            <span className="arrow">←</span>
                        </button>
                    </article>
                ))}
            </div>

            {filteredArticles.length === 0 && (
                <div className="no-results">
                    <span className="no-results-icon">📭</span>
                    <h3>לא נמצאו מאמרים</h3>
                    <p>נסה לשנות את החיפוש או לבחור קטגוריה אחרת</p>
                </div>
            )}
        </div>
    );
}

export default Articles;