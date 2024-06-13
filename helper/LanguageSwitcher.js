import React from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSwitcher = () => {
 
  const {t} = useTranslation();

  return (
    <div className="language-switcher">
      <select id="language-select" onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">{t('en')}</option>
        <option value="km">{t('kh')}</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
