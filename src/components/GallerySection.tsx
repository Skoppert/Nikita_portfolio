import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<'gezichten' | 'personen' | 'expressie'>('gezichten');
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [activeCategory]);

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
    { key: 'gezichten', label: 'Gezichten', description: 'Portretten die de ziel raken' },
    { key: 'personen', label: 'Personen', description: 'Mensen in hun natuurlijke omgeving' },
    { key: 'expressie', label: 'Expressie', description: 'Emoties vertaald naar kleur en vorm' }
  ];

  return (
    <section id="gallerij" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
            Schilderijen Collectie
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Ontdek een wereld van kleuren, emoties en expressie door deze collectie schilderijen, onderverdeeld in drie categorieën.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-white rounded-lg gallery-shadow animate-scale-in">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "ghost"}
                onClick={() => setActiveCategory(category.key as any)}
                className="px-6 py-3 font-cormorant text-lg relative transition-all duration-300 hover:scale-105"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-playfair font-medium text-foreground mb-2 animate-fade-in">
            {categories.find(c => c.key === activeCategory)?.label}
          </h3>
          <p className="text-muted-foreground font-cormorant animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {categories.find(c => c.key === activeCategory)?.description}
          </p>
        </div>

        {/* Gallery Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={animationKey}>
          {artworks[activeCategory].map((artwork, index) => (
            <ArtworkCard
              key={`${activeCategory}-${index}`}
              title={artwork.title}
              category={categories.find(c => c.key === activeCategory)?.label || ''}
              imageSrc={artwork.imageSrc}
              description={artwork.description}
              year={artwork.year}
              dimensions={artwork.dimensions}
              technique={artwork.technique}
              className="animate-fade-in hover:animate-none transition-all duration-500 hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
