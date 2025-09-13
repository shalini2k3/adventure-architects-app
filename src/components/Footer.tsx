import React from 'react';
import { MapPin, Heart, Instagram, Youtube, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <MapPin className="w-8 h-8 text-white" />
                <Heart className="w-4 h-4 text-sunset absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold">WanderDuo</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Two friends sharing budget travel adventures and creating custom itineraries 
              to help you explore the world without breaking the bank.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Explore</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Travel Blog
              </button>
              <button 
                onClick={() => scrollToSection('destinations')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Destinations
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Photo Gallery
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('itinerary')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Custom Itineraries
              </button>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Budget Planning
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Travel Consultation
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Group Travel
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Stay Updated</h3>
            <p className="text-white/80">
              Get our latest travel tips and destination guides delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="w-full bg-gradient-to-r from-ocean to-ocean-deep text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-sunset mb-1">25+</div>
            <div className="text-white/80 text-sm">Countries Visited</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sage mb-1">500+</div>
            <div className="text-white/80 text-sm">Itineraries Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sand-warm mb-1">1000+</div>
            <div className="text-white/80 text-sm">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky mb-1">3+</div>
            <div className="text-white/80 text-sm">Years of Adventure</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © 2024 WanderDuo. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline-block text-sunset" />{' '}
              for fellow adventurers.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;