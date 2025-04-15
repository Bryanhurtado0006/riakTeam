import { useState } from 'react'
import './App.css'
import Formulario from './Formulario';
import PerfilUsuario from './PerfilUsuario';

const App:React.FC = ()=>{
  const [datos,setDatos]=useState<{nombre:string,correo:string,edad:string}|null>(null)
  const guardarSumbmit=(data:{nombre:string,correo:string,edad:string})=>{
    setDatos(data)
  }
  return (
    <div>
      <Formulario onSubmit={guardarSumbmit}></Formulario>
      {datos &&
      <PerfilUsuario nombre={datos.nombre} correo={datos.correo} edad={datos.edad} ></PerfilUsuario>}

    </div>
    
  )
}






export default App;
