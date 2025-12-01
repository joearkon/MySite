import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon } from './Icons';
import { useApp } from '../App';

const Projects: React.FC = () => {
  const { t } = useApp();

  // Re-creating project list inside component to access translations
  const PROJECTS: Project[] = [
    {
      id: 1,
      title: t('projects.p1.title'),
      description: t('projects.p1.desc'),
      tags: ["AI", "Pricing Strategy", "EdgeOne"],
      imageUrl: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800",
      link: "https://smart-price-v1-0ipm8ajj.edgeone.run/"
    },
    {
      id: 2,
      title: t('projects.p2.title'),
      description: t('projects.p2.desc'),
      tags: ["Sales Ops", "Dashboard", "Analytics"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "https://omnisalesmeiha-i2coclrf.edgeone.run/"
    },
    {
      id: 3,
      title: t('projects.p3.title'),
      description: t('projects.p3.desc'),
      tags: ["Personal Branding", "Architecture"],
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
      link: "https://myresume-mshptvae.edgeone.run/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-textMain">{t('projects.title')}</h2>
            <p className="text-textMuted">{t('projects.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <a 
                key={project.id} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="group relative bg-surface border border-textMain/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-textMain group-hover:text-primary transition-colors">{project.title}</h3>
                  <ExternalLinkIcon className="w-5 h-5 text-textMuted group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-textMuted text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-background text-secondary border border-textMain/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
