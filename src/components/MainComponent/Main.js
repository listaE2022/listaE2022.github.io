import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Manifesto from '../../pages/Manifesto/Manifesto';
import Programa from '../../pages/Programa/Programa';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/manifesto' element={<Manifesto />}></Route>
      <Route exact path='/programa' element={<Programa />}></Route>
    </Routes>
  );
}

export default Main;