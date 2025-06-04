import React, { useState } from 'react';
import { useBiography } from '../../context/BiographyContext';
import SectionTitle from '../UI/SectionTitle';
import MediaViewer from '../UI/MediaViewer';
import { Play } from 'lucide-react';

const Videos: React.FC = () => {
  const { data } = useBiography();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // Filter out empty video URLs
  const validVideos = data.videos.filter(video => video.trim() !== '');
  
  if (validVideos.length === 0) {
    return null;
  }

  // Extract YouTube video ID from URL
  const getVideoThumbnail = (videoUrl: string) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);
    if (match && match[2].length === 11) {
      return `https://img.youtube.com/vi/${match[2]}/maxresdefault.jpg`;
    }
    return 'https://via.placeholder.com/640x360?text=Video';
  };

  const openVideo = (url: string) => {
    setSelectedVideo(url);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 bg-white" id="videos">
      <div className="container mx-auto px-4">
        <SectionTitle title="Vídeos" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {validVideos.map((video, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => openVideo(video)}
            >
              <div className="relative pb-[56.25%]">
                <img 
                  src={getVideoThumbnail(video)} 
                  alt={`${data.firstName} ${data.lastName} - Vídeo ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-indigo-900/30 group-hover:bg-indigo-900/10 flex items-center justify-center transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-indigo-600 group-hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedVideo && (
          <MediaViewer 
            mediaUrl={selectedVideo} 
            isVideo={true} 
            isOpen={!!selectedVideo} 
            onClose={closeVideo} 
          />
        )}
      </div>
    </section>
  );
};

export default Videos;