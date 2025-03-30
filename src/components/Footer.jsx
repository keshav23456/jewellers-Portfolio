import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-4 text-gray-400">
              Crafting timeless elegance through exquisite jewelry pieces.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Shipping Info</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/rings" className="text-gray-400 hover:text-white">Rings</Link></li>
              <li><Link to="/category/necklaces" className="text-gray-400 hover:text-white">Necklaces</Link></li>
              <li><Link to="/category/earrings" className="text-gray-400 hover:text-white">Earrings</Link></li>
              <li><Link to="/category/bracelets" className="text-gray-400 hover:text-white">Bracelets</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">New Arrivals</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/shankerjewellers._sirsa?igsh=MWFmbnZwbWFhcXNzbg%3D%3D&utm_source=qr" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/shankerjewellers._sirsa?igsh=MWFmbnZwbWFhcXNzbg%3D%3D&utm_source=qr" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/shankerjewellers._sirsa?igsh=MWFmbnZwbWFhcXNzbg%3D%3D&utm_source=qr" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <div className="text-gray-400">
                <p className="mb-2">Contact Us:</p>
                <p>Email: info@shankersjewellers.com</p>
                <p>Phone: 92554-00037</p>
                <p>Phone: 95182-00642</p>
                <p>Phone: 87080-12135</p>
                <p>Address:  Gali Jain School Wali,Bhadra Bazar </p>
                <p>Bhadra Bazar,Sirsa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shankers Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;