import React from 'react';
import { ExternalLinkIcon } from './Icons';
import { useApp } from '../App';

const Hero: React.FC = () => {
  const { t } = useApp();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 md:pt-0">
      {/* Background Blobs - Adjusted to handle light/dark better */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        {/* Avatar */}
        <div className="mb-8 relative group animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzq1pLP46fyAUFrzm-fNo9D_Cx7iKpwACjB0AAtXsaVVSpwquxRGy5jYE.jpg"
              alt="Joe Chen"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-surface shadow-2xl"
            />
        </div>

        <h2 className="text-secondary font-mono mb-6 animate-slide-up tracking-widest text-sm uppercase [animation-delay:100ms]">
          {t('hero.name')}
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-textMain animate-slide-up [animation-delay:200ms] leading-[1.1]">
          {t('hero.title')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t('hero.titleHighlight')}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-textMuted max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up [animation-delay:400ms]">
          {t('hero.desc')}
          <br className="hidden md:block"/>
          <span className="opacity-80 block mt-2">{t('hero.subDesc')}</span>
        </p>

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