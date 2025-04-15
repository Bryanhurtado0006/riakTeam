import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate =useNavigate();
    const Goinfo=()=>{navigate("/InfoSobre")}
  return (
    <div className="home-container">
      <h1 className="home-title">APIs Disponibles</h1>
      <button className="home-bon" onClick={()=>{Goinfo()}} >
        Explorar APIs
      </button>
    </div>
  );
};

export default Home;