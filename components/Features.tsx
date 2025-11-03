
import React from 'react';
import { features } from '../constants';

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Por Que Nos Escolher?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Compromisso com a excelência em cada etapa do seu projeto.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-light bg-opacity-20 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
