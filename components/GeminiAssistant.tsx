
import React, { useState } from 'react';
import { getPreliminaryAnalysis } from '../services/geminiService';

const GeminiAssistant = () => {
  const [description, setDescription] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!description.trim()) {
      setError('Por favor, descreva seu projeto.');
      return;
    }
    setIsLoading(true);
    setError('');
    setAnalysis('');
    try {
      const result = await getPreliminaryAnalysis(description);
      setAnalysis(result);
    } catch (err) {
      setError('Não foi possível obter a análise. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatResponse = (text: string) => {
    // Basic markdown to HTML conversion
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/# (.*?)\n/g, '<h3 class="text-xl font-bold text-primary-dark mt-4 mb-2">$1</h3>')
      .replace(/\* (.*?)\n/g, '<li class="ml-5 list-disc">$1</li>');
  };

  return (
    <section id="assistant" className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">Assistente de Análise Preliminar</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Utilize nossa IA para obter uma visão inicial sobre os serviços e etapas necessárias para o seu projeto ambiental.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-2xl p-8">
          <div className="flex flex-col gap-4">
            <label htmlFor="project-description" className="font-bold text-lg">Descreva seu projeto ou desafio:</label>
            <textarea
              id="project-description"
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="Ex: 'Preciso construir um loteamento residencial em uma área de 10 hectares com vegetação nativa e um pequeno córrego.'"
            />
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="w-full bg-primary-light hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Analisando...' : 'Obter Análise Gratuita'}
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>

          {analysis && (
            <div className="mt-8 pt-6 border-t border-gray-200">
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Resultado da Análise Preliminar:</h3>
               <div
                 className="prose max-w-none"
                 dangerouslySetInnerHTML={{ __html: formatResponse(analysis) }}
               />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiAssistant;
