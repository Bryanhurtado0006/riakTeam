import { useEffect, useState } from "react";
import "./apis.css"; 
import { useNavigate } from "react-router-dom";

const Apiss: React.FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate =useNavigate();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => setImageUrl(data.icon_url));
  }, []);
  const volver=()=>{navigate("/")};

  return (
    <div className="api">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt="" 
          className="chuck-img"
        />
      )}
      <div className="api-info">
        <h1 className="api-titulo">Información de la API de Chuck Norris</h1>
        <h2>The Chuck Norris app existed even before slack existed. Start retrieving random Chuck 
            Norris facts by just typing /chuck into your slack console.

            Additionally you can type /chuck category_name to get a 
            random joke from a given category. Type /chuck -cat to show
             a list of all available categories.</h2>
             <button className="volver-butt" onClick={volver}>Volver al Inicio</button>
      </div>
    </div>
  );
};

export default Apiss;