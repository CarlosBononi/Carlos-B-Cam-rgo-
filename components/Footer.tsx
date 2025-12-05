import React from 'react';
import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vevvo-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl text-vevvo-gold mb-6">VEVVO</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Excelência em cosméticos profissionais. Uma experiência de luxo e resultado para salões e clientes exigentes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-vevvo-gold hover:border-vevvo-gold hover:text-vevvo-dark transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-vevvo-gold hover:border-vevvo-gold hover:text-vevvo-dark transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-vevvo-gold transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-vevvo-gold transition-colors">Tecnologia</a></li>
              <li><a href="#" className="hover:text-vevvo-gold transition-colors">Seja Distribuidor</a></li>
              <li><a href="#" className="hover:text-vevvo-gold transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg mb-6">Linhas</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-vevvo-gold transition-colors">Vegan Detox</a></li>
              <li><a href="#" className="hover:text-vevvo-gold transition-colors">Blond Expert</a></li>
              <li><a href="#" className="hover:text-vevvo-gold transition-colors">Chronological</a></li>
              <li><a href="#" className="hover:text-vevvo-gold transition-colors">Spa Series</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-vevvo-gold mt-1" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-vevvo-gold" />
                <span>+55 11 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-vevvo-gold" />
                <span>contato@vevvo.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Vevvo Professional Cosméticos. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-serif italic">Only for you</p>
        </div>
      </div>
    </footer>
  );
};