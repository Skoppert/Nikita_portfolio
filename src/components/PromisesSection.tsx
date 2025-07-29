import { Award, Globe, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PromisesSection = () => {
  const { t } = useLanguage();
  
  const promises = [
    {
      icon: Award,
      title: t('promises.certificates'),
      description: t('promises.certificates.desc')
    },
    {
      icon: Sparkles,
      title: t('promises.uniqueness'),
      description: t('promises.uniqueness.desc')
    },
    {
      icon: Globe,
      title: t('promises.shipping'),
      description: t('promises.shipping.desc')
    },
    {
      icon: MapPin,
      title: t('promises.consultations'),
      description: t('promises.consultations.desc')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
            {t('promises.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            return (
              <div 
                key={promise.title}
                className="text-center group animate-fade-in-scale"
                style={{ 
                  animationDelay: `${0.3 + index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute inset-2 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"></div>
                  <IconComponent 
                    size={32} 
                    className="relative z-10 text-primary group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                
                <h3 className="text-xl font-playfair font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {promise.title}
                </h3>
                
                <p className="text-muted-foreground font-cormorant leading-relaxed">
                  {promise.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
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
        
        .animate-fade-in { 
          animation: fade-in 0.8s ease-out forwards; 
        }
        
        .animate-fade-in-scale { 
          animation: fade-in-scale 0.7s ease-out forwards; 
        }
      `}</style>
    </section>
  );
};

export default PromisesSection;