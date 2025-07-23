
const AboutSection = () => {
  return (
    <section id="over-mij" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                  Over mij
                </h2>
                <div className="w-16 h-1 bg-primary mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg font-cormorant leading-relaxed">
                <p className="text-muted-foreground">
                  Mijn naam is Maria van der Berg, en ik ben een gepassioneerde schilder die zich specialiseert 
                  in portretten en expressieve kunstwerken. Mijn werk draait om het vastleggen van emoties en 
                  het vertellen van verhalen door middel van kleur, vorm en textuur.
                </p>
                
                <p className="text-muted-foreground">
                  Al meer dan 15 jaar verken ik de grenzen tussen realisme en abstractie, waarbij ik zoek naar 
                  de essentie van wat het betekent om mens te zijn. Elk schilderij is een dialoog tussen mij en 
                  het onderwerp, een moment van verbinding dat ik probeer vast te leggen op doek.
                </p>
                
                <p className="text-muted-foreground">
                  Mijn inspiratie komt uit het dagelijks leven, uit ontmoetingen met mensen, uit verhalen die 
                  verteld moeten worden. Ik werk voornamelijk met acrylverf en olieverf, technieken die me 
                  de vrijheid geven om zowel subtiele details als krachtige emoties uit te drukken.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=800&fit=crop" 
                  alt="Maria van der Berg aan het schilderen"
                  className="w-full h-96 md:h-[500px] object-cover rounded-lg gallery-shadow"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-sage-200/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-terracotta-200/20 rounded-lg -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
