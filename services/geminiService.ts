
import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable not set");
  }
  return apiKey;
};

export const getPreliminaryAnalysis = async (description: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: getApiKey() });

    const prompt = `
      Você é um consultor especialista em engenharia ambiental da empresa "Sustenta Engenharia". Com base na descrição do projeto fornecida pelo usuário, sua tarefa é:
      1.  Identificar e listar os serviços de engenharia ambiental que provavelmente serão necessários. Use os seguintes nomes de serviço como referência: Licenciamento Ambiental, Estudos de Impacto Ambiental (EIA/RIMA), Gerenciamento de Resíduos Sólidos, Consultoria em Sustentabilidade, Projetos de Energias Renováveis, Recuperação de Áreas Degradadas, Gestão de Recursos Hídricos.
      2.  Para cada serviço identificado, fornecer uma breve explicação do que ele envolve e por que é relevante para o projeto descrito.
      3.  Apresentar um resumo dos próximos passos gerais que o cliente deveria seguir para avançar com o projeto.
      4.  Formular uma lista de 3 a 5 perguntas-chave que um engenheiro da Sustenta Engenharia precisaria fazer para entender melhor o escopo do projeto e preparar uma proposta.
      5.  Finalize com uma chamada para ação amigável, incentivando o usuário a entrar em contato com a Sustenta Engenharia.

      Formate sua resposta de forma clara e organizada, usando markdown (títulos com '#', listas com '*' e texto em negrito com '**'). Responda em Português do Brasil.

      Descrição do usuário: "${description}"
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ parts: [{ text: prompt }] }],
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, verifique se sua chave de API está configurada corretamente e tente novamente.";
  }
};
