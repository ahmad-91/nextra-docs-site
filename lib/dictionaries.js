import 'server-only';

const dictionaries = {
  'en-US': () => import('../dictionaries/en-US.json').then((module) => module.default),
  'ar-SA': () => import('../dictionaries/ar-SA.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  const loadLocale = dictionaries[locale] ? locale : 'en-US'; // Fallback to en-US
  return dictionaries[loadLocale]();
};

export const getDirection = (locale) => {
  switch (locale) {
    case 'ar-SA':
      return 'rtl';
    default:
      return 'ltr';
  }
};
