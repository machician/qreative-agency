// @ts-ignore: allow importing global CSS without type declarations in this file
import "../styles/globals.css";
import { DarkModeProvider } from '../providers/DarkModeContext';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;

