import React, { useState } from 'react';
import '../styles/AddLawyerModal.css';
import { submitLawyerRequest } from '../Api/api';

function AddLawyerModal({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    specialties: '',
    experience: '',
    education: '',
    about: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      await submitLawyerRequest(formData);
      alert('הבקשה נשלחה בהצלחה!');
      onClose();
    } catch (error) {
      console.error('Error in form submission:', error);
      alert(error.message || 'אירעה שגיאה בשליחת הבקשה');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>הוספת עורך דין חדש</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>שם פרטי:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>שם משפחה:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>טלפון:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>אימייל:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>כתובת:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>תחומי התמחות:</label>
            <textarea
              name="specialties"
              value={formData.specialties}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>ניסיון:</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>השכלה:</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>אודות:</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>תמונה:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
          </div>

          <div className="modal-buttons">
            <button type="submit">שלח בקשה</button>
            <button type="button" onClick={onClose}>ביטול</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddLawyerModal; 