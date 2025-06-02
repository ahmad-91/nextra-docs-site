/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "ar-SA"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "ar-SA": "العربية"
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "React Hooks for Data Fetching",
  "ar-SA": "مكتبة React Hooks لجلب البيانات"
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    lightweight: "Lightweight",
    realtime: "Realtime",
    suspense: "Suspense",
    pagination: "Pagination",
    backendAgnostic: "Backend Agnostic",
    renderingStrategies: "SSR / SSG Ready",
    typescript: "TypeScript Ready",
    remoteLocal: "Remote + Local"
  },
  "ar-SA": {
    lightweight: "خفيف الوزن",
    realtime: "في الوقت الحقيقي",
    suspense: "تعليق",
    pagination: "ترقيم الصفحات",
    backendAgnostic: "مستقل عن الخادم",
    renderingStrategies: "جاهز لـ SSR / SSG",
    typescript: "جاهز لـ TypeScript",
    remoteLocal: "بعيد + محلي"
  }
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US": "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.",
  "ar-SA": "SWR هي مكتبة React Hooks لجلب البيانات. تقوم SWR أولاً بإرجاع البيانات من التخزين المؤقت (stale)، ثم ترسل طلب الجلب (revalidate)، وأخيراً تعود بالبيانات المحدثة مرة أخرى."
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "ar-SA": "سؤال؟ أعطنا ملاحظاتك ←"
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "ar-SA": "تعديل هذه الصفحة على GitHub ←"
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "swr", text: "Powered by" },
  "ar-SA": { utmSource: "swr_ar-sa", text: "مدعوم بواسطة" }
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "ar-SA": "في هذه الصفحة"
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "ar-SA": "البحث في الوثائق..."
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en-US": "Last updated on",
  "ar-SA": "آخر تحديث في"
};
