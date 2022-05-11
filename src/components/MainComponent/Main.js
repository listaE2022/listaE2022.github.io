import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Manifesto from '../../pages/Manifesto/Manifesto';
import Programa from '../../pages/Programa/Programa';

import Desporto from '../../pages/Departamentos/Desporto';
import Recreativo from '../../pages/Departamentos/Recreativo';
import MAG from '../../pages/Departamentos/MAG';
import Imagem from '../../pages/Departamentos/Imagem';
import CF from '../../pages/Departamentos/CF';
import Cooperacao from '../../pages/Departamentos/Cooperacao';
import Conhece from '../../pages/Conhece-nos/Conhece';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/manifesto' element={<Manifesto />}></Route>
      <Route exact path='/programa' element={<Programa />}> </Route>
      <Route exact path='/conhece_nos' element={<Conhece />}></Route>
      <Route path="/programa/desporto" element={<Desporto />} /> 
      <Route path="/programa/recreativo" element={<Recreativo />} /> 
      <Route path="/programa/mag" element={<MAG />} /> 
      <Route path="/programa/comunicacao" element={<Imagem />} /> 
      <Route path="/programa/conselho_fiscal" element={<CF />} /> 
      <Route path="/programa/cooperacao_e_estudantes" element={<Cooperacao />} /> 
      


    </Routes>
  );
}

export default Main;