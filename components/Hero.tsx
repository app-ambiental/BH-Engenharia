import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-primary-dark bg-opacity-60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599599810694-b5b37304c047?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          Engenharia Ambiental para um Futuro Sustentável
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          Soluções inovadoras e responsáveis para os desafios ambientais do seu negócio.
        </p>
        <a 
          href="#services" 
          className="bg-primary-light hover:bg-primary text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Conheça Nossas Soluções
        </a>
      </div>
    </section>
  );
};

export default Hero;