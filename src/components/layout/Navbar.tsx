'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { label: 'New offers', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Children', href: '#' },
  { label: 'Brands', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* Top Row: Hamburger, Logo, Search, Cart */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            {/* Left: Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-opacity-20 hover:bg-white flex-shrink-0 transition-colors text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Center/Logo - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex flex-1 justify-center lg:justify-start lg:flex-none lg:mr-8">
              <Link
                href="/"
                className="text-5xl font-bold tracking-tight text-white transition-colors"
              >
                off-white
              </Link>
            </div>

            {/* Mobile Logo - Visible only on mobile */}
            <div className="lg:hidden flex-1 text-center">
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-white transition-colors"
              >
                off-white
              </Link>
            </div>

            {/* Right: Search & Cart Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                className="p-2 rounded-md hover:bg-opacity-20 hover:bg-white transition-colors text-white"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-md hover:bg-opacity-20 hover:bg-white transition-colors text-white relative"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links - Second Row (Desktop Only) */}
          <div
            className={`hidden lg:flex justify-center items-center gap-8 pb-4 transition-colors ${
              isScrolled
                ? 'border-b border-gray-700'
                : 'border-b border-white border-opacity-20'
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white hover:opacity-70 transition-opacity font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
