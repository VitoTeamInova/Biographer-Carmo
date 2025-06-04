import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface MediaViewerProps {
  mediaUrl: string;
  isVideo: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const MediaViewer: React.FC<MediaViewerProps> = ({ mediaUrl, isVideo, isOpen, onClose }) => {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (isVideo && mediaUrl) {
      // Extract YouTube video ID from URL
      const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
      const match = mediaUrl.match(regExp);
      if (match && match[2].length === 11) {
        setVideoId(match[2]);
      }
    }
  }, [isVideo, mediaUrl]);

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 animate-fadeIn">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-300"
        aria-label="Close"
      >
        <X size={32} />
      </button>
      
      {isVideo && videoId ? (
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img
          src={getImageUrl(mediaUrl)}
          alt="Full-size media"
          className="max-h-[90vh] max-w-full object-contain"
        />
      )}
    </div>
  );
};

export default MediaViewer;