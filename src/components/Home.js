import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/windowsNew');
  };

  return (
    <div>
      <h1>Menu Principal</h1>
      <h2>Pagina en blanco</h2>
      <button onClick={handleClick}>Ir a la pagina en blanco</button>
    </div>
  );
}

export default Home;