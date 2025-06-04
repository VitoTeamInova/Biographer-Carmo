import React, { useState } from 'react';
import { useBiography } from '../../context/BiographyContext';
import SectionTitle from '../UI/SectionTitle';
import MediaViewer from '../UI/MediaViewer';

const Photos: React.FC = () => {
  const { data } = useBiography();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
  // Filter out empty photo URLs
  const validPhotos = data.photos.filter(photo => photo.trim() !== '');
  
  if (validPhotos.length === 0) {
    return null;
  }

  // Convert Google Drive link to direct image URL if needed
  const getImageUrl = (url: string) => {
    if (url.includes('drive.google.com/file/d/')) {
      const fileId = url.match(/\/d\/([^/]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
      }
    }
    return url;
  };

  const openPhoto = (url: string) => {
    setSelectedPhoto(url);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="py-16 bg-gray-50" id="photos">
      <div className="container mx-auto px-4">
        <SectionTitle title="Fotos" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {validPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              onClick={() => openPhoto(photo)}
            >
              <div className="relative pb-[75%]">
                <img 
                  src={getImageUrl(photo)} 
                  alt={`${data.firstName} ${data.lastName} - Foto ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white font-medium">Ver em tela cheia</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedPhoto && (
          <MediaViewer 
            mediaUrl={selectedPhoto} 
            isVideo={false} 
            isOpen={!!selectedPhoto} 
            onClose={closePhoto} 
          />
        )}
      </div>
    </section>
  );
};

export default Photos;