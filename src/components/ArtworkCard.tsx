
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ZoomIn } from 'lucide-react';

interface ArtworkCardProps {
  title: string;
  category: string;
  imageSrc: string;
  description?: string;
  year?: string;
  dimensions?: string;
  technique?: string;
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
  className = "",
  style = {}
}: ArtworkCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={`group cursor-pointer ${className}`} 
        onClick={() => setIsModalOpen(true)}
        style={style}
      >
        <div className="relative overflow-hidden rounded-lg gallery-shadow artwork-hover bg-white">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white font-playfair font-medium text-lg">{title}</h3>
            <p className="text-white/80 text-sm font-cormorant">{category}</p>
            {year && <p className="text-white/60 text-xs">{year}</p>}
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-full h-full max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="absolute top-4 right-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-foreground rounded-full"
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
                className="max-w-full max-h-full object-contain rounded-lg gallery-shadow"
              />
            </div>
            
            {/* Details */}
            <div className="w-80 bg-background p-8 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">{title}</h3>
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
