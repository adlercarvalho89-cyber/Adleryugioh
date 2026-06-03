import { useParams } from "react-router-dom"; 
import cartasMeme from "../Data/cartas";

function Yugioh() {
  const { cartaId } = useParams();
  
  const carta = cartasMeme.find((carta) => carta.id === Number(cartaId));

  if (!carta) {
    return <h1>Carta banida para o Reino das Sombras! 💀</h1>;
  }

  return (
    <>
      <h1>Carta Invocada: {carta.id}</h1>
      <img src={carta.imagem} alt="Meme" />
    </>
  );
}

export default Yugioh;