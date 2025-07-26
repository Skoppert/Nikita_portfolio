
const AboutSection = () => {
  return (
    <section id="over-mij" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-sage-300/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-terracotta-300/40 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary/30 rounded-full animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 animate-slide-in-left">
                  Over Nikita Beekhof
                </h2>
                <div className="w-16 h-1 bg-primary mb-8 animate-width-expand"></div>
              </div>
              
              <div className="space-y-6 text-lg font-cormorant leading-relaxed">
                <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Mijn naam is Nikita Beekhof, en ik ben een gepassioneerde schilder die zich specialiseert 
                  in portretten en expressieve kunstwerken. Mijn werk draait om het vastleggen van emoties en 
                  het vertellen van verhalen door middel van kleur, vorm en textuur.
                </p>
                
                <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  Al meer dan 15 jaar verken ik de grenzen tussen realisme en abstractie, waarbij ik zoek naar 
                  de essentie van wat het betekent om mens te zijn. Elk schilderij is een dialoog tussen mij en 
                  het onderwerp, een moment van verbinding dat ik probeer vast te leggen op doek.
                </p>
                
                <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  Mijn inspiratie komt uit het dagelijks leven, uit ontmoetingen met mensen, uit verhalen die 
                  verteld moeten worden. Ik werk voornamelijk met acrylverf en olieverf, technieken die me 
                  de vrijheid geven om zowel subtiele details als krachtige emoties uit te drukken.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="relative z-10 group">
                <img 
                  src="/images/Profielfoto Nikita.jpg" 
                  alt="Nikita Beekhof"
                  className="w-full h-96 md:h-[500px] object-cover rounded-lg gallery-shadow transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Animated decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-sage-200/30 rounded-lg -z-10 animate-float-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-terracotta-200/20 rounded-lg -z-20 animate-float-delayed"></div>
              
              {/* Floating orbs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/40 rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-sage-300/50 rounded-full animate-pulse-glow-delayed"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
        
        @keyframes slide-in-left {
          0% { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-right {
          0% { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes width-expand {
          0% { width: 0; }
          100% { width: 4rem; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.2); 
          }
        }
        
        @keyframes pulse-glow-delayed {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.3); 
          }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-width-expand { animation: width-expand 1.2s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-pulse-glow-delayed { animation: pulse-glow-delayed 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default AboutSection;
