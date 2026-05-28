import { useState } from "react";
import "./YugiohCard.css";


import versoImg from "../../assets/verso.jpg";

function YugiohCard({ imagem }) {
  const [invocado, setInvocado] = useState(false);

  return (
  
    <div className="card-container" onClick={() => setInvocado(!invocado)}>
      <div className={`card-inner ${invocado ? "is-flipped" : ""}`}>

        
        <div className="card-face card-back">
          <img src={versoImg} alt="Verso da Carta" className="imagem-verso" />
        </div>

        
        <div className="card-face card-front">
          <img src={imagem} alt="Meme Card" className="card-image-full" />
        </div>

      </div>
    </div>
  );
}

export default YugiohCard;