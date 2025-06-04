import React, { createContext, useContext, useState } from 'react';
import { BiographyData } from '../types';
import { defaultData } from '../data/defaultData';

interface BiographyContextType {
  data: BiographyData;
  setData: React.Dispatch<React.SetStateAction<BiographyData>>;
}

const BiographyContext = createContext<BiographyContextType | undefined>(undefined);

export const BiographyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<BiographyData>(defaultData);

  return (
    <BiographyContext.Provider value={{ data, setData }}>
      {children}
    </BiographyContext.Provider>
  );
};

export const useBiography = (): BiographyContextType => {
  const context = useContext(BiographyContext);
  if (context === undefined) {
    throw new Error('useBiography must be used within a BiographyProvider');
  }
  return context;
};