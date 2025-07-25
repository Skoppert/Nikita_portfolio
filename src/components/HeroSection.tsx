
import { useEffect, useState } from 'react';
import ArtworkCard from './ArtworkCard';

const HeroSection = () => {
  const artworks = {
    gezichten: [
      {
        title: "Portret van Anna",
        imageSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop",
        description: "Een intiem portret dat de zachte melancholie van een regenachtige dag vangt.",
        year: "2023",
        dimensions: "50x70 cm",
        technique: "Olieverf op doek"
      },
      {
        title: "De Dromer",
        imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=500&fit=crop",
        description: "Een portret dat de innerlijke wereld van dromen en verbeelding verkent.",
        year: "2023",
        dimensions: "40x50 cm",
        technique: "Acrylverf op doek"
      },
      {
        title: "Gezicht in Licht",
        imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
        description: "Spel van licht en schaduw op een contemplatief gezicht.",
        year: "2022",
        dimensions: "60x80 cm",
        technique: "Olieverf op doek"
      },
      {
        title: "Stille Kracht",
        imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop",
        description: "Een portret dat innerlijke kracht en vastberadenheid uitstraalt.",
        year: "2023",
        dimensions: "45x60 cm",
        technique: "Gemengde techniek"
      },
      {
        title: "Vroege Ochtend",
        imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop",
        description: "Een serene uitdrukking gevangen in het zachte ochtendlicht.",
        year: "2022",
        dimensions: "50x70 cm",
        technique: "Olieverf op doek"
      }
    ],
    personen: [
      {
        title: "Wandelaar",
        imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=600&fit=crop",
        description: "Een figuur in beweging, vastgelegd in een moment van contemplatie.",
        year: "2023",
        dimensions: "70x100 cm",
        technique: "Acrylverf op doek"
      },
      {
        title: "Rust",
        imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop",
        description: "Een moment van stilte en rust in een drukke wereld.",
        year: "2023",
        dimensions: "60x80 cm",
        technique: "Olieverf op doek"
      },
      {
        title: "Ontmoeting",
        imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
        description: "Twee figuren in een moment van verbinding en begrip.",
        year: "2022",
        dimensions: "80x120 cm",
        technique: "Gemengde techniek"
      },
      {
        title: "Alleen",
        imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop",
        description: "Een figuur in landschap, een verhaal van eenzaamheid en kracht.",
        year: "2022",
        dimensions: "50x70 cm",
        technique: "Olieverf op doek"
      }
    ],
    expressie: [
      {
        title: "Vreugde",
        imageSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop",
        description: "Een explosie van kleuren die pure vreugde uitdrukt.",
        year: "2023",
        dimensions: "60x80 cm",
        technique: "Acrylverf op doek"
      },
      {
        title: "Melancholie",
        imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=500&fit=crop",
        description: "Zachte tinten die een gevoel van weemoed oproepen.",
        year: "2023",
        dimensions: "45x60 cm",
        technique: "Olieverf op doek"
      },
      {
        title: "Passie",
        imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
        description: "Warme kleuren en dynamische penseelstreken vol emotie.",
        year: "2022",
        dimensions: "70x90 cm",
        technique: "Gemengde techniek"
      },
      {
        title: "Sereniteit",
        imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop",
        description: "Koele tinten die innerlijke rust en vrede uitstralen.",
        year: "2022",
        dimensions: "50x70 cm",
        technique: "Acrylverf op doek"
      },
      {
        title: "Kracht",
        imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop",
        description: "Krachtige penseelstreken die vastberadenheid uitdrukken.",
        year: "2023",
        dimensions: "80x100 cm",
        technique: "Olieverf op doek"
      }
    ]
  };

  const categories = [
    { key: 'gezichten', label: 'Gezichten', artworks: artworks.gezichten },
    { key: 'personen', label: 'Personen', artworks: artworks.personen },
    { key: 'expressie', label: 'Expressie', artworks: artworks.expressie }
  ];

  const ScrollingRow = ({ 
    artworks, 
    category, 
    direction, 
    speed = 30 
  }: { 
    artworks: any[], 
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
            className={`flex gap-6 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
            style={{
              width: `${duplicatedArtworks.length * 320}px`,
              animationDuration: `${speed}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {duplicatedArtworks.map((artwork, index) => (
              <div key={`${category}-${index}`} className="flex-shrink-0 w-80">
                <ArtworkCard
                  title={artwork.title}
                  category={category}
                  imageSrc={artwork.imageSrc}
                  description={artwork.description}
                  year={artwork.year}
                  dimensions={artwork.dimensions}
                  technique={artwork.technique}
                  className="h-80"
                />
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
          direction="right" 
          speed={40}
        />
        <ScrollingRow 
          artworks={categories[1].artworks} 
          category={categories[1].label} 
          direction="left" 
          speed={45}
        />
        <ScrollingRow 
          artworks={categories[2].artworks} 
          category={categories[2].label} 
          direction="right" 
          speed={35}
        />
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <p className="text-xl text-muted-foreground font-cormorant mb-6">
          Ontdek meer over de kunstenaar en haar verhaal
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('over-mij');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-cormorant text-lg transition-all duration-300 hover:scale-105 gallery-shadow"
        >
          Leer meer over mij
        </button>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
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
