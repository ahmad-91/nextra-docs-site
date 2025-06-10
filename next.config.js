const nextra = require("nextra");

const withNextra = nextra({
  // No theme or themeConfig options needed for v4
  // staticImage, flexsearch, and defaultShowCopyCode are likely v2 options
  // and may not be directly applicable or may have different config in v4.
  // For now, we remove them as per the simple v4 example.
  // If specific v4 replacements are needed, that would be a separate step.
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "ar-SA"],
    defaultLocale: "ar-SA",
  },
  // The existing Next.js specific configs are preserved below
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 301,
      },
      {
        source: "/advanced/performance",
        destination: "/docs/advanced/performance",
        statusCode: 301,
      },
      {
        source: "/advanced/cache",
        destination: "/docs/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/docs/cache",
        destination: "/docs/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/docs/options",
        destination: "/docs/api",
        statusCode: 301,
      },
      {
        source: "/change-log",
        destination: "/docs/change-log",
        statusCode: 301,
      },
      {
        source: "/blog/swr-1",
        destination: "/blog/swr-v1",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 302,
      },
      {
        source: "/examples",
        destination: "/examples/basic",
        statusCode: 302,
      },
    ];
  },
  reactStrictMode: true,
});
