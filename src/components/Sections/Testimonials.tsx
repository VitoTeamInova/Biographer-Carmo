import React, { useState } from 'react';
import { useBiography } from '../../context/BiographyContext';
import SectionTitle from '../UI/SectionTitle';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { data } = useBiography();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Filter out empty testimonials
  const validTestimonials = data.testimonials.filter(testimonial => testimonial.trim() !== '');
  
  if (validTestimonials.length === 0) {
    return null;
  }

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % validTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + validTestimonials.length) % validTestimonials.length);
  };

  return (
    <section className="py-16 bg-indigo-900 text-white" id="testimonials">
      <div className="container mx-auto px-4">
        <SectionTitle title="Depoimentos" />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative py-10">
            <Quote className="absolute top-0 left-0 h-16 w-16 text-amber-400/30 -translate-x-1/4 -translate-y-1/4" />
            <Quote className="absolute bottom-0 right-0 h-16 w-16 text-amber-400/30 translate-x-1/4 translate-y-1/4 rotate-180" />
            
            <div className="bg-indigo-800/50 p-8 rounded-lg shadow-xl border border-indigo-700">
              <div className="min-h-[150px]">
                <p className="text-white/90 text-lg leading-relaxed italic">
                  {validTestimonials[activeIndex]}
                </p>
              </div>
              
              {validTestimonials.length > 1 && (
                <div className="mt-8 flex justify-center space-x-4">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-indigo-700 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-indigo-700 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              )}
              
              <div className="mt-4 flex justify-center">
                {validTestimonials.length > 1 && validTestimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      activeIndex === index ? 'bg-amber-400' : 'bg-indigo-600 hover:bg-indigo-500'
                    } transition-colors duration-300`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;