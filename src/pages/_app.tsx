import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next - Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, NextJS and Styled Components"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
