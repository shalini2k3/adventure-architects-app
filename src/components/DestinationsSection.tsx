import React from 'react';
import { MapPin, Star, DollarSign, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avgDaily: "$25",
      bestTime: "Apr-Oct",
      rating: 4.9,
      highlights: ["Sacred temples", "Rice terraces", "Beach vibes", "Yoga retreats"],
      description: "Perfect blend of culture, nature, and affordability"
    },
    {
      id: 2,
      name: "Prague, Czech Republic",
      country: "Czech Republic", 
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avgDaily: "$35",
      bestTime: "May-Sep",
      rating: 4.8,
      highlights: ["Medieval architecture", "Craft beer", "River cruises", "Fairy tale vibes"],
      description: "Europe's most beautiful capital on a budget"
    },
    {
      id: 3,
      name: "Chiang Mai, Thailand",
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avgDaily: "$20",
      bestTime: "Nov-Mar",
      rating: 4.9,
      highlights: ["Mountain temples", "Night markets", "Elephant sanctuary", "Digital nomad hub"],
      description: "The ultimate backpacker paradise in Southeast Asia"
    },
    {
      id: 4,
      name: "Porto, Portugal",
      country: "Portugal",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avgDaily: "$40",
      bestTime: "Mar-Oct",
      rating: 4.7,
      highlights: ["Port wine", "Colorful buildings", "Coastal beauty", "Friendly locals"],
      description: "Western Europe's hidden gem with incredible value"
    },
    {
      id: 5,
      name: "Cusco, Peru",
      country: "Peru",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avgDaily: "$30",
      bestTime: "May-Sep",
      rating: 4.8,
      highlights: ["Machu Picchu gateway", "Inca heritage", "Alpaca encounters", "Mountain adventures"],
      description: "Gateway to ancient wonders and natural beauty"
    },
    {
      id: 6,
      name: "Lisbon, Portugal",
      country: "Portugal",
      image: "https://images.unsplash.com/photo-1588469297433-fbb0c1c3b488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avgDaily: "$45",
      bestTime: "Mar-Oct",
      rating: 4.6,
      highlights: ["Tram rides", "Pastéis de nata", "Viewpoints", "Historic neighborhoods"],
      description: "European charm with affordable prices and endless character"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-background to-sky/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sunset/20 rounded-full px-6 py-3 mb-6">
            <MapPin className="w-5 h-5 text-sunset-warm" />
            <span className="text-sunset-warm font-medium">Our Favorite Destinations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where We've Wandered
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From bustling Asian markets to European cobblestone streets, these are the destinations 
            that stole our hearts without emptying our wallets.
          </p>
        </div>

        {/* Interactive World Map Placeholder */}
        <div className="travel-card p-8 mb-12 bg-gradient-to-r from-ocean-light/10 to-sky/10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-ocean-deep mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg font-semibold">Interactive Map Coming Soon!</span>
            </div>
            <p className="text-muted-foreground mb-6">
              We're building an interactive map where you can explore all our destinations, 
              see our routes, and get insider tips for each location.
            </p>
            <Button className="btn-nature">
              Get Notified When It's Ready
            </Button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card group">
              {/* Destination Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Country Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {destination.country}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white rounded-full px-3 py-1">
                    <Star className="w-3 h-3 fill-current text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                {/* Destination Name */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                  <p className="text-white/80 text-sm">{destination.description}</p>
                </div>
              </div>

              {/* Destination Details */}
              <div className="p-6">
                {/* Budget & Best Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sage">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold">{destination.avgDaily}/day</span>
                  </div>
                  <div className="flex items-center gap-1 text-ocean">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium text-sm">{destination.bestTime}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded-lg text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="ghost" 
                  className="group/btn w-full p-0 h-auto font-medium text-ocean hover:text-ocean-deep justify-between"
                >
                  <span>Read Our Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <div className="travel-card p-8 bg-gradient-to-br from-sunset/10 to-sand-warm/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't See Your Dream Destination?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're always exploring new places! Tell us where you want to go and we'll 
              create a custom budget itinerary just for you.
            </p>
            <Button className="btn-adventure">
              Request Custom Destination
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;