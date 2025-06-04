import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import { LockKeyhole, Star } from 'lucide-react';

const Stories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="stories">
      <div className="container mx-auto px-4">
        <SectionTitle title="Histórias & Lições" />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100">
                <LockKeyhole className="h-10 w-10 text-indigo-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-indigo-900 mb-4">
              Conteúdo Premium
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Acesse histórias exclusivas, lições e insights inspiradores da vida e carreira de Carmo Gregory.
            </p>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-400" />
                  <span className="ml-2 text-gray-700">Memórias pessoais</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-400" />
                  <span className="ml-2 text-gray-700">Lições de vida</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-400" />
                  <span className="ml-2 text-gray-700">Materiais inéditos</span>
                </div>
              </div>
            </div>
            
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1">
              Acesso Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;