import '/src/styles/Pages.css';


function Articles() {
  return (
    <div className="page-container">
      <h1>📖 מאמרים משפטיים</h1>
      <p>כאן תמצאו מאמרים משפטיים מקצועיים שנכתבו על ידי עורכי דין.</p>
      <ul>
        <li>📝 דיני חוזים</li>
        <li>🏢 דיני חברות</li>
        <li>💼 דיני עבודה</li>
      </ul>
    </div>
  );
}

export default Articles;
