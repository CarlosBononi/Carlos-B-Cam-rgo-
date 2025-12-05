import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

// Create a context string about Vevvo products for the AI
const productContext = PRODUCTS.map(p => 
  `Produto: ${p.name}. Categoria: ${p.category}. Descrição: ${p.description}. Benefícios: ${p.benefits.join(', ')}.`
).join('\n');

export const getVevvoConsultation = async (userQuery: string): Promise<string> => {
  try {
    const client = getClient();
    
    // Using gemini-2.5-flash for speed and efficiency in a chat context
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `
          Você é o 'Vevvo Concierge', um consultor capilar de altíssimo luxo e especialista da marca Vevvo Professional Cosméticos.
          
          Seu tom de voz é: Sofisticado, elegante, acolhedor e exclusivo. Use palavras como "sublime", "transformação", "ritual", "premium".
          
          Sua missão:
          1. Analisar a necessidade do cliente (tipo de cabelo, problema).
          2. Recomendar o produto Vevvo ideal baseado na lista abaixo.
          3. Explicar por que esse produto é perfeito, focando na tecnologia e no resultado de salão.
          
          Dados dos Produtos Vevvo (USE APENAS ESTES):
          ${productContext}
          
          Se o cliente perguntar sobre algo que não é um produto Vevvo, gentilmente traga a conversa de volta para como a Vevvo pode ajudar, ou dê uma dica geral de beleza mantendo a classe.
          Seja conciso, mas glamouroso. Responda em Português do Brasil.
        `,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, estou ajustando meu coque. Poderia repetir?";
  } catch (error) {
    console.error("Erro na consulta Vevvo:", error);
    return "No momento, nossa linha direta com o laboratório está ocupada. Tente novamente em instantes.";
  }
};