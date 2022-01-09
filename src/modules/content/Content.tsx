import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export const Content: React.FC = () => (
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
