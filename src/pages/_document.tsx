import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <meta name="author" content="Felipe Pereira de Souza Silva" />
          <meta name="theme-color" content="#121212" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
