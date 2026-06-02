'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import Image1 from '../../public/images/img1.jpg';
import Image2 from '../../public/images/img2.jpg';
import Image3 from '../../public/images/img3.jpg';
import Image4 from '../../public/images/img4.jpg';
import Image5 from '../../public/images/img5.jpg';
import Image6 from '../../public/images/img6.jpg';

interface PromoItem {
  id: number;
  title: string;
  image: string | StaticImageData;
}

const PROMO_ITEMS: PromoItem[] = [
  {
    id: 1,
    title: 'NIKE SOLO SWOOSH',
    image: Image1,
  },
  {
    id: 2,
    title: 'JORDAN FLIGHT FLEECE',
    image: Image2,
  },
  {
    id: 3,
    title: 'NIKE SPORTSWEAR THERMA',
    image: Image3,
  },
  {
    id: 4,
    title: 'JORDAN FLIGHT FLEECE',
    image: Image4,
  },
  {
    id: 5,
    title: 'NIKE SPORTSWEAR THERMA',
    image: Image5,
  },
  {
    id: 6,
    title: 'JORDAN FLIGHT FLEECE',
    image: Image6,
  },
];

export default function PromoSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            HERE EVERY CLICK IS A STEP
            <br className="hidden sm:block" />
            TOWARDS A MORE STYLISH YOU.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Large Featured Item (spans 2 rows on desktop) */}
          <div className="col-span-1 row-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-lg shadow-lg group h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <Image
              src={PROMO_ITEMS[0].image}
              alt={PROMO_ITEMS[0].title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 66vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center px-4">
                {PROMO_ITEMS[0].title}
              </h3>
            </div>
          </div>

          {/* Right Column Items (3 items stacked) */}
          {PROMO_ITEMS.slice(1, 6).map((item) => (
            <div
              key={item.id}
              className="col-span-1 row-span-1 relative overflow-hidden rounded-lg shadow-lg group h-64 sm:h-80 md:h-96 lg:h-56"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center px-3">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
