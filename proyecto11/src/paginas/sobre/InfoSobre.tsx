import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ApisInfo.css";

interface ApiItem {
  name: string;
  url: string;
}

interface InfoParam {
  name?: string;
}

const Infosobre: React.FC = () => {
  const navigate = useNavigate();
  const { name } = useParams<InfoParam>();
  
  const [apis] = useState<ApiItem[]>([
    { name: "Chuck Norris API", url: "https://api.chucknorris.io" },
    { name: "Studio Ghibli API", url: "https://ghibliapi.vercel.app" },
    { name: "Fake Store API", url: "https://fakestoreapi.com" }
  ]);

  const navigateInfoSobre = () => {
    navigate("/paginas/bryan");
  }

  const backH=()=>{navigate("/")}

  return (
    <div className="apis-container">
      <h1>APIS DISPONIBLES</h1>
      {name && <h2>Parámetro recibido: {name}</h2>}
      
      {apis.map((api, index) => (
        <div key={index} className="api-card">
          <h3 className="api-name">{api.name}</h3>
          <a 
            href={api.url} target="_blank" 
            rel="noopener noreferrer"
            className="api-link"
          >
            Visitar API: {api.url}
          </a>
          <button 
            onClick={navigateInfoSobre}
            className="nav-button"
          >
            Ir a páginas
          </button>
        </div>
        
      ))}
      <button className="volver-butt" onClick={backH}>Volver al Inicio</button>
    </div>
  );
};

export default Infosobre;