import { ESTADO_INICIAL } from "../api/constantes";
import { TiposAcoes } from "./reducer";

export const atualizaEstadoFiltro = (nomeFiltro, dados) => ({
  type: TiposAcoes.ATUALIZA_FILTRO,
  payload: { nome: nomeFiltro, dados },
});

export const atualizaSelecaoFiltro = (valor, nomeFiltro) => ({
  type: TiposAcoes.ATUALIZA_SELECAO,
  payload: { nome: nomeFiltro, dados: valor },
});

export const atualizaCandidatos = (dados) => ({
  type: TiposAcoes.ATUALIZA_CANDIDATOS,
  payload: { dados },
});

export const reiniciaForm = () => ({
  type: TiposAcoes.REINICIA_SELECAO,
  payload: {
    dados: {
      selecionados: ESTADO_INICIAL.selecionados,
      candidatos: ESTADO_INICIAL.candidatos,
    },
  },
});

export const ativarLoading = (ativado) => ({
  type: TiposAcoes.LIGA_DESLIGA_LOADING,
  payload: ativado,
});
