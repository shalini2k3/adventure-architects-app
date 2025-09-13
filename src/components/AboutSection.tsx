import React from 'react';
import { Heart, Camera, MapPin, Compass, Users, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-sand/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sage/20 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-forest" />
            <span className="text-forest font-medium">Meet the Wanderers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Two Friends, One Dream
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're Alex & Sam, best friends who traded our 9-to-5s for backpacks and endless adventures. 
            Since 2021, we've been exploring the world on a budget, proving that incredible experiences 
            don't have to break the bank.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="travel-card p-8">
              <Heart className="w-8 h-8 text-sunset mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                It started with a crazy idea over coffee: "What if we just... left?" Two years later, 
                we'd quit our jobs, sold everything we owned, and booked one-way tickets to Thailand 
                with nothing but backpacks and a shared dream of seeing the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began as a gap year turned into a lifestyle. We've learned to travel smart, 
                eat local, stay in unique places, and most importantly – how to do it all without 
                spending a fortune. Now we want to help you do the same.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="travel-card p-6 text-center">
                <Camera className="w-8 h-8 text-ocean mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">10k+ Photos</h4>
                <p className="text-sm text-muted-foreground">Capturing every magical moment</p>
              </div>
              <div className="travel-card p-6 text-center">
                <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">25 Countries</h4>
                <p className="text-sm text-muted-foreground">And counting...</p>
              </div>
            </div>
          </div>

          {/* Right: Values & Approach */}
          <div className="space-y-6">
            <div className="travel-card p-8 bg-gradient-to-br from-ocean-light/20 to-sky/20">
              <Compass className="w-8 h-8 text-ocean mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-sunset mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Budget-First Planning</h4>
                    <p className="text-sm text-muted-foreground">Every itinerary starts with your budget, not ours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Local Connections</h4>
                    <p className="text-sm text-muted-foreground">We partner with locals for authentic experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-earth mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Sustainable Travel</h4>
                    <p className="text-sm text-muted-foreground">Responsible tourism that gives back to communities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-sunset-warm mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Real Experience</h4>
                    <p className="text-sm text-muted-foreground">No filters, just honest adventures and practical tips</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-ocean">$30</div>
                <div className="text-sm text-muted-foreground">Avg daily budget</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sage">95%</div>
                <div className="text-sm text-muted-foreground">Happy clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sunset">500+</div>
                <div className="text-sm text-muted-foreground">Itineraries created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;