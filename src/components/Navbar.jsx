import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // These are your icons
import { motion, AnimatePresence } from 'framer-motion'; // For the smooth slide

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Switch for the menu

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="font-bold text-blue-600 text-xl">
          Bitxbase Events Hub
        </Link>

        {/* HAMBURGER BUTTON: Visible ONLY on mobile (md:hidden) */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP LINKS: Hidden on mobile, visible on laptop (md:flex) */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/add-event" className="hover:text-blue-500">Add Event</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </div>
      </div>

      {/* MOBILE MENU: Only shows when button is clicked */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col gap-4 mt-4 border-t pt-4"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/add-event" onClick={() => setIsOpen(false)}>Add Event</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;