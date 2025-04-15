interface Perfil{
    nombre:string;
   correo:string;
   edad:string;
}
const PerfilUsuario:React.FC<Perfil> = ({nombre,correo,edad}) =>{
    return(
        <div>
            <h1>perfil de usuario</h1> 
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Correo:</strong> {correo}</p>
            <p><strong>Edad:</strong> {edad}</p>
        </div>
    )
}
export default PerfilUsuario;