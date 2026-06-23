

'use client';

import React from 'react';
import { Truck, Lock, Headphones } from 'lucide-react';

interface FeatureCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: FeatureCard[] = [
  {
    id: 1,
    icon: <Truck className="w-12 h-12 text-[#EB6200]" strokeWidth={1.5} />,
    title: 'Free Shipping',
    description:
      'The ultimate clothing to see the world in. Be exclusive. Be Divine. Be yourself.',
  },
  {
    id: 2,
    icon: <Lock className="w-12 h-12 text-[#EB6200]" strokeWidth={1.5} />,
    title: 'Secured Payment',
    description:
      'The ultimate clothing to see the world in. Be exclusive. Be Divine. Be yourself.',
  },
  {
    id: 3,
    icon: <Headphones className="w-12 h-12 text-[#EB6200]" strokeWidth={1.5} />,
    title: 'Support 24/7',
    description:
      'The ultimate clothing to see the world in. Be exclusive. Be Divine. Be yourself.',
  },
];

export default function WhyPickUs() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why you Picking Us.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Winter is the coldest season of the year in polar and temperate zones.
            <br />
            It occurs after autumn and before spring each year.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className={`group p-8 md:p-10 rounded-lg transition-all duration-300 border-slate-100 ${
                index === 3
                  ? 'border-2 border-[#c6c3c2] bg-white'
                  : 'border-2 border-transparent bg-white hover:border-[#EB6200]'
              }`}
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center md:justify-start">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button className="bg-[#EB6200] text-white px-12 py-3 font-bold rounded-lg hover:bg-[#D35A00] transition-colors duration-300">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}