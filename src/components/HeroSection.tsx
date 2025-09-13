import React from 'react';
import { ArrowRight, MapPin, Users, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-travel.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Hero Overlay */}
      <div className="hero-overlay" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-sunset/20 rounded-full blur-lg float" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-sage/20 rounded-full blur-md pulse-soft" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white animate-fade-in">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Two Friends, Endless Adventures</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Wander
              <span className="text-transparent bg-gradient-to-r from-sunset to-sand-warm bg-clip-text">
                Duo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join us on our journey around the world as we share 
              <span className="text-sunset font-semibold"> budget-friendly adventures</span>, 
              hidden gems, and create 
              <span className="text-sand-warm font-semibold"> custom itineraries</span> 
              just for you
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sunset" />
              <span className="font-semibold">25+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sand-warm" />
              <span className="font-semibold">3+ Years Traveling</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-sage" />
              <span className="font-semibold">1000+ Happy Travelers</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('itinerary')}
              className="btn-adventure group"
            >
              Get Custom Itinerary
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('blog')}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              Explore Our Adventures
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-white/70">
              <span className="text-sm font-medium">Discover More</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;