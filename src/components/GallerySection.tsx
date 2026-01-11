import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<'originals' | 'uniques'>('originals');
  const { t } = useLanguage();

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
      },
      {
        title: "The Sea Sparkle",
        imageSrc: "/images/gezichten/The Sea Sparkle.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Echo",
        imageSrc: "/images/gezichten/The Echo.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Calm",
        imageSrc: "/images/gezichten/The Calm.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Gold One",
        imageSrc: "/images/gezichten/The Gold One.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: "",
        location: "Blend Baarle"
      },
      {
        title: "The Fall",
        imageSrc: "/images/gezichten/The Fall.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Collision",
        imageSrc: "/images/gezichten/The Collision.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Core",
        imageSrc: "/images/gezichten/The Core.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Memory",
        imageSrc: "/images/gezichten/The Memory.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Trace",
        imageSrc: "/images/gezichten/The Trace.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Unity",
        imageSrc: "/images/gezichten/The Unity.jpeg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Inferno",
        imageSrc: "/images/gezichten/The Inferno.jpeg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "The Bordeaux",
        imageSrc: "/images/gezichten/The Bordeaux.jpeg",
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
        title: "Peaky Blinder",
        imageSrc: "/images/personen/Peaky Blinder.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
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
        title: "The light from a woman",
        imageSrc: "/images/expressie/The light from a woman.PNG",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Rebirth",
        imageSrc: "/images/expressie/Rebirth.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Red Silence",
        imageSrc: "/images/expressie/Red Silence.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      }
    ]
  };

  const categories = [
    { key: 'originals', label: t('gallery.originals'), description: t('gallery.originals.desc') },
    { key: 'uniques', label: t('gallery.uniques'), description: t('gallery.uniques.desc') }
  ];

  return (
    <section id="gallerij" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 animate-bounce-in">
            {t('gallery.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 animate-width-expand" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-white rounded-lg gallery-shadow animate-scale-in-bounce" style={{ animationDelay: '0.7s' }}>
            {categories.map((category, index) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "ghost"}
                onClick={() => setActiveCategory(category.key as 'originals' | 'uniques')}
                className="px-6 py-3 font-cormorant text-lg relative transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <span className="relative z-10">{category.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-sage-300/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-playfair font-medium text-foreground mb-2 animate-fade-in-up">
            {categories.find(c => c.key === activeCategory)?.label}
          </h3>
          <p className="text-muted-foreground font-cormorant animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {categories.find(c => c.key === activeCategory)?.description}
          </p>
        </div>

        {/* Gallery Grid with side-by-side layout for last two items */}
        {activeCategory === 'uniques' ? (
          <div className="space-y-12">
            {/* First row - 3 items */}
            <div className="flex gap-6 items-start justify-center">
              {/* Peaky Blinder - small */}
              <div className="w-1/4 animate-fade-in-scale" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-peaky-blinder`}
                  title="Peaky Blinder"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/personen/Peaky Blinder.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>

              {/* Sleeping Beauty - large, in the middle */}
              <div className="w-2/5 animate-fade-in-scale" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-sleeping-beauty`}
                  title="Sleeping Beauty"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/expressie/Sleeping Beauty.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  location="Blend Baarle"
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>

              {/* Marilyn Monroe - small */}
              <div className="w-1/4 animate-fade-in-scale" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-marilyn-monroe`}
                  title="Marilyn Monroe"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/personen/Marilyn Monroe.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>
            </div>

            {/* Second row - 3 items */}
            <div className="flex gap-6 items-start justify-center">
              {/* The light from a woman */}
              <div className="w-1/4 animate-fade-in-scale" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-the-light-from-a-woman`}
                  title="The light from a woman"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/expressie/The light from a woman.PNG"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>

              {/* God is a woman */}
              <div className="w-1/4 animate-fade-in-scale" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-god-is-a-woman`}
                  title="God is a woman"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/expressie/God is a woman.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  location="Blend Baarle"
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>

              {/* Flow */}
              <div className="w-1/4 animate-fade-in-scale" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-flow`}
                  title="Flow"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/expressie/Flow.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  location="Blend Baarle"
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>
            </div>

            {/* Third row - 2 items */}
            <div className="flex gap-6 items-start justify-center">
              {/* Rebirth */}
              <div className="w-1/4 animate-fade-in-scale" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-rebirth`}
                  title="Rebirth"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/expressie/Rebirth.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>

              {/* Red Silence */}
              <div className="w-1/4 animate-fade-in-scale" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-red-silence`}
                  title="Red Silence"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/expressie/Red Silence.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworks[activeCategory].map((artwork: Artwork, index) => (
              <ArtworkCard
                key={`${activeCategory}-${artwork.imageSrc}-${index}`}
                title={artwork.title}
                category={categories.find(c => c.key === activeCategory)?.label || ''}
                imageSrc={artwork.imageSrc}
                description={artwork.description}
                year={artwork.year}
                dimensions={artwork.dimensions}
                technique={artwork.technique}
                location={artwork.location}
                className="transition-all duration-500 hover:scale-105 hover:rotate-1 animate-fade-in-scale"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3) translateY(-50px); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05) translateY(0); 
          }
          70% { 
            transform: scale(0.9); 
          }
          100% { 
            transform: scale(1); 
          }
        }
        
        @keyframes width-expand {
          0% { width: 0; opacity: 0; }
          100% { width: 4rem; opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes scale-in-bounce {
          0% { 
            opacity: 0; 
            transform: scale(0.8) translateY(20px); 
          }
          60% { 
            transform: scale(1.02) translateY(-5px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        @keyframes slide-up {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-scale {
          0% { 
            opacity: 0; 
            transform: scale(0.8) translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .animate-bounce-in { animation: bounce-in 1s ease-out forwards; }
        .animate-width-expand { animation: width-expand 1.2s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-scale-in-bounce { animation: scale-in-bounce 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.7s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default GallerySection;
