import { getRequestConfig } from 'next-intl/server';

const locales = ['pt', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale)
  
  if (!locale || !locales.includes(locale)) {
    throw new Error("Locale não definido ou não suportado");
  }
    const messages = {
        ...(await import(`../dictionaries/${locale}/messages.json`)).default,
        ...(await import(`../dictionaries/${locale}/experience.json`)).default,
        ...(await import(`../dictionaries/${locale}/education.json`)).default,
        ...(await import(`../dictionaries/${locale}/project.json`)).default
    };

    return {
        locale: locale!,
        messages
    };
});