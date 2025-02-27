// src/components/Carousel.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // עדכון הייבוא

const Carousel = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch("https://storage.googleapis.com/tolaat-mishpat/cases.json");
        if (!response.ok) {
          throw new Error("בעיה בטעינת הנתונים");
        }
        const data = await response.json();

        if (data && Array.isArray(data)) {
          const formattedCases = data.slice(0, 5).map((item, index) => ({
            id: index + 1,
            title: item.case_title || "תיק ללא כותרת",
            description: item.case_summary || "אין תיאור זמין.",
          }));
          setCases(formattedCases);
        } else {
          throw new Error("מבנה נתונים לא תקין");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className="carousel-container">
      {loading ? (
        <p>🔄 טוען נתונים...</p>
      ) : error ? (
        <p>❌ שגיאה בטעינת הנתונים: {error}</p>
      ) : (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]} // עדכון השימוש במודולים
          className="mySwiper"
        >
          {cases.map((caseItem) => (
            <SwiperSlide key={caseItem.id}>
              <div className="carousel-slide">
                <h3>{caseItem.title}</h3>
                <p>{caseItem.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
