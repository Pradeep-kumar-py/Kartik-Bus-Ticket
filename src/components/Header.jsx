import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-gray-900 font-extrabold text-2xl flex items-center tracking-tight">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          BusGo
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
          <Link to="/my-bookings" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">My Bookings</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact Us</Link>
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm">
            Login / Sign Up
          </Link>
        </div>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 px-4 shadow-sm">
          <Link to="/" className="block text-gray-700 py-2 hover:bg-gray-50 px-2 rounded transition-colors">Home</Link>
          <Link to="/my-bookings" className="block text-gray-700 py-2 hover:bg-gray-50 px-2 rounded transition-colors">My Bookings</Link>
          <Link to="/contact" className="block text-gray-700 py-2 hover:bg-gray-50 px-2 rounded transition-colors">Contact Us</Link>
          <Link to="/login" className="block text-blue-600 font-semibold py-2 hover:bg-blue-50 px-2 rounded transition-colors">Login / Sign Up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
