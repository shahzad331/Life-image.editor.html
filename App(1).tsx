import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Editor from './components/Editor';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import { Page } from './types';
import { translations } from './translations';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Editor);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  
  const t = translations[language];
  const direction = language === 'ur' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleToggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en');
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Editor:
        return <Editor t={t} />;
      case Page.About:
        return <AboutUs t={t} />;
      case Page.Contact:
        return <ContactUs t={t} />;
      case Page.Privacy:
        return <PrivacyPolicy t={t} />;
      default:
        return <Editor t={t} />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col" dir={direction}>
      <Header
        onNavigate={handleNavigate}
        currentLanguage={language}
        onToggleLanguage={handleToggleLanguage}
        t={t}
        currentPage={currentPage}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} t={t} />
    </div>
  );
}

export default App;
