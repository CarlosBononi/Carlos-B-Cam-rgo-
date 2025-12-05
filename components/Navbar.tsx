import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Placeholder - Representing the Vevvo Script Logo */}
          <div className="flex-shrink-0 cursor-pointer">
             <h1 className={`font-serif text-3xl font-bold tracking-widest ${isScrolled ? 'text-vevvo-green' : 'text-vevvo-gold'} transition-colors`}>
               VEVVO
             </h1>
             <p className={`text-[0.6rem] tracking-[0.4em] uppercase text-center ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
               Only for you
             </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium tracking-widest uppercase hover:text-vevvo-gold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className={`px-6 py-2 border ${isScrolled ? 'border-vevvo-green text-vevvo-green' : 'border-white text-white'} hover:bg-vevvo-gold hover:border-vevvo-gold hover:text-white transition-all duration-300 font-sans text-xs tracking-widest uppercase`}>
              Seja Distribuidor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`${isScrolled ? 'text-vevvo-green' : 'text-white'}`}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 px-4 flex flex-col space-y-6 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-center text-gray-800 text-lg font-serif font-medium hover:text-vevvo-gold"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-3 bg-vevvo-green text-white font-sans text-sm tracking-widest uppercase">
            Seja Distribuidor
          </button>
        </div>
      )}
    </nav>
  );
};