import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Set Landing as your home page */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dash" element={<Dashboard />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;