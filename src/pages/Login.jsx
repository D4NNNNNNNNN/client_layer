import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Api/api';
import '../styles/Login.css';

function Login() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await loginUser(phone, password);
            console.log('התחברת בהצלחה:', response);
            // אילוץ רינדור מחדש של הנאבבר
            window.location.href = '/';
        } catch (err) {
            setError(err.message || 'התרחשה שגיאה בהתחברות');
        }
    };

    return (
        <div className="login-container">
            <h1>התחברות</h1>
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>מספר טלפון:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="הכנס מספר טלפון"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>סיסמה:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="הכנס סיסמה"
                        required
                    />
                </div>

                <button type="submit">התחבר</button>
            </form>
        </div>
    );
}

export default Login;
