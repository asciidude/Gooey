import Document, { Html, Head, Main, NextScript } from 'next/document'

import Header from '../components/header'
import Footer from '../components/footer'


import seo from '../public/seo.json'
import utils from '../public/utils.json'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href={seo.image} />
          <script src="https://kit.fontawesome.com/26218dd560.js" crossOrigin="anonymous"></script>

          {/* Meta tags for SEO and social sharing */}
          <link rel="canonical" href={seo.url} />
          <meta name="description" content={seo.description} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:type" content="app" />
          <meta property="og:url" content={seo.url} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta name="twitter:card" content="summary" />

          <script src={utils.popper} integrity={utils.popperInter} crossOrigin="anonymous"></script>
          <script src={utils.bootstrapJs} integrity={utils.bootstrapJsInter} crossOrigin="anonymous"></script>
          <link href={utils.bootstrapCss} rel="stylesheet" integrity={utils.bootstrapCssInter} crossOrigin="anonymous" />

        </Head>
        <title>{seo.title}</title>
        <body>
            <div className="content" role="main">
                <div className="center">
                    <Header />
                    <Main />
                    <NextScript />
                    <Footer />
                </div>
            </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument