import { Footer, Layout, Navbar, LastUpdated } from 'nextra-theme-docs';
import { Banner, Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { getDictionary, getDirection } from '../../lib/dictionaries';
import 'nextra-theme-docs/style.css';
import '../../styles.css';
import Logo from '../../components/logo'; // Adjust path as needed
import Vercel from '../../components/vercel'; // Adjust path as needed

// Placeholder for actual metadata generation logic
export async function generateMetadata({ params }) {
  const dictionary = await getDictionary(params.lang);
  return {
    title: { default: 'SWR', template: `%s – ${dictionary.titleSuffix}` },
    description: dictionary.headDescription,
    // TODO: Add other metadata: openGraph, favicons from original head()
  };
}

export default async function LangLayout({ children, params }) {
  const lang = params.lang;
  const dictionary = await getDictionary(lang);
  const direction = getDirection(lang);
  const pageMap = await getPageMap(lang);

  const SWRLogoWithTitle = () => (
    <>
      <Logo height={12} />
      <span className="mx-2 font-extrabold hidden md:inline select-none" title={dictionary.logoTitle}>
        SWR
      </span>
    </>
  );

  const navbarProps = {
    logo: <SWRLogoWithTitle />,
    projectLink: "https://github.com/vercel/swr",
    i18n: [ // From original theme.config.js i18n + languageMap
      { locale: 'en-US', name: 'English' },
      { locale: 'ar-SA', name: 'العربية' }
    ],
    // TODO: Add search related props after Search component is finalized
  };

  const footerContent = () => (
    <a
      href={`https://vercel.com/?utm_source=${lang === 'ar-SA' ? 'swr_ar-sa' : 'swr'}`}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center no-underline text-current font-semibold"
    >
      <span className="mr-2">{dictionary.vercelPoweredByText}</span>
      <span><Vercel /></span>
    </a>
  );

  const layoutProps = {
    navbar: <Navbar {...navbarProps} search={<Search placeholder={dictionary.searchPlaceholder} />} />,
    footer: <Footer>{footerContent()}</Footer>,
    docsRepositoryBase: "https://github.com/vercel/swr-site/blob/main",
    editLink: dictionary.editText,
    feedback: { content: dictionary.feedbackLink, labels: "feedback" },
    pageMap: pageMap,
    sidebar: { defaultMenuCollapseLevel: 1, autoCollapse: true }, // From old theme.config.js
    toc: { title: dictionary.tableOfContentsTitle, float: true, backToTop: "Scroll to top" }, // Toc options
    lastUpdated: <LastUpdated>{dictionary.gitTimestamp}</LastUpdated> // Git timestamp
    // TODO: banner prop if needed
    // TODO: nextThemes prop for dark mode theme switching
  };

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <Head>
        {/* Add favicons and other static head elements from original theme.config.js's head function */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </Head>
      <body>
        <Layout {...layoutProps}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
