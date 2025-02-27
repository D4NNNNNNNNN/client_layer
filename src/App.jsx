import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Specialties from './pages/Specialties';
import UsefulInfo from './pages/UsefulInfo';
import News from './pages/News';
import Articles from './pages/Articles';
import SpecialtyPage from './pages/SpecialtyPage'; // ✅ ייבוא של הדף שחסר
import './styles/App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import LawyersMap from './components/LawyersMap';
import Meeting from './pages/Meeting';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/info" element={<UsefulInfo />} />
          <Route path="/news" element={<News />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/specialty/:id" element={<SpecialtyPage />} /> {/* ✅ זה מה שהיה חסר */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/map" element={<LawyersMap />} />
          <Route path="/meeting" element={<Meeting />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
