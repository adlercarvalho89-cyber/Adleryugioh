import { useParams, Link } from "react-router-dom"; // 👈 ADICIONEI O LINK
import cartasMeme from "../Data/cartas";

function Yugioh() {
  const { cartaId } = useParams();
  
  const carta = cartasMeme.find((carta) => carta.id === Number(cartaId));

  if (!carta) {
    return <h1 style={{ textAlign: "center", color: "white", marginTop: "50px" }}>Carta banida para o Reino das Sombras! 💀</h1>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white", padding: "20px" }}>
      <h1>Carta Invocada: {carta.id}</h1>
      
      {/* Imagem da carta */}
      <img 
        src={carta.imagem} 
        alt="Meme" 
        style={{ width: "320px", border: "5px solid #d4af37", borderRadius: "10px" }}
      />
      
      
      <div style={{ 
        backgroundColor: "#2b2b2b", 
        border: "3px solid #d4af37", 
        borderRadius: "8px", 
        padding: "15px",
        marginTop: "20px",
        width: "320px",
        boxSizing: "border-box"
      }}>
        <h3 style={{ margin: "0 0 10px 0", color: "#d4af37", textAlign: "center" }}>Efeito Mágico</h3>
        <p style={{ margin: 0, fontSize: "16px", textAlign: "justify", lineHeight: "1.5" }}>
          {carta.descricao}
        </p>
      </div>

     
      <Link to="/Adleryugioh/">
        <button style={{
          marginTop: "30px",
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          backgroundColor: "#d12c2c",
          color: "white",
          border: "2px solid white",
          borderRadius: "5px"
        }}>
          Retornar ao Campo de Batalha
        </button>
      </Link>
    </div>
  );
}

export default Yugioh;