export const TiposAcoes = {
  ATUALIZA_FILTRO: "ATUALIZA_FILTRO",
  ATUALIZA_SELECAO: "ATUALIZA_SELECAO",
  REINICIA_SELECAO: "REINICIA_SELECAO",
  ATUALIZA_CANDIDATOS: "ATUALIZA_CANDIDATOS",
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
    case TiposAcoes.REINICIA_SELECAO:
      return {
        ...state,
        selecionados: action.payload.dados.selecionados,
        candidatos: action.payload.dados.candidatos,
      };
    case TiposAcoes.ATUALIZA_CANDIDATOS:
      return {
        ...state,
        candidatos: action.payload.dados,
      };
    default:
      throw new Error();
  }
}
