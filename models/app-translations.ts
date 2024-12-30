import { Translations } from "./translations";

export class AppTranslations {
  [key: string]: Translations;
  constructor(translations: Translations[]) {
    for (const item of translations) {
      this[item.title] = item;
    }
  }
  getTranslation(title: string): Translations {
    const res = this[title];
    if (res === undefined) console.log("key not found");
    return this[title];
  }
}
