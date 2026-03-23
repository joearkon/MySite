import React from 'react';
import { useApp } from '../App';
import { MessageCircle, Phone, Mail, MapPin, Music2, Book } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer id="contact" className="py-12 text-center border-t border-textMain/10 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-textMain">{t('footer.title')}</h2>
        <p className="text-textMuted mb-10 max-w-lg mx-auto leading-relaxed">
          {t('footer.desc')}
        </p>

        {/* Direct Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12 font-mono text-sm text-textMuted">
            <a href="tel:13524252203" className="hover:text-primary transition-colors flex items-center gap-3 px-4 py-2 rounded-full border border-textMain/5 hover:bg-surface shadow-sm transition-all">
               <div className="flex items-center gap-1.5 text-textMain/70">
                 <MessageCircle className="w-3.5 h-3.5" />
                 <span className="opacity-30">/</span>
                 <Phone className="w-3.5 h-3.5" />
               </div>
               <span className="font-semibold text-textMain/90">{t('footer.wechat_phone')}</span>
               <span className="opacity-60">13524252203</span>
            </a>

            <a href="https://v.douyin.com/9rcj4rkPCEg/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-full border border-textMain/5 hover:bg-surface shadow-sm transition-all">
               <Music2 className="w-3.5 h-3.5 text-textMain/70" />
               <span className="font-semibold text-textMain/90">{t('footer.douyin')}</span>
               <span className="opacity-60">6888zy1023</span>
            </a>

            <a href="https://www.xiaohongshu.com/user/profile/5c0213aa6b58b724ed0a49ce" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors flex items-center gap-2 px-4 py-2 rounded-full border border-textMain/5 hover:bg-surface shadow-sm transition-all">
               <Book className="w-3.5 h-3.5 text-textMain/70" />
               <span className="font-semibold text-textMain/90">{t('footer.xiaohongshu')}</span>
               <span className="opacity-60">566860318</span>
            </a>

             <a href="mailto:313455055@qq.com" className="hover:text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-full border border-textMain/5 hover:bg-surface shadow-sm transition-all">
               <Mail className="w-3.5 h-3.5 text-textMain/70" />
               <span className="opacity-60">313455055@qq.com</span>
            </a>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-textMain/5 bg-surface/50 shadow-sm">
               <MapPin className="w-3.5 h-3.5 text-textMain/70" />
               <span className="opacity-60">{t('footer.location')}</span>
            </span>
        </div>

        {/* Life Easter Egg */}
        <div className="mb-8 p-6 bg-surface/40 rounded-2xl border border-primary/5 backdrop-blur-md max-w-2xl mx-auto shadow-sm relative overflow-hidden group hover:bg-surface/60 transition-colors">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
             <p className="text-sm text-textMain/90 font-bold leading-relaxed tracking-wide">
                {t('footer.easterEgg.pets')}
             </p>
             <p className="text-xs text-textMuted mt-2 font-medium">
                {t('footer.easterEgg.lifestyle')}
             </p>
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-2 text-xs text-textMuted">
          <span>&copy; {new Date().getFullYear()} {t('footer.copyright')}</span>
          <span className="opacity-50 hover:opacity-100 transition-opacity cursor-default">{t('footer.icp')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;