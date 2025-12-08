import React from 'react';
import { useApp } from '../App';
import { ExternalLinkIcon, SparklesIcon } from './Icons';

const Interests: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="showcase" className="py-24 px-4 md:px-8 relative bg-surface/30">
       {/* Background accent */}
       <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-textMain tracking-tight">
                {t('showcase.title')}
            </h2>
            <p className="text-textMuted max-w-2xl mx-auto text-lg">
                {t('showcase.subtitle')}
            </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[240px]">
          
          {/* --- ROW 1: CORE BUSINESS VALUE (AI TOOLS) --- */}
          
          {/* Stock Mind AI (formerly Smart Price) */}
          <a 
            href="https://stock-mind.kunkun1023.xyz/#/market"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 md:row-span-1 group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-r from-slate-900 to-slate-800 border border-primary/20 hover:border-primary/60 transition-all duration-500 shadow-xl flex flex-col justify-center"
          >
            {/* Animated Scan Line Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan pointer-events-none"></div>
            
            <div className="relative z-10 flex items-start justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono mb-4 border border-primary/20">
                        <SparklesIcon className="w-3 h-3" />
                        AI POWERED
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{t('showcase.tool.stockmind')}</h3>
                    <p className="text-slate-400 text-sm max-w-sm">{t('showcase.tool.stockmind.desc')}</p>
                </div>
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-md group-hover:bg-primary group-hover:text-white transition-all">
                    <ExternalLinkIcon className="w-6 h-6 text-white" />
                </div>
            </div>
          </a>

          {/* OmniSales */}
          <a 
            href="https://omnisalesmeiha-i2coclrf.edgeone.run/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 md:row-span-1 group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-r from-slate-900 to-cyan-900/40 border border-secondary/20 hover:border-secondary/60 transition-all duration-500 shadow-xl flex flex-col justify-center"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             
             <div className="relative z-10 flex items-start justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-mono mb-4 border border-secondary/20">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"/><path d="M2 12h20"/></svg>
                        OPERATIONS
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{t('showcase.tool.omnisales')}</h3>
                    <p className="text-slate-400 text-sm max-w-sm">{t('showcase.tool.omnisales.desc')}</p>
                </div>
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-md group-hover:bg-secondary group-hover:text-white transition-all">
                    <ExternalLinkIcon className="w-6 h-6 text-white" />
                </div>
            </div>
          </a>

          {/* --- ROW 2 & 3: PASSION & HOBBIES (Pure Visuals) --- */}
          {/* Layout: 3 Gundam images on top, 2 Football images below */}
          
          {/* Common Image Styles: 
              grayscale -> color
              scale-100 -> scale-105 (subtle zoom)
              brightness-90 -> brightness-110 (pop effect)
              opacity-90 -> opacity-100
          */}

          {/* Gundam 1 (Vertical-ish) */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative group border border-transparent hover:border-textMain/10 transition-colors">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
             <div className="w-full h-full overflow-hidden border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500 box-border">
                <img 
                  src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzsdpLQABz2N3L6AHPr1mijWFNkHoBvUAAqgdAALV7GlVf_t_i-9d5LQ2BA.jpg" 
                  alt="Gundam" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 ease-out"
                />
             </div>
          </div>

          {/* Gundam 2 (Wide) */}
           <div className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden relative group border border-transparent hover:border-textMain/10 transition-colors">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
             <div className="w-full h-full overflow-hidden border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500 box-border">
                <img 
                  src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzsZpLQABz4R_wpD00B2acCZOFS5nlYQAAqcdAALV7GlVfFBctsSodvI2BA.jpg" 
                  alt="Gundam Red" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 ease-out"
                />
             </div>
          </div>

          {/* Gundam 3 (Vertical-ish) */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative group border border-transparent hover:border-textMain/10 transition-colors">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
             <div className="w-full h-full overflow-hidden border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500 box-border">
                <img 
                  src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzsVpLQABz1Ae05_m8lqHdrQAAVUJ5qp4AAKmHQAC1expVcqYwzWQOyoENgQ.jpg" 
                  alt="Gundam Black" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 ease-out object-top"
                />
             </div>
          </div>

          {/* Football 1 (Wide) */}
          <div className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden relative group border border-transparent hover:border-textMain/10 transition-colors">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
             <div className="w-full h-full overflow-hidden border-2 border-transparent group-hover:border-secondary/50 rounded-2xl transition-all duration-500 box-border">
                <img 
                  src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzshpLQABz57Jgihl1iLqe-gkZR9R3kwAAqkdAALV7GlVG7cYzSQ26xA2BA.jpg" 
                  alt="Football Team" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 ease-out object-top"
                />
             </div>
          </div>
          
           {/* Football 2 (Wide) */}
           <div className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden relative group border border-transparent hover:border-textMain/10 transition-colors">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
             <div className="w-full h-full overflow-hidden border-2 border-transparent group-hover:border-secondary/50 rounded-2xl transition-all duration-500 box-border">
                <img 
                  src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzslpLQAB0PeZw7hJoTL4GSWV36KiCBYAAqodAALV7GlVDxMc3hqlCTI2BA.jpg" 
                  alt="Football Match" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 ease-out"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Interests;