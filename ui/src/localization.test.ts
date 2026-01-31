import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { detectLocale, setLocale, getLocale } from "./localization";

const STORAGE_KEY = "openclaw.control.settings.v1";

describe("detectLocale (pure function)", () => {
  it("returns zh-CN for zh-CN browser", () => {
    expect(detectLocale("zh-CN", undefined)).toBe("zh-CN");
  });

  it("returns zh-CN for zh browser", () => {
    expect(detectLocale("zh", undefined)).toBe("zh-CN");
  });

  it("returns zh-CN for zh-Hans browser", () => {
    expect(detectLocale("zh-Hans", undefined)).toBe("zh-CN");
  });

  it("returns zh-CN for zh-Hans-CN browser", () => {
    expect(detectLocale("zh-Hans-CN", undefined)).toBe("zh-CN");
  });

  it("returns en for en-US browser", () => {
    expect(detectLocale("en-US", undefined)).toBe("en");
  });

  it("returns en for en-GB browser", () => {
    expect(detectLocale("en-GB", undefined)).toBe("en");
  });

  it("returns en for unknown browser language", () => {
    expect(detectLocale("fr", undefined)).toBe("en");
    expect(detectLocale("de", undefined)).toBe("en");
    expect(detectLocale("ja", undefined)).toBe("en");
  });

  it("prioritizes saved locale over browser language", () => {
    expect(detectLocale("en", "zh-CN")).toBe("zh-CN");
    expect(detectLocale("zh-CN", "en")).toBe("en");
  });

  it("ignores invalid saved locale", () => {
    expect(detectLocale("zh-CN", "invalid")).toBe("zh-CN");
    expect(detectLocale("en", "fr")).toBe("en");
  });
});

describe("setLocale/getLocale", () => {
  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
  });

  afterEach(async () => {
    await setLocale("en", false);
    localStorage.removeItem(STORAGE_KEY);
  });

  it("switches locale and returns new value", async () => {
    await setLocale("zh-CN", false);
    expect(getLocale()).toBe("zh-CN");
  });

  it("persists locale to localStorage when persist=true", async () => {
    await setLocale("zh-CN", true);
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    expect(stored.locale).toBe("zh-CN");
  });

  it("does not persist locale when persist=false", async () => {
    await setLocale("zh-CN", false);
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    expect(stored.locale).toBeUndefined();
  });

  it("can switch back to source locale", async () => {
    await setLocale("zh-CN", false);
    expect(getLocale()).toBe("zh-CN");
    await setLocale("en", false);
    expect(getLocale()).toBe("en");
  });
});
