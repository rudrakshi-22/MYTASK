import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './common/ImageWithFallback';

const defaultImages = [
  'https://images.unsplash.com/photo-1600540974143-ac2d3cdabcc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjdXJ2ZXN8ZW58MXx8fHwxNzYxMTg5OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1708114191474-3e6f9ad59630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJ1aWxkaW5nJTIwc3RydWN0dXJlfGVufDF8fHx8MTc2MTE4OTk2NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1692719224629-317d0bd533f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsc3xlbnwxfHx8fDE3NjExODk5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

export function Gallery() {
  const [images, setImages] = useState<string[]>(defaultImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imagesPerView = 3;

  const handleAddImage = () => {
    // Open file picker when button is clicked
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    // Convert selected files to data URLs and add to gallery
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            setImages((prev) => [...prev, result]);
          }
        };
        reader.readAsDataURL(file);
      }
    });

    // Reset input so the same file can be selected again
    event.target.value = '';
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      Math.min(images.length - imagesPerView, prev + 1)
    );
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < images.length - imagesPerView;

  return (
    <div className="bg-[#2a2a2a] rounded-lg p-6 shadow-xl">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      
      <div className="flex items-center justify-between mb-6">
        <HelpCircle className="w-5 h-5 text-gray-500" />
        <div className="flex items-center gap-4">
          <h2 className="text-lg">Gallery</h2>
          <Button
            onClick={handleAddImage}
            className="bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white rounded-full px-6 shadow-lg"
          >
            + ADD IMAGE
          </Button>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#3a3a3a] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#3a3a3a] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / imagesPerView + 1.33)}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(33.333%-0.67rem)] aspect-square rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all"
            >
              <ImageWithFallback
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}