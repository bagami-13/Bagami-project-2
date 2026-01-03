import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import About from './pages/About';
import { Plus } from 'lucide-react'; // Import the Plus icon
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* 1. The Navbar stays at the top of EVERY page */}
        <Navbar />

        {/* 2. This is the Switcher: it only shows ONE page at a time */}
        <main className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* 3. The Floating Plus Button (Visible on all pages) */}
        <Link 
          to="/add-event" 
          className="fixed bottom-10 right-10 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center justify-center"
        >
          <Plus size={32} strokeWidth={2.5} />
        </Link>
      </div>
    </Router>
  );
}

export default App;