import './App.css';
import './css/inicio.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import { DatosContext } from "./context/UseContext";
import  PaginaInicio  from './pages/PaginaInicio';
import  PaginaMenu  from './pages/PaginaMenu'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      <DatosContext>      
       <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="Menu" element={<PaginaMenu />} />
       </Routes>
      </DatosContext>         
      </header>
    </div>
  );
}

export default App;
