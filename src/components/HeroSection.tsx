
import { useEffect, useState } from 'react';
import ArtworkCard from './ArtworkCard';

const HeroSection = () => {
  // Definieer een type voor een kunstwerk
  type Artwork = {
    title: string;
    imageSrc: string;
    description: string;
    year: string;
    dimensions: string;
    technique: string;
  };

  const artworks: {
    gezichten: Artwork[];
    personen: Artwork[];
    expressie: Artwork[];
  } = {
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
      },
      {
        title: "Abstract Gezicht",
        imageSrc: "/images/gezichten/Pomp schilderij.jpg",
        description: "Expressief abstract portret met krachtige penseelstreken en dynamische kleuren.",
        year: "2024",
        dimensions: "60x80 cm",
        technique: "Acrylverf op doek"
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
        technique: ""
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
      },
      {
        title: "Marilyn Monroe.jpg",
        imageSrc: "/images/personen/Marilyn Monroe.jpg",
        description: "",
        year: "",
        dimensions: "",
        technique: ""
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
      },
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
                    <div className="relative h-64 flex items-center justify-center">
                      <img 
                        src={artwork.imageSrc} 
                        alt={artwork.title}
                        className="h-full w-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
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
