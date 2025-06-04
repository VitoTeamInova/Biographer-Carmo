import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo-900 inline-block relative">
        {title}
        <span className="block h-1 w-1/2 bg-amber-400 mt-2 mx-auto"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;