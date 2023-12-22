import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import trans_en from "./langs/en.json";
import trans_ar from "./langs/ar.json";

const resources = {
  en: {
    translation: trans_en
  },
  ar: {
    translation: trans_ar
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
        useSuspSense: false
    }
  });

  export default i18n;