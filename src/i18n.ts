import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
    .use(HttpApi) // load translations via http
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass i18n instance to react-i18next
    .init({
        fallbackLng: "en", // fallback language
        debug: false, // set true to debug

        interpolation: {
            escapeValue: false, // React already escapes by default
        },

        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json", // path to translation files
        },

        react: {
            useSuspense: false, // true by default - set false if you want to disable suspense
        },
    });

export default i18n;
