
import { Calendar, MapPin, Clock, ExternalLink, Phone, Globe } from 'lucide-react';

const ExhibitionsSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Waar te Zien
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto">
            Bezoek deze restaurants en cafés waar mijn schilderijen permanent hangen en geniet van kunst tijdens het dineren.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {exhibitions.map((exhibition, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg gallery-shadow p-8 relative overflow-hidden ${
                exhibition.status === 'upcoming' ? 'border-l-4 border-primary' :
                exhibition.status === 'current' ? 'border-l-4 border-sage-500' :
                'border-l-4 border-muted'
              }`}
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
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-cormorant transition-all duration-300 hover:scale-105"
                  >
                    <MapPin size={16} />
                    Bekijk op Maps
                  </a>
                  
                  {/* Website Button - Only for Blend */}
                  {exhibition.website && (
                    <a 
                      href={exhibition.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 px-4 py-2 rounded-lg font-cormorant transition-all duration-300 hover:scale-105 border border-blue-200"
                    >
                      <Globe size={16} />
                      Website bezoeken
                    </a>
                  )}
                  
                  {/* Reservation Buttons - Only for Blend */}
                  {exhibition.phone && (
                    <a 
                      href={`tel:${exhibition.phone}`}
                      className="flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-4 py-2 rounded-lg font-cormorant transition-all duration-300 hover:scale-105"
                    >
                      <Phone size={16} />
                      Bellen
                    </a>
                  )}
                  
                  {exhibition.email && (
                    <a 
                      href={`mailto:${exhibition.email}?subject=Reservering Blend Baarle`}
                      className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 hover:text-green-800 px-4 py-2 rounded-lg font-cormorant transition-all duration-300 hover:scale-105 border border-green-200"
                    >
                      <ExternalLink size={16} />
                      E-mail reserveren
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;
