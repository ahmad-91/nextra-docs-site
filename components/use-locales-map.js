import { useRouter } from "next/router";

/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "ar-SA"} Locale
 * @typedef {{locale?: Locale | undefined; locales?: Locale[] | undefined; defaultLocale?: DefaultLocale | undefined}} TypedRouter
 * @typedef {Omit<import('next/router').NextRouter, "locale" | "locales" | "defaultLocale"> & TypedRouter} NextRouter
 * @template T
 * @type {(localesMap: Record<Locale, T>) => T}
 */
export default function useLocalesMap(localesMap) {
  /** @type {NextRouter} */
  const router = useRouter();
  const { locale, defaultLocale } = router;
  if (!localesMap) {
    throw new Error("Pass a locales map as argument to useLocalesMap");
  }
  if (!isObject(localesMap)) {
    throw new Error("Pass an object as argument to useLocalesMap");
  }
  return localesMap[locale] || localesMap[defaultLocale];
}

/**
 * Simple object check.
 * @param {any} item
 * @returns {boolean}
 */
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @template T
 * @param {Record<string, T>} target
 * @param {Record<string, T>} sources
 * @returns {Record<string, T>}
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
