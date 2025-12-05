import React from 'react';
import { Product } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white h-[500px] flex flex-col overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100">
      
      {/* Image Container */}
      <div className="relative h-3/5 overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-vevvo-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <button className="bg-white text-vevvo-dark px-8 py-3 font-sans uppercase tracking-widest text-xs hover:bg-vevvo-gold hover:text-white transition-colors duration-300">
                Ver Detalhes
             </button>
        </div>
        <div className="absolute top-4 right-4">
            <span className="bg-white/90 backdrop-blur text-vevvo-dark text-[10px] uppercase tracking-widest py-1 px-3 font-bold border border-vevvo-gold/20">
                {product.category}
            </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between flex-grow bg-white relative z-10">
        <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-vevvo-gold transition-colors duration-300">
            {product.name}
            </h3>
            <div className="w-12 h-0.5 bg-vevvo-gold mb-4 group-hover:w-full transition-all duration-500"></div>
            <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3">
            {product.description}
            </p>
        </div>
        
        <div className="flex items-center text-vevvo-gold text-xs uppercase tracking-widest font-semibold mt-4 group/btn cursor-pointer">
            <span className="mr-2">Descubra</span>
            <ArrowRight size={14} className="transform transition-transform group-hover/btn:translate-x-2" />
        </div>
      </div>
      
      {/* Gold Border Effect */}
      <div className="absolute inset-0 border border-vevvo-gold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 scale-95 group-hover:scale-100"></div>
    </div>
  );
};