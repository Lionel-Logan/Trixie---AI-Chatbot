import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './landing'; // Update with the correct path
// Import other components you might have

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Set Landing as your home page */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;