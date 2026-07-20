// pages/contact-us.jsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import router from "next/router";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [gifBackgroundUrl, setGifBackgroundUrl] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check system preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Change the background image based on dark mode
    if (isDarkMode) {
      setGifBackgroundUrl('/dark-clouds.gif');
    } else {
      setGifBackgroundUrl('/cotton-candy-clouds.gif');
    }
  }, [isDarkMode, isMounted]);

  // Don't render background until we're on the client to avoid hydration mismatch
  const backgroundStyle = isMounted ? { 
    backgroundImage: `url(${gifBackgroundUrl})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    zIndex: '-1' 
  } : {};

  return (
    <main
      className={`flex min-h-screen flex-col p-10 lg:p-20 ${inter.className} ${isDarkMode ? 'dark:bg-white' : 'bg-white'} `}
      style={backgroundStyle}
    >
     <NavBar 
       isDarkMode={isDarkMode} 
       onDarkModeToggle={() => setIsDarkMode(!isDarkMode)} 
     />
    
        <div className="flex flex-wrap justify-center md:p-12 sm:p-6 mt-6">
            {/* Description on the left */}
            <div className={`max-w-xl w-full lg:w-2/6 px-5 py-12 text-gray-800 dark:text-white ${
        isDarkMode ? "text-white" : ""
      }`}>
            <h1 className="text-2xl pt-4 md:text-4xl font-mono font-bold mb-8">Want to work with us?</h1>
            <p className="text-md md:text-lg font-mono">
              We are a founder-led creative technology studio helping innovators design, build, and scale their next big idea. From brand to AI, we bring vision to life—one product at a time. We build what doesn’t yet exist or improve on what is working for you.
            </p>
            <br />
            <p className="text-md md:text-lg font-mono">
              From brand to AI, we bring vision to life—one product at a time. We build what doesn’t yet exist or improve on what is working for you.
            </p>
            </div>
             {/* Form on the right */}
             <div className="w-full lg:w-3/5 bg-white dark:bg-gray-900/90 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
               <h2 className="text-2xl font-bold mb-6 text-center font-mono text-gray-900 dark:text-white">Send Us A Message</h2>
              
               {/* REPLACE 'your-email@example.com' WITH YOUR ACTUAL EMAIL ADDRESS BELOW */}
               <form action="https://formsubmit.co/qreativeagencyoperations@gmail.com" method="POST" className="space-y-4 font-mono text-gray-800 dark:text-gray-200">
                
                 {/* Honeypot - For spam protection */}
                 <input type="text" name="_honey" style={{ display: 'none' }} />
                 {/* Disable Captcha - Set to 'on' if you want captcha */}
                 <input type="hidden" name="_captcha" value="false" />
                 {/* Next URL after submission */}
                 <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

                 <div>
                   <label className="block text-sm font-medium mb-1">Name</label>
                   <input type="text" name="name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-orange-400 dark:bg-neutral-800 dark:text-white outline-none transition" />
                 </div>

                 <div>
                   <label className="block text-sm font-medium mb-1">Company</label>
                   <input type="text" name="company" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-orange-400 dark:bg-neutral-800 dark:text-white outline-none transition" />
                 </div>

                 <div>
                   <label className="block text-sm font-medium mb-1">Email Address</label>
                   <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-orange-400 dark:bg-neutral-800 dark:text-white outline-none transition" />
                 </div>

                 <div>
                   <label className="block text-sm font-medium mb-1">Phone Number</label>
                   <input type="text" name="phone" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-orange-400 dark:bg-neutral-800 dark:text-white outline-none transition" />
                 </div>

                 <div>
                   <select name="subject" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-orange-400 dark:bg-neutral-800 dark:text-white outline-none transition bg-white dark:bg-neutral-800">
                     <option value="">Select a subject</option>
                     <option value="Product Development">AI Product Development</option>
                     <option value="SAFE Stack Audit">SAFE Stack Audit</option>
                     <option value="GTM Engineering">GTM Engineering</option>
                     <option value="Brand & Product Strategy">Brand & Product Strategy</option>
                     <option value="Software & AI Development">Software Development</option>
                     <option value="Design & Creative Production">Design & Creative Direction</option>
                     <option value="Venture Studio Partnerships">Venture Studio Partnerships</option>
                     <option value="Qreative Labs">Qreative Labs</option>
                     <option value="General Inquiry">General Inquiry</option>
                     <option value="Other">Other</option>
                   </select>
                </div>

                 <div>
                   <label className="block text-sm font-medium mb-1">Message</label>
                   <textarea name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-orange-400 dark:bg-neutral-800 dark:text-white outline-none transition resize-none"></textarea>
                 </div>

                 <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200 shadow-md">
                   Send Message
                 </button>
               </form>
             </div>
         </div>

       <Footer isDarkMode={isDarkMode} />
     </main>
   );
 }

            
