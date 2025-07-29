
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-foreground">
              Nikita Beekhof
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('over-mij')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg font-medium"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('gallerij')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg"
              >
                {t('nav.gallery')}
              </button>
              <button
                onClick={() => scrollToSection('exposities')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg"
              >
                {t('nav.exhibitions')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg"
              >
                {t('nav.contact')}
              </button>
            </nav>
            
            <LanguageToggle />
          </div>

          {/* Mobile menu button and language toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('over-mij')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg font-medium"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('gallerij')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg"
              >
                {t('nav.gallery')}
              </button>
              <button
                onClick={() => scrollToSection('exposities')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg"
              >
                {t('nav.exhibitions')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-cormorant text-lg"
              >
                {t('nav.contact')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
