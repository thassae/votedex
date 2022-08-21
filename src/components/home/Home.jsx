import Filtro from "../shared/filtro/Filtro";

function Home() {
  return (
    <>
      <div>
        <h1>Votedex</h1>
        <h2>Um jeito novo de escolher seu candidato.</h2>
        <p>
          A base de dados utilizada aqui foi a de candidaturas fornecida pelo
          TSE gratuitamente em seu site. Aplique os filtros de modo que você
          consiga achar candidatos alinhados à sua linha de pensamento.
        </p>
        <p>
          E lembre-se: os candidatos tem que trabalhar para o nosso bem-estar.
          "Contrate-os" com sabedoria. 😉
        </p>
      </div>
      <Filtro />
    </>
  );
}

export default Home;
