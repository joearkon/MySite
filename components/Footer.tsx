import React from 'react';
import { useApp } from '../App';

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer id="contact" className="py-12 text-center border-t border-textMain/10 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-textMain">{t('footer.title')}</h2>
        <p className="text-textMuted mb-10 max-w-lg mx-auto leading-relaxed">
          {t('footer.desc')}
        </p>

        {/* Social / Contact QR Codes */}
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          {/* WeChat */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-2 bg-white rounded-xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <img src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzqdpLP22qe6aGVi56zotZtx86D9ZBwAChh0AAtXsaVVQO2zEpHk-GzYE.png" alt="WeChat QR" className="w-32 h-32 object-contain" />
            </div>
            <span className="text-sm font-medium text-textMuted group-hover:text-primary transition-colors">{t('footer.wechat')}</span>
          </div>

          {/* Douyin */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-2 bg-white rounded-xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <img src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAELzqhpLP23gelV-fXV3BnEtYkkbd2eyAAChx0AAtXsaVVnGPO4jTis0jYE.png" alt="Douyin QR" className="w-32 h-32 object-contain" />
            </div>
            <span className="text-sm font-medium text-textMuted group-hover:text-secondary transition-colors">{t('footer.douyin')}</span>
          </div>
        </div>

        {/* Direct Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12 font-mono text-sm text-textMuted">
            <a href="tel:13524252203" className="hover:text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-full border border-textMain/5 hover:bg-surface">
               📱 13524252203
            </a>
             <a href="mailto:313455055@qq.com" className="hover:text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-full border border-textMain/5 hover:bg-surface">
               📧 313455055@qq.com
            </a>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-textMain/5 bg-surface/50">
               📍 {t('footer.location')}
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