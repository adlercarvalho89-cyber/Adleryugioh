import { useState } from "react";
import YugiohCard from "../Components/YugiohCard/YugiohCard";
import cartasMeme from "../Data/cartas"; 
import audioDuelo from "../assets/hora-do-duelo.mp3";

function Home() {
  const [listaCartas] = useState(cartasMeme);
  const [faseDuelo, setFaseDuelo] = useState("tela-inicial");
  
  const [cartaSelecionada, setCartaSelecionada] = useState(null);
  const [cartaGirandoId, setCartaGirandoId] = useState(null);
  const [cartasReveladas, setCartasReveladas] = useState([]);

  const iniciarDuelo = () => {
    const audio = new Audio(audioDuelo);
    audio.play();
    setFaseDuelo("transicao");
    setTimeout(() => setFaseDuelo("campo"), 5000); 
  };

  const lidarComCliqueNaCarta = (carta) => {
    const jaEstaRevelada = cartasReveladas.includes(carta.id);

    if (jaEstaRevelada) {
      
      setCartaSelecionada(carta);
    } else {
      
      setCartaGirandoId(carta.id);

      
      setTimeout(() => {
        setCartasReveladas((prev) => [...prev, carta.id]);
        setCartaGirandoId(null); 
      }, 800);
    }
  };

  return (
    <>
      {faseDuelo === "tela-inicial" && (
        <div className="overlay-inicial">
          <h1 className="titulo-gigante">Yu-Gi-Oh! O Duelo Final</h1>
          <button className="btn-duelar" onClick={iniciarDuelo}>DUELAR!</button>
        </div>
      )}

      {faseDuelo === "transicao" && (
        <div className="overlay-transicao">
          <h2 className="texto-transicao">Preparando o Campo de Batalha...</h2>
        </div>
      )}

      {faseDuelo === "campo" && (
        <>
          <div className="campo-batalha animacao-entrada">
            <h1>É hora do Duelo!</h1>
            <h2>Total de Cartas no Campo: {listaCartas.length}</h2>

            <section id="center">
              {listaCartas.map((carta) => {
                const jaEstaRevelada = cartasReveladas.includes(carta.id);
                const estaGirandoAgora = cartaGirandoId === carta.id;
                
                // Junta as duas condições para saber se a carta deve estar de frente
                const deveFicarDeFrente = jaEstaRevelada || estaGirandoAgora;

                return (
                  <div key={carta.id} onClick={() => lidarComCliqueNaCarta(carta)}>
                    {/* Passamos o estado 'deveFicarDeFrente' para o componente filho */}
                    <YugiohCard imagem={carta.imagem} revelada={deveFicarDeFrente} />
                  </div>
                );
              })}
            </section>
          </div>

          
          {cartaSelecionada && (
            <div style={{
              position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.85)", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "flex-start", zIndex: 1000, color: "white",
              overflowY: "auto", padding: "20px 0", boxSizing: "border-box"
            }}>
              <h1 style={{ margin: "10px 0", fontSize: "24px", textAlign: "center" }}>
                Carta Invocada: {cartaSelecionada.id}
              </h1>
              
              <img 
                src={cartaSelecionada.imagem} 
                alt="Meme" 
                style={{ width: "260px", border: "4px solid #d4af37", borderRadius: "10px" }}
              />
              
              <div style={{ 
                backgroundColor: "#2b2b2b", border: "3px solid #d4af37", 
                borderRadius: "8px", padding: "12px", marginTop: "15px", width: "260px", 
                boxSizing: "border-box" 
              }}>
                <h3 style={{ margin: "0 0 5px 0", color: "#d4af37", textAlign: "center", fontSize: "16px" }}>Efeito Mágico</h3>
                <p style={{ margin: 0, fontSize: "14px", textAlign: "justify", lineHeight: "1.4" }}>
                  {cartaSelecionada.descricao}
                </p>
              </div>

              <button 
                onClick={() => setCartaSelecionada(null)} 
                style={{
                  marginTop: "20px", padding: "10px 20px", fontSize: "15px", fontWeight: "bold",
                  cursor: "pointer", backgroundColor: "#d12c2c", color: "white", border: "2px solid white", borderRadius: "5px",
                  marginBottom: "20px"
                }}
              >
                Retornar ao Campo de Batalha
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Home;
