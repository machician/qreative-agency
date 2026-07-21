// pages/_app.tsx
// @ts-ignore: allow importing global CSS without type declarations in this file
import "../styles/globals.css";
import { DarkModeProvider } from '../providers/DarkModeContext';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Head>
        {/* Global Title & Description */}
        <title>QA Labs</title>
        <meta name="description" content="We build, verify, and launch accountable, auditable, and sustainable products. A subsidiary of The Polymath Company." />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;

