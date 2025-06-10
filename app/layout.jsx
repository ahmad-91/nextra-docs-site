import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import 'nextra-theme-docs/style.css';
import '../styles.css'; // Global styles

export const metadata = {
  title: { default: 'SWR', template: '%s – SWR' },
  // TODO: Add more metadata from the original project (e.g., description, openGraph from theme.config.js head)
};

// Placeholder theme configurations - these will be properly migrated in a later step
const bannerEnabled = false; // Example: disable banner for now
const FBMessages = { editPage: "Edit this page on GitHub →", feedback: "Question? Give us feedback →" } // Example

export default async function RootLayout({ children }) {
  // Default to LTR for now. I18n will be handled by app/[lang]/layout.jsx later.
  const lang = 'en-US';
  const dir = 'ltr';

  // These are simplified placeholders. Proper migration of theme.config.js options is a dedicated step.
  const SWRLogo = () => <svg height="12"> {/* Placeholder for actual Logo component */}</svg>;
  const navbarProps = {
    logo: <><SWRLogo /> <span style={{ marginLeft: '.5rem', fontWeight: 'bold' }}>SWR</span></>,
    projectLink: "https://github.com/vercel/swr",
    // i18n: [{ locale: 'en-US', name: 'English' }, { locale: 'ar-SA', name: 'العربية' }], // Example, will come from config
    // TODO: Migrate other navbar items from theme.config.js if any (e.g., chat link)
  };
  const footerProps = {
    children: <>MIT {new Date().getFullYear()} © Vercel. (Powered by Vercel)</>, // Placeholder
    // TODO: Migrate footer text/component from theme.config.js
  };
  const layoutProps = {
    banner: bannerEnabled ? <Banner storageKey="swr-banner-key">Nextra 4 is here! (Placeholder)</Banner> : null,
    navbar: <Navbar {...navbarProps} />,
    footer: <Footer {...footerProps} />,
    docsRepositoryBase: "https://github.com/vercel/swr-site/blob/main",
    editLink: FBMessages.editPage,
    feedback: { content: FBMessages.feedback, labels: "feedback" }, // feedback.labels is a new requirement
    // pageMap: await getPageMap(lang), // PageMap might be needed, depends on i18n setup
    sidebar: { defaultMenuCollapseLevel: 1, autoCollapse: true }, // Example, from old theme.config.js
    toc: { title: "On This Page", float: true, backToTop: "Scroll to top" } // Example, from old theme.config.js & new defaults
    // TODO: Migrate all other applicable options from theme.config.js to these components
  };

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <Head />
      <body>
        <Layout {...layoutProps}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
