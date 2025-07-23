
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ArtworkCard from './ArtworkCard';

const HeroSection = () => {
  const [currentCategoryIndex, setCCurrentCategoryIndex] = useState(0);

  const categories = [
    {
      name: 'Gezichten',
      artworks: [
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
        }
      ]
    },
    {
      name: 'Personen',
      artworks: [
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
        }
      ]
    },
    {
      name: 'Expressie',
      artworks: [
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
        }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cream-50 to-background relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-terracotta-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Category Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4 animate-fade-in">
            {categories[currentCategoryIndex].name}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Artwork Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 30
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories[currentCategoryIndex].artworks.map((artwork, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ArtworkCard
                      title={artwork.title}
                      category={categories[currentCategoryIndex].name}
                      imageSrc={artwork.imageSrc}
                      description={artwork.description}
                      year={artwork.year}
                      dimensions={artwork.dimensions}
                      technique={artwork.technique}
                      className="h-80 animate-fade-in"
                      style={{ 
                        animationDelay: `${index * 0.2}s`,
                        animationFillMode: 'both'
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
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
      </div>
    </section>
  );
};

export default HeroSection;
