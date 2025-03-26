import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond } from 'lucide-react';

function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Diamond className="h-8 w-8 text-gray-800" />
      <span className="text-2xl font-serif">Shankers Jewellers</span>
    </Link>
  );
}

export default Logo;