import "./YugiohCard.css";
import versoImg from "../../assets/verso.jpg";

// Agora o componente recebe se está "revelada" direto do Home.jsx
function YugiohCard({ imagem, revelada }) {
  return (
    <div className="card-container">
     
      <div className={`card-inner ${revelada ? "is-flipped" : ""}`}>
        
        
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
