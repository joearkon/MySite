import React from 'react';
import { useApp } from '../App';

const Interests: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="interests" className="py-24 px-6 relative">
       {/* Background accent */}
       <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-textMain">{t('interests.title')}</h2>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Gundam - Large item */}
          <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden border border-textMain/10 bg-surface shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800" 
              alt="Gundam Model" 
              className="w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-1">{t('interests.gundam')}</h3>
              <p className="text-slate-200 text-sm">{t('interests.gundam.desc')}</p>
            </div>
          </div>

          {/* Football - Wide item */}
          <div className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden border border-textMain/10 bg-surface shadow-sm min-h-[200px]">
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800" 
              alt="Football" 
              className="w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
            />
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white">{t('interests.football')}</h3>
              <p className="text-slate-200 text-xs">{t('interests.football.desc')}</p>
            </div>
          </div>

          {/* Movies - Square item */}
          <div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden border border-textMain/10 bg-surface shadow-sm min-h-[200px]">
            <img 
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600" 
              alt="Movies" 
              className="w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
            />
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-lg font-bold text-white">{t('interests.movies')}</h3>
            </div>
          </div>

          {/* Short Video - Square item */}
          <div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden border border-textMain/10 bg-surface shadow-sm min-h-[200px]">
             <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&q=80&w=600" 
              alt="Video Creation" 
              className="w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
            />
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-lg font-bold text-white">{t('interests.video')}</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Interests;
