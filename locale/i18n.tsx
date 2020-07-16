import * as Localization from "expo-localization";
import i18n from "i18n-js";

import en from "./lang/en";
import zh from "./lang/zh";

i18n.fallbacks = true;
i18n.translations = { en, zh };
if (["en", "zh"].indexOf(Localization.locale) == -1) {
  i18n.locale = "en";
} else {
  i18n.locale = Localization.locale;
}
export { i18n as default };
