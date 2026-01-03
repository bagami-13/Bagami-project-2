import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// MAKE SURE THESE PATHS ARE EXACTLY CORRECT
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent'; 
import About from './pages/About';
import { Plus } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Floating Plus Button */}
        <Link 
          to="/add-event" 
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
        >
          <Plus size={24} />
        </Link>
      </div>
    </Router>
  );
}

export default App;