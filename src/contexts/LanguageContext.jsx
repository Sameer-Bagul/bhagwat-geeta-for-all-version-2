import { createContext, useState } from 'react';

// Create Context for Language
export const LanguageContext = createContext();

export const LanguageProvider = ({ children, defaultLanguage = 'hindi' }) => {
  const [language, setLanguage] = useState(defaultLanguage); // use defaultLanguage prop

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
