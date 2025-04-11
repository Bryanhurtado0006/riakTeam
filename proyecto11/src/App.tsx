
import React from 'react';
import Hola from './Hola';
import { useEffect } from 'react';
import Count from './Contador';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Apipi from './Apipi';
import "./App.css"
import Home from './home/Home';
import InfoSobre from './paginas/sobre/InfoSobre';
import Nav from './componentes/Nav';
import Apiss from './paginas/Apis/Apiss';


function App() {
  useEffect(() => {
      console.log("estamos usando useEffect")
  } , [] )
  

  return (
    <>
    <div>
      <Router>

      <Nav></Nav>
      <Hola></Hola>
      <Count></Count>
      
      <Apipi></Apipi>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/InfoSobre" element={<InfoSobre></InfoSobre>}></Route>
        <Route path="/Apiss" element={<Apiss></Apiss>}></Route>
      </Routes>

      </Router>

    </div>
    </>
  )
}


export default App
