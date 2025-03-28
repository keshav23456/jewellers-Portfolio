import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  // Rings
  {
    id: 1,
    name: 'Diamond Solitaire Ring',
    weight: '3.5g',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=500',
    category: 'rings',
    description: 'Classic elegance in a timeless design'
  },
  {
    id: 2,
    name: 'Emerald Eternity Band',
    weight: '4.2g',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=500',
    category: 'rings',
    description: 'Endless beauty in emerald green'
  },
  {
    id: 3,
    name: 'Rose Gold Wedding Band',
    weight: '5.1g',
    image: 'https://images.unsplash.com/photo-1592435468595-07b6c8a1b7b1?auto=format&fit=crop&q=80&w=500',
    category: 'rings',
    description: 'Modern romance in rose gold'
  },
  // Necklaces
  {
    id: 4,
    name: 'Pearl Necklace',
    weight: '12.5g',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=500',
    category: 'necklaces',
    description: 'Timeless pearl elegance'
  },
  {
    id: 5,
    name: 'Diamond Pendant',
    weight: '8.3g',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=500',
    category: 'necklaces',
    description: 'Sparkling statement piece'
  },
  {
    id: 6,
    name: 'Gold Chain',
    weight: '15.7g',
    image: 'https://images.unsplash.com/photo-1575863438850-fb1c06a38881?auto=format&fit=crop&q=80&w=500',
    category: 'necklaces',
    description: 'Classic gold chain design'
  },
  // Earrings
  {
    id: 7,
    name: 'Gold Hoop Earrings',
    weight: '4.8g',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=500',
    category: 'earrings',
    description: 'Everyday luxury hoops'
  },
  {
    id: 8,
    name: 'Diamond Studs',
    weight: '2.9g',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=500',
    category: 'earrings',
    description: 'Classic diamond studs'
  },
  {
    id: 9,
    name: 'Pearl Drop Earrings',
    weight: '3.6g',
    image: 'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&q=80&w=500',
    category: 'earrings',
    description: 'Elegant pearl drops'
  },
  // Bracelets
  {
    id: 10,
    name: 'Tennis Bracelet',
    weight: '18.2g',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500',
    category: 'bracelets',
    description: 'Classic diamond tennis bracelet'
  },
  {
    id: 11,
    name: 'Gold Bangle',
    weight: '22.5g',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=500',
    category: 'bracelets',
    description: 'Sleek gold bangle'
  },
  {
    id: 12,
    name: 'Charm Bracelet',
    weight: '16.4g',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=500',
    category: 'bracelets',
    description: 'Personalized charm bracelet'
  }
];

function CategoryPage() {
  const { type } = useParams();
  const [visibleProducts, setVisibleProducts] = useState(6);
  const categoryProducts = products.filter(product => product.category === type);

  const handleLoadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 6, categoryProducts.length));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif mb-8 capitalize">{type}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-800 font-semibold mb-4">Weight: {product.weight}</p>
                <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProducts < categoryProducts.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;