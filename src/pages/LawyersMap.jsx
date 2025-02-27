import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// רשימה של עורכי דין עם מיקומים שונים
const lawyers = [
  { id: 1, name: "עו״ד משה כהן", lat: 32.0853, lng: 34.7818 }, // תל אביב
  { id: 2, name: "עו״ד יעל לוי", lat: 31.7683, lng: 35.2137 }, // ירושלים
  { id: 3, name: "עו״ד דני פרידמן", lat: 32.1093, lng: 34.8555 }, // רמת גן
  { id: 4, name: "עו״ד אבי ברוך", lat: 31.2529, lng: 34.7915 }, // באר שבע
  { id: 5, name: "עו״ד רוני מזרחי", lat: 32.7940, lng: 34.9896 }, // חיפה
  { id: 6, name: "עו״ד סיגל שטרן", lat: 32.0809, lng: 34.7806 }, // תל אביב
  { id: 7, name: "עו״ד אורן כהן", lat: 31.0461, lng: 34.8516 }, // דרום הארץ
  { id: 8, name: "עו״ד נועה אביטל", lat: 32.1686, lng: 34.8433 }, // הרצליה
  { id: 9, name: "עו״ד דינה לוי", lat: 31.9842, lng: 34.7806 }, // רחובות
  { id: 10, name: "עו״ד מרק דוידוב", lat: 32.7940, lng: 35.1044 }, // קריות
  { id: 11, name: "עו״ד נעמי בלוך", lat: 32.1093, lng: 34.8555 }, // רמת גן
  { id: 12, name: "עו״ד שלומי ישראלי", lat: 32.794, lng: 34.9896 }, // חיפה
  { id: 13, name: "עו״ד רוני רוזן", lat: 31.2657, lng: 34.8011 }, // באר שבע
  { id: 14, name: "עו״ד תומר אדרי", lat: 31.9522, lng: 34.8882 }, // ראשון לציון
  { id: 15, name: "עו״ד ליאור וייס", lat: 32.0627, lng: 34.7748 }, // תל אביב - יפו
  { id: 16, name: "עו״ד מיכל נחום", lat: 32.318, lng: 34.8536 }, // נתניה
  { id: 17, name: "עו״ד זוהר ביטון", lat: 31.6778, lng: 34.5796 }, // אשקלון
  { id: 18, name: "עו״ד אלעד פיינברג", lat: 32.1624, lng: 34.8446 }, // כפר סבא
  { id: 19, name: "עו״ד קובי ברזילי", lat: 32.7940, lng: 35.0144 }, // טירת הכרמל
  { id: 20, name: "עו״ד רותם ברק", lat: 32.146, lng: 34.8734 } // רעננה
];

// Define the custom icon using the public path
const customIcon = new Icon({
    iconUrl: '/images/36f919d2-6e14-48b8-879d-9516f04a586e.webp',  // Path relative to public folder
    iconSize: [25, 41],     // Size of the icon
    iconAnchor: [12, 41],   // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34]   // Point from which the popup should open relative to the iconAnchor
});

const LawyersMap = () => {
  return (
    <MapContainer center={[32.0853, 34.7818]} zoom={8} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lawyers.map((lawyer) => (
        <Marker key={lawyer.id} position={[lawyer.lat, lawyer.lng]} icon={customIcon}>
          <Popup>{lawyer.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LawyersMap;
