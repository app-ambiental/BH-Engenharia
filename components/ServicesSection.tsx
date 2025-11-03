
import React from 'react';
import { services } from '../constants';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Nossos Serviços Especializados</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Oferecemos um portfólio completo de soluções ambientais para atender às suas necessidades.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="flex-shrink-0">{service.icon}</div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
