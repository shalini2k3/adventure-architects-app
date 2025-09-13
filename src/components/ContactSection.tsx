import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    budget: '',
    duration: '',
    travelers: '1',
    travelStyle: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.destination) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and destination are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours with your custom itinerary quote.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-b from-sage/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="travel-card p-12">
              <CheckCircle className="w-16 h-16 text-sage mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Thanks for reaching out!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've received your message and are excited to help plan your adventure to{' '}
                <span className="font-semibold text-ocean">{formData.destination}</span>.
                We'll send you a detailed quote and initial itinerary ideas within 24 hours.
              </p>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Check your email: {formData.email}</span>
                </div>
              </div>
              <Button 
                className="btn-travel mt-8"
                onClick={() => setIsSubmitted(false)}
              >
                Plan Another Trip
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sage/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-earth/20 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="w-5 h-5 text-earth" />
            <span className="text-earth font-medium">Get Your Custom Itinerary</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Plan Your Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to explore the world without breaking the bank? Tell us about your dream trip 
            and we'll create a personalized itinerary that fits your budget and travel style.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="travel-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Trip Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Destination *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                      placeholder="Where do you want to go?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Trip Duration
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                    >
                      <option value="">Select duration</option>
                      <option value="1-week">1 week</option>
                      <option value="2-weeks">2 weeks</option>
                      <option value="3-weeks">3 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-months">2 months</option>
                      <option value="3-months+">3+ months</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                    >
                      <option value="">Select budget</option>
                      <option value="ultra-budget">Ultra Budget ($15-25/day)</option>
                      <option value="budget">Budget ($25-50/day)</option>
                      <option value="mid-range">Mid-range ($50-100/day)</option>
                      <option value="comfortable">Comfortable ($100+/day)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Travelers
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                    >
                      <option value="1">Solo traveler</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3-4 people</option>
                      <option value="5+">5+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Travel Style
                  </label>
                  <select
                    name="travelStyle"
                    value={formData.travelStyle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                  >
                    <option value="">Select your style</option>
                    <option value="backpacker">Backpacker (hostels, local transport)</option>
                    <option value="cultural">Cultural Explorer (museums, history)</option>
                    <option value="adventure">Adventure Seeker (hiking, activities)</option>
                    <option value="relaxation">Relaxation (beaches, spas)</option>
                    <option value="digital-nomad">Digital Nomad (wifi, co-working)</option>
                    <option value="mixed">Mixed (bit of everything)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean resize-none"
                    placeholder="Tell us more about your travel dreams, special interests, dietary restrictions, or any specific requests..."
                  />
                </div>

                <Button type="submit" className="btn-adventure w-full group">
                  Send My Request
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="travel-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-ocean mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@mappedmemories.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sunset mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Currently in</div>
                    <div className="text-muted-foreground">Lisbon, Portugal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="travel-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">How much does it cost?</h4>
                  <p className="text-sm text-muted-foreground">Starting from $39 for a basic itinerary. Final price depends on complexity and duration.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">How long does it take?</h4>
                  <p className="text-sm text-muted-foreground">We deliver your custom itinerary within 3-5 business days after receiving all details.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">What's included?</h4>
                  <p className="text-sm text-muted-foreground">Detailed daily plans, budget breakdowns, accommodation recommendations, and insider tips.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;