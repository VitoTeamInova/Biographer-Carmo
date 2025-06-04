import React from 'react';
import { useBiography } from '../../context/BiographyContext';
import SectionTitle from '../UI/SectionTitle';
import TimelineItem from '../UI/TimelineItem';

const TimeLine: React.FC = () => {
  const { data } = useBiography();
  
  // Sort timeline events by date
  const sortedEvents = [...data.timelineEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <section className="py-16 bg-white" id="timeline">
      <div className="container mx-auto px-4">
        <SectionTitle title="Linha do Tempo" />
        
        <div className="mt-12 relative">
          {sortedEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;