import React from 'react';
import { useApp } from '../App';
import { ExternalLinkIcon, SparklesIcon } from './Icons';

const Interests: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="showcase" className="py-24 px-4 md:px-8 relative bg-surface/30">
       {/* Background accent */}
       <div className="absolute left-0 top-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-textMain tracking-tight">
                {t('showcase.title')}
            </h2>
            <p className="text-textMuted max-w-2xl mx-auto text-lg">
                {t('showcase.subtitle')}
            </p>
        </div>
        
        {/* Bento Grid Layout - Mixed Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-6">
          
          {/* Item 1: Smart Price (Tool) - 1x1 */}
          <a 
            href="https://smart-price-v1-0ipm8ajj.edgeone.run/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-textMain/5 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 p-2 bg-surface/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLinkIcon className="w-4 h-4 text-primary" />
            </div>
            <div className="p-3 bg-primary/10 w-fit rounded-xl mb-4">
                <SparklesIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">{t('showcase.tool.smartprice')}</h3>
                <p className="text-sm text-textMuted leading-relaxed">{t('showcase.tool.smartprice.desc')}</p>
            </div>
          </a>

          {/* Item 2: Gundam White (Image) - 2x2 (Big Feature) */}
          <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
            <img 
              src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzsdpLQABz2N3L6AHPr1mijWFNkHoBvUAAqgdAALV7GlVf_t_i-9d5LQ2BA.jpg" 
              alt="White Gundam" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white uppercase bg-primary/80 backdrop-blur-sm rounded-full">
                {t('showcase.hobby.gundam')}
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">{t('showcase.hobby.gundam.white')}</h3>
              <p className="text-white/80">{t('showcase.hobby.gundam.desc')}</p>
            </div>
          </div>

          {/* Item 3: OmniSales (Tool) - 1x1 */}
          <a 
            href="https://omnisalesmeiha-i2coclrf.edgeone.run/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-textMain/5 hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 p-2 bg-surface/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLinkIcon className="w-4 h-4 text-secondary" />
            </div>
            <div className="p-3 bg-secondary/10 w-fit rounded-xl mb-4">
                <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
            <div>
                <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-secondary transition-colors">{t('showcase.tool.omnisales')}</h3>
                <p className="text-sm text-textMuted leading-relaxed">{t('showcase.tool.omnisales.desc')}</p>
            </div>
          </a>

          {/* Item 4: Football Banner (Image) - 2x1 (Wide) */}
          <div className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden shadow-md border border-textMain/10">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
             <img 
              src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzslpLQAB0PeZw7hJoTL4GSWV36KiCBYAAqodAALV7GlVDxMc3hqlCTI2BA.jpg" 
              alt="Football Team Banner" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white">{t('showcase.hobby.football.match')}</h3>
                <p className="text-white/70 text-sm">{t('showcase.hobby.football.desc')}</p>
            </div>
          </div>

          {/* Item 5: Resume (Link) - 1x1 */}
          <a 
            href="https://myresume-mshptvae.edgeone.run/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl overflow-hidden p-6 bg-surface border-2 border-dashed border-textMain/20 hover:border-textMain/50 transition-all duration-300 flex flex-col justify-center items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-textMain/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-textMain" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
            </div>
            <h3 className="text-lg font-bold text-textMain">{t('showcase.tool.resume')}</h3>
            <span className="text-xs text-textMuted mt-2 group-hover:underline">{t('hero.btn.resume')} &rarr;</span>
          </a>

           {/* Item 6: Gundam Red (Image) - 1x2 (Tall) */}
           <div className="md:col-span-1 md:row-span-2 group relative rounded-3xl overflow-hidden shadow-md border border-textMain/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzsZpLQABz4R_wpD00B2acCZOFS5nlYQAAqcdAALV7GlVfFBctsSodvI2BA.jpg" 
              alt="Red Gundam" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white">{t('showcase.hobby.gundam.red')}</h3>
            </div>
          </div>

           {/* Item 7: Football Small (Image) - 1x1 */}
           <div className="group relative rounded-3xl overflow-hidden shadow-sm border border-textMain/10">
            <img 
              src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzshpLQABz57Jgihl1iLqe-gkZR9R3kwAAqkdAALV7GlVG7cYzSQ26xA2BA.jpg" 
              alt="Football Team Small" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold">{t('showcase.hobby.football.team')}</span>
            </div>
          </div>

          {/* Item 8: Gundam Black (Image) - 2x1 */}
           <div className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden shadow-sm border border-textMain/10">
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
             <img 
              src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzsVpLQABz1Ae05_m8lqHdrQAAVUJ5qp4AAKmHQAC1expVcqYwzWQOyoENgQ.jpg" 
              alt="Black Gundam" 
              className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20">
                 <h3 className="text-lg font-bold text-white">{t('showcase.hobby.gundam.black')}</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Interests;