import { useState } from "react";
import "./App.css"; 
import YugiohCard from "./Components/YugiohCard/YugiohCard";
import cartasMeme from "./Data/cartas"; //


import audioDuelo from "./assets/hora-do-duelo.mp3";

function App() {
  const [listaCartas] = useState(cartasMeme);
  
  
  const [faseDuelo, setFaseDuelo] = useState("tela-inicial");

 
  const iniciarDuelo = () => {
    
    const audio = new Audio(audioDuelo);
    audio.play();

    
    setFaseDuelo("transicao");

     
    
    setTimeout(() => {
      setFaseDuelo("campo");
    }, 5000); 
  };


  return (
    <>
     
      {faseDuelo === "tela-inicial" && (
        <div className="overlay-inicial">
          <h1 className="titulo-gigante">Yu-Gi-Oh! O Duelo Final</h1>
          <button className="btn-duelar" onClick={iniciarDuelo}>
            DUELAR!
          </button>
        </div>
      )}

      
      {faseDuelo === "transicao" && (
        <div className="overlay-transicao">
          <h2 className="texto-transicao">Preparando o Campo de Batalha...</h2>
        </div>
      )}

      
      {faseDuelo === "campo" && (
        <div className="campo-batalha animacao-entrada">
          <h1>É hora do Duelo!</h1>
          <h2>Total de Cartas no Campo: {listaCartas.length}</h2>

          <section id="center">
            {listaCartas.map((carta) => (
              <YugiohCard
                key={carta.id}
                imagem={carta.imagem} 
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
}

export default App;
