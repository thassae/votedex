import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useEffect, useReducer } from "react";
import { ESPECTRO_POLITICO } from "../../../api/constantes";

import {
  getCargos,
  getCorRaca,
  getEstadoCivil,
  getEstados,
  getFederacoes,
  getGeneros,
  getGrausInstrucao,
  getOcupacao,
  getPartidos,
} from "../../../api/filtros";
import { ESTADO_INICIAL, reducer, TiposAcoes } from "../../../reducer/reducer";
import MultiSelect from "../multi-select/Multiselect";
import "./Filtro.scss";
function Filtro() {
  const [state, dispatch] = useReducer(reducer, ESTADO_INICIAL);

  const atualizaEstadoFiltro = (nomeFiltro, dados) => {
    const obj = {
      type: TiposAcoes.ATUALIZA_FILTRO,
      payload: { nome: nomeFiltro, dados },
    };
    dispatch(obj);
  };

  useEffect(() => {
    const fetchCargos = async () => {
      const data = await getCargos();
      atualizaEstadoFiltro("cargos", [{ data }]);
    };
    const fetchEstados = async () => {
      const data = await getEstados();
      atualizaEstadoFiltro("estados", [{ data }]);
    };

    const fetchEstadosCivis = async () => {
      const data = await getEstadoCivil();
      atualizaEstadoFiltro("estadosCivis", [{ data }]);
    };

    const fetchCorRaca = async () => {
      const data = await getCorRaca();
      atualizaEstadoFiltro("coresRacas", [{ data }]);
    };

    const fetchGeneros = async () => {
      const data = await getGeneros();
      atualizaEstadoFiltro("generos", [{ data }]);
    };

    const fetchOcupacao = async () => {
      const data = await getOcupacao();
      atualizaEstadoFiltro("ocupacoes", [{ data }]);
    };

    const fetchPartidos = async () => {
      const dataPartidos = await getPartidos();
      const dataFederacoes = await getFederacoes();
      const objPartidos = [
        { titulo: "Espectro Político", data: ESPECTRO_POLITICO },
        { titulo: "Federações", data: dataFederacoes },
        { titulo: "Partidos", data: dataPartidos },
      ];
      atualizaEstadoFiltro("partidos", objPartidos);
    };

    const fetchGrauInstrucao = async () => {
      const data = await getGrausInstrucao();
      atualizaEstadoFiltro("instrucoes", [{ data }]);
    };

    return () =>
      Promise.all([
        fetchCargos(),
        fetchEstados(),
        fetchCorRaca(),
        fetchGeneros(),
        fetchOcupacao(),
        fetchPartidos(),
        fetchGrauInstrucao(),
        fetchEstadosCivis(),
      ]);
  }, []);

  const handleChange = (event, nomeFiltro) => {
    const obj = {
      type: TiposAcoes.ATUALIZA_SELECAO,
      payload: { nome: nomeFiltro, dados: event.target.value },
    };
    dispatch(obj);
  };

  const reiniciaForm = () => {
    const obj = {
      type: TiposAcoes.REINICIA_SELECAO,
      payload: { dados: ESTADO_INICIAL.selecionados },
    };
    dispatch(obj);
  };

  return (
    <div className="filtro">
      <MultiSelect
        id="cargos"
        label="Cargo"
        selectedList={state.selecionados}
        optionList={state.filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="estados"
        label="Estados"
        selectedList={state.selecionados}
        optionList={state.filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
        disabled={
          state.selecionados.cargos.length === 1 &&
          state.selecionados.cargos.includes("1")
        }
      />
      <MultiSelect
        id="partidos"
        label="Partido / Espectro Político"
        selectedList={state.selecionados}
        optionList={state.filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="generos"
        label="Gênero"
        selectedList={state.selecionados}
        optionList={state.filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="coresRacas"
        label="Cor/Raça"
        selectedList={state.selecionados}
        optionList={state.filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="estadosCivis"
        label="Estado Civil"
        selectedList={state.selecionados}
        optionList={state.filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="instrucoes"
        label="Instrução"
        selectedList={state.selecionados}
        optionList={state.filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="ocupacoes"
        label="Ocupação"
        selectedList={state.selecionados}
        optionList={state.filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={reiniciaForm}>
          Reiniciar
        </Button>
        <Button variant="contained">Buscar</Button>
      </Stack>
    </div>
  );
}
export default Filtro;
