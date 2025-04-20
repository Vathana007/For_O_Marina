import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Surprise from './components/Surprise';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </BrowserRouter>
  );
}
