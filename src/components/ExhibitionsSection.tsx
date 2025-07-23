
import { Calendar, MapPin, Clock } from 'lucide-react';

const ExhibitionsSection = () => {
  const exhibitions = [
    {
      title: "Gezichten van de Tijd",
      location: "Galerie Moderne Kunst, Amsterdam",
      date: "15 maart - 30 april 2024",
      time: "10:00 - 18:00",
      description: "Een solo-expositie waarin ik de relatie tussen tijd en menselijke expressie verken.",
      status: "upcoming"
    },
    {
      title: "Collectieve Emoties",
      location: "Cultureel Centrum De Brug, Utrecht",
      date: "5 januari - 28 februari 2024",
      time: "11:00 - 17:00",
      description: "Groepsexpositie met focus op emotionele expressie in hedendaagse kunst.",
      status: "current"
    },
    {
      title: "Portretten in Beweging",
      location: "Kunsthuis Zeeland, Middelburg",
      date: "20 september - 15 november 2023",
      time: "12:00 - 18:00",
      description: "Een retrospectieve van mijn portretwerk uit de afgelopen vijf jaar.",
      status: "past"
    }
  ];

  return (
    <section id="exposities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Exposities
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto">
            Ontdek waar mijn werk tentoongesteld wordt en waar je mijn schilderijen kunt bewonderen.
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
                
                <p className="text-muted-foreground font-cormorant leading-relaxed">
                  {exhibition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;
