export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string; // Placeholder for the real image paths
  benefits: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum CollectionType {
  DETOX = 'Detox & Care',
  RECONSTRUCTION = 'Advanced Reconstruction',
  BLOND = 'Blond Expert',
  SPA = 'Spa Experience',
  FINISH = 'Finishing Touch'
}