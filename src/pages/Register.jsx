import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Api/api';
import '../styles/Register.css';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        fatherName: '',
        lastName: '',
        birthday: '',
        phone: '',
        password: '',
        isLawyer: false,
        licenseNumber: '',
        specializations: [],
        yearsOfExperience: '',
        description: '',
        website: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSwitchChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            isLawyer: e.target.checked
        }));
    };

    const handleSpecializationsChange = (e) => {
        const value = e.target.value;
        setFormData(prevState => ({
            ...prevState,
            specializations: prevState.specializations.includes(value)
                ? prevState.specializations.filter(item => item !== value)
                : [...prevState.specializations, value]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await registerUser(formData);
            console.log('נרשמת בהצלחה:', response);
            navigate('/');
        } catch (err) {
            setError(err.message || 'התרחשה שגיאה בהרשמה');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h1>הרשמה</h1>
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>שם פרטי:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="הכנס שם פרטי"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>שם האב:</label>
                    <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        placeholder="הכנס שם האב"
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
                        placeholder="הכנס שם משפחה"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>תאריך לידה:</label>
                    <input
                        type="date"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>מספר טלפון:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="הכנס מספר טלפון"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>סיסמה:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="הכנס סיסמה"
                        required
                    />
                </div>

                {/* Switch button for lawyer selection */}
                <div className="form-group">
                    <label>האם אתה עורך דין?</label>
                    <div className="switch-container">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={formData.isLawyer}
                                onChange={handleSwitchChange}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span className="switch-label">
                            {formData.isLawyer ? 'כן' : 'לא'}
                        </span>
                    </div>
                </div>

                {/* Conditional Lawyer Fields */}
                {formData.isLawyer && (
                    <>
                        <div className="form-group">
                            <label>מספר רישיון:</label>
                            <input
                                type="text"
                                name="licenseNumber"
                                value={formData.licenseNumber}
                                onChange={handleChange}
                                placeholder="הכנס מספר רישיון"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>תחומי התמחות:</label>
                            <div className="specializations-group">
                                {['דיני משפחה', 'דיני עבודה', 'נדל"ן', 'פלילי', 'מסחרי', 'אחר'].map((spec) => (
                                    <label key={spec}>
                                        <input
                                            type="checkbox"
                                            value={spec}
                                            checked={formData.specializations.includes(spec)}
                                            onChange={handleSpecializationsChange}
                                        />
                                        {spec}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>שנות ניסיון:</label>
                            <input
                                type="number"
                                name="yearsOfExperience"
                                value={formData.yearsOfExperience}
                                onChange={handleChange}
                                min="0"
                                placeholder="הכנס שנות ניסיון"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>תיאור:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="תאר את עצמך ואת תחומי המומחיות שלך"
                                maxLength="1000"
                                rows="4"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>אתר אינטרנט:</label>
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="הכנס כתובת אתר (אופציונלי)"
                            />
                        </div>
                    </>
                )}

                <button type="submit" disabled={isLoading}>הרשם</button>
                {isLoading && <div className="loading-spinner"></div>}
            </form>
        </div>
    );
}

export default Register;
