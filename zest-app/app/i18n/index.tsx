import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationEn from "./locales/en/translations.json";
import translationEs from "./locales/es/translations.json";
import { getLocales } from "expo-localization";

const resources = {
  "es": { translation: translationEs },
  "en": { translation: translationEn },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    savedLanguage = getLocales()[0].languageCode;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: savedLanguage,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;