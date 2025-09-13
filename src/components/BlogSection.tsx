import React from 'react';
import { ArrowRight, Calendar, MapPin, Clock, Tag } from 'lucide-react';
import { Button } from './ui/button';

const BlogSection = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Backpacking Southeast Asia on $25/Day",
      excerpt: "Our complete 3-month journey through Thailand, Vietnam, and Cambodia with detailed budget breakdown and money-saving tips.",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Budget Travel",
      date: "March 15, 2024",
      readTime: "8 min read",
      location: "Southeast Asia"
    },
    {
      id: 2,
      title: "Hidden Gems of Eastern Europe",
      excerpt: "Discover stunning destinations that won't break the bank. From medieval castles to pristine beaches, Europe's best-kept secrets.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Destinations",
      date: "March 10, 2024", 
      readTime: "6 min read",
      location: "Eastern Europe"
    },
    {
      id: 3,
      title: "Solo vs Duo Travel: Our Honest Take",
      excerpt: "After traveling both solo and together, we share the pros and cons of each style and how to decide what's right for you.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Travel Tips",
      date: "March 5, 2024",
      readTime: "5 min read",
      location: "Global"
    }
  ];

  const recentPosts = [
    {
      title: "Best Travel Apps for Budget Travelers",
      date: "March 12, 2024",
      category: "Tech & Tools"
    },
    {
      title: "Surviving Long-Haul Flights: Ultimate Guide",
      date: "March 8, 2024",
      category: "Travel Tips"
    },
    {
      title: "Street Food Safety: What We've Learned",
      date: "March 3, 2024",
      category: "Health & Safety"
    },
    {
      title: "Packing Light: Our Minimalist Approach",
      date: "February 28, 2024",
      category: "Packing"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-sand/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-ocean-light/20 rounded-full px-6 py-3 mb-6">
            <Tag className="w-5 h-5 text-ocean-deep" />
            <span className="text-ocean-deep font-medium">Latest Adventures</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Travel Stories & Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from the road, practical budget tips, and destination guides 
            to help you plan your next adventure without breaking the bank.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <article key={post.id} className="destination-card group">
              {/* Post Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                {/* Location */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 text-white bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                    <MapPin className="w-3 h-3" />
                    <span className="text-sm font-medium">{post.location}</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-ocean transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-medium text-ocean hover:text-ocean-deep"
                >
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar with Recent Posts */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Recent Posts</h3>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="travel-card p-6 hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground hover:text-ocean transition-colors cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="text-sage font-medium">{post.category}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground hover:text-ocean transition-colors cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="travel-card p-8 bg-gradient-to-br from-sage/10 to-ocean-light/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Never Miss an Adventure</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get our latest travel tips, budget hacks, and destination guides delivered to your inbox.
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
              />
              <Button className="btn-travel w-full">
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;