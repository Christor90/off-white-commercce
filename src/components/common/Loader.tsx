
'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const GridLoader = dynamic(
  () => import('react-spinners').then((mod) => mod.GridLoader),
  { ssr: false }
);

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 3000); // Adjust duration as needed (3 seconds)

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-700 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Logo / Brand */}
      {/* <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
          off<span className="text-[#EB6200]">-white</span>
        </h1>
      </div> */}

      {/* Grid Loader Spinner */}
      <div className="mb-12 h-[72px] w-[72px]">
        {mounted ? (
          <GridLoader color="#EB6200" size={15} margin={8} speedMultiplier={1} />
        ) : null}
        {/* <PropagateLoader color="#EB6200" size={15} margin={8} speedMultiplier={1} /> */}
      </div>

      {/* Loading Text */}
      {/* <div>
        <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div> */}

      {/* Optional: Loading Message */}
      {/* <div className="mt-12 text-center">
        <p className="text-xs text-gray-400 tracking-wide">
          Preparing your experience...
        </p>
      </div> */}
    </div>
  );
}
