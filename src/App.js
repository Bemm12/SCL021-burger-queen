/*import logo from './logo.svg';*/
/*import logo from './src/img/logo.png';*/
import './App.css';
import './css/inicio.css';
/*import { Route, Routes } from 'react-router-dom';*/
import { DatosContext } from "./context/UseContext";
/*import  PaginaInicio  from './pages/PaginaInicio';*/
 import  PaginaMenu  from './pages/PaginaMenu'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      <DatosContext>      
        <PaginaMenu/> 
      </DatosContext>         
      </header>
    </div>
  );
}

export default App;
