import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Heart, Camera } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <MapPin className={`w-8 h-8 ${isScrolled ? 'text-ocean' : 'text-white'} transition-colors duration-300`} />
            <Heart className="w-4 h-4 text-sunset absolute -top-1 -right-1" />
          </div>
          <span className={`text-2xl font-bold ${
            isScrolled ? 'text-foreground' : 'text-white'
          } transition-colors duration-300`}>
            WanderDuo
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className={`font-medium hover:text-ocean transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`font-medium hover:text-ocean transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('blog')}
            className={`font-medium hover:text-ocean transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection('destinations')}
            className={`font-medium hover:text-ocean transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Destinations
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className={`font-medium hover:text-ocean transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`font-medium hover:text-ocean transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('itinerary')}
            className={`${
              isScrolled 
                ? 'btn-travel' 
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-105'
            } transition-all duration-300`}
          >
            Get Itinerary
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg ${
            isScrolled ? 'text-foreground' : 'text-white'
          } transition-colors duration-300`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/50">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left font-medium text-foreground hover:text-ocean transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left font-medium text-foreground hover:text-ocean transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left font-medium text-foreground hover:text-ocean transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('destinations')}
              className="block w-full text-left font-medium text-foreground hover:text-ocean transition-colors"
            >
              Destinations
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left font-medium text-foreground hover:text-ocean transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left font-medium text-foreground hover:text-ocean transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('itinerary')}
              className="btn-travel w-full"
            >
              Get Custom Itinerary
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;