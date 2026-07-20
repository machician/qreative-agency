import "@/styles/globals.css";
import { DarkModeProvider } from '@/providers/DarkModeContext';
import { AppProps } from 'next/app';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'QA Labs',
  description: 'AI, Product Development, SAFE® Stack Audits, GTM Engineering, and Technical Solutions Consulting.',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;

