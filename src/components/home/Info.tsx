import React from 'react';

export default function Info() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Info Section</h1>
      <p className="text-gray-700 mb-6">
        This is the info section of the off-white e-commerce website. Here you
        can find details about our products, shipping policies, and customer
        service.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Free shipping on orders over $100</li>
        <li>30-day return policy</li>
        <li>24/7 customer support</li>
      </ul>
    </div>
  );
}
