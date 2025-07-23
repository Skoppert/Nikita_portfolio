
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto">
            Heeft u interesse in mijn werk of wilt u meer informatie? Neem gerust contact met mij op.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                  Neem contact op
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-cormorant text-muted-foreground">Email</p>
                      <p className="font-cormorant text-foreground">maria@mariavanderberg.nl</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-cormorant text-muted-foreground">Telefoon</p>
                      <p className="font-cormorant text-foreground">+31 (0)6 12 34 56 78</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-cormorant text-muted-foreground">Atelier</p>
                      <p className="font-cormorant text-foreground">Kunststraat 42<br />1234 AB Amsterdam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xl font-playfair font-medium text-foreground mb-4">
                  Volg mij online
                </h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook size={20} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg gallery-shadow p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Stuur een bericht
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-cormorant text-foreground mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant"
                    placeholder="Uw naam"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-cormorant text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant"
                    placeholder="uw@email.nl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-cormorant text-foreground mb-2">
                    Onderwerp
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant"
                    placeholder="Interesse in schilderij"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-cormorant text-foreground mb-2">
                    Bericht *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant resize-none"
                    placeholder="Vertel mij over uw interesse in mijn werk..."
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-cormorant text-lg py-3">
                  Verstuur bericht
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
