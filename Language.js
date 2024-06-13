import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "en":"EN",
      "kh":"KH",
      "welcome": "Welcome to Tech Center",
      "home":"Home",
      "laptop":"Laptop",
      "monitor":"Monitor",
      "pc":"PersonalComputer",
      "brand":"Brand",
      "contact":"Contact",
      "aboutUs":"AboutUs",
      "macbook":"MacBook",
      "asus":"Asus",
      "dell":"Dell",
      "msi":"MSI",
      "acessaries":"Accessaries",

      
      
    }
  },
  km: {
    translation: {
      "en":"អង់គ្លេស",
      "kh":"ខ្មែរ",
      "welcome": "សូមស្វាគមន៍មកកាន់ Tech Center",
      "home":"ទំព័រដើម",
      "laptop":"កុំព្យូរទ័រយួរដៃ",
      "monitor":"ម៉ូនីទ័រ",
      "pc":"កុំព្យូទ័រ​ផ្ទាល់ខ្លួន",
      "brand":"យីហោ",
      "contact":"ទំនាក់ទំនង",
      "aboutUs":"អំពី​ពួក​យើង",
      "macbook":"MacBook",
      "asus":"Asus",
      "dell":"Dell",
      "msi":"MSI",
      "acessaries":"Accessaries",

      
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
