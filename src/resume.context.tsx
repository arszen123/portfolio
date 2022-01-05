import React from 'react';
import { resume } from './resume';

const Resume = React.createContext(resume);

export const ResumeProvider: React.FC = ({ children }) => (
  <Resume.Provider value={resume}>
    {children}
  </Resume.Provider>
);
export const ResumeConsumer = Resume.Consumer;

export const useResume = () => React.useContext(Resume);
