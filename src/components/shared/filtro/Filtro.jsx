import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import {
  getCargos,
  getCorRaca,
  getEstados,
  getGeneros,
  getGrausInstrucao,
  getOcupacao,
  getPartidos,
} from "../../../api/filtros";
function Filtro() {
  const [estados, setEstados] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [corRaca, setCorRaca] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [ocupacao, setOcupacao] = useState([]);
  const [grausInstrucao, setGrausInstrucao] = useState([]);
  const [cargos, setCargos] = useState([]);

  const fetchCargos = async () => {
    const data = await getCargos();
    setCargos(data);
  };
  const fetchEstados = async () => {
    const data = await getEstados();
    setEstados(data);
  };

  const fetchCorRaca = async () => {
    const data = await getCorRaca();
    setCorRaca(data);
  };

  const fetchGeneros = async () => {
    const data = await getGeneros();
    setGeneros(data);
  };

  const fetchOcupacao = async () => {
    const data = await getOcupacao();
    setOcupacao(data);
  };

  const fetchPartidos = async () => {
    const data = await getPartidos();
    setPartidos(data);
  };

  const fetchGrauInstrucao = async () => {
    const data = await getGrausInstrucao();
    setGrausInstrucao(data);
  };

  useEffect(() => {
    Promise.all(
      fetchCargos(),
      fetchEstados(),
      fetchCorRaca(),
      fetchGeneros(),
      fetchOcupacao(),
      fetchPartidos(),
      fetchGrauInstrucao()
    );
  }, []);

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="light">
        <Container>
          <FloatingLabel controlId="floatingSelect" label="Eu quero um(a)...">
            <Form.Select aria-label="Floating label select example">
              <option selected>CANDIDATO(A) QUALQUER</option>
              {cargos.map((cargo) => (
                <option>{cargo}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelect"
            label="...concorrendo em/no(a)"
          >
            <Form.Select aria-label="Floating label select example">
              <option selected>QUALQUER ESTADO</option>
              {estados.map((estado) => (
                <option>{estado}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelect"
            label="...que seja do gênero"
          >
            <Form.Select aria-label="Floating label select example">
              <option selected>INDIFERENTE</option>
              {generos.map((genero) => (
                <option>{genero}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="...que seja">
            <Form.Select aria-label="Floating label select example">
              <option selected>DE QUALQUER COR/RAÇA</option>
              {corRaca.map((cor) => (
                <option>{cor}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelect"
            label="...que esteja em partidos de"
          >
            <Form.Select aria-label="Floating label select example">
              <option selected>QUALQUER ESPECTRO POLÍTICO</option>
              <option>ESQUERDA</option>
              <option>CENTRO</option>
              <option>DIREITA</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelect"
            label="...OU que esteja no partido"
          >
            <Form.Select aria-label="Floating label select example">
              <option selected>QUALQUER UM</option>
              {partidos.map((partido) => (
                <option>{partido}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="...que tenha">
            <Form.Select aria-label="Floating label select example">
              <option selected>QUALQUER UM</option>
              {grausInstrucao.map((grauInstrucao) => (
                <option>{grauInstrucao}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <Button>Buscar Candidaturas</Button>
        </Container>
      </Navbar>
    </>
  );
}
export default Filtro;
