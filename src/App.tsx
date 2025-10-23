import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { Gallery } from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Empty on desktop */}
          <div className="hidden md:block">
            {/* Empty space as per instructions */}
          </div>
          
          {/* Right side - Widgets */}
          <div className="space-y-8">
            <AboutSection />
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
