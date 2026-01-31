// ui/src/localization.ts
// Localization infrastructure for OpenClaw Web UI

import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "./generated/locale-codes";
import { loadSettings, saveSettings } from "./ui/storage";

// Static locale module mapping
const localeModules: Record<string, () => Promise<{ templates: unknown }>> = {
  "zh-CN": () => import("./generated/locales/zh-CN"),
};

// Configure localization
export const { getLocale, setLocale: _setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: async (locale: string) => {
    const loader = localeModules[locale];
    if (!loader) {
      throw new Error(`Unknown locale: ${locale}`);
    }
    return loader();
  },
});

/**
 * Set locale with optional persistence.
 * @param locale - The locale to set (e.g., "en", "zh-CN")
 * @param persist - Whether to save to localStorage (default: true)
 */
export async function setLocale(locale: string, persist = true) {
  await _setLocale(locale);
  if (persist) {
    const settings = loadSettings();
    settings.locale = locale;
    saveSettings(settings);
  }
}

/**
 * Detect locale based on saved preference or browser language.
 * Pure function for testability.
 * @param navigatorLanguage - The browser's navigator.language value
 * @param savedLocale - The locale saved in UiSettings (if any)
 * @returns The detected locale ("en" or "zh-CN")
 */
export function detectLocale(navigatorLanguage: string, savedLocale?: string): string {
  // Rule 2: User has selected, prioritize their choice
  if (savedLocale && (savedLocale === "en" || savedLocale === "zh-CN")) {
    return savedLocale;
  }
  // Rule 3: Unknown value, ignore (fall through to Rule 1)
  // Rule 1: Detect from browser language
  const lang = navigatorLanguage.toLowerCase();
  if (lang.startsWith("zh")) {
    return "zh-CN";
  }
  return "en";
}

/**
 * Initialize locale on app startup.
 * Should be called before rendering the app.
 */
export async function initLocale() {
  const settings = loadSettings();
  const locale = detectLocale(navigator.language, settings.locale);
  if (locale !== sourceLocale) {
    await _setLocale(locale); // Don't persist auto-detected result
  }
}
