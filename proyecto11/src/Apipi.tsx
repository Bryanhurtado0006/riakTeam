import { useEffect, useState } from "react"
import { data } from "react-router-dom";
import "./Apipi.css"
interface Pokebola{
    name:string;
    url:string;
}
const Apipi:React.FC=()=>{
    const[Pokemon,setPokemon]=useState<Pokebola[]>([]); //estado
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
        .then(res=>res.json())
        .then(data=>setPokemon(data.results))


    },[]);
    return(
        <div>
            <h1 >POKIMON</h1>
            {Pokemon.map((poki)=>(
                <div className="conte">
                <p className="name">NOMBRE: {poki.name}</p>
                <p className="ur">URL: {poki.url}</p>
                     </div>))}
        </div>
    )
}

export default Apipi;