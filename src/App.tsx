import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Trading from './pages/Trading';
import Developers from './pages/Developers';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
        <Navbar />
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
      </div>
    </Router>
  );
}

export default App;
