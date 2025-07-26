
import { Calendar, MapPin, Clock, ExternalLink, Phone, Globe } from 'lucide-react';
import { useState } from 'react';

const ExhibitionsSection = () => {
  const [hoveredExhibition, setHoveredExhibition] = useState<number | null>(null);

  // Paintings data with locations
  const paintingsData = {
    "Blend Baarle": [
      {
        title: "Flow",
        imageSrc: "/images/expressie/Flow.jpg"
      },
      {
        title: "Sleeping Beauty",
        imageSrc: "/images/expressie/Sleeping Beauty.jpg"
      },
      {
        title: "God is a woman",
        imageSrc: "/images/expressie/God is a woman.jpg"
      }
    ],
    "Café De Pomp": [
      {
        title: "The Abstraction",
        imageSrc: "/images/gezichten/The Abstraction.jpg"
      }
    ]
  };

  const exhibitions = [
    {
      title: "Blend Baarle",
      location: "Desirée Geraertstraat 3, 5111 CH Baarle-Nassau",
      date: "Permanent te zien",
      time: "Do-Za: 17:00-01:00 | Zo: 12:00-24:00",
      description: "Een unieke locatie in Baarle-Nassau waar premium wijnen, cocktails en artisanale hapjes worden geserveerd. Mijn schilderijen vormen de perfecte achtergrond voor deze stijlvolle ervaring.",
      status: "current",
      website: "https://blend-baarle.nl/",
      phone: "+31133032386",
      email: "info@blend-baarle.nl",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Desirée+Geraertstraat+3,+5111+CH+Baarle-Nassau"
    },
    {
      title: "Café De Pomp",
      location: "Singel 12, 5111 CD Baarle-Nassau, Nederland",
      date: "Permanent te zien",
      time: "Zie locatie voor openingstijden",
      description: "Een gezellig café in het hart van Baarle-Nassau waar je kunt genieten van mijn kunstwerken in een ontspannen sfeer.",
      status: "current",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Singel+12,+5111+CD+Baarle-Nassau,+Nederland"
    }
  ];

  return (
    <section id="exposities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 animate-zoom-in">
            Waar te Zien
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 animate-width-expand" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Bezoek deze restaurants en cafés waar mijn schilderijen permanent hangen en geniet van kunst tijdens het dineren.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 overflow-visible">
          {exhibitions.map((exhibition, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg gallery-shadow p-8 relative transition-all duration-500 hover:scale-102 hover:shadow-2xl animate-slide-in-up ${
                exhibition.status === 'upcoming' ? 'border-l-4 border-primary' :
                exhibition.status === 'current' ? 'border-l-4 border-sage-500' :
                'border-l-4 border-muted'
              }`}
              style={{ animationDelay: `${0.7 + index * 0.2}s` }}
              onMouseEnter={() => setHoveredExhibition(index)}
              onMouseLeave={() => setHoveredExhibition(null)}
            >
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-cormorant ${
                  exhibition.status === 'upcoming' ? 'bg-primary/10 text-primary' :
                  exhibition.status === 'current' ? 'bg-sage-500/10 text-sage-700' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {exhibition.status === 'upcoming' ? 'Binnenkort' :
                   exhibition.status === 'current' ? 'Nu te zien' :
                   'Afgelopen'}
                </span>
              </div>

              <div className="pr-24">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                  {exhibition.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span className="font-cormorant">{exhibition.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar size={18} className="text-primary" />
                    <span className="font-cormorant">{exhibition.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock size={18} className="text-primary" />
                    <span className="font-cormorant">{exhibition.time}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground font-cormorant leading-relaxed mb-6">
                  {exhibition.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* Google Maps Button - Available for all locations */}
                  <a 
                    href={exhibition.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-cormorant transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 animate-fade-in-scale"
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <MapPin size={16} className="transition-transform duration-300 hover:rotate-12" />
                    Bekijk op Maps
                  </a>
                  
                  {/* Website Button - Only for Blend */}
                  {exhibition.website && (
                    <a 
                      href={exhibition.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 px-4 py-2 rounded-lg font-cormorant transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 border border-blue-200 animate-fade-in-scale"
                      style={{ animationDelay: `${1.3 + index * 0.1}s` }}
                    >
                      <Globe size={16} className="transition-transform duration-300 hover:rotate-12" />
                      Website bezoeken
                    </a>
                  )}
                  
                  {/* Reservation Buttons - Only for Blend */}
                  {exhibition.phone && (
                    <a 
                      href={`tel:${exhibition.phone}`}
                      className="flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-4 py-2 rounded-lg font-cormorant transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 animate-fade-in-scale"
                      style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                    >
                      <Phone size={16} className="transition-transform duration-300 hover:rotate-12" />
                      Bellen
                    </a>
                  )}
                  
                  {exhibition.email && (
                    <a 
                      href={`mailto:${exhibition.email}?subject=Reservering Blend Baarle`}
                      className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 hover:text-green-800 px-4 py-2 rounded-lg font-cormorant transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 border border-green-200 animate-fade-in-scale"
                      style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                    >
                      <ExternalLink size={16} className="transition-transform duration-300 hover:rotate-12" />
                      E-mail reserveren
                    </a>
                  )}
                </div>
              </div>

              {/* Paintings Preview - Slides out from right side on hover */}
              {hoveredExhibition === index && paintingsData[exhibition.title as keyof typeof paintingsData] && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full ml-6 z-20">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-gray-200 animate-slide-out-right">
                    <div className="flex flex-col gap-3">
                      <div className="text-center mb-2">
                        <p className="text-sm font-cormorant text-foreground font-medium">
                          {paintingsData[exhibition.title as keyof typeof paintingsData].length === 1 
                            ? 'Dit schilderij hangt hier:' 
                            : `Deze ${paintingsData[exhibition.title as keyof typeof paintingsData].length} schilderijen hangen hier:`}
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        {paintingsData[exhibition.title as keyof typeof paintingsData].map((painting, paintingIndex) => (
                          <div 
                            key={painting.title}
                            className="relative group transform transition-all duration-500 hover:scale-105"
                            style={{ 
                              animationDelay: `${paintingIndex * 0.1}s`,
                              animation: 'slide-in-painting 0.6s ease-out forwards'
                            }}
                          >
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                              <div className="w-16 h-20 rounded-md overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-xl transition-shadow duration-300">
                                <img 
                                  src={painting.imageSrc} 
                                  alt={painting.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-cormorant text-foreground font-medium truncate">
                                  {painting.title}
                                </p>
                                <p className="text-xs text-muted-foreground font-cormorant">
                                  Permanent te zien
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Arrow pointing to the exhibition card */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                      <div className="w-4 h-4 bg-white/95 border-l border-t border-gray-200 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes zoom-in {
          0% { 
            opacity: 0; 
            transform: scale(0.5); 
          }
          100% { 
            opacity: 1; 
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
        
        @keyframes slide-in-up {
          0% { 
            opacity: 0; 
            transform: translateY(50px); 
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
        
        @keyframes slide-out-right {
          0% { 
            opacity: 0; 
            transform: translateX(-20px) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
          }
        }
        
        @keyframes slide-in-painting {
          0% { 
            opacity: 0; 
            transform: translateX(-15px) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
          }
        }
        
        .animate-zoom-in { animation: zoom-in 0.8s ease-out forwards; }
        .animate-width-expand { animation: width-expand 1.2s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.6s ease-out forwards; }
        .animate-slide-out-right { animation: slide-out-right 0.5s ease-out forwards; }
        
        .hover\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </section>
  );
};

export default ExhibitionsSection;
