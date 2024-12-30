export type LanguageType = "EN" | "IT" | "DE" | "ES";
export type OptionalLanguageType = "Latin";

export class Translations {
  [lang: LanguageType]: string;
  optLang: OptionalLanguageType;
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  assignValue(key: LanguageType | OptionalLanguageType, value?: string): void {
    value ? (this[key] = value) : (this[key] = "");
  }
}
