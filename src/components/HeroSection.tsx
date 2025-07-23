
const HeroSection = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-b from-cream-50 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-terracotta-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-4 animate-fade-in">
            Nikita Beekhof
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-cormorant mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Schilderijen die verhalen vertellen
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Ontdek een wereld van kleuren, emoties en expressie door mijn schilderijen
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
