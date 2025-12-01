import React, { useState, useEffect, createContext, useContext } from 'react';
import Hero from './components/Hero';
import Interests from './components/Interests'; // This now serves as the unified Showcase
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import MouseGlow from './components/MouseGlow';
import { SunIcon, MoonIcon, TranslateIcon } from './components/Icons';
import { AppContextType, Language, Theme } from './types';
import { translations } from './translations';

// Create Context
export const AppContext = createContext<AppContextType>({
  language: 'zh',
  setLanguage: () => {},
  theme: 'dark',
  toggleTheme: () => {},
  t: (key) => key,
});

export const useApp = () => useContext(AppContext);

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese

  // Initialize theme on mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      <main className="min-h-screen relative overflow-hidden transition-colors duration-500 bg-background text-textMain">
        {/* Interactive Elements */}
        <ScrollProgress />
        <MouseGlow />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-surface">
          <div className="font-bold text-xl tracking-tighter hover:text-primary transition-colors cursor-default text-textMain">
            JOE<span className="text-primary">.CHEN</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-medium text-textMuted">
              <a href="#" className="hover:text-primary transition-colors">{t('nav.home')}</a>
              <a href="#showcase" className="hover:text-primary transition-colors">{t('nav.showcase')}</a>
              <a href="https://myresume-mshptvae.edgeone.run/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{t('nav.resume')}</a>
            </div>

            <div className="flex items-center gap-2 pl-4 border-l border-surface">
              {/* Language Toggle */}
              <button 
                onClick={() => setLanguage(l => l === 'en' ? 'zh' : 'en')}
                className="p-2 rounded-full hover:bg-surface text-textMain transition-colors flex items-center gap-1 text-xs font-bold"
                aria-label="Toggle Language"
              >
                <TranslateIcon className="w-4 h-4" />
                {language === 'en' ? 'CN' : 'EN'}
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-surface text-textMain transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        <Hero />
        <Interests />
        <Footer />
        
        {/* Floating Actions */}
        <BackToTop />
        <ChatBot />
      </main>
    </AppContext.Provider>
  );
};

export default App;