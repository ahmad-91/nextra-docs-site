import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SkipNavLink } from "nextra-theme-docs";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, locale: ctx.locale || 'en-US' } // Provide a default locale
  }

  render() {
    return (
      <Html lang={this.props.locale} > {/* Use the locale from props */}
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
