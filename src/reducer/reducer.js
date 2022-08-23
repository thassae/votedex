export const TiposAcoes = {
  ATUALIZA_FILTRO: "ATUALIZA_FILTRO",
  ATUALIZA_SELECAO: "ATUALIZA_SELECAO",
};

export const ESTADO_INICIAL = {
  filtros: {
    cargos: [],
    estados: [],
    coresRacas: [],
    generos: [],
    ocupacoes: [],
    partidos: [],
    instrucoes: [],
    federacoes: [],
    estadosCivis: [],
  },
  selecionados: {
    cargos: [],
    estados: [],
    coresRacas: [],
    generos: [],
    ocupacoes: [],
    partidos: [],
    instrucoes: [],
    federacoes: [],
    estadosCivis: [],
  },
};

export function reducer(state, action) {
  switch (action.type) {
    case TiposAcoes.ATUALIZA_FILTRO:
      return {
        ...state,
        filtros: {
          ...state.filtros,
          [action.payload.nome]: action.payload.dados,
        },
      };
    case TiposAcoes.ATUALIZA_SELECAO:
      return {
        ...state,
        selecionados: {
          ...state.selecionados,
          [action.payload.nome]: action.payload.dados,
        },
      };
    default:
      throw new Error();
  }
}
