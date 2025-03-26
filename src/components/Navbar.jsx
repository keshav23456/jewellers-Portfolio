import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User } from 'lucide-react';
import Logo from './Logo';

const categories = [
  { name: 'Rings', path: '/category/rings' },
  { name: 'Necklaces', path: '/category/necklaces' },
  { name: 'Earrings', path: '/category/earrings' },
  { name: 'Bracelets', path: '/category/bracelets' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className={`absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isOpen ? '' : 'hidden'}`}>
                <div className="py-1">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>

          <div className="flex items-center">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <User className="h-6 w-6" />
              <span className="ml-2">Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;