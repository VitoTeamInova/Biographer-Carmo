import React from 'react';
import { useBiography } from '../../context/BiographyContext';

const Home: React.FC = () => {
  const { data } = useBiography();
  
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const calculateAge = () => {
    if (!data.dateOfBirth) return null;
    const birth = new Date(data.dateOfBirth);
    const death = data.dateOfPassing ? new Date(data.dateOfPassing) : new Date();
    let age = death.getFullYear() - birth.getFullYear();
    const m = death.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && death.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const fullName = `${data.firstName} ${data.middleName} ${data.lastName}`.trim();
  const age = calculateAge();

  return (
    <section id="home" className="min-h-screen flex flex-col">
      <div 
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.homePhoto})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-indigo-900/50 to-indigo-900/90"></div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 animate-fadeIn">
            {fullName}
          </h1>
          
          <p className="text-xl text-amber-300 mb-6 animate-fadeIn delay-300">
            {data.profession}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center text-white space-y-2 md:space-y-0 md:space-x-8 mb-8 animate-fadeIn delay-600">
            <p className="flex items-center">
              <span className="opacity-80 mr-2">Nascimento:</span> 
              <span>{formatDate(data.dateOfBirth)}</span>
            </p>
            {data.dateOfPassing && (
              <p className="flex items-center">
                <span className="opacity-80 mr-2">Falecimento:</span> 
                <span>{formatDate(data.dateOfPassing)}</span>
              </p>
            )}
            {age && (
              <p className="flex items-center">
                <span className="opacity-80 mr-2">Idade:</span> 
                <span>{age} anos</span>
              </p>
            )}
            <p className="flex items-center">
              <span className="opacity-80 mr-2">Local:</span> 
              <span>{data.placeOfBirth}</span>
            </p>
            <p className="flex items-center">
              <span className="opacity-80 mr-2">Residência:</span> 
              <span>{data.latestResidence}</span>
            </p>
          </div>
          
          <div className="max-w-2xl bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 animate-fadeIn delay-900">
            <p className="text-white text-lg leading-relaxed italic">
              {data.homeText}
            </p>
          </div>
          
          <div className="mt-12 animate-bounce">
            <a 
              href="#early-life" 
              className="text-white hover:text-amber-300 transition-colors duration-300"
              aria-label="Scroll down"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;