import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/LawyersMap.css';

// תיקון לאייקונים של Leaflet
const icon = L.icon({
    iconUrl: '/images/icon-map.jpeg',
    iconRetinaUrl: '/images/icon-map.jpeg',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function LawyersMap() {
    const [lawyers] = useState([
        {
            id: 1,
            name: "עו״ד ישראל ישראלי",
            position: [32.0853, 34.7818], // תל אביב
            specialty: "דיני משפחה",
            phone: "050-1234567"
        },
        {
            id: 2,
            name: "עו״ד חיים כהן",
            position: [31.7683, 35.2137], // ירושלים
            specialty: "דיני עבודה",
            phone: "052-1234567"
        },
        {
            id: 3,
            name: "עו״ד שרה לוי",
            position: [32.7940, 34.9896], // חיפה
            specialty: "דיני מקרקעין",
            phone: "054-1234567"
        },
        {
            id: 4,
            name: "עו״ד דוד דוידוב",
            position: [31.2516, 34.7913], // באר שבע
            specialty: "דיני נזיקין",
            phone: "053-1234567"
        }
    ]);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <MapContainer 
                center={[31.7683, 34.7818]} 
                zoom={8} 
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {lawyers.map(lawyer => (
                    <Marker 
                        key={lawyer.id} 
                        position={lawyer.position}
                        icon={icon}
                    >
                        <Popup>
                            <div className="lawyer-popup">
                                <h3>{lawyer.name}</h3>
                                <p><strong>התמחות:</strong> {lawyer.specialty}</p>
                                <p><strong>טלפון:</strong> {lawyer.phone}</p>
                                <button 
                                    onClick={() => window.location.href = `tel:${lawyer.phone}`}
                                    className="call-lawyer-btn"
                                >
                                    📞 התקשר עכשיו
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default LawyersMap;
