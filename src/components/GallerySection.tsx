import React, { useState } from 'react';
import { Camera, Heart, MapPin, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gallery = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Chiang Mai, Thailand",
      description: "Temple hopping at sunrise",
      category: "Culture",
      likes: 245
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Ha Long Bay, Vietnam",
      description: "Kayaking through limestone karsts",
      category: "Adventure",
      likes: 189
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Ubud, Bali",
      description: "Rice terrace sunrise",
      category: "Nature",
      likes: 312
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Prague, Czech Republic", 
      description: "Fairy tale architecture",
      category: "Architecture",
      likes: 198
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Porto, Portugal",
      description: "Colorful riverside houses",
      category: "Architecture", 
      likes: 167
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Machu Picchu, Peru",
      description: "Ancient wonder at dawn",
      category: "Culture",
      likes: 423
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Santorini, Greece",
      description: "Sunset over the Aegean",
      category: "Nature",
      likes: 289
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Austrian Alps",
      description: "Mountain lake reflections",
      category: "Nature",
      likes: 356
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1588469297433-fbb0c1c3b488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Lisbon, Portugal",
      description: "Historic tram adventure",
      category: "Culture",
      likes: 201
    }
  ];

  const categories = ["All", "Nature", "Culture", "Architecture", "Adventure"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery = activeCategory === "All" 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredGallery.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-sky/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-earth/20 rounded-full px-6 py-3 mb-6">
            <Camera className="w-5 h-5 text-earth" />
            <span className="text-earth font-medium">Photo Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Captured Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A visual journey through our adventures. Each photo tells a story of discovery, 
            wonder, and the incredible people we've met along the way.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-ocean text-white shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-ocean-light/20 hover:text-ocean'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGallery.map((item, index) => (
            <div 
              key={item.id} 
              className="destination-card group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={item.image} 
                  alt={item.description}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/30 backdrop-blur-sm rounded-full p-2">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.location}</span>
                  </div>
                  <p className="text-sm text-white/90">{item.description}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Heart className="w-4 h-4 fill-current text-red-400" />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-ocean mb-2">10,000+</div>
            <div className="text-muted-foreground">Photos Taken</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage mb-2">25</div>
            <div className="text-muted-foreground">Countries Captured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sunset mb-2">50+</div>
            <div className="text-muted-foreground">Cities Explored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-earth mb-2">3</div>
            <div className="text-muted-foreground">Years of Adventures</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img 
              src={filteredGallery[selectedImage]?.image} 
              alt={filteredGallery[selectedImage]?.description}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{filteredGallery[selectedImage]?.location}</span>
                </div>
                <p className="text-sm text-white/90">{filteredGallery[selectedImage]?.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;