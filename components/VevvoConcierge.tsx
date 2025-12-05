import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Sparkles, X, MessageSquare, Loader2 } from 'lucide-react';
import { getVevvoConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

export const VevvoConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá. Sou o Concierge Vevvo. Como posso ajudar a realçar a beleza dos seus cabelos hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const responseText = await getVevvoConsultation(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Perdão, houve uma interferência. Tente novamente.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-vevvo-green text-white p-4 rounded-full shadow-2xl hover:bg-vevvo-gold transition-colors duration-300 group flex items-center gap-2 pr-6"
      >
        <div className="bg-white/20 p-2 rounded-full">
            <Sparkles size={24} className="animate-pulse" />
        </div>
        <span className="font-serif italic text-lg pr-2">Vevvo AI</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[95vw] md:w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-vevvo-gold/30 animate-fade-in-up">
      {/* Header */}
      <div className="bg-vevvo-green p-4 flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="flex items-center space-x-3 z-10">
          <div className="w-10 h-10 rounded-full bg-vevvo-gold flex items-center justify-center border-2 border-white/30">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-serif text-lg">Vevvo Concierge</h3>
            <p className="text-white/70 text-xs uppercase tracking-wider">Expert Consultant</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white z-10">
          <X size={24} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-vevvo-dark text-white rounded-br-none' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
           <div className="flex justify-start">
             <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-2">
               <Loader2 size={16} className="animate-spin text-vevvo-gold" />
               <span className="text-xs text-gray-400 italic">Consultando laboratório...</span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-vevvo-gold focus-within:ring-1 focus-within:ring-vevvo-gold transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte sobre tratamentos..."
            className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="ml-2 text-vevvo-green hover:text-vevvo-gold disabled:opacity-50 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-2">
          Powered by Gemini 2.5 • Consultoria Virtual
        </p>
      </div>
    </div>
  );
};