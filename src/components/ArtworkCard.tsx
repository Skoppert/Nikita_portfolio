
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ZoomIn, MapPin } from 'lucide-react';

interface ArtworkCardProps {
  title: string;
  category: string;
  imageSrc: string;
  description?: string;
  year?: string;
  dimensions?: string;
  technique?: string;
  location?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArtworkCard = ({ 
  title, 
  category, 
  imageSrc, 
  description, 
  year, 
  dimensions, 
  technique, 
  location,
  className = "",
  style = {}
}: ArtworkCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${className}`} 
        onClick={() => setIsModalOpen(true)}
        style={style}
      >
        <div className="relative overflow-hidden gallery-shadow transform transition-all duration-500 group-hover:shadow-2xl">
          {/* Location Badge */}
          {location && (
            <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-cormorant flex items-center gap-1 animate-bounce-in shadow-lg">
              <MapPin size={12} />
              {location}
            </div>
          )}
          
          <div className="relative min-h-[200px] flex items-center justify-center">
            <img 
              src={imageSrc} 
              alt={title}
              className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" size={32} />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <h3 className="text-foreground font-playfair font-medium text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm font-cormorant">{category}</p>
              {year && <p className="text-muted-foreground text-xs font-cormorant mt-1">{year}</p>}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 overflow-hidden animate-scale-in">
          <DialogHeader className="absolute top-4 right-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-foreground rounded-full transition-all duration-300 hover:scale-110"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={20} />
            </Button>
          </DialogHeader>
          
          <div className="flex h-full">
            {/* Image */}
            <div className="flex-1 flex items-center justify-center bg-black/5 p-8">
              <img 
                src={imageSrc} 
                alt={title}
                className="object-contain rounded-lg gallery-shadow animate-fade-in"
                style={{ 
                  maxWidth: 'calc(90vw - 450px)', 
                  maxHeight: '80vh',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
            
            {/* Details */}
            <div className="w-[400px] bg-background p-8 overflow-y-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2 break-words">{title}</h3>
                  <p className="text-primary font-cormorant text-lg">{category}</p>
                </div>
                
                {description && (
                  <div>
                    <h4 className="font-playfair font-medium text-foreground mb-2">Beschrijving</h4>
                    <p className="text-muted-foreground font-cormorant">{description}</p>
                  </div>
                )}
                
                <div className="space-y-3">
                  {year && (
                    <div>
                      <span className="font-playfair font-medium text-foreground">Jaar: </span>
                      <span className="text-muted-foreground font-cormorant">{year}</span>
                    </div>
                  )}
                  
                  {dimensions && (
                    <div>
                      <span className="font-playfair font-medium text-foreground">Afmetingen: </span>
                      <span className="text-muted-foreground font-cormorant">{dimensions}</span>
                    </div>
                  )}
                  
                  {technique && (
                    <div>
                      <span className="font-playfair font-medium text-foreground">Techniek: </span>
                      <span className="text-muted-foreground font-cormorant">{technique}</span>
                    </div>
                  )}
                  
                  {location && (
                    <div>
                      <span className="font-playfair font-medium text-foreground">Locatie: </span>
                      <span className="text-muted-foreground font-cormorant">{location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArtworkCard;
