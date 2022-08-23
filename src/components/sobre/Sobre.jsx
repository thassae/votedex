import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Sobre() {
  return (
    <>
      <h1>Olá, estranho(a).</h1>
      <p>
        Meu nome é <a href="https://www.twitter.com/thassae">Thassae Santos</a>.
        Mexo com esse troço de TI desde que a internet era mato e fiz esse app
        para ajudar um pouco nesse momento de escolha política. Cansei um tanto
        de ouvir tanta gente reclamando de política enquanto, na minha
        concepção, é tudo fruto de más escolhas ou desinteresse no processo
        político.
      </p>
      <p>
        Sei que o layout está uma droga mas foi o que deu pra fazer sozinho
        entre trabalho, família, vida social e manter a sanidade mental. Então,
        me dá um desconto e foca no conteúdo, por favor.
      </p>
      <p>
        A base de dados utilizada aqui foi a de candidaturas fornecida pelo TSE
        gratuitamente em seu site. Portanto, quaisquer problemas com
        terminologias e afins nos filtros, pode reclamar direto com a galera de
        lá, okay?
      </p>
      <p>
        E lembre-se: os candidatos tem que trabalhar para o nosso bem-estar.
        Então vê se escolhe direitinho, viu? 😉
      </p>
      <p>
        <strong>PS:</strong> Aos que pegarem o{" "}
        <a href="https://github.com/thassae/votedex">código-fonte pra fuçar</a>,
        eu juro que programo melhor que isso. Se for copiar, só me dá os
        créditos e me avisa, por favor? 🤣🤣🤣
      </p>
      <center>
        <Button variant="contained" component={Link} to="/">
          Ok, me devolve pra página inicial! 😡
        </Button>
      </center>
    </>
  );
}

export default Sobre;
