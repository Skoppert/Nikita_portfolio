
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://n8n.lamba.world/webhook/6c8ea16b-2943-4da6-8e5d-1a24824f6344', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Contact via website',
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'Portfolio Website'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Hide success message after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cream-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sage-200/20 rounded-full animate-float-gentle"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-terracotta-200/15 rounded-full animate-bob"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 animate-slide-down">
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 animate-width-expand" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-lg text-muted-foreground font-cormorant max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Heeft u interesse in mijn werk of wilt u meer informatie? Neem gerust contact met mij op.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left" style={{ animationDelay: '0.7s' }}>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  Neem contact op
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group animate-slide-in-left" style={{ animationDelay: '1s' }}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Mail className="text-primary transition-transform duration-300 group-hover:scale-110" size={20} />
                    </div>
                    <div>
                      <p className="font-cormorant text-muted-foreground">Email</p>
                      <p className="font-cormorant text-foreground group-hover:text-primary transition-colors duration-300">nikitabeekhof398@icloud.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group animate-slide-in-left" style={{ animationDelay: '1.1s' }}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Phone className="text-primary transition-transform duration-300 group-hover:scale-110" size={20} />
                    </div>
                    <div>
                      <p className="font-cormorant text-muted-foreground">Telefoon</p>
                      <p className="font-cormorant text-foreground group-hover:text-primary transition-colors duration-300">+31 6 28292914</p>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Social Media */}
              <div className="animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
                <h4 className="text-xl font-playfair font-medium text-foreground mb-4">
                  Volg mij online
                </h4>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/nikita_beekhof" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" size="icon" className="rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 animate-bounce-in" style={{ animationDelay: '1.4s' }}>
                      <Instagram size={20} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg gallery-shadow p-8 animate-slide-in-right" style={{ animationDelay: '0.9s' }}>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
                Stuur een bericht
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                  <label className="block text-sm font-cormorant text-foreground mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant transition-all duration-300 focus:scale-105"
                    placeholder="Uw naam"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
                  <label className="block text-sm font-cormorant text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant transition-all duration-300 focus:scale-105"
                    placeholder="uw@email.nl"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                  <label className="block text-sm font-cormorant text-foreground mb-2">
                    Onderwerp
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant transition-all duration-300 focus:scale-105"
                    placeholder="Interesse in schilderij"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                  <label className="block text-sm font-cormorant text-foreground mb-2">
                    Bericht *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant resize-none transition-all duration-300 focus:scale-105"
                    placeholder="Vertel mij over uw interesse in mijn werk..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-cormorant text-lg py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in" 
                  style={{ animationDelay: '1.6s' }}
                >
                  {isSubmitting ? 'Bezig met versturen...' : 'Verstuur bericht'}
                </Button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                    <p className="text-green-800 font-cormorant text-center">
                      ✅ Bericht succesvol verzonden! Ik neem zo snel mogelijk contact met je op.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                    <p className="text-red-800 font-cormorant text-center">
                      ❌ Er is iets misgegaan. Probeer het opnieuw of stuur een email naar nikitabeekhof398@icloud.com
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes slide-down {
          0% { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes width-expand {
          0% { width: 0; opacity: 0; }
          100% { width: 4rem; opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in-left {
          0% { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-right {
          0% { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.5) translateY(20px); 
          }
          60% { 
            transform: scale(1.1) translateY(-5px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-bob { animation: bob 3s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.8s ease-out forwards; }
        .animate-width-expand { animation: width-expand 1.2s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default ContactSection;
