import { useState } from "react";
import "./App.css"

interface FormUsuario{
    onSubmit:(data:{nombre:string,correo:string,edad:string})=>void
}

const Formulario:React.FC <FormUsuario>=({onSubmit})=>{
const [nombre,setNombre]=useState("");
const [correo,setCorreo]=useState("");
const [edad,setEdad]=useState("");

    const guardar=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        alert(`nombre: ${nombre}, correo: ${correo}, edad: ${edad}`);
        onSubmit({nombre,correo,edad})

    }

    return(
        <div>
            <form className="form" onSubmit={guardar}>
                <h1>Formulario</h1>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(event)=>setNombre(event.target.value)}/>
                <label>Correo</label>
                <input type="email" value={correo} onChange={(event)=>setCorreo(event.target.value)}/>
                <label>Edad:</label>
                <input type="number" value={edad} onChange={(event)=>setEdad(event.target.value)}/>
                <button type="submit">Guardar</button>

            </form>
        </div>
    )
}
export default Formulario;
