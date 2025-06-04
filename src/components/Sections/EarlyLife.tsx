import React from 'react';
import { useBiography } from '../../context/BiographyContext';
import SectionTitle from '../UI/SectionTitle';

const EarlyLife: React.FC = () => {
  const { data } = useBiography();

  return (
    <section className="py-16 bg-gray-50" id="early-life">
      <div className="container mx-auto px-4">
        <SectionTitle title="Primeiros Anos" />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.02] group">
              <img 
                src={data.earlyLifePhoto} 
                alt={`${data.firstName} ${data.lastName} - Primeiros Anos`} 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed">
                {data.earlyLifeText.split('\n').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br /><br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyLife;