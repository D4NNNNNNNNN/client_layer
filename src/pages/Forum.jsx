import React, { useEffect, useState } from "react";
import axios from "axios";

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ title: "", content: "" });
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/forum/questions")
      .then(response => setQuestions(response.data))
      .catch(error => console.error("Error fetching questions:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/forum/questions", newQuestion)
      .then(response => {
        setQuestions([...questions, response.data]);
        setNewQuestion({ title: "", content: "" });
      })
      .catch(error => console.error("Error adding question:", error));
  };

  return (
    <div>
      <h1>פורום שאלות</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="כותרת השאלה"
          value={newQuestion.title}
          onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
        />
        <textarea
          placeholder="תוכן השאלה"
          value={newQuestion.content}
          onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
        />
        <button type="submit">שלח שאלה</button>
      </form>
      <ul>
        {questions.map(q => (
          <li key={q._id}>
            <h3>{q.title}</h3>
            <p>{q.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
