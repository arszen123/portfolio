import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const mediumUrl = process.env.REACT_APP_MEDIUM_FEED_URL;

export const Content: React.FC = () => (
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/projects" element={<Projects />} />
    {!!mediumUrl && (
    <Route
      path="/blog"
      element={<Blog mediumUrl={mediumUrl} />}
    />
    )}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
