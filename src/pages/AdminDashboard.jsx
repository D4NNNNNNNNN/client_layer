import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLawyerRequests, approveLawyer, rejectLawyer, editLawyerRequest } from '../Api/api';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
    const [requests, setRequests] = useState([]);
    const [editingRequest, setEditingRequest] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // בדיקה אם המשתמש הוא אדמין
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData || userData.Permission !== 'admin') {
            navigate('/');
            return;
        }
        
        loadRequests();
    }, [navigate]);

    const loadRequests = async () => {
        try {
            const data = await getLawyerRequests();
            setRequests(data);
        } catch (error) {
            alert('שגיאה בטעינת הבקשות');
        }
    };

    const handleApprove = async (requestId) => {
        try {
            await approveLawyer(requestId);
            await loadRequests();
            alert('הבקשה אושרה בהצלחה');
        } catch (error) {
            alert('שגיאה באישור הבקשה');
        }
    };

    const handleReject = async (requestId) => {
        try {
            await rejectLawyer(requestId);
            await loadRequests();
            alert('הבקשה נדחתה');
        } catch (error) {
            alert('שגיאה בדחיית הבקשה');
        }
    };

    const handleEdit = async (request) => {
        setEditingRequest(request);
    };

    const handleSaveEdit = async () => {
        try {
            await editLawyerRequest(editingRequest._id, editingRequest);
            setEditingRequest(null);
            await loadRequests();
            alert('הבקשה עודכנה בהצלחה');
        } catch (error) {
            alert('שגיאה בעדכון הבקשה');
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>ניהול בקשות עורכי דין</h1>
            
            <div className="requests-container">
                {requests.map(request => (
                    <div key={request._id} className="request-card">
                        {editingRequest?._id === request._id ? (
                            // טופס עריכה
                            <div className="edit-form">
                                <input
                                    value={editingRequest.firstName}
                                    onChange={(e) => setEditingRequest({
                                        ...editingRequest,
                                        firstName: e.target.value
                                    })}
                                    placeholder="שם פרטי"
                                />
                                {/* שאר השדות לעריכה */}
                                <div className="edit-buttons">
                                    <button onClick={handleSaveEdit}>שמור</button>
                                    <button onClick={() => setEditingRequest(null)}>ביטול</button>
                                </div>
                            </div>
                        ) : (
                            // תצוגת הבקשה
                            <>
                                <div className="request-header">
                                    <h3>{request.firstName} {request.lastName}</h3>
                                    <div className="request-status">{request.status}</div>
                                </div>
                                <div className="request-details">
                                    <p><strong>טלפון:</strong> {request.phone}</p>
                                    <p><strong>אימייל:</strong> {request.email}</p>
                                    <p><strong>כתובת:</strong> {request.address}</p>
                                    <p><strong>תחומי התמחות:</strong> {request.specialties}</p>
                                    <p><strong>ניסיון:</strong> {request.experience}</p>
                                    <p><strong>השכלה:</strong> {request.education}</p>
                                    <p><strong>אודות:</strong> {request.about}</p>
                                </div>
                                <div className="request-actions">
                                    <button 
                                        className="approve-btn"
                                        onClick={() => handleApprove(request._id)}
                                    >
                                        ✓ אשר
                                    </button>
                                    <button 
                                        className="edit-btn"
                                        onClick={() => handleEdit(request)}
                                    >
                                        ✎ ערוך
                                    </button>
                                    <button 
                                        className="reject-btn"
                                        onClick={() => handleReject(request._id)}
                                    >
                                        ✕ דחה
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminDashboard; 