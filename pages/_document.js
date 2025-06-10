import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SkipNavLink } from "nextra-theme-docs";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const locale = ctx.locale || 'en-US';
    const dir = locale === 'ar-SA' ? 'rtl' : 'ltr';
    return { ...initialProps, locale, dir };
  }

  render() {
    return (
      <Html lang={this.props.locale} dir={this.props.dir}> {/* Use the locale and dir from props */}
        <Head />
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
