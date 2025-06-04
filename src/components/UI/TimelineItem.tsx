import React from 'react';
import { useBiography } from '../../context/BiographyContext';
import { TimelineEvent } from '../../types';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  // Alternate items left and right
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex md:gap-8 pb-8 items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Vertical line */}
      <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-indigo-300 transform md:-translate-x-1/2 top-6"></div>
      
      {/* Date circle */}
      <div className="absolute left-5 md:left-1/2 w-10 h-10 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center transform -translate-x-1/2 z-10">
        <span className="text-white text-xs font-bold">
          {new Date(event.date).getFullYear()}
        </span>
      </div>

      {/* Content box */}
      <div className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <span className="text-indigo-800 text-sm font-semibold block mb-1">
            {formatDate(event.date)}
          </span>
          <p className="text-gray-700">{event.description}</p>
        </div>
      </div>
      
      {/* Empty space for the opposite side */}
      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
};

export default TimelineItem;