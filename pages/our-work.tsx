// pages/our-work.tsx

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function OurWork() {
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

  const projects = [
    {
      title: "SAFE Stack Scorecard",
      type: "Interactive Tool",
      description: "A self-assessment tool for companies to evaluate their AI product's architecture. Generates a SAFE Score (0-100) with visual breakdowns by pillar (Sovereign, Auditable, Feasible, Ethical). This lead magnet educates users on our core IP and positions us as the authority on SAFE compliance.",
      tags: ["Lead Generation", "IP Showcase", "Audit Tool"]
    },
    {
      title: "GTM Agent (Email-Only)",
      type: "Technical Demo",
      description: "An AI agent accessible exclusively via email. Users email a dedicated address and receive a concise summary, data extraction, or answer. A productized service demonstrating our ability to build and deploy agentic systems with a novel, elegant interface.",
      tags: ["Automation", "Product Thinking", "Email Interface"]
    },
    {
      title: "The Polymath Company Brand Book",
      type: "Strategic Design",
      description: "A full visual and strategic identity package covering The Polymath Company. Includes comprehensive messaging, mission, values, tone of voice, and design assets. Demonstrates our ability to architect cohesive brands from scratch for enterprise-level GTM consulting.",
      tags: ["Strategy", "Visual Identity", "Consulting"]
    }
  ];

  return (
    <main
      className={`flex min-h-screen flex-col p-4 sm:p-10 lg:p-20 ${inter.className} ${isDarkMode ? 'dark:bg-white' : 'bg-white'}`}
      style={backgroundStyle}
    >
     <NavBar isDarkMode={isDarkMode} onDarkModeToggle={() => setIsDarkMode(!isDarkMode)} />
    
          <div className="max-w-6xl mx-auto mt-6">
            <h1 className="text-4xl font-bold mb-8 text-center lg:text-left font-mono" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
              Our Work
            </h1>
            <p className="text-lg mb-12 text-center lg:text-left font-mono max-w-3xl" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
              Much of what we've built over the years lives behind closed doors in confidential builds, private launches, and ventures still in bloom. In 2026, we’ll be launching case studies and an official blog to share a few of our most loved projects and the stories behind them. <br /><br />

              Here are three recent projects that define our current approach—where technical execution meets strategic design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl shadow-lg backdrop-blur-sm bg-white/60 dark:bg-black/40 border border-white/20 dark:border-white/10 flex flex-col h-full transition-transform hover:scale-[1.02] duration-300`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-mono font-bold dark:text-white">{project.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider bg-orange-400/80 text-white px-2 py-1 rounded-full">{project.type}</span>
                  </div>
                  <p className="font-mono text-gray-800 dark:text-gray-300 mb-6 flex-grow text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-400 px-3 py-1 rounded-full font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}