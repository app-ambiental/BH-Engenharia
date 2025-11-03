
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Vamos Conversar sobre seu Projeto</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para uma consulta inicial sem compromisso.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Seu nome" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" required />
                <input type="email" placeholder="Seu e-mail" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" required />
              </div>
              <div className="mt-6">
                <input type="text" placeholder="Assunto" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" />
              </div>
              <div className="mt-6">
                <textarea rows={5} placeholder="Sua mensagem" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" required></textarea>
              </div>
              <div className="mt-6 text-right">
                <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition duration-300">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary-light rounded-md text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Nosso Endereço</h3>
                <p className="text-gray-600">Av. Sustentabilidade, 123, Sala 404<br/>Cidade Verde, Estado, CEP 12345-678</p>
              </div>
            </div>
             <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary-light rounded-md text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">E-mail</h3>
                <p className="text-gray-600">contato@sustentaeng.com.br</p>
              </div>
            </div>
             <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary-light rounded-md text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Telefone</h3>
                <p className="text-gray-600">(11) 98765-4321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
