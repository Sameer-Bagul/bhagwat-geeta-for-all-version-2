import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultLanguage: PropTypes.string
};
