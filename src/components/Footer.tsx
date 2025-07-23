
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">
            Maria van der Berg
          </h3>
          <p className="font-cormorant text-background/80 mb-6">
            Schilderijen die verhalen vertellen
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-cormorant text-background/60 text-sm">
            © 2024 Maria van der Berg. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
