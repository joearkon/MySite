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

        <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:joe.chen@example.com" className="text-lg font-mono text-secondary hover:text-primary transition-colors">
            joe.chen@example.com
            </a>
        </div>
        
        <div className="mt-8 text-xs text-textMuted">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;