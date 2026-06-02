'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ShoppingCart, ArrowRight } from 'lucide-react';

import Image1 from '../../public/images/img1.jpg';
import Image2 from '../../public/images/img2.jpg';
import Image3 from '../../public/images/img3.jpg';
import Image4 from '../../public/images/img4.jpg';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string | StaticImageData;
  category: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nike Therma FIT Hooded',
    price: 120.0,
    image: Image1,
    category: 'Men',
  },
  {
    id: '2',
    name: 'Harrington Jacket',
    price: 170.0,
    image: Image2,
    category: 'Men',
  },
  {
    id: '3',
    name: 'Track Jacket',
    price: 270.0,
    image: Image3,
    category: 'Men',
  },
  {
    id: '4',
    name: 'Solo Swoosh',
    price: 150.3,
    image: Image4,
    category: 'Men',
  },
];

export default function NewArrival() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            New Arrival
          </h2>
          <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors">
            View all
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex flex-col"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Image Container */}
              <div className="relative w-full flex-1 bg-gray-100 rounded-lg overflow-hidden mb-3 sm:mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay - Desktop Only */}
                {hoveredId === product.id && (
                  <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-40 items-end justify-center pb-4">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Quick View
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-2 sm:gap-3">
                {/* Product Name */}
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 line-clamp-2 hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm sm:text-base text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button - Mobile & Desktop */}
                <button className="w-full bg-gray-900 text-white py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile Only */}
        <div className="flex md:hidden justify-center mt-8">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors py-3 px-6 border border-gray-300 rounded-lg hover:border-gray-900">
            View all
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
