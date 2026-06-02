'use client';

import React from 'react';
import coverImg from '../../public/images/bgcover2.jpg';

export default function Hero() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-0 min-h-screen overflow-hidden">
      {/* Background Image - Full Cover (Extended to cover navbar) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: coverImg ? `url(${coverImg.src})` : 'none',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content - On Top of Background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Hero Container - Flex column on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen lg:min-h-[600px] pt-16">
          {/* Left Content - Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 py-12 lg:py-0 order-2 lg:order-1">
            {/* Top Tag */}
            <div className="space-y-2">
              <p className="text-white text-sm md:text-base font-medium tracking-widest">
                LUXURIOUS
              </p>
              {/* Main Heading */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-9xl font-bold leading-tight tracking-tight">
                STYLE LIFE
              </h1>
            </div>

            {/* Left Bottom Text */}
            <div className="space-y-4">
              <p className="text-white text-xs md:text-sm font-semibold tracking-wide">
                ALL TIME BEST
                <br />
                OFFERS
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 font-bold text-sm md:text-base hover:bg-gray-100 transition-colors rounded-sm w-fit">
                SHOP NOW.
              </button>
            </div>

            {/* Right Bottom Text (Repositioned for mobile) */}
            <div className="pt-4 lg:pt-0">
              <p className="text-white text-xs md:text-sm font-semibold tracking-wide">
                CELEBRATE INDIVIDUALITY
                <br />
                WITH UNIQUE OUTFITS
              </p>
            </div>

            {/* Save More Text */}
            <div className="hidden lg:block pt-8">
              <p className="text-white text-sm font-medium">SAVE MORE</p>
            </div>
          </div>

          {/* Right Content - Empty on desktop (background image shows here) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0">
            {/* Overlay Text - Bottom Right (Desktop Only) */}
            <div className="absolute bottom-8 right-8 bg-black bg-opacity-50 text-white px-6 py-4 rounded-sm hidden lg:block">
              <p className="text-sm font-bold tracking-wide">SHOP NOW.</p>
              <p className="text-sm font-semibold tracking-wide">SAVE MORE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA Button (visible only on mobile) */}
      <div className="relative z-10 lg:hidden w-full px-4 sm:px-6 pb-8">
        <button className="w-full bg-white text-gray-900 py-3 font-bold text-base hover:bg-gray-100 transition-colors rounded-sm">
          EXPLORE COLLECTION
        </button>
      </div>
    </section>
  );
}
