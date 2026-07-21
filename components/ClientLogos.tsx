// components/ClientLogos.tsx

import Image from "next/image";

interface ClientLogosProps {
  isDarkMode: boolean;
}

export default function ClientLogos({ isDarkMode }: ClientLogosProps) {
  // Example data - Replace these with your real logos
  const logos = [
    { name: "SAM.gov", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SamGovLogo.svg" },
    { name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" },
    { name: "Anthropic", src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
    { name: "Humana", src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Humana_logo.svg" },
    { name: "Huel", src: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Huel_Official_Logo.png" },
    { name: "L'Oréal", src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/L%27Or%C3%A9al_logo.svg" },
    { name: "SharkNinja", src: "https://upload.wikimedia.org/wikipedia/commons/e/ea/SharkNinja_logo.svg" },
  ];

  return (
    <div className={`w-full py-10 border-t border-gray-200 dark:border-gray-800 mt-12 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
      <p className="text-center font-mono text-sm font-bold mb-8 uppercase tracking-widest">
        Trusted by Innovators
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center h-12 w-24 relative">
             <Image 
                src={logo.src} 
                alt={logo.name} 
                width={100} 
                height={50} 
                // Replaced invalid color-white class with CSS filter for inversion
                className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                  isDarkMode ? "invert brightness-0" : ""
                }`}
              />
          </div>
        ))}
      </div>
    </div>
  );
}