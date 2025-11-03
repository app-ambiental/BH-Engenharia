
import React from 'react';
import { team } from '../constants';

const AboutUs = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Sobre a Sustenta.Eng</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Nascemos da paixão pelo meio ambiente e da crença de que o progresso econômico pode e deve caminhar junto com a sustentabilidade. Nossa missão é fornecer soluções de engenharia ambiental que não apenas atendam às regulamentações, mas que também gerem valor para nossos clientes e para a sociedade.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Com uma equipe de especialistas dedicados e uma abordagem baseada em dados e tecnologia, transformamos desafios complexos em oportunidades de crescimento sustentável.
                        </p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/seed/teamwork/600/400" alt="Equipe Sustenta Engenharia" className="rounded-lg shadow-xl" />
                    </div>
                </div>

                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-extrabold text-gray-900">Nossa Equipe de Especialistas</h3>
                        <p className="mt-4 text-lg text-gray-600">Conheça os líderes por trás de nossos projetos de sucesso.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center">
                                <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover" />
                                <h4 className="mt-4 text-xl font-bold text-gray-900">{member.name}</h4>
                                <p className="text-primary-light font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
