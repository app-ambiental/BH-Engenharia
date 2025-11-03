
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold text-white">
              Sustenta<span className="text-primary-light">.Eng</span>
            </a>
            <p className="mt-4 text-sm">Engenharia ambiental para um futuro sustentável.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase">Navegação</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="hover:text-primary-light transition-colors">Serviços</a></li>
              <li><a href="#projects" className="hover:text-primary-light transition-colors">Projetos</a></li>
              <li><a href="#about" className="hover:text-primary-light transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-primary-light transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase">Contato</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (11) 98765-4321
              </li>
               <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                contato@sustentaeng.com.br
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase">Siga-nos</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sustenta Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
