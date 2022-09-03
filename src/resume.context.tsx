import React from 'react';
import { CompositeResume } from './interfaces/composite-resume';
import { resume } from './resume';

const Resume = React.createContext(resume);

export const ResumeProvider: React.FC = ({ children }) => (
  <Resume.Provider value={resume}>
    {children}
  </Resume.Provider>
);
export const ResumeConsumer = Resume.Consumer;

export const useResume = (): CompositeResume => React.useContext(Resume);
