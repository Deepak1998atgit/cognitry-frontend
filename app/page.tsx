export const dynamic = 'force-dynamic';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhatWeOffer from '@/components/WhatWeOffer';
import WhyCognitry from '@/components/WhyCognitry';
import TechCTASection from '@/components/TechCTASection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CareerPathSection from '@/components/careerPathSection';
import PillarsOfSuccessSection from '@/components/PillarsOfSuccessSection';
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export async function generateMetadata() {
  const res = await fetch(`${API_URL}/api/homepage-seo`, {
    cache: 'no-store',
  });
  const data = await res?.json();
  const seo = data?.data;
  return {
    title: seo?.Title,
    description: seo?.Description
    ,
    keywords: seo?.Keywords
    ,
    openGraph: {
      title: seo?.Open_Graph_Title,
      description: seo?.Open_Graph_Description,
      images: [
        {
          url:"/og_image.png",
          width: 1200,
          height: 630,
          alt: 'OG Image',
        },
      ],
    },
  };
}

export default async function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhyCognitry />
      <WhatWeOffer />
      <CareerPathSection />
      <PillarsOfSuccessSection />
      <TestimonialsSection />
      <TechCTASection />
      <Footer />
    </div>
  );
}