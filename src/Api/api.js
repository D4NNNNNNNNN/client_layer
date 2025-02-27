const BASE_URL = 'http://localhost:3000/api';

export const loginUser = async (phone, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone, password })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'התרחשה שגיאה בהתחברות');
        }

        // שמירת הטוקן ב-localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userData', JSON.stringify(data.data));

        return data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'התרחשה שגיאה בהרשמה');
        }

        // שמירת הטוקן ופרטי המשתמש
        localStorage.setItem('token', data.token);
        localStorage.setItem('userData', JSON.stringify(data.data));

        return data;
    } catch (error) {
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
};

export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};

export const submitLawyerRequest = async (lawyerData) => {
    try {
        const formData = new FormData();
        
        // הוספת כל השדות ל-FormData
        Object.keys(lawyerData).forEach(key => {
            if (lawyerData[key] !== null) {  // בדיקה שהערך לא null
                formData.append(key, lawyerData[key]);
            }
        });

        const token = localStorage.getItem('token');
        
        const response = await fetch(`${BASE_URL}/lawyers/request`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
                // לא מגדירים Content-Type כשמשתמשים ב-FormData
            },
            body: formData
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'אירעה שגיאה בשליחת הבקשה');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting lawyer request:', error);
        throw error;
    }
};

export const getLawyerRequests = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASE_URL}/lawyers/requests`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'שגיאה בטעינת הבקשות');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const approveLawyer = async (requestId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASE_URL}/lawyers/approve/${requestId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'שגיאה באישור הבקשה');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const rejectLawyer = async (requestId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASE_URL}/lawyers/reject/${requestId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'שגיאה בדחיית הבקשה');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const editLawyerRequest = async (requestId, updatedData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASE_URL}/lawyers/edit/${requestId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'שגיאה בעדכון הבקשה');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const getLawyers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/lawyers/all`);
        
        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'שגיאה בטעינת עורכי הדין');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching lawyers:', error);
        throw error;
    }
};
