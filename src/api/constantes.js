export const BASE_URL =
  "https://data.mongodb-api.com/app/votedex-xmisu/endpoint/";

export const URLBusca = {
  BUSCA_CANDIDATOS: "get_candidatos?queryParams=%QUERY_PARAMS%",
  CONTA_CANDIDATOS: "count_candidatos?queryParams=%QUERY_PARAMS%",
  CARGOS: "get_cargos",
  COR_RACA: "get_cor_raca",
  ESTADO_CIVIL: "get_estado_civil",
  UF: "get_uf",
  FEDERACOES: "get_federacoes",
  GENERO: "get_genero",
  INSTRUCAO: "get_instrucao",
  OCUPACAO: "get_ocupacao",
  PARTIDOS: "get_partidos"
};

export const PARTIDOS_ESQUERDA = [12, 13, 16, 18, 21, 29, 40, 43, 50, 65, 80];
export const PARTIDOS_CENTRO = [
  10, 11, 14, 15, 19, 20, 22, 36, 44, 51, 55, 70, 77, 90,
];
export const PARTIDOS_DIREITA = [23, 27, 28, 30, 33, 35, 45];
