import '/src/styles/Pages.css';


function News() {
  return (
    <div className="page-container">
      <h1>📰 חדשות ועדכונים משפטיים</h1>
      <p>כאן ניתן להתעדכן בכל החדשות המשפטיות האחרונות.</p>
      <ul>
        <li>⚖️ עדכונים בחקיקה</li>
        <li>📢 פסקי דין חשובים</li>
        <li>💬 חדשות מעולם המשפט</li>
      </ul>
    </div>
  );
}

export default News;
