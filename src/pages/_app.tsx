import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '@styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
