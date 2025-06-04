import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useBiography } from '../../context/BiographyContext';
import { Section } from '../../types';

interface HeaderProps {
  sections: Section[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ sections, activeSection, setActiveSection }) => {
  const { data } = useBiography();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const fullName = `${data.firstName} ${data.middleName} ${data.lastName}`.trim();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-indigo-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-xl font-serif font-bold text-white hover:text-amber-400 transition-colors duration-300"
          >
            {fullName}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleNavClick(section.id)}
                    className={`text-sm font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'text-amber-400 border-b-2 border-amber-400'
                        : 'text-white hover:text-amber-200 hover:border-b-2 hover:border-amber-200'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-900/95 animate-fadeIn">
          <ul className="flex flex-col py-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={`block w-full text-left px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                    activeSection === section.id
                      ? 'text-amber-400 bg-indigo-800/50'
                      : 'text-white hover:bg-indigo-800/30 hover:text-amber-200'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;