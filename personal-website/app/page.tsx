import React from 'react';
import { FaGithub} from 'react-icons/fa';
import { PiXLogo } from "react-icons/pi";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-gray-800 font-sans">
      {/* Header with full width */}
      <header className="w-full py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-xl font-medium">Kasper Hallenius</h1>
          <nav>
            <a href="https://x.com/Kasper0990" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              Follow me on 
              <PiXLogo className="inline-block align-middle ml-1" />
              
            </a>
          </nav>
        </div>
      </header>
      
      {/* Full width divider line */}
      <div className="w-full border-t border-gray-200"></div>
      
      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="flex flex-col items-center mb-10 sm:mb-16">
          <svg className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="35" r="25" fill="none" stroke="#333" strokeWidth="1.5"/>
            <path d="M30 75 C30 55, 70 55, 70 75" fill="none" stroke="#333" strokeWidth="1.5"/>
            <path d="M40 30 Q50 20 60 30" fill="none" stroke="#333" strokeWidth="1.5"/>
            <path d="M40 40 L60 40" fill="none" stroke="#333" strokeWidth="1.5"/>
          </svg>
          
          <div className="max-w-md text-center sm:text-left px-4 sm:px-0">
            <p className="mb-2 text-sm sm:text-base">Hey, I&apos;m Kasper! A 15-year-old high school student from Sweden with lots of passions but right now I&apos;m deepdiving into AI and coding.
              I enjoy building projects and exploring new technologies in my free time.</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row mb-8 sm:mb-10">
            <div className="w-full sm:w-32 text-sm text-gray-500 mb-2 sm:mb-0">Interests</div>
            <div className="flex-1">
              <div className="mb-4">
                <div className="mb-1 font-medium">Artificial Intelligence</div>
                <div className="text-gray-500 text-sm">Learning about AI in general and how to integrate it in software.</div>
              </div>
              <div className="mb-4">
                <div className="mb-1 font-medium">Software Development</div>
                <div className="text-gray-500 text-sm">I love building stuff, mostly in nextjs.  </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-32 text-sm text-gray-500 mb-2 sm:mb-0">Online</div>
            <div className="flex-1">
              <div className="mb-4 flex flex-col sm:flex-row">
                <div className="w-full sm:w-40 mb-1 sm:mb-0">Email</div>
                <a href="mailto:kasperhallenius@icloud.com" className="hover:underline">
                  kasperhallenius@icloud.com</a> 
              </div>
              <div className="mb-4 flex flex-col sm:flex-row">
                <div className="w-full sm:w-40 mb-1 sm:mb-0">
                  <a href="https://github.com/KasPeR0990" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="inline mr-2"/>
                    GitHub
                  </a>
                </div>
                <a href="https://github.com/KasPeR0990" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm">Follow</a>
              </div>
              <div className="mb-4 flex flex-col sm:flex-row">
                <div className="w-full sm:w-40 mb-1 sm:mb-0">
                  <a href="https://x.com/Kasper0990" target="_blank" rel="noopener noreferrer">
                  <PiXLogo  className="inline mr-2"/>
                  (Twitter)
                  </a>
                </div>
                <a href="https://x.com/Kasper0990" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm">Follow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}