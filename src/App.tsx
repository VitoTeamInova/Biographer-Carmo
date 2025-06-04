import React, { useState } from 'react';
import { BiographyProvider } from './context/BiographyContext';
import { Section } from './types';

// Layout components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Section components
import Home from './components/Sections/Home';
import EarlyLife from './components/Sections/EarlyLife';
import Education from './components/Sections/Education';
import Work from './components/Sections/Work';
import TimeLine from './components/Sections/TimeLine';
import Testimonials from './components/Sections/Testimonials';
import Photos from './components/Sections/Photos';
import Videos from './components/Sections/Videos';
import Stories from './components/Sections/Stories';

// Add CSS to enable animations
import './styles/animations.css';

const sections: Section[] = [
  { id: 'early-life', title: 'Primeiros Anos', component: EarlyLife },
  { id: 'education', title: 'Educação', component: Education },
  { id: 'work', title: 'Carreira', component: Work },
  { id: 'timeline', title: 'Linha do Tempo', component: TimeLine },
  { id: 'testimonials', title: 'Depoimentos', component: Testimonials },
  { id: 'photos', title: 'Fotos', component: Photos },
  { id: 'videos', title: 'Vídeos', component: Videos },
  { id: 'stories', title: 'Histórias & Lições', component: Stories },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <BiographyProvider>
      <div className="font-sans">
        <Header sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          <Home />
          
          {sections.map((section) => {
            const SectionComponent = section.component;
            return <SectionComponent key={section.id} />;
          })}
        </main>
        
        <Footer />
      </div>
    </BiographyProvider>
  );
}

export default App;