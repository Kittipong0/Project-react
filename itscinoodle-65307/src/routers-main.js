import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Noodle from './pages/Noodle';
import AboutUs from './pages/About-us';

function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/noodle' element={<Noodle />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Router;