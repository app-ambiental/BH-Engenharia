
import React from 'react';
import { projects } from '../constants';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Projetos de Destaque</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Conheça alguns dos nossos casos de sucesso e o impacto positivo que geramos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-primary-light uppercase tracking-wider">{project.category}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{project.title}</h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
