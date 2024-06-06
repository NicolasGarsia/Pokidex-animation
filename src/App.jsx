import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Conteudo from "./componentes/Conteudo";

const Spinner = styled(motion.div)`
  width: 80px;
  height: 80px;
  border: 8px solid white;
  border-top: 8px solid red;
  border-radius: 50%;
`;

function App() {
  const [Carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 3100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="logo">
          <img src="pokelogo.png" />
          <h1>Pokédex</h1>
        </div>
      <div className="center">
        
        {Carregando ? (
          <Spinner
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          <Conteudo visivel={!Carregando} />
        )}
      </div>
    </>
  );
}

export default App;
