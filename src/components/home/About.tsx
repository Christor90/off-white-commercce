'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import Image1 from '../../public/images/img1.jpg';
import Image2 from '../../public/images/img2.jpg';
import Image3 from '../../public/images/img3.jpg';
// import Image4 from '../../public/images/img4.jpg';

interface AboutCard {
  id: number;
  title: string;
  description: string;
  //   image: string;
  backgroundColor: string;
  image: string | StaticImageData;
}

const ABOUT_CARDS: AboutCard[] = [
  {
    id: 1,
    title: 'Fashion Forward Innovators',
    description:
      'Early-stage fashion brands developing cutting-edge designs. Off-white empowers emerging designers with tools to quickly prototype and launch collections with confidence.',
    image: Image1,
    backgroundColor: 'from-green-900 to-green-800',
  },
  {
    id: 2,
    title: 'Sustainable Production Leaders',
    description:
      'Teams scaling eco-friendly manufacturing solutions. Our platform helps brands optimize production timelines and reduce waste through intelligent inventory management.',
    image: Image2,
    backgroundColor: 'from-slate-900 to-slate-800',
  },
  {
    id: 3,
    title: 'Luxury Retailers Optimizing Supply',
    description:
      'Established companies streamlining distribution networks. Off-white reduces complexity and costs, enabling seamless operations from warehouse to customer.',
    image: Image3,
    backgroundColor: 'from-amber-900 to-amber-800',
  },
];

export default function About() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 items-start">
          {/* Left: Logo */}
          <div className="flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg w-fit">
              <div className="w-5 h-5 bg-gray-900 rounded-sm"></div>
              <span className="text-sm font-semibold text-gray-900">
                About Off-White
              </span>
            </div>
          </div>

          {/* Right: Heading */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Redefining fashion retail with smart commerce solutions.{' '}
              <span className="text-slate-500">
                Off-White combines everything you need—intelligent inventory,
                intuitive design tools, and seamless automation—into one
                powerful platform.
              </span>
            </h2>
          </div>
        </div>

        {/* Three Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Scale Faster',
              description:
                'Grow your collection across 250+ retailers. Maximize market reach without compromising quality or brand identity.',
            },
            {
              title: 'Reduce Friction',
              description:
                'Spend less time managing inventory complexities. Focus more on design, marketing, and customer experience instead.',
            },
            {
              title: 'Build Smarter',
              description:
                'Launch campaigns without manual processes. Our intelligent platform gives you automated workflows and real-time insights.',
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative h-[400px] sm:h-[500px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Dark Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.backgroundColor} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-white">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-gray-100">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Ready to transform your fashion business?
          </p>
          <button className="inline-block bg-gray-900 text-white px-8 md:px-12 py-4 font-bold rounded-lg hover:bg-gray-800 transition-colors duration-300">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
