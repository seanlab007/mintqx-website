import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Trading from './pages/Trading';
import Developers from './pages/Developers';
import About from './pages/About';

function AppContent() {
  const [showLogin, setShowLogin] = useState(false)
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;