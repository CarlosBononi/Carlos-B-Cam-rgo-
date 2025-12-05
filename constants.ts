import { Product, CollectionType } from './types';

// In a real scenario, these URLs would point to the assets provided in the prompt.
// We are using high-quality Unsplash placeholders that match the description.
export const HERO_IMAGE = "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"; // Salon interior
export const MARBLE_BG = "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop";

export const PRODUCTS: Product[] = [
  {
    id: 'vegan-detox',
    name: 'Vegan Detox',
    category: CollectionType.DETOX,
    description: 'Um sistema revolucionário de desintoxicação capilar. Remove impurezas enquanto nutre profundamente com ingredientes 100% veganos.',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop', // Green bottles equivalent
    benefits: ['Limpeza profunda', 'Vegano', 'Revitalização do couro cabeludo']
  },
  {
    id: 'linha-spa',
    name: 'Linha Spa',
    category: CollectionType.SPA,
    description: 'A experiência do relaxamento absoluto. Fragrâncias terapêuticas e texturas luxuosas para um momento único de autocuidado.',
    image: 'https://images.unsplash.com/photo-1571781565023-40f8d4752541?q=80&w=800&auto=format&fit=crop', // Spa/White bottles
    benefits: ['Aromaterapia', 'Hidratação sensorial', 'Toque de seda']
  },
  {
    id: 'advanced-chronological',
    name: 'Advanced Chronological System',
    category: CollectionType.RECONSTRUCTION,
    description: 'A ciência do tempo a favor dos seus fios. Reconstrói a fibra capilar danificada, devolvendo massa e elasticidade.',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop', // Salon bottles
    benefits: ['Reconstrução total', 'Sistema cronológico', 'Brilho intenso']
  },
  {
    id: 'blond',
    name: 'Vevvo Blond',
    category: CollectionType.BLOND,
    description: 'O segredo do loiro perfeito. Neutraliza tons indesejados enquanto hidrata, garantindo um platino saudável e luminoso.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop', // Blue/Purple bottles
    benefits: ['Matização', 'Proteção da cor', 'Hidratação profunda']
  },
  {
    id: 'btx',
    name: 'BTX Professional',
    category: CollectionType.RECONSTRUCTION,
    description: 'Alinhamento térmico e redução de volume com tratamento intensivo. Cabelos lisos, disciplinados e sem frizz.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop', // Pot/Mask
    benefits: ['Redução de volume', 'Anti-frizz', 'Brilho espelhado']
  },
  {
    id: 'organic-detox',
    name: 'Organic Detox',
    category: CollectionType.DETOX,
    description: 'A pureza da natureza para seus cabelos. Controle de oleosidade e refrescância com extratos orgânicos.',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop', // Green organic vibe
    benefits: ['Controle de oleosidade', 'Orgânico', 'Refrescante']
  },
  {
    id: 'ph-balancer',
    name: 'PH Balancer',
    category: CollectionType.FINISH,
    description: 'Equilíbrio essencial. Acidificante profissional que sela as cutículas e potencializa qualquer tratamento.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop', // Spray/Serum
    benefits: ['Selagem de cutículas', 'Equilíbrio de pH', 'Pós-química']
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Coleções', href: '#collections' },
  { name: 'O Conceito', href: '#concept' },
  { name: 'Vevvo AI', href: '#concierge' },
];