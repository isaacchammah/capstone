import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from "../src/pages/Main/Main"
import React, { useState, useEffect } from 'react'

function App() {





  return (
    <>
      
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
