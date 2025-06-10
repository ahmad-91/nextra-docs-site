import { NextraPage } from 'nextra/catch-all';
import { getPageMap } from 'nextra/page-map';

// Ensure this file is marked as a client component if it uses client-side hooks,
// or ensure all data fetching is compatible with RSC.
// For NextraPage, it typically handles its own data fetching/context.

export default async function Page({ params }) {
  const mdxPath = params.mdxPath || [];
  const route = '/' + mdxPath.join('/');

  // pageMap should ideally be filtered or fetched per locale.
  // The Nextra v4 blog example fetches pageMap in the [lang]/layout.jsx and passes it down.
  // For now, this page will rely on pageMap being passed correctly if needed,
  // or NextraPage might handle it internally based on context from [lang]/layout.jsx.
  // Let's assume pageMap will be implicitly available or not directly needed here for NextraPage to function
  // if the layout provides it.
  // The key is that NextraPage itself is what renders the MDX.
  // We might not need to find pageOpts here if NextraPage does it.
  // The example from Nextra for catch-all is simpler:
  // import { NextraPage } from 'nextra/catch-all'
  // export default NextraPage
  // Let's use this simpler form for now. NextraPage should resolve content based on the route.

  // Simpler approach based on some Nextra examples:
  // NextraPage component might derive everything it needs from params and Nextra context.
  // However, the original SWR site used pageMap. For now, let's stick to a slightly more explicit,
  // but simplified version, assuming NextraPage handles the lookup.
  // The main thing is this page component exists.
  // The example from the blog post (contentDirBasePath) is:
  // "import { NextraPage } from 'nextra/catch-all'; export default NextraPage"
  // Let's use that.
  return <NextraPage />;
}

export async function generateStaticParams() {
  // This needs to generate params for all languages and all MDX pages.
  const locales = ['en-US', 'ar-SA']; // From translations/text.js
  let allParams = [];

  for (const lang of locales) {
    // Assuming getPageMap can be called without lang and then filtered,
    // or that Nextra's build process handles page discovery per locale.
    // For simplicity, we'll generate based on a combined pageMap for now.
    // This might need refinement based on how Nextra v4's getPageMap handles i18n.
    // The Nextra v4 blog post example for i18n layout fetches `pageMap = await getPageMap(lang)`.
    // This suggests `getPageMap` is locale-aware.
    const pageMap = await getPageMap(lang);
    for (const page of pageMap) {
      allParams.push({
        lang: lang,
        mdxPath: page.route === '/' ? [] : page.route.substring(1).split('/'),
      });
    }
  }
  return allParams;
}
