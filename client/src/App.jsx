import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import UpdateProduct from './components/UpdateProduct';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} default/>
          <Route path="/api/product/:id" element={<Detail />} />
          <Route path="/api/product/:id/edit" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
