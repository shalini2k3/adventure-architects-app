import React from 'react';
import { DollarSign, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ItinerarySection = () => {
  const packages = [
    {
      name: "Budget Explorer",
      price: "$39",
      duration: "7-14 days",
      description: "Perfect for backpackers and budget-conscious travelers",
      features: [
        "Detailed budget breakdown",
        "Hostel & guesthouse recommendations", 
        "Public transport routes",
        "Street food guide",
        "Free activities list",
        "Money-saving tips"
      ],
      popular: false
    },
    {
      name: "Adventure Seeker", 
      price: "$79",
      duration: "14-30 days",
      description: "For travelers wanting unique experiences without breaking the bank",
      features: [
        "Everything in Budget Explorer",
        "Adventure activities guide",
        "Local experience recommendations",
        "Photography spots map",
        "Cultural immersion tips",
        "Emergency contacts & resources"
      ],
      popular: true
    },
    {
      name: "Digital Nomad",
      price: "$129", 
      duration: "1-3 months",
      description: "Complete guide for long-term travelers and remote workers",
      features: [
        "Everything in Adventure Seeker",
        "Co-working spaces & wifi spots",
        "Long-term accommodation options",
        "Visa & documentation help",
        "Monthly budget planning",
        "30-day video call consultation"
      ],
      popular: false
    }
  ];

  const budgetBreakdown = [
    { category: "Accommodation", percentage: 35, amount: "$12/day", color: "bg-ocean" },
    { category: "Food & Drinks", percentage: 25, amount: "$8/day", color: "bg-sage" },
    { category: "Transportation", percentage: 20, amount: "$6/day", color: "bg-sunset" },
    { category: "Activities", percentage: 15, amount: "$5/day", color: "bg-earth" },
    { category: "Miscellaneous", percentage: 5, amount: "$2/day", color: "bg-sand-warm" }
  ];

  return (
    <section id="itinerary" className="py-20 bg-gradient-to-b from-background to-sage/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sage/20 rounded-full px-6 py-3 mb-6">
            <DollarSign className="w-5 h-5 text-forest" />
            <span className="text-forest font-medium">Custom Itinerary Planning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Perfect Trip, Your Budget
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop spending hours researching and planning. We'll create a personalized, 
            budget-friendly itinerary that matches your travel style and financial goals.
          </p>
        </div>

        {/* Budget Breakdown Visualization */}
        <div className="travel-card p-8 mb-16 bg-gradient-to-br from-sage/10 to-ocean-light/10">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Average Daily Budget Breakdown
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Budget Chart */}
            <div className="space-y-6">
              {budgetBreakdown.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{item.category}</span>
                    <span className="text-muted-foreground">{item.amount}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.percentage}% of total budget
                  </div>
                </div>
              ))}
            </div>

            {/* Total Budget */}
            <div className="text-center lg:text-left">
              <div className="travel-card p-8 bg-white">
                <div className="text-4xl font-bold text-ocean mb-2">$33</div>
                <div className="text-lg text-muted-foreground mb-4">Average daily budget</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Based on 500+ successful trips</div>
                  <div>• Covers Southeast Asia, Eastern Europe</div>
                  <div>• Includes all essentials + fun activities</div>
                  <div>• Can be adjusted to your budget</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`travel-card relative ${
                pkg.popular ? 'ring-2 ring-ocean scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-ocean text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-ocean mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <p className="text-muted-foreground mt-3">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    pkg.popular ? 'btn-adventure' : 'btn-travel'
                  }`}
                >
                  Choose {pkg.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="travel-card p-8 bg-gradient-to-r from-ocean-light/10 to-sky/10 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">Tell Us Your Dreams</h4>
              <p className="text-muted-foreground text-sm">
                Share your destination, budget, travel dates, and interests
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">We Plan & Research</h4>
              <p className="text-muted-foreground text-sm">
                Our team creates a detailed itinerary based on our firsthand experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sunset text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">Review & Refine</h4>
              <p className="text-muted-foreground text-sm">
                Get your custom itinerary and request any changes needed
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-earth text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h4 className="font-semibold text-foreground mb-2">Start Your Adventure!</h4>
              <p className="text-muted-foreground text-sm">
                Book with confidence and enjoy your perfectly planned trip
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="travel-card p-6">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              "Alex and Sam's itinerary for our Thailand trip was PERFECT! We saved so much money 
              and discovered places we never would have found on our own. Worth every penny!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ocean rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Sarah & Mike</div>
                <div className="text-sm text-muted-foreground">Thailand 2024</div>
              </div>
            </div>
          </div>

          <div className="travel-card p-6">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              "As a solo female traveler, I was nervous about Eastern Europe. Their detailed 
              safety tips and local contacts made me feel confident and safe throughout my journey."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Emma Rodriguez</div>
                <div className="text-sm text-muted-foreground">Prague 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;