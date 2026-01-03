import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Theme Toggle Logic
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* LEFT SIDE: Logo and Theme Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-xl text-blue-600 dark:text-blue-400">
            Bitxbase Events Hub
          </Link>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* CENTER/RIGHT: Desktop Links (Hidden on Phone) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Home</Link>
          <Link to="/add-event" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Add Event</Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">About</Link>
          
          {/* Small Profile Icon for Desktop */}
          <img 
            src="/bagami.jpg" 
            alt="Bagami" 
            className="w-8 h-8 rounded-full border border-blue-500 object-cover"
          />
        </div>

        {/* MOBILE: Hamburger Button (Hidden on Laptop) */}
        <button 
          className="md:hidden p-2 text-gray-600 dark:text-gray-300" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU: Animated Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="dark:text-white" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/add-event" className="dark:text-white" onClick={() => setIsOpen(false)}>Add Event</Link>
              <Link to="/about" className="dark:text-white" onClick={() => setIsOpen(false)}>About</Link>
              
              {/* Profile Image in Mobile Menu */}
              <div className="flex items-center gap-3 pt-2 border-t dark:border-gray-700">
                <img src="/bagami.jpg" className="w-10 h-10 rounded-full border-2 border-blue-500" alt="Bagami" />
                <span className="dark:text-white font-medium">Bagami</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;