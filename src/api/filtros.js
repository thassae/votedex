import { BASE_URL, URLBusca } from "./constantes";
import { getData } from "./request";

export async function getEstados() {
  let url = BASE_URL + URLBusca.UF;
  return await getData(url);
}

export async function getCargos() {
  let url = BASE_URL + URLBusca.CARGOS;
  return await getData(url);
}

export async function getPartidos() {
  let url = BASE_URL + URLBusca.PARTIDOS;
  return await getData(url);
}

export async function getFederacoes() {
  let url = BASE_URL + URLBusca.FEDERACOES;
  return await getData(url);
}

export async function getGeneros() {
  let url = BASE_URL + URLBusca.GENERO;
  return await getData(url);
}

export async function getCorRaca() {
  let url = BASE_URL + URLBusca.COR_RACA;
  return await getData(url);
}

export async function getOcupacao() {
  let url = BASE_URL + URLBusca.OCUPACAO;
  return await getData(url);
}

export async function getGrausInstrucao() {
  let url = BASE_URL + URLBusca.INSTRUCAO;
  return await getData(url);
}

export async function getEstadoCivil() {
  let url = BASE_URL + URLBusca.ESTADO_CIVIL;
  return await getData(url);
}
