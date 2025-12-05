import React from 'react';
import { HERO_IMAGE } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={HERO_IMAGE} 
          alt="Vevvo Professional Salon" 
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in-up">
            <h2 className="text-white font-sans tracking-[0.3em] text-sm md:text-lg mb-4 uppercase">
                Professional Cosmetics
            </h2>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                <span className="block text-vevvo-gold drop-shadow-lg">VEVVO</span>
                <span className="italic font-light text-4xl md:text-6xl">Only for you</span>
            </h1>
            <p className="text-gray-200 max-w-xl mx-auto font-sans font-light text-sm md:text-base leading-relaxed mb-10">
                Redescubra a essência do luxo capilar. Tecnologia avançada e ingredientes nobres para resultados extraordinários.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a 
                    href="#collections"
                    className="px-10 py-4 bg-vevvo-gold hover:bg-white hover:text-vevvo-dark text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-vevvo-gold/30"
                >
                    Nossas Coleções
                </a>
                <a 
                    href="#concierge"
                    className="px-10 py-4 border border-white text-white hover:bg-white hover:text-vevvo-dark font-sans text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-sm"
                >
                    Consultoria IA
                </a>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};