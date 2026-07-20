// components/ClientLogos.tsx

import Image from "next/image";

interface ClientLogosProps {
  isDarkMode: boolean;
}

export default function ClientLogos({ isDarkMode }: ClientLogosProps) {
  // Example data - Replace these with your real logos
  const logos = [
    { name: "Company 1", src: "/logo1.svg" },
    { name: "Company 2", src: "/logo2.svg" },
    { name: "Company 3", src: "/logo3.svg" },
    { name: "Company 4", src: "/logo4.svg" },
    { name: "Company 5", src: "/logo5.svg" },
  ];

  return (
    <div className={`w-full py-10 border-t border-gray-200 dark:border-gray-800 mt-12 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
      <p className="text-center font-mono text-sm font-bold mb-8 uppercase tracking-widest">
        Trusted by Innovators
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center h-12 w-24 relative">
             {/* Replace <Image /> with <img src="..." /> if you don't have Next.js optimized images setup */}
            <img 
              src={logo.src} 
              alt={logo.name} 
              className="max-h-full max-w-full object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}