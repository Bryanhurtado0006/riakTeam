import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './componentes/NavbarComponent';
import Inicio from './componentes/Inicio';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;

