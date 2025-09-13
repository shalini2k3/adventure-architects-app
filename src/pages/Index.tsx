import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import DestinationsSection from '@/components/DestinationsSection';
import GallerySection from '@/components/GallerySection';
import ItinerarySection from '@/components/ItinerarySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BlogSection />
        <DestinationsSection />
        <GallerySection />
        <ItinerarySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;