import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { VevvoConcierge } from './components/VevvoConcierge';
import { Footer } from './components/Footer';
import { PRODUCTS, MARBLE_BG } from './constants';
import { Star } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Navbar />
      
      <main>
        <Hero />

        {/* Brand Concept Section */}
        <section id="concept" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${MARBLE_BG})`, backgroundSize: 'cover' }}></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <span className="text-vevvo-gold text-sm tracking-[0.4em] uppercase font-bold mb-4 block">A Essência</span>
                <h2 className="font-serif text-4xl md:text-5xl text-vevvo-green mb-8">Luxo, Ciência e Natureza</h2>
                <div className="w-24 h-1 bg-vevvo-gold mx-auto mb-8"></div>
                <p className="text-gray-600 leading-loose font-light text-lg">
                    A Vevvo nasceu para redefinir o cuidado capilar profissional. 
                    Combinamos ativos nobres, fragrâncias exclusivas e tecnologia de ponta 
                    para entregar não apenas produtos, mas uma experiência sensorial completa. 
                    Cada frasco contém o compromisso com a beleza absoluta.
                </p>
            </div>
        </section>

        {/* Collections Grid */}
        <section id="collections" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h3 className="font-serif text-4xl text-vevvo-dark mb-4">Nossas Coleções</h3>
               <p className="text-gray-500 font-light">Descubra o tratamento perfeito para cada necessidade.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Highlight - e.g. Car Promo or Special Line */}
        <section className="py-0 relative h-[600px] flex items-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632911194294-04149959600d?q=80&w=2072&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-vevvo-dark/60"></div>
            <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-white">
                    <h2 className="font-serif text-5xl mb-6">Distribuição Exclusiva</h2>
                    <p className="text-lg font-light mb-8 text-gray-200">
                        Leve a excelência Vevvo para sua cidade. Seja um distribuidor autorizado e faça parte de um time de sucesso com suporte completo e material de marketing premium.
                    </p>
                    <button className="bg-vevvo-gold hover:bg-white hover:text-vevvo-dark text-white px-8 py-4 font-sans tracking-widest uppercase transition-colors duration-300">
                        Saiba Mais
                    </button>
                </div>
                {/* Decorative Element mimicking the car/lifestyle shots */}
                <div className="hidden md:block w-1/3 border border-vevvo-gold/50 p-8 backdrop-blur-sm bg-white/5">
                    <div className="text-center">
                        <Star className="text-vevvo-gold w-12 h-12 mx-auto mb-4" />
                        <h4 className="font-serif text-2xl text-white mb-2">Vevvo Club</h4>
                        <p className="text-gray-300 text-sm">Acesso a lançamentos antecipados e eventos exclusivos.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Concierge ID */}
        <div id="concierge"></div>

      </main>

      <Footer />
      <VevvoConcierge />
    </div>
  );
};

export default App;