import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'off-white | Luxurious Style Life',
  description:
    'Discover premium fashion and lifestyle products with off-white. Every click is a step towards a more stylish you.',
  keywords: 'fashion, style, luxury, clothing, men, women, children',
  openGraph: {
    title: 'off-white | Luxurious Style Life',
    description: 'Premium fashion and lifestyle products',
    url: 'https://off-white.com',
    siteName: 'off-white',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
