import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-serif mb-6">Our Story</h1>
        <p className="text-gray-600 mb-8">
          At Lumière, we believe that jewelry is more than mere adornment—it's an expression of personal style, 
          a celebration of life's precious moments, and a legacy to be passed down through generations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=800" 
            alt="Jewelry crafting"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-serif mb-4">Craftsmanship</h2>
          <p className="text-gray-600 mb-4">
            Each piece in our collection is meticulously crafted by skilled artisans who have dedicated their lives 
            to the art of fine jewelry making. We combine traditional techniques with modern innovation to create 
            pieces that are both timeless and contemporary.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence extends beyond aesthetics—we source only the finest materials, 
            ensuring that every creation meets our exacting standards for quality and durability.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-serif mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3">Quality</h3>
            <p className="text-gray-600">
              We never compromise on the quality of our materials or craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to ethical sourcing and sustainable practices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously explore new techniques while honoring traditional craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;