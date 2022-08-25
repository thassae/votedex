import {
  BASE_URL,
  PARTIDOS_CENTRO,
  PARTIDOS_DIREITA,
  PARTIDOS_ESQUERDA,
  URLBusca,
} from "./constantes";
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

export async function getCandidatos(filtrosSelecionados) {
  let url =
    BASE_URL +
    URLBusca.BUSCA_CANDIDATOS.replace(
      "%QUERY_PARAMS%",
      montaFiltroBusca(filtrosSelecionados)
    );
  return await getData(url);
}

/* Funções auxiliares */
const montaFiltroBusca = (filtrosSelecionados) => {
  return JSON.stringify({
    nm_urna_candidato:
      filtrosSelecionados.nome === ""
        ? { $ne: null }
        : filtrosSelecionados.nome,
    cd_cargo: filtrosSelecionados.cargos.length
      ? { $in: filtrosSelecionados.cargos }
      : { $ne: null },
    sg_ue: filtrosSelecionados.estados.length
      ? { $in: filtrosSelecionados.estados }
      : { $ne: null },
    cd_genero: filtrosSelecionados.generos.length
      ? { $in: filtrosSelecionados.generos }
      : { $ne: null },
    cd_grau_instrucao: filtrosSelecionados.instrucoes.length
      ? { $in: filtrosSelecionados.instrucoes }
      : { $ne: null },
    cd_cor_raca: filtrosSelecionados.coresRacas.length
      ? { $in: filtrosSelecionados.coresRacas }
      : { $ne: null },
    cd_estado_civil: filtrosSelecionados.estadosCivis.length
      ? { $in: filtrosSelecionados.estadosCivis }
      : { $ne: null },
    cd_ocupacao: filtrosSelecionados.ocupacoes.length
      ? { $in: filtrosSelecionados.ocupacoes }
      : { $ne: null },
    st_reeleicao:
      filtrosSelecionados.reeleicao === "S"
        ? filtrosSelecionados.reeleicao
        : { $ne: null },
    ...montaFiltroPartidos(filtrosSelecionados.partidos),
  });
};

const montaFiltroPartidos = (filtroPartidos) => {
  const listaPartidos = filtroPartidos.filter((item) => item.length === 2);
  const listaEspectros = filtroPartidos.filter((item) => {
    return item.length === 1;
  });

  let partidosEspectros = [];
  listaEspectros.forEach((espectro) => {
    switch (espectro) {
      case "E":
        partidosEspectros.push(...PARTIDOS_ESQUERDA);
        break;
      case "C":
        partidosEspectros.push(...PARTIDOS_CENTRO);
        break;
      case "D":
        partidosEspectros.push(...PARTIDOS_DIREITA);
        break;
      default:
        break;
    }
  });

  const listaPartidosFinal = [
    ...new Set([...listaPartidos, ...partidosEspectros]),
  ].sort((a, b) => parseInt(a) - parseInt(b));

  return {
    nr_partido: listaPartidosFinal.length
      ? { $in: listaPartidosFinal }
      : { $ne: null },
  };
};
