import Hero from '@/components/home/Hero';
import Info from '@/components/home/Info';
import NewArrival from '@/components/home/NewArrival';
import PromoSection from '@/components/home/PromoSection';
import StackingCards from '@/components/home/StackCards';

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrival />
      <PromoSection />
      <StackingCards />
      <Info />

      {/* More sections will be added here */}
    </div>
  );
}
