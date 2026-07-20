// pages/our-services.tsx

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ServicesTable from "@/components/ServicesTable";
import Link from "next/link";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [gifBackgroundUrl, setGifBackgroundUrl] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

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
    
        <div className="flex flex-wrap justify-center w-full max-w-7xl mx-auto gap-8 mt-6">
            {/* Services Table on the left - Kept as is */}
            <div className="w-full lg:w-3/5">
              <ServicesTable isDarkMode={isDarkMode} />
            </div>
            
            {/* New Services Details on the right */}
            <div className={`max-w-xl w-full lg:w-2/6 py-4 lg:py-8 text-gray-800 dark:text-white ${isDarkMode ? "text-white" : ""}`}>
              <h1 className="text-4xl font-bold mb-2">New Services</h1>
              <p className="text-sm opacity-70 mb-6 font-mono">Build. Verify. Launch.</p>
              
              <p className="text-md mb-8 font-mono">
                Our three core offerings are designed to take your AI product from idea to market—with accountability, auditability, and sustainability built in at every step.
              </p>

              {/* Service 1 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-2">1. AI Product Development</h2>
                <p className="text-sm font-mono mb-4">We build SAFE-compliant AI prototypes and MVPs—from concept to production.</p>
                <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10 dark:border-white/5 text-sm font-mono space-y-1">
                  <p><span className="font-bold">What You Get:</span> SAFE-compliant architecture, working MVP/Prototype, GitHub repo with CI/CD, deployment artifacts.</p>
                  <p><span className="font-bold">Starts at:</span> $25,000 (2-week sprint)</p>
                  <p><span className="font-bold">Who It's For:</span> Startups, Enterprises, Product teams building AI right the first time.</p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-2">2. SAFE® Stack Audits</h2>
                <p className="text-sm font-mono mb-4">We assess your AI products against the SAFE Stack framework, providing a clear score and actionable roadmap.</p>
                <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10 dark:border-white/5 text-sm font-mono space-y-1">
                  <p><span className="font-bold">What You Get:</span> SAFE Score (0-100), gap analysis, risk assessment, prioritized compliance roadmap.</p>
                  <p><span className="font-bold">Starts at:</span> $9,500 (1-week essential)</p>
                  <p><span className="font-bold">Who It's For:</span> Regulatory prep, VC due diligence, independent architecture reviews.</p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-2">3. GTM Engineering</h2>
                <p className="text-sm font-mono mb-4">We help you launch with confidence: positioning, pricing, technical sales enablement, and commercialization strategy.</p>
                <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10 dark:border-white/5 text-sm font-mono space-y-1">
                  <p><span className="font-bold">What You Get:</span> Commercialization playbook, technical sales enablement, GTM asset library, launch roadmap.</p>
                  <p><span className="font-bold">Starts at:</span> $9,500/month (Retainer, 3-month minimum)</p>
                  <p><span className="font-bold">Who It's For:</span> Founders, product leaders, enterprises commercializing internal AI.</p>
                </div>
              </div>

              {/* The Trifecta Summary */}
              <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">The Trifecta: Build. Verify. Launch.</h3>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="bg-orange-400/10 p-2 rounded border border-orange-400/20">
                    <p className="font-bold text-orange-400">Build</p>
                    <p className="opacity-80">From $25k</p>
                  </div>
                  <div className="bg-orange-400/10 p-2 rounded border border-orange-400/20">
                    <p className="font-bold text-orange-400">Verify</p>
                    <p className="opacity-80">From $9.5k</p>
                  </div>
                  <div className="bg-orange-400/10 p-2 rounded border border-orange-400/20">
                    <p className="font-bold text-orange-400">Launch</p>
                    <p className="opacity-80">From $9.5k/mo</p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-mono opacity-80 text-center">
                  We build, verify, and launch—all under one roof, all aligned with the SAFE® Stack.
                </p>
              </div>

              {/* CTA - PURE HTML FALLBACK (No Next.js router involved) */}
              <div className="mt-8 text-center flex justify-center relative z-50">
                <a 
                  href="/contact-us"
                  className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-bold font-mono py-3 px-8 rounded-full transition-colors shadow-lg cursor-pointer relative z-50"
                  style={{ pointerEvents: 'auto' }}
                >
                  Ready to Build, Verify, or Launch?
                </a>
              </div>

            </div>
        </div>

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}