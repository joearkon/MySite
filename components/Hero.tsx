import React from 'react';
import { ExternalLinkIcon } from './Icons';
import { useApp } from '../App';

const Hero: React.FC = () => {
  const { t } = useApp();

  // Helper to render a tag group
  const TagItem = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => (
    <div className="flex flex-col gap-1 p-3 rounded-xl bg-surface/50 border border-textMain/5 hover:border-primary/20 transition-colors backdrop-blur-sm">
      <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
        {icon}
        {label}
      </div>
      <div className="text-sm text-textMain font-medium leading-snug">
        {value}
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-12 md:pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        {/* Avatar */}
        <div className="mb-6 relative group animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzq1pLP46fyAUFrzm-fNo9D_Cx7iKpwACjB0AAtXsaVVSpwquxRGy5jYE.jpg"
              alt="Joe Chen"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-surface shadow-2xl"
            />
        </div>

        <h2 className="text-secondary font-mono mb-4 animate-slide-up tracking-widest text-sm uppercase [animation-delay:100ms]">
          {t('hero.name')}
        </h2>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-textMain animate-slide-up [animation-delay:200ms] leading-[1.1]">
          {t('hero.title')} <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t('hero.titleHighlight')}
          </span>
        </h1>

        {/* Subtitle */}
        <h3 className="text-lg md:text-2xl font-light text-textMain/80 mb-8 animate-slide-up [animation-delay:300ms]">
            {t('hero.subtitle_extra')}
        </h3>
        
        {/* Description Text */}
        <div className="max-w-3xl mx-auto mb-10 text-textMuted leading-relaxed animate-slide-up [animation-delay:400ms] space-y-4">
            <p className="text-lg font-medium text-textMain">{t('hero.desc')}</p>
            <p className="opacity-90">{t('hero.desc_extended')}</p>
        </div>

        {/* Key Specs / Tags Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left animate-slide-up [animation-delay:500ms]">
            <TagItem 
                label={t('tag.identity.label')} 
                value={t('tag.identity.val')} 
                icon={<span className="text-lg">🆔</span>} 
            />
             <TagItem 
                label={t('tag.ability.label')} 
                value={t('tag.ability.val')} 
                icon={<span className="text-lg">🚀</span>} 
            />
             <TagItem 
                label={t('tag.passion.label')} 
                value={t('tag.passion.val')} 
                icon={<span className="text-lg">❤️</span>} 
            />
             <TagItem 
                label={t('tag.ai.label')} 
                value={t('tag.ai.val')} 
                icon={<span className="text-lg">🤖</span>} 
            />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-up [animation-delay:600ms] w-full md:w-auto">
          <a 
            href="https://myresume-mshptvae.edgeone.run/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 rounded-full bg-primary text-white font-bold hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
          >
            {t('hero.btn.resume')}
            <ExternalLinkIcon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="#showcase" className="px-8 py-3 rounded-full border border-textMain/20 hover:border-secondary hover:text-secondary transition-colors bg-surface/50 backdrop-blur-sm text-textMain">
            {t('hero.btn.tools')}
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-transparent hover:bg-surface text-textMuted hover:text-textMain transition-colors">
            {t('hero.btn.contact')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;