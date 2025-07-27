
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ExhibitionsSection from '@/components/ExhibitionsSection';
import PromisesSection from '@/components/PromisesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ExhibitionsSection />
      <PromisesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
