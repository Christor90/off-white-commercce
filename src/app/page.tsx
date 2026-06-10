'use client';

import { useState } from 'react';
import Loader from '@/components/common/Loader';
import Hero from '@/components/home/Hero';
import NewArrival from '@/components/home/NewArrival';
import StackingCards from '@/components/home/StackCards';
import PromoSection from '@/components/home/PromoSection';
import Info from '@/components/home/Info';
import About from '@/components/home/About';

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      {!showLoader && (
        <>
          <div>
            <Hero />
            <About />
            <NewArrival />
            <PromoSection />
            <StackingCards />
            <Info />

            {/* More sections will be added here */}
          </div>
        </>
      )}
    </>
  );
}
