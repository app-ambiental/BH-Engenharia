
import React from 'react';
import { Service, Project, Feature, TeamMember } from './types';

// Icons (Heroicons)
const LeafIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const DocumentTextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const GlobeAltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.881 4.002l.07.135a2 2 0 01-1.92 2.863L4 7M16.12 4.002l-.07.135a2 2 0 001.92 2.863L20 7M12 21v-4m0-4H9.5a2.5 2.5 0 000 5H12m0-5h2.5a2.5 2.5 0 010 5H12" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
const LightBulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const BeakerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;

export const services: Service[] = [
  { icon: <DocumentTextIcon />, title: 'Licenciamento Ambiental', description: 'Conduzimos todo o processo de licenciamento para garantir a conformidade e viabilidade do seu empreendimento.' },
  { icon: <GlobeAltIcon />, title: 'Estudos de Impacto (EIA/RIMA)', description: 'Elaboramos estudos detalhados para avaliar e mitigar os impactos ambientais de grandes projetos.' },
  { icon: <TrashIcon />, title: 'Gerenciamento de Resíduos', description: 'Desenvolvemos planos de gerenciamento de resíduos sólidos, visando a redução, reciclagem e descarte correto.' },
  { icon: <LeafIcon />, title: 'Consultoria em Sustentabilidade', description: 'Ajudamos sua empresa a integrar práticas sustentáveis, melhorando a imagem e a eficiência operacional.' },
  { icon: <LightBulbIcon />, title: 'Energias Renováveis', description: 'Projetamos e implementamos soluções de energia solar, eólica e de biomassa para um futuro mais limpo.' },
  { icon: <BeakerIcon />, title: 'Recuperação de Áreas Degradadas', description: 'Aplicamos técnicas inovadoras para restaurar ecossistemas e solos contaminados, devolvendo vida a áreas impactadas.' }
];

export const projects: Project[] = [
    { image: 'https://picsum.photos/seed/project1/600/400', category: 'Energia Renovável', title: 'Instalação de Parque Solar', description: 'Implementação de um parque de energia solar de 5MW para indústria, reduzindo a pegada de carbono em 90%.' },
    { image: 'https://picsum.photos/seed/project2/600/400', category: 'Gestão de Resíduos', title: 'Plano de Resíduos para Município', description: 'Desenvolvimento e execução do Plano Municipal de Gestão Integrada de Resíduos Sólidos para uma cidade de 50 mil habitantes.' },
    { image: 'https://picsum.photos/seed/project3/600/400', category: 'Licenciamento Ambiental', title: 'Licenciamento de Complexo Industrial', description: 'Obtenção de todas as licenças (LP, LI, LO) para um novo complexo industrial, garantindo operação em 18 meses.' },
    { image: 'https://picsum.photos/seed/project4/600/400', category: 'Recuperação de Áreas', title: 'Restauração de Mata Ciliar', description: 'Projeto de recuperação de 20 hectares de mata ciliar em bacia hidrográfica, com plantio de 30 mil mudas nativas.' }
];

export const features: Feature[] = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /></svg>, title: 'Inovação Tecnológica', description: 'Utilizamos as mais recentes tecnologias, como drones e modelagem 3D, para precisão e eficiência.' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: 'Equipe Multidisciplinar', description: 'Nossa equipe é formada por engenheiros, biólogos e geólogos altamente qualificados e experientes.' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Resultados Comprovados', description: 'Temos um histórico de sucesso em projetos complexos, sempre entregando soluções eficazes e dentro do prazo.' }
];

export const team: TeamMember[] = [
    { avatar: 'https://picsum.photos/seed/person1/200/200', name: 'Dr.ª Ana Silva', role: 'Diretora de Engenharia' },
    { avatar: 'https://picsum.photos/seed/person2/200/200', name: 'Marcos Oliveira', role: 'Gerente de Projetos' },
    { avatar: 'https://picsum.photos/seed/person3/200/200', name: 'Carla Souza', role: 'Especialista em Licenciamento' },
    { avatar: 'https://picsum.photos/seed/person4/200/200', name: 'Pedro Costa', role: 'Consultor de Sustentabilidade' }
];

