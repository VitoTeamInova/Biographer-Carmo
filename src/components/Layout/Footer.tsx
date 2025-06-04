import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              A <a 
                href="https://www.teaminova.com" 
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                TeamInova
              </a> Solution
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/company/team-inova" 
              className="text-white hover:text-amber-400 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:info@teaminova.com" 
              className="text-white hover:text-amber-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-indigo-200">
          <p>&copy; {currentYear} TeamInova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;