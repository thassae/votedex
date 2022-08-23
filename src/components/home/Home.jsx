import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Filtro from "../shared/filtro/Filtro";
function Home() {
  return (
    <>
      <div>
        <h1>Votedex</h1>
        <h2>Um jeito novo de escolher seu candidato.</h2>
        <p>
          <strong>Modo de usar:</strong>aplique os filtros de modo que você
          consiga achar candidatos alinhados à sua linha de pensamento. Clique
          no nome deles para abrir o portal de divulgação de candidaturas. Se
          der tempo e isso aqui der bom, vou ver como faço pra abrir um link pro
          Jusbrasil.
        </p>
        <Filtro />

        <center>
          <Button variant="contained" component={Link} to="sobre">
            Sobre o autor, licenças e afins. 🤔
          </Button>
        </center>
      </div>
    </>
  );
}

export default Home;
