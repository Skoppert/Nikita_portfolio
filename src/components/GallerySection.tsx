import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<'originals' | 'uniques'>('originals');

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
        title: "Abstract Gezicht",
        imageSrc: "/images/gezichten/Pomp schilderij.jpg",
        description: "Expressief abstract portret met krachtige penseelstreken en dynamische kleuren.",
        year: "2024",
        dimensions: "60x80 cm",
        technique: "Acrylverf op doek",
        location: "Café De Pomp"
      },
      {
        title: "Schilderij Richard.jpg",
        imageSrc: "/images/gezichten/Schilderij Richard.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Blauw-geel-rood.jpg",
        imageSrc: "/images/gezichten/Blauw-geel-rood.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Gestolen schilderij.jpg",
        imageSrc: "/images/gezichten/Gestolen schilderij.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Pomp schilderij.jpg",
        imageSrc: "/images/gezichten/Pomp schilderij.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: "",
        location: "Café De Pomp"
      },
      {
        title: "Geel oranje blauw.jpg",
        imageSrc: "/images/gezichten/Geel oranje blauw.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Zwart-paars-blauw.jpg",
        imageSrc: "/images/gezichten/Zwart-paars-blauw.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Zwart-groen-wit-oranje.jpg",
        imageSrc: "/images/gezichten/Zwart-groen-wit-oranje.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Glow in the dark.jpg",
        imageSrc: "/images/gezichten/Glow in the dark.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Paars geel oranje.jpg",
        imageSrc: "/images/gezichten/Paars geel oranje.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Schilderij Siebe.jpg",
        imageSrc: "/images/gezichten/Schilderij Siebe.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "USA.jpg",
        imageSrc: "/images/gezichten/USA.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      }
    ],
    uniques: [
      {
        title: "Marilyn Monroe.jpg",
        imageSrc: "/images/personen/Marilyn Monroe.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
      {
        title: "Blend 3.jpg",
        imageSrc: "/images/expressie/Blend 3.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: "",
        location: "Blend Baarle"
      },
      {
        title: "God is a woman.jpg",
        imageSrc: "/images/expressie/God is a woman.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: "",
        location: "Blend Baarle"
      },
      {
        title: "The light from a woman.jpg",
        imageSrc: "/images/expressie/The light from a woman.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
      },
    ]
  };

  const categories = [
    { key: 'originals', label: 'Originals', description: 'Authentieke portretten en gezichten' },
    { key: 'uniques', label: 'Uniques', description: 'Unieke expressieve en persoonlijke kunstwerken' }
  ];

  return (
    <section id="gallerij" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 animate-bounce-in">
            Schilderijen Collectie
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 animate-width-expand" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Ontdek een wereld van kleuren, emoties en expressie door deze collectie schilderijen, onderverdeeld in twee categorieën.
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
          <div className="space-y-8">
            {/* First part - regular grid for first 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {artworks[activeCategory].slice(0, 3).map((artwork: Artwork, index) => (
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
            
            {/* Second part - The light from a woman (small) + Blend 2 (large) */}
            <div className="flex gap-6 items-start">
              {/* The light from a woman - smaller */}
              <div className="w-1/3 animate-fade-in-scale" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-the-light-from-a-woman`}
                  title="The light from a woman"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/expressie/The light from a woman.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  className="transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>
              
              {/* Blend 2 - smaller size */}
              <div className="w-1/2 animate-fade-in-scale" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <ArtworkCard
                  key={`${activeCategory}-blend-2`}
                  title="Blend 2"
                  category={categories.find(c => c.key === activeCategory)?.label || ''}
                  imageSrc="/images/expressie/Blend 2.jpg"
                  description=""
                  year=""
                  dimensions=""
                  technique=""
                  location="Blend Baarle"
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
