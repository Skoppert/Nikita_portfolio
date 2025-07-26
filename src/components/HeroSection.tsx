
import { useEffect, useState } from 'react';
import ArtworkCard from './ArtworkCard';
import { MapPin } from 'lucide-react';

const HeroSection = () => {
  // Definieer een type voor een kunstwerk
  type Artwork = {
    title: string;
    imageSrc: string;
    description: string;
    year: string;
    dimensions: string;
    technique: string;
    location?: string;
  };

  const artworks: {
    originals: Artwork[];
    uniques: Artwork[];
  } = {
    originals: [
      {
        title: "The Abstraction",
        imageSrc: "/images/gezichten/The Abstraction.jpg",
        description: "Expressief abstract portret met krachtige penseelstreken en dynamische kleuren.",
        year: "2024",
        dimensions: "60x80 cm",
        technique: "Acrylverf op doek",
        location: "Café De Pomp"
      },
      {
        title: "The Rasta",
        imageSrc: "/images/gezichten/The Rasta.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Blue",
        imageSrc: "/images/gezichten/The Blue.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Missing Piece",
        imageSrc: "/images/gezichten/The Missing Piece.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Explosion",
        imageSrc: "/images/gezichten/The Explosion.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Dark Moon",
        imageSrc: "/images/gezichten/Dark Moon.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Green One",
        imageSrc: "/images/gezichten/The Green One.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Dark Sun",
        imageSrc: "/images/gezichten/Dark Sun.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Bleury",
        imageSrc: "/images/gezichten/The Bleury.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Dutch",
        imageSrc: "/images/gezichten/The Dutch.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Exotic",
        imageSrc: "/images/gezichten/The Exotic.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      }
    ],
    uniques: [
      {
        title: "Marilyn Monroe",
        imageSrc: "/images/personen/Marilyn Monroe.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Flow",
        imageSrc: "/images/expressie/Flow.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: "",
        location: "Blend Baarle"
      },
      {
        title: "Sleeping Beauty",
        imageSrc: "/images/expressie/Sleeping Beauty.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: "",
        location: "Blend Baarle"
      },
      {
        title: "God is a woman",
        imageSrc: "/images/expressie/God is a woman.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: "",
        location: "Blend Baarle"
      },
      {
        title: "The light from a woman",
        imageSrc: "/images/expressie/The light from a woman.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      }
    ]
  };

  const categories = [
    { key: 'originals', label: 'Originals', artworks: artworks.originals },
    { key: 'uniques', label: 'Uniques', artworks: artworks.uniques }
  ];

  const ScrollingRow = ({ 
    artworks, 
    category, 
    direction, 
    speed = 30 
  }: { 
    artworks: Artwork[], 
    category: string, 
    direction: 'left' | 'right', 
    speed?: number 
  }) => {
    // Duplicate artworks for seamless scrolling
    const duplicatedArtworks = [...artworks, ...artworks, ...artworks];
    
    return (
      <div className="relative overflow-hidden py-6">
        <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 px-4">
          {category}
        </h3>
        <div className="relative overflow-hidden">
          <div 
            className={`flex gap-6 items-center ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
            style={{
              animationDuration: `${speed}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {duplicatedArtworks.map((artwork, index) => (
              <div key={`${category}-${index}`} className="flex-shrink-0">
                <div className="group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
                  <div className="relative overflow-hidden gallery-shadow transform transition-all duration-500 group-hover:shadow-2xl">
                    {/* Location Badge */}
                    {artwork.location && (
                      <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-cormorant flex items-center gap-1 shadow-lg">
                        <MapPin size={12} />
                        {artwork.location}
                      </div>
                    )}
                    
                    <div className="relative h-64 flex items-center justify-center">
                      <img 
                        src={artwork.imageSrc} 
                        alt={artwork.title}
                        className="h-full w-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="21 21l-4.35-4.35"/>
                            <circle cx="11" cy="11" r="3"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <h3 className="text-foreground font-playfair font-medium text-lg mb-1">{artwork.title}</h3>
                        <p className="text-muted-foreground text-sm font-cormorant">{category}</p>
                        {artwork.year && <p className="text-muted-foreground text-xs font-cormorant mt-1">{artwork.year}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-cream-50 to-background pt-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-terracotta-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Hero Title */}
      <div className="text-center py-16 relative z-10">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
          Schilderijen Collectie
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-xl text-muted-foreground font-cormorant max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Ontdek een wereld van kleuren, emoties en expressie
        </p>
      </div>

      {/* Netflix-style Scrolling Rows */}
      <div className="space-y-8">
        <ScrollingRow 
          artworks={categories[0].artworks} 
          category={categories[0].label} 
          direction="left" 
          speed={30}
        />
        <ScrollingRow 
          artworks={categories[1].artworks} 
          category={categories[1].label} 
          direction="right" 
          speed={35}
        />
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <p className="text-xl text-muted-foreground font-cormorant mb-6">
          Bekijk de volledige collectie en ontdek alle schilderijen in detail
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('gallerij');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-cormorant text-lg transition-all duration-300 hover:scale-105 gallery-shadow"
        >
          Bekijk alle schilderijen
        </button>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
