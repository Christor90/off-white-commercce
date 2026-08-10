

'use client';

import Image from 'next/image';
import Image4 from '../../public/images/img4.jpg';

interface StatItem {
  id: number;
  number: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    id: 1,
    number: '120+',
    label: 'Products Launched',
  },
  {
    id: 2,
    number: '50+',
    label: 'Trusted Partners',
  },
  {
    id: 3,
    number: '98%',
    label: 'Customer Satisfaction',
  },
  {
    id: 4,
    number: '18+',
    label: 'Fashion Categories',
  },
];

export default function KeyStats() {
  return (
    <section className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="bg-white p-8 md:p-12 lg:p-16 shadow-lg">
          {/* Header Section - Flex Layout */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8 mb-12 md:mb-16">
            {/* Left: Label */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#EB6200]"></div>
              <span className="text-xs md:text-sm font-bold text-gray-900 tracking-widest whitespace-nowrap">
                KEY STATS
              </span>
            </div>

            {/* Right: Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight lg:max-w-2xl">
              Our journey in numbers — With over 120+ products delivered,{' '}
              <span className="text-gray-400">50+ trusted partners worldwide,</span> and pioneering
              fashion innovation, Off-White continues to craft design solutions
              that drive real results.
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden shadow-lg">
              <Image
                src={Image4}
                alt="Key Stats"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-3 md:gap-4 group"
                >
                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 group-hover:text-[#EB6200] transition-colors duration-300">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}