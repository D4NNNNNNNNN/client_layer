import { useParams } from 'react-router-dom';
import '../styles/SpecialtyPage.css'; // קובץ CSS חדש לעיצוב הריבועים

function SpecialtyPage() {
    const { id } = useParams();
    const numericId = parseInt(id, 10); // ✅ ממיר את ה-ID למספר


    // מידע על עורכי דין לפי תחום
    const lawyersBySpecialty = {
        1: [ // דיני משפחה
            {
                id: 1,
                name: "עו'ד ישראל ישראלי",
                experience: 15,
                location: "תל אביב",
                cases: 250,
                description: "מתמחה בדיני משפחה וגירושין למעלה מ-15 שנה. מומחה בהסכמי ממון וסכסוכי משמורת.",
                rating: 4.9,
                reviews: 120,
                image: "👨‍⚖",
                expertise: ["גירושין", "משמורת ילדים", "הסכמי ממון"]
            },
            {
                id: 2,
                name: "עו'ד שרה לוי",
                experience: 20,
                location: "ירושלים",
                cases: 400,
                description: "מומחית בדיני משפחה עם התמחות מיוחדת בגישור. ניסיון עשיר בפתרון סכסוכים משפחתיים.",
                rating: 4.8,
                reviews: 180,
                image: "👩‍⚖",
                expertise: ["גישור משפחתי", "יחסי ממון", "צוואות וירושות"]
            },
            {
                id: 3,
                name: "עו'ד רחל גולדברג",
                experience: 17,
                location: "חיפה",
                cases: 280,
                description: "מתמחה בהסכמי גירושין והסדרי ראייה.",
                rating: 4.7,
                reviews: 140,
                image: "👩‍⚖",
                expertise: ["הסכמי גירושין", "הסדרי ראייה", "מזונות"]
            },
            {
                id: 4,
                name: "עו'ד דוד ברקוביץ",
                experience: 22,
                location: "רמת גן",
                cases: 350,
                description: "מומחה בדיני משפחה בדגש על זכויות LGBT.",
                rating: 4.9,
                reviews: 160,
                image: "👨‍⚖",
                expertise: ["זכויות LGBT", "אימוץ", "פונדקאות"]
            },
            {
                id: 5,
                name: "עו'ד מיכל אדלר",
                experience: 19,
                location: "נתניה",
                cases: 300,
                description: "מתמחה בסכסוכי רכוש וחלוקת נכסים.",
                rating: 4.8,
                reviews: 145,
                image: "👩‍⚖",
                expertise: ["חלוקת רכוש", "איזון משאבים", "הסכמי ממון"]
            },
            {
                id: 6,
                name: "עו'ד יעקב פרידמן",
                experience: 25,
                location: "פתח תקווה",
                cases: 420,
                description: "מומחה בייצוג בבתי דין רבניים.",
                rating: 4.9,
                reviews: 190,
                image: "👨‍⚖",
                expertise: ["בתי דין רבניים", "גיטין", "כתובות"]
            },
            {
                id: 7,
                name: "עו'ד נועה שטיין",
                experience: 16,
                location: "ראשון לציון",
                cases: 240,
                description: "מתמחה בענייני משמורת והגירה.",
                rating: 4.7,
                reviews: 130,
                image: "👩‍⚖",
                expertise: ["משמורת ילדים", "הגירה", "מזונות ילדים"]
            },
            {
                id: 8,
                name: "עו'ד אלון כהן",
                experience: 21,
                location: "אשדוד",
                cases: 330,
                description: "מומחה בגישור משפחתי וניהול משא ומתן.",
                rating: 4.8,
                reviews: 155,
                image: "👨‍⚖",
                expertise: ["גישור משפחתי", "יישוב סכסוכים", "הסכמי שלום בית"]
            },
            {
                id: 9,
                name: "עו'ד תמר לוינסון",
                experience: 18,
                location: "כפר סבא",
                cases: 270,
                description: "מתמחה בייצוג קטינים בהליכי גירושין.",
                rating: 4.8,
                reviews: 135,
                image: "👩‍⚖",
                expertise: ["ייצוג קטינים", "אפוטרופסות", "זכויות ילדים"]
            },
            {
                id: 10,
                name: "עו'ד רון אברהמי",
                experience: 23,
                location: "הרצליה",
                cases: 380,
                description: "מומחה בהסכמי טרום-נישואין וידועים בציבור.",
                rating: 4.9,
                reviews: 175,
                image: "👨‍⚖",
                expertise: ["הסכמי טרום-נישואין", "ידועים בציבור", "יחסי ממון"]
            }
        ],

        2: [ // דיני עבודה
            {
                id: 1,
                name: "עו'ד חנה כהן",
                experience: 12,
                location: "ירושלים",
                cases: 180,
                description: "מומחית בדיני עבודה, מייצגת עובדים ומעסיקים. ניסיון רב בתביעות עבודה.",
                rating: 4.8,
                reviews: 95,
                image: "👩‍⚖",
                expertise: ["זכויות עובדים", "הסכמי העסקה", "פיטורים"]
            },
            {
                id: 2,
                name: "עו'ד דוד מזרחי",
                experience: 18,
                location: "תל אביב",
                cases: 300,
                description: "מתמחה בייצוג ארגוני עובדים וועדי עובדים. מומחה בהסכמים קיבוציים.",
                rating: 4.9,
                reviews: 150,
                image: "👨‍⚖",
                expertise: ["הסכמים קיבוציים", "ארגוני עובדים", "סכסוכי עבודה"]
            },
            {
                id: 3,
                name: "עו'ד רונית שפירא",
                experience: 18,
                location: "רמת גן",
                cases: 320,
                description: "מתמחה בייצוג מול רשויות המס וערעורי מס.",
                rating: 4.8,
                reviews: 160,
                image: "👩‍⚖",
                expertise: ["ערעורי מס", "מס הכנסה", "מע\"מ"]
            },
            {
                id: 4,
                name: "עו'ד אמיר גולדשטיין",
                experience: 22,
                location: "ירושלים",
                cases: 380,
                description: "מומחה במיסוי חברות ועסקאות מורכבות.",
                rating: 4.7,
                reviews: 170,
                image: "👨‍⚖",
                expertise: ["מיסוי חברות", "מיזוגים ורכישות", "הסכמי מס"]
            },
            {
                id: 5,
                name: "עו'ד נועם ברקת",
                experience: 16,
                location: "חיפה",
                cases: 250,
                description: "מתמחה בזכויות עובדים וביטוח לאומי.",
                rating: 4.7,
                reviews: 130,
                image: "👨‍⚖",
                expertise: ["ביטוח לאומי", "זכויות עובדים", "תאונות עבודה"]
            },
            {
                id: 6,
                name: "עו'ד יעל אברמוב",
                experience: 20,
                location: "באר שבע",
                cases: 340,
                description: "מומחית בדיני עבודה במגזר הציבורי והסכמים קיבוציים.",
                rating: 4.8,
                reviews: 165,
                image: "👩‍⚖",
                expertise: ["מגזר ציבורי", "הסכמים קיבוציים", "זכויות פנסיוניות"]
            },
            {
                id: 7,
                name: "עו'ד אריאל כהן",
                experience: 14,
                location: "פתח תקווה",
                cases: 220,
                description: "מתמחה בהטרדות מיניות במקום העבודה וזכויות שוויון.",
                rating: 4.6,
                reviews: 110,
                image: "👨‍⚖",
                expertise: ["הטרדות מיניות", "אפליה בעבודה", "שוויון הזדמנויות"]
            },
            {
                id: 8,
                name: "עו'ד מירב שלום",
                experience: 23,
                location: "נתניה",
                cases: 380,
                description: "מומחית בייצוג חברות הייטק וסטארטאפים בדיני עבודה.",
                rating: 4.9,
                reviews: 175,
                image: "👩‍⚖",
                expertise: ["הייטק", "אופציות עובדים", "חוזי העסקה"]
            },
            {
                id: 9,
                name: "עו'ד עמית לוי",
                experience: 17,
                location: "רעננה",
                cases: 290,
                description: "מתמחה בסכסוכים קיבוציים והתארגנות עובדים.",
                rating: 4.7,
                reviews: 145,
                image: "👨‍⚖",
                expertise: ["סכסוכים קיבוציים", "התארגנות עובדים", "שביתות"]
            },
            {
                id: 10,
                name: "עו'ד לימור גבאי",
                experience: 21,
                location: "אשדוד",
                cases: 360,
                description: "מומחית בפיטורים ושימועים, זכויות עובדים זרים.",
                rating: 4.8,
                reviews: 170,
                image: "👩‍⚖",
                expertise: ["שימועים", "פיטורים", "עובדים זרים"]
            }
        ],

        9: [ // דיני ירושה
            {
                id: 1,
                name: "עו'ד אברהם כהן",
                experience: 28,
                location: "ירושלים",
                cases: 450,
                description: "מומחה בדיני ירושה, צוואות והעברה בין-דורית של נכסים.",
                rating: 4.9,
                reviews: 200,
                image: "👨‍⚖",
                expertise: ["צוואות", "ירושות", "העברה בין-דורית"]
            },
            {
                id: 2,
                name: "עו'ד שירה אלון",
                experience: 15,
                location: "תל אביב",
                cases: 280,
                description: "מתמחה בניהול עזבונות וסכסוכי ירושה.",
                rating: 4.8,
                reviews: 150,
                image: "👩‍⚖",
                expertise: ["ניהול עזבונות", "סכסוכי ירושה", "צוואות"]
            },
            {
                id: 3,
                name: "עו'ד יוסף מלכה",
                experience: 20,
                location: "חיפה",
                cases: 350,
                description: "מומחה בתכנון ירושה וצוואות מורכבות.",
                rating: 4.7,
                reviews: 180,
                image: "👨‍⚖",
                expertise: ["תכנון ירושה", "צוואות מורכבות", "נאמנויות"]
            },
            {
                id: 4,
                name: "עו'ד דניאל כהן",
                experience: 21,
                location: "תל אביב",
                cases: 380,
                description: "מומחה בניהול עזבונות מורכבים וסכסוכי ירושה.",
                rating: 4.8,
                reviews: 165,
                image: "👨‍⚖",
                expertise: ["ניהול עזבונות", "סכסוכי ירושה", "צוואות"]
            },
            {
                id: 5,
                name: "עו'ד רותם אביב",
                experience: 17,
                location: "רחובות",
                cases: 290,
                description: "מתמחה בתכנון ירושה ומיסוי עזבונות.",
                rating: 4.7,
                reviews: 135,
                image: "👩‍⚖",
                expertise: ["תכנון ירושה", "מיסוי עזבונות", "צוואות"]
            },
            {
                id: 6,
                name: "עו'ד מיכל ברק",
                experience: 24,
                location: "רמת גן",
                cases: 410,
                description: "מומחית בירושות בינלאומיות ונכסים מורכבים.",
                rating: 4.9,
                reviews: 190,
                image: "👩‍⚖",
                expertise: ["ירושות בינלאומיות", "נכסים מורכבים", "תכנון מס ירושה"]
            },
            {
                id: 7,
                name: "עו'ד אורי גולדשטיין",
                experience: 19,
                location: "הרצליה",
                cases: 320,
                description: "מתמחה בצוואות הדדיות והסכמי ירושה משפחתיים.",
                rating: 4.8,
                reviews: 145,
                image: "👨‍⚖",
                expertise: ["צוואות הדדיות", "הסכמי ירושה", "תכנון משפחתי"]
            },
            {
                id: 8,
                name: "עו'ד לילך שפירא",
                experience: 16,
                location: "נתניה",
                cases: 260,
                description: "מומחית בייצוג יורשים וסכסוכי צוואה.",
                rating: 4.6,
                reviews: 120,
                image: "👩‍⚖",
                expertise: ["ייצוג יורשים", "סכסוכי צוואה", "התנגדויות לצוואה"]
            },
            {
                id: 9,
                name: "עו'ד יעקב לוין",
                experience: 26,
                location: "באר שבע",
                cases: 430,
                description: "מומחה בירושות עסקיות והעברה בין-דורית של עסקים.",
                rating: 4.9,
                reviews: 185,
                image: "👨‍⚖",
                expertise: ["ירושות עסקיות", "העברת עסקים", "תכנון דור המשך"]
            },
            {
                id: 10,
                name: "עו'ד נועה פרץ",
                experience: 18,
                location: "ראשון לציון",
                cases: 300,
                description: "מתמחה באפוטרופסות וניהול רכוש של חסויים.",
                rating: 4.7,
                reviews: 140,
                image: "👩‍⚖",
                expertise: ["אפוטרופסות", "ניהול רכוש", "ייפוי כוח מתמשך"]
            }
        ],
        3: [ // נדל"ן
            {
                id: 1,
                name: "עו'ד אבי לוי",
                experience: 25,
                location: "תל אביב",
                cases: 450,
                description: "מומחה בעסקאות נדל\"ן מורכבות ותמ\"א 38.",
                rating: 4.9,
                reviews: 200,
                image: "👨‍⚖",
                expertise: ["תמ\"א 38", "מסחרי", "התחדשות עירונית"]
            },
            {
                id: 2,
                name: "עו'ד דנה כהן",
                experience: 18,
                location: "רמת גן",
                cases: 320,
                description: "מתמחה בליווי פרויקטים של פינוי-בינוי והתחדשות עירונית.",
                rating: 4.8,
                reviews: 150,
                image: "👩‍⚖",
                expertise: ["פינוי-בינוי", "התחדשות עירונית", "ליווי פרויקטים"]
            },
            {
                id: 3,
                name: "עו'ד יוסי מזרחי",
                experience: 20,
                location: "ירושלים",
                cases: 380,
                description: "מומחה בעסקאות נדל\"ן למגורים ומסחר.",
                rating: 4.7,
                reviews: 170,
                image: "👨‍⚖",
                expertise: ["מגורים", "מסחרי", "עסקאות קומבינציה"]
            },
            {
                id: 4,
                name: "עו'ד רחל שפירא",
                experience: 15,
                location: "חיפה",
                cases: 250,
                description: "מתמחה בליווי קבוצות רכישה ופרויקטים למגורים.",
                rating: 4.8,
                reviews: 120,
                image: "👩‍⚖",
                expertise: ["קבוצות רכישה", "מגורים", "ליווי פרויקטים"]
            },
            {
                id: 5,
                name: "עו'ד משה ברק",
                experience: 22,
                location: "תל אביב",
                cases: 400,
                description: "מומחה במיסוי מקרקעין ועסקאות מורכבות.",
                rating: 4.9,
                reviews: 180,
                image: "👨‍⚖",
                expertise: ["מיסוי מקרקעין", "עסקאות מורכבות", "ייעוץ משפטי"]
            },
            {
                id: 6,
                name: "עו'ד שרון גולדברג",
                experience: 19,
                location: "הרצליה",
                cases: 340,
                description: "מתמחה בהתחדשות עירונית ופרויקטים מסחריים.",
                rating: 4.8,
                reviews: 160,
                image: "👩‍⚖",
                expertise: ["התחדשות עירונית", "נדל\"ן מסחרי", "תכנון ובנייה"]
            },
            {
                id: 7,
                name: "עו'ד אלון דביר",
                experience: 24,
                location: "ראשון לציון",
                cases: 420,
                description: "מומחה בליווי יזמים וקבלנים בפרויקטים גדולים.",
                rating: 4.9,
                reviews: 190,
                image: "👨‍⚖",
                expertise: ["ליווי יזמים", "פרויקטים גדולים", "מימון נדל\"ן"]
            },
            {
                id: 8,
                name: "עו'ד מיכל אדר",
                experience: 16,
                location: "נתניה",
                cases: 280,
                description: "מתמחה ברישום בתים משותפים והסכמי שיתוף.",
                rating: 4.7,
                reviews: 130,
                image: "👩‍⚖",
                expertise: ["בתים משותפים", "הסכמי שיתוף", "רישום מקרקעין"]
            },
            {
                id: 9,
                name: "עו'ד יעקב נחום",
                experience: 21,
                location: "פתח תקווה",
                cases: 360,
                description: "מומחה בעסקאות נדל\"ן בינלאומיות והשקעות זרות.",
                rating: 4.8,
                reviews: 165,
                image: "👨‍⚖",
                expertise: ["נדל\"ן בינלאומי", "השקעות זרות", "עסקאות מורכבות"]
            },
            {
                id: 10,
                name: "עו'ד רונית שטרן",
                experience: 17,
                location: "באר שבע",
                cases: 300,
                description: "מתמחה בזכויות במקרקעין והליכי תכנון ובנייה.",
                rating: 4.7,
                reviews: 140,
                image: "👩‍⚖",
                expertise: ["זכויות במקרקעין", "תכנון ובנייה", "היתרי בנייה"]
            }
        ],
        4: [ // תעבורה
            {
                id: 1,
                name: "עו'ד יעקב לוי",
                experience: 20,
                location: "תל אביב",
                cases: 500,
                description: "מומחה בתיקי תעבורה חמורים ותאונות דרכים קטלניות.",
                rating: 4.9,
                reviews: 220,
                image: "👨‍⚖",
                expertise: ["תאונות קטלניות", "נהיגה בשכרות", "שלילת רישיון"]
            },
            {
                id: 2,
                name: "עו'ד מיכל שטרן",
                experience: 15,
                location: "ירושלים",
                cases: 300,
                description: "מתמחה בייצוג בתיקי נהיגה בשכרות ועבירות מהירות.",
                rating: 4.8,
                reviews: 150,
                image: "👩‍⚖",
                expertise: ["נהיגה בשכרות", "עבירות מהירות", "נקודות"]
            },
            {
                id: 3,
                name: "עו'ד דוד כהן",
                experience: 18,
                location: "חיפה",
                cases: 400,
                description: "מומחה בטיפול בשלילות רישיון ועבירות תנועה חמורות.",
                rating: 4.7,
                reviews: 180,
                image: "👨‍⚖",
                expertise: ["שלילת רישיון", "עבירות תנועה", "ערעורים"]
            },
            {
                id: 4,
                name: "עו'ד רונית אברהם",
                experience: 12,
                location: "באר שבע",
                cases: 200,
                description: "מתמחה בתיקי תאונות דרכים ונזקי גוף.",
                rating: 4.6,
                reviews: 90,
                image: "👩‍⚖",
                expertise: ["תאונות דרכים", "נזקי גוף", "ביטוח"]
            },
            {
                id: 5,
                name: "עו'ד אורי גולן",
                experience: 25,
                location: "תל אביב",
                cases: 600,
                description: "מומחה בתיקי תעבורה מורכבים וייצוג נהגים מקצועיים.",
                rating: 4.9,
                reviews: 250,
                image: "👨‍⚖",
                expertise: ["נהגים מקצועיים", "רישיונות נהיגה", "עבירות תנועה"]
            },
            {
                id: 6,
                name: "עו'ד יוסף לויאן",
                experience: 33,
                location: "תל אביב",
                cases: 500,
                description: "מומחה לנזקי תעבורה ודרכים.",
                rating: 4.8,
                reviews: 270,
                image: "👨‍⚖",
                expertise: ["תאונות דרכים", "הולכי רגל", "נזקי חניה"]
            },
            {
                id: 7,
                name: "עו'ד שירה גבאי",
                experience: 16,
                location: "רחובות",
                cases: 280,
                description: "מתמחה בייצוג נהגים צעירים ועבירות מהירות.",
                rating: 4.7,
                reviews: 130,
                image: "👩‍⚖",
                expertise: ["נהגים צעירים", "עבירות מהירות", "ערעורי קנסות"]
            },
            {
                id: 8,
                name: "עו'ד אלון מרקוס",
                experience: 22,
                location: "נתניה",
                cases: 450,
                description: "מומחה בתיקי הפקרה לאחר פגיעה ועבירות חמורות.",
                rating: 4.8,
                reviews: 190,
                image: "👨‍⚖",
                expertise: ["הפקרה לאחר פגיעה", "עבירות חמורות", "ייצוג בבית משפט"]
            },
            {
                id: 9,
                name: "עו'ד נועה פלד",
                experience: 14,
                location: "פתח תקווה",
                cases: 240,
                description: "מתמחה בתביעות ביטוח ופיצויים בתאונות דרכים.",
                rating: 4.6,
                reviews: 110,
                image: "👩‍⚖",
                expertise: ["תביעות ביטוח", "פיצויים", "תאונות דרכים"]
            },
            {
                id: 10,
                name: "עו'ד רועי שמעוני",
                experience: 19,
                location: "ראשון לציון",
                cases: 350,
                description: "מומחה בייצוג חברות תחבורה ונהגים מקצועיים.",
                rating: 4.8,
                reviews: 160,
                image: "👨‍⚖",
                expertise: ["חברות תחבורה", "נהגים מקצועיים", "רישוי מסחרי"]
            }
        ],
        5: [ // פלילי
            {
                id: 1,
                name: "עו'ד זאב רווח",
                experience: 51,
                location: "חולון",
                cases: 980,
                description: "מומחה לפשיעה בנסיבות מחמירות.",
                rating: 5,
                reviews: 700,
                image: "👨‍⚖",
                expertise: ["סחר לא חוקי", "אלימות", "ארגוני פשיעה"]
            },
            {
                id: 2,
                name: "עו'ד יונתן אברמוב",
                experience: 27,
                location: "בית שאן",
                cases: 180,
                description: "מתמחה בענייני פשיעה וסמים.",
                rating: 4.5,
                reviews: 190,
                image: "👨‍⚖",
                expertise: ["סמים", "אלימות", "פשיעה"]
            },
            {
                id: 3,
                name: "עו'ד יובל שטרן",
                experience: 24,
                location: "תל אביב",
                cases: 450,
                description: "מומחה בתיקים פליליים מורכבים והלבנת הון.",
                rating: 4.9,
                reviews: 190,
                image: "👨‍⚖",
                expertise: ["הלבנת הון", "עבירות מרמה", "סחר בסמים"]
            },
            {
                id: 4,
                name: "עו'ד מיכל אברהם",
                experience: 19,
                location: "חיפה",
                cases: 320,
                description: "מתמחה בייצוג נאשמים בעבירות צווארון לבן.",
                rating: 4.8,
                reviews: 150,
                image: "👩‍⚖",
                expertise: ["צווארון לבן", "עבירות מס", "שוחד"]
            },
            {
                id: 5,
                name: "עו'ד רועי דביר",
                experience: 15,
                location: "ירושלים",
                cases: 280,
                description: "מתמחה בייצוג בעבירות אלימות ותעבורה.",
                rating: 4.7,
                reviews: 130,
                image: "👨‍⚖",
                expertise: ["אלימות", "תעבורה", "סמים"]
            },
            {
                id: 6,
                name: "עו'ד דנה לוי",
                experience: 22,
                location: "רמת גן",
                cases: 420,
                description: "מומחית בייצוג בעבירות מין וסייבר.",
                rating: 4.9,
                reviews: 180,
                image: "👩‍⚖",
                expertise: ["עבירות מין", "פשעי סייבר", "הגנה פלילית"]
            },
            {
                id: 7,
                name: "עו'ד אמיר גולדשטיין",
                experience: 30,
                location: "הרצליה",
                cases: 550,
                description: "מומחה בייצוג בעבירות כלכליות ומיסוי.",
                rating: 4.8,
                reviews: 240,
                image: "👨‍⚖",
                expertise: ["עבירות כלכליות", "עבירות מס", "הלבנת הון"]
            },
            {
                id: 8,
                name: "עו'ד שירה מזרחי",
                experience: 17,
                location: "נתניה",
                cases: 290,
                description: "מתמחה בייצוג קטינים בהליכים פליליים.",
                rating: 4.7,
                reviews: 160,
                image: "👩‍⚖",
                expertise: ["קטינים", "עבירות נוער", "שיקום"]
            },
            {
                id: 9,
                name: "עו'ד יואב ברק",
                experience: 25,
                location: "ראשון לציון",
                cases: 480,
                description: "מומחה בעבירות נשק ואלימות חמורה.",
                rating: 4.8,
                reviews: 210,
                image: "👨‍⚖",
                expertise: ["עבירות נשק", "אלימות חמורה", "הגנה עצמית"]
            },
            {
                id: 10,
                name: "עו'ד נועה כהן",
                experience: 20,
                location: "פתח תקווה",
                cases: 380,
                description: "מתמחה בעבירות סמים ועבירות רכוש.",
                rating: 4.7,
                reviews: 170,
                image: "👩‍⚖",
                expertise: ["עבירות סמים", "עבירות רכוש", "ייצוג בחקירות"]
            }
        ],
        8: [ // דיני חברות
            {
                id: 1,
                name: "עו'ד אברהם אוקטובר",
                experience: 30,
                location: "הרצליה",
                cases: 620,
                description: "מומחה לחברות כח אדם ותאגידים.",
                rating: 4.3,
                reviews: 315,
                image: "👨‍⚖",
                expertise: ["מורכבויות תאגידיות", "תעסוקה", "חוזי עובדים"]
            },
            {
                id: 2,
                name: "עו'ד שובל גוזלן",
                experience: 22,
                location: "פרדס חנה",
                cases: 390,
                description: "מומחה לחברות ישראליות מעבר לים.",
                rating: 4.6,
                reviews: 270,
                image: "👩‍⚖",
                expertise: ["החוק הבינלאומי", "ענייני רישוי ומס", "בירוקרטיה"]
            },
            {
                id: 3,
                name: "עו'ד יעל ברנע",
                experience: 19,
                location: "תל אביב",
                cases: 340,
                description: "מתמחה בליווי חברות הייטק וסטארטאפים.",
                rating: 4.8,
                reviews: 155,
                image: "👩‍⚖",
                expertise: ["הייטק", "גיוס הון", "אופציות עובדים"]
            },
            {
                id: 4,
                name: "עו'ד אסף לוי",
                experience: 23,
                location: "רמת גן",
                cases: 420,
                description: "מומחה במיזוגים ורכישות ועסקאות בינלאומיות.",
                rating: 4.9,
                reviews: 185,
                image: "👨‍⚖",
                expertise: ["מיזוגים ורכישות", "עסקאות בינלאומיות", "משא ומתן"]
            },
            {
                id: 5,
                name: "עו'ד מיכל שרון",
                experience: 16,
                location: "הרצליה",
                cases: 260,
                description: "מתמחה בדיני ניירות ערך והנפקות.",
                rating: 4.7,
                reviews: 120,
                image: "👩‍⚖",
                expertise: ["ניירות ערך", "הנפקות", "רגולציה"]
            },
            {
                id: 6,
                name: "עו'ד דן גולדברג",
                experience: 28,
                location: "תל אביב",
                cases: 580,
                description: "מומחה בהסכמי השקעה וגיוסי הון.",
                rating: 4.9,
                reviews: 230,
                image: "👨‍⚖",
                expertise: ["הסכמי השקעה", "גיוסי הון", "הסכמי מייסדים"]
            },
            {
                id: 7,
                name: "עו'ד רונית אדלר",
                experience: 21,
                location: "ירושלים",
                cases: 380,
                description: "מתמחה בממשל תאגידי וציות רגולטורי.",
                rating: 4.8,
                reviews: 165,
                image: "👩‍⚖",
                expertise: ["ממשל תאגידי", "ציות", "רגולציה"]
            },
            {
                id: 8,
                name: "עו'ד עמית ברק",
                experience: 25,
                location: "חיפה",
                cases: 450,
                description: "מומחה בליטיגציה מסחרית וסכסוכי בעלי מניות.",
                rating: 4.8,
                reviews: 195,
                image: "👨‍⚖",
                expertise: ["ליטיגציה מסחרית", "סכסוכי בעלי מניות", "פירוק חברות"]
            },
            {
                id: 9,
                name: "עו'ד לילך כהן",
                experience: 17,
                location: "נתניה",
                cases: 290,
                description: "מתמחה בחברות משפחתיות והעברה בין-דורית.",
                rating: 4.6,
                reviews: 140,
                image: "👩‍⚖",
                expertise: ["חברות משפחתיות", "העברה בין-דורית", "תכנון עסקי"]
            },
            {
                id: 10,
                name: "עו'ד יואב שטיינברג",
                experience: 24,
                location: "ראשון לציון",
                cases: 430,
                description: "מומחה בהסדרי חוב ושיקום חברות.",
                rating: 4.7,
                reviews: 180,
                image: "👨‍⚖",
                expertise: ["הסדרי חוב", "שיקום חברות", "הבראת חברות"]
            }
        ],
        10: [ // דיני מיסים
            {
                id: 1,
                name: "עו'ד דן לוינסון",
                experience: 25,
                location: "תל אביב",
                cases: 400,
                description: "מומחה במיסוי מקרקעין ומיסוי בינלאומי.",
                rating: 4.9,
                reviews: 190,
                image: "👨‍⚖",
                expertise: ["מיסוי מקרקעין", "מיסוי בינלאומי", "תכנון מס"]
            },
            {
                id: 2,
                name: "עו'ד רונית שפירא",
                experience: 18,
                location: "רמת גן",
                cases: 320,
                description: "מתמחה בייצוג מול רשויות המס וערעורי מס.",
                rating: 4.8,
                reviews: 160,
                image: "👩‍⚖",
                expertise: ["ערעורי מס", "מס הכנסה", "מע\"מ"]
            },
            {
                id: 3,
                name: "עו'ד אמיר גולדשטיין",
                experience: 22,
                location: "ירושלים",
                cases: 380,
                description: "מומחה במיסוי חברות ועסקאות מורכבות.",
                rating: 4.7,
                reviews: 170,
                image: "👨‍⚖",
                expertise: ["מיסוי חברות", "מיזוגים ורכישות", "הסכמי מס"]
            },
            {
                id: 4,
                name: "עו'ד יובל שגב",
                experience: 20,
                location: "תל אביב",
                cases: 350,
                description: "מומחה במיסוי בינלאומי ותכנון מס.",
                rating: 4.8,
                reviews: 145,
                image: "👨‍⚖",
                expertise: ["מיסוי בינלאומי", "תכנון מס", "מיסוי חברות"]
            },
            {
                id: 5,
                name: "עו'ד מאיה לוין",
                experience: 16,
                location: "הרצליה",
                cases: 280,
                description: "מתמחה במיסוי מקרקעין ומע\"מ.",
                rating: 4.7,
                reviews: 125,
                image: "👩‍⚖",
                expertise: ["מיסוי מקרקעין", "מע\"מ", "ערעורי מס"]
            },
            {
                id: 6,
                name: "עו'ד אורי ברנע",
                experience: 28,
                location: "חיפה",
                cases: 450,
                description: "מומחה במיסוי נאמנויות וירושות.",
                rating: 4.9,
                reviews: 200,
                image: "👨‍⚖",
                expertise: ["מיסוי נאמנויות", "מיסוי ירושות", "תכנון מס"]
            },
            {
                id: 7,
                name: "עו'ד שירה אלדר",
                experience: 19,
                location: "ראשון לציון",
                cases: 310,
                description: "מתמחה במיסוי מקומי ומיסוי עירוני.",
                rating: 4.6,
                reviews: 140,
                image: "👩‍⚖",
                expertise: ["מיסוי מקומי", "ארנונה", "היטלי פיתוח"]
            },
            {
                id: 8,
                name: "עו'ד יעקב מזרחי",
                experience: 24,
                location: "נתניה",
                cases: 400,
                description: "מומחה במיסוי נדל\"ן והתחדשות עירונית.",
                rating: 4.8,
                reviews: 180,
                image: "👨‍⚖",
                expertise: ["מיסוי נדל\"ן", "תמ\"א 38", "פינוי-בינוי"]
            },
            {
                id: 9,
                name: "עו'ד דנה כהן",
                experience: 15,
                location: "פתח תקווה",
                cases: 250,
                description: "מתמחה במיסוי שוק ההון וקריפטו.",
                rating: 4.7,
                reviews: 120,
                image: "👩‍⚖",
                expertise: ["מיסוי שוק ההון", "מיסוי קריפטו", "דיווחי מס"]
            },
            {
                id: 10,
                name: "עו'ד רועי שטרן",
                experience: 21,
                location: "באר שבע",
                cases: 340,
                description: "מומחה בהליכי שומה וגילוי מרצון.",
                rating: 4.8,
                reviews: 150,
                image: "👨‍⚖",
                expertise: ["הליכי שומה", "גילוי מרצון", "ייצוג בבתי משפט"]
            }
        ],
        6: [ // נזיקין
            {
                id: 1,
                name: "עו'ד רועי אברהם",
                experience: 24,
                location: "תל אביב",
                cases: 450,
                description: "מומחה בתביעות נזקי גוף ותאונות דרכים.",
                rating: 4.9,
                reviews: 210,
                image: "👨‍⚖",
                expertise: ["נזקי גוף", "תאונות דרכים", "ביטוח לאומי"]
            },
            {
                id: 2,
                name: "עו'ד מיכל לוין",
                experience: 19,
                location: "חיפה",
                cases: 320,
                description: "מתמחה בתביעות רשלנות רפואית.",
                rating: 4.8,
                reviews: 150,
                image: "👩‍⚖",
                expertise: ["רשלנות רפואית", "טעויות רפואיות", "זכויות מטופלים"]
            },
            {
                id: 3,
                name: "עו'ד דנה שביט",
                experience: 18,
                location: "תל אביב",
                cases: 300,
                description: "מתמחה בתביעות רשלנות רפואית מורכבות.",
                rating: 4.8,
                reviews: 140,
                image: "👩‍⚖",
                expertise: ["רשלנות רפואית", "נזקי גוף", "תביעות ביטוח"]
            },
            {
                id: 4,
                name: "עו'ד אלון מזרחי",
                experience: 22,
                location: "רמת גן",
                cases: 380,
                description: "מומחה בתביעות נזיקין ותאונות עבודה.",
                rating: 4.9,
                reviews: 170,
                image: "👨‍⚖",
                expertise: ["תאונות עבודה", "נזקי גוף", "ביטוח לאומי"]
            },
            {
                id: 5,
                name: "עו'ד שירה גולן",
                experience: 15,
                location: "ירושלים",
                cases: 250,
                description: "מתמחה בתביעות נזקי רכוש ואחריות מקצועית.",
                rating: 4.7,
                reviews: 120,
                image: "👩‍⚖",
                expertise: ["נזקי רכוש", "אחריות מקצועית", "ביטוח"]
            },
            {
                id: 6,
                name: "עו'ד יואב ברק",
                experience: 27,
                location: "הרצליה",
                cases: 480,
                description: "מומחה בתביעות נזיקין מורכבות ותאונות קטלניות.",
                rating: 4.9,
                reviews: 220,
                image: "👨‍⚖",
                expertise: ["תאונות קטלניות", "נזקי גוף", "תביעות מורכבות"]
            },
            {
                id: 7,
                name: "עו'ד נועה כהן",
                experience: 16,
                location: "ראשון לציון",
                cases: 270,
                description: "מתמחה בתביעות נגד רשויות וגופים ציבוריים.",
                rating: 4.7,
                reviews: 130,
                image: "👩‍⚖",
                expertise: ["תביעות נגד רשויות", "נזקי גוף", "רשלנות"]
            },
            {
                id: 8,
                name: "עו'ד דורון לוי",
                experience: 23,
                location: "באר שבע",
                cases: 400,
                description: "מומחה בתביעות נזיקין סביבתיות ומפגעים.",
                rating: 4.8,
                reviews: 180,
                image: "👨‍⚖",
                expertise: ["נזקים סביבתיים", "מפגעים", "זיהום"]
            },
            {
                id: 9,
                name: "עו'ד רותם אדלר",
                experience: 20,
                location: "נתניה",
                cases: 340,
                description: "מתמחה בתביעות לשון הרע והגנת הפרטיות.",
                rating: 4.8,
                reviews: 160,
                image: "👩‍⚖",
                expertise: ["לשון הרע", "הגנת הפרטיות", "נזקי מוניטין"]
            },
            {
                id: 10,
                name: "עו'ד עמית שטרן",
                experience: 25,
                location: "פתח תקווה",
                cases: 420,
                description: "מומחה בתביעות נזיקין בתחום הספורט והפנאי.",
                rating: 4.8,
                reviews: 190,
                image: "👨‍⚖",
                expertise: ["נזקי ספורט", "תאונות פנאי", "אחריות מארגנים"]
            }
        ],
        7: [ // הוצאה לפועל
            {
                id: 1,
                name: "עו'ד אבי כהן",
                experience: 25,
                location: "תל אביב",
                cases: 520,
                description: "מומחה בגביית חובות מורכבים והליכי פשיטת רגל.",
                rating: 4.9,
                reviews: 230,
                image: "👨‍⚖",
                expertise: ["גביית חובות", "פשיטת רגל", "הסדרי חוב"]
            },
            {
                id: 2,
                name: "עו'ד שירה לוי",
                experience: 18,
                location: "ירושלים",
                cases: 340,
                description: "מתמחה בהליכי הוצאה לפועל ועיקולים.",
                rating: 4.7,
                reviews: 160,
                image: "👩‍⚖",
                expertise: ["עיקולים", "גביית חובות", "אכיפת פסקי דין"]
            },
            {
                id: 3,
                name: "עו'ד יאיר כהן",
                experience: 20,
                location: "תל אביב",
                cases: 400,
                description: "מומחה בהליכי פשיטת רגל מורכבים.",
                rating: 4.8,
                reviews: 160,
                image: "👨‍⚖",
                expertise: ["פשיטת רגל", "חדלות פירעון", "הסדרי חוב"]
            },
            {
                id: 4,
                name: "עו'ד רונית אשכנזי",
                experience: 15,
                location: "ראשון לציון",
                cases: 280,
                description: "מתמחה בגביית חובות והליכי עיקול.",
                rating: 4.7,
                reviews: 130,
                image: "👩‍⚖",
                expertise: ["גביית חובות", "עיקולים", "אכיפת פסקי דין"]
            },
            {
                id: 5,
                name: "עו'ד דוד מזרחי",
                experience: 22,
                location: "חיפה",
                cases: 420,
                description: "מומחה בהליכי חדלות פירעון ושיקום כלכלי.",
                rating: 4.8,
                reviews: 190,
                image: "👨‍⚖",
                expertise: ["חדלות פירעון", "שיקום כלכלי", "הסדרי נושים"]
            },
            {
                id: 6,
                name: "עו'ד מיכל ברק",
                experience: 17,
                location: "רמת גן",
                cases: 300,
                description: "מתמחה בהליכי כינוס נכסים ופירוק חברות.",
                rating: 4.6,
                reviews: 140,
                image: "👩‍⚖",
                expertise: ["כינוס נכסים", "פירוק חברות", "הסדרי חוב"]
            },
            {
                id: 7,
                name: "עו'ד אלון גולדברג",
                experience: 24,
                location: "הרצליה",
                cases: 450,
                description: "מומחה בהליכי גבייה מורכבים ואכיפת פסקי דין.",
                rating: 4.9,
                reviews: 200,
                image: "👨‍⚖",
                expertise: ["גבייה מורכבת", "אכיפת פסקי דין", "עיקולים"]
            },
            {
                id: 8,
                name: "עו'ד נועה שטרן",
                experience: 16,
                location: "נתניה",
                cases: 260,
                description: "מתמחה בהליכי הוצאה לפועל נגד חייבים מוגנים.",
                rating: 4.7,
                reviews: 120,
                image: "👩‍⚖",
                expertise: ["חייבים מוגנים", "הגנת דייר", "הסדרי תשלום"]
            },
            {
                id: 9,
                name: "עו'ד יובל אדלר",
                experience: 19,
                location: "פתח תקווה",
                cases: 350,
                description: "מומחה בהליכי מימוש משכנתאות ומשכונות.",
                rating: 4.8,
                reviews: 170,
                image: "👨‍⚖",
                expertise: ["מימוש משכנתאות", "משכונות", "פינוי מקרקעין"]
            },
            {
                id: 10,
                name: "עו'ד רחל דביר",
                experience: 21,
                location: "באר שבע",
                cases: 380,
                description: "מתמחה בהליכי גבייה מול רשויות וגופים ציבוריים.",
                rating: 4.8,
                reviews: 180,
                image: "👩‍⚖",
                expertise: ["גבייה מרשויות", "חובות ארנונה", "חובות מיסים"]
            }
        ]
    };

    // מיפוי שמות התחומים
    const specialtyNames = {
        1: "דיני משפחה",
        2: "דיני עבודה",
        3: "נדל'ן",
        4: "תעבורה",
        5: "פלילי",
        6: "נזיקין",
        7: "הוצאה לפועל",
        8: "דיני חברות",
        9: "דיני ירושה",
        10: "דיני מיסים"
    };

    const lawyers = lawyersBySpecialty[id] || [];
    const specialtyName = specialtyNames[id] || "תחום לא ידוע";

    return (
        <div className="specialty-container">
            <h1 className="specialty-title">עורכי דין מומחים בתחום {specialtyName}</h1>
            <div className="lawyers-grid"> {/* שונה מ-lawyers-detailed-grid ל-lawyers-grid */}
                {lawyers.map((lawyer) => (
                    <div key={lawyer.id} className="lawyer-card"> {/* עדכן className */}
                        <div className="lawyer-header">
                            <span className="lawyer-avatar">{lawyer.image}</span>
                            <h2>{lawyer.name}</h2>
                        </div>
                        <div className="lawyer-info">
                            <p><strong>ניסיון:</strong> {lawyer.experience} שנים</p>
                            <p><strong>מיקום:</strong> {lawyer.location}</p>
                            <p><strong>תיקים שטופלו:</strong> {lawyer.cases}+</p>
                        </div>
                        <div className="lawyer-expertise">
                            <strong>תחומי התמחות:</strong>
                            <div className="expertise-tags">
                                {lawyer.expertise.map((exp, index) => (
                                    <span key={index} className="expertise-tag">{exp}</span>
                                ))}
                            </div>
                        </div>
                        <p className="lawyer-description">{lawyer.description}</p>
                        <div className="lawyer-rating">
                            <span className="stars">{'⭐'.repeat(Math.floor(lawyer.rating))}</span>
                            <span className="rating-number">{lawyer.rating}</span>
                            <span className="reviews-count">({lawyer.reviews} ביקורות)</span>
                        </div>
                        <button className="button contact-button">📞 צור קשר</button>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default SpecialtyPage;