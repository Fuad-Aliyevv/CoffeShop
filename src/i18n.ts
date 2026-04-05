import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "az",
    supportedLngs: ["az", "en", "ru"],

    backend: {
      loadPath: "/locales/{{lng}}.json",
    },

    detection: {
      order: ["localStorage", "navigator", "queryString"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    debug: true,
  });

export default i18n;