import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Filtro from "../shared/filtro/Filtro";
import TabelaCandidatos from "../shared/tabela/TabelaCandidatos";
function Home(props) {
  const { state } = props;
  return (
    <>
      <div>
        <h1>Votedex</h1>
        <h2>Um jeito novo de escolher seu candidato(a).</h2>
        <p>
          <strong>Modo de usar:&nbsp;</strong>aplique os filtros de modo que
          você consiga achar candidatos alinhados à sua linha de pensamento.
          Clique no nome deles para abrir o portal de divulgação de
          candidaturas. Depois, é só anotar os números dos(as) candidatos(as)
          que lhe interessarem, votar e torcer para ele(a) ser eleito.
        </p>
        <Filtro filtros={state.filtros} selecionados={state.selecionados} />
        <br></br>
        <TabelaCandidatos candidatos={state.candidatos} />
        <br></br>
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
