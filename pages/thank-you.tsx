// pages/thank-you.tsx

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function ThankYou() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [gifBackgroundUrl, setGifBackgroundUrl] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (isDarkMode) {
      setGifBackgroundUrl('/dark-clouds.gif');
    } else {
      setGifBackgroundUrl('/cotton-candy-clouds.gif');
    }
  }, [isDarkMode, isMounted]);

  const backgroundStyle = isMounted ? { 
    backgroundImage: `url(${gifBackgroundUrl})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    zIndex: '-1' 
  } : {};

  if (!isMounted) {
    return (
      <main className={`flex min-h-screen flex-col p-24 ${inter.className} bg-white`}>
        <div className="animate-pulse">Loading...</div>
      </main>
    );
  }

  return (
    <main
      className={`flex min-h-screen flex-col p-4 sm:p-10 lg:p-20 ${inter.className} ${isDarkMode ? 'dark:bg-white' : 'bg-white'}`}
      style={backgroundStyle}
    >
      <NavBar isDarkMode={isDarkMode} onDarkModeToggle={() => setIsDarkMode(!isDarkMode)} />
      
      <div className="flex-grow flex items-center justify-center w-full max-w-4xl mx-auto mt-6">
        <div className={`bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-white/20 dark:border-white/10 text-center max-w-2xl w-full ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-orange-400/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">Message Sent!</h1>
          <p className="text-lg font-mono mb-8 opacity-80">
            Thank you for reaching out to QA Labs. We have received your message and our team will get back to you within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-bold font-mono py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Return Home
            </Link>
            <Link 
              href="/our-services"
              className="inline-block bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold font-mono py-3 px-8 rounded-full transition-colors"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
            <p className="text-xs font-mono opacity-60">
              In the meantime, feel free to browse our latest projects or read about the SAFE Stack.
            </p>
          </div>

        </div>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}