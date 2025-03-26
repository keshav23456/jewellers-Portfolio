import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const featuredCollections = [
    {
      id: 1,
      name: 'Vintage Pearl Collection',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500',
      category: 'necklaces',
      price: 74999
    },
    {
      id: 2,
      name: 'Diamond Elegance Ring',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=500',
      category: 'rings',
      price: 109999
    },
    {
      id: 3,
      name: 'Modern Minimalist Bracelet',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=500',
      category: 'bracelets',
      price: 37999
    },
    {
      id: 4,
      name: 'Sapphire Drop Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=500',
      category: 'earrings',
      price: 58999
    },
    {
      id: 5,
      name: 'Rose Gold Chain',
      image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=500',
      category: 'necklaces',
      price: 66999
    },
    {
      id: 6,
      name: 'Emerald Eternity Band',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=500',
      category: 'rings',
      price: 134999
    },
    {
      id: 7,
      name: 'Crystal Tennis Bracelet',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500',
      category: 'bracelets',
      price: 74999
    },
    {
      id: 8,
      name: 'Pearl Stud Earrings',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=500',
      category: 'earrings',
      price: 24999
    }
  ];

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-cover bg-center" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80)',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }}>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-serif text-white mb-6">Timeless Elegance, Modern Style</h1>
            <p className="text-xl text-white mb-8">Discover our curated collection where each piece tells your unique story.</p>
            <Link 
              to="/category/rings" 
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCollections.map((collection) => (
            <div key={collection.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-medium mb-2">{collection.name}</h3>
                  <p className="text-gray-600 mb-3">{formatPrice(collection.price)}</p>
                  <Link 
                    to={`/category/${collection.category}`}
                    className="block w-full bg-gray-900 text-white text-center py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;