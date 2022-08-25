import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import { useContext, useEffect } from "react";
import { ESPECTRO_POLITICO } from "../../../api/constantes";
import {
  getCandidatos,
  getCargos,
  getCorRaca,
  getEstadoCivil,
  getEstados,
  getGeneros,
  getGrausInstrucao,
  getOcupacao,
  getPartidos,
} from "../../../api/filtros";
import {
  atualizaCandidatos,
  atualizaEstadoFiltro,
  atualizaSelecaoFiltro,
  reiniciaForm,
} from "../../../reducer/actions";
import { DispatchContext } from "../../../reducer/context";
import MultiSelect from "../multi-select/Multiselect";
import SearchBox from "../search-box/SearchBox";
import "./Filtro.scss";

function Filtro(props) {
  const { filtros, selecionados } = props;

  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const fetchCargos = async () => {
      const data = await getCargos();
      dispatch(atualizaEstadoFiltro("cargos", [{ data }]));
    };
    const fetchEstados = async () => {
      const data = await getEstados();
      dispatch(atualizaEstadoFiltro("estados", [{ data }]));
    };

    const fetchEstadosCivis = async () => {
      const data = await getEstadoCivil();
      dispatch(atualizaEstadoFiltro("estadosCivis", [{ data }]));
    };

    const fetchCorRaca = async () => {
      const data = await getCorRaca();
      dispatch(atualizaEstadoFiltro("coresRacas", [{ data }]));
    };

    const fetchGeneros = async () => {
      const data = await getGeneros();
      dispatch(atualizaEstadoFiltro("generos", [{ data }]));
    };

    const fetchOcupacao = async () => {
      const data = await getOcupacao();
      dispatch(atualizaEstadoFiltro("ocupacoes", [{ data }]));
    };

    const fetchPartidos = async () => {
      const dataPartidos = await getPartidos();
      const objPartidos = [
        { titulo: "Espectro Político", data: ESPECTRO_POLITICO },
        {
          titulo: "Partidos",
          data: dataPartidos.map((partido) => ({
            codigo: partido.numero,
            nome: partido.nome,
          })),
        },
      ];
      dispatch(atualizaEstadoFiltro("partidos", objPartidos));
    };

    const fetchGrauInstrucao = async () => {
      const data = await getGrausInstrucao();
      dispatch(atualizaEstadoFiltro("instrucoes", [{ data }]));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event, nomeFiltro) => {
    dispatch(atualizaSelecaoFiltro(event.target.value, nomeFiltro));
  };

  const handleSwitchChange = (event, nomeFiltro) => {
    dispatch(
      atualizaSelecaoFiltro(event.target.checked ? "S" : "N", nomeFiltro)
    );
  };

  const reiniciarFiltro = () => {
    dispatch(reiniciaForm());
  };

  const buscarCandidatos = () => {
    const fetchCandidatos = async () => {
      const data = await getCandidatos(selecionados);
      dispatch(atualizaCandidatos(data));
    };

    fetchCandidatos();
  };

  return (
    <div className="filtro">
      {/* <SearchBox
        id="nome"
        label="Nome"
        selectedList={selecionados}
        handlerEvent={handleChange}
      /> */}
      <MultiSelect
        id="cargos"
        label="Cargo"
        selectedList={selecionados}
        optionList={filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="estados"
        label="Estados"
        selectedList={selecionados}
        optionList={filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
        disabled={
          selecionados.cargos.length === 1 && selecionados.cargos.includes("1")
        }
      />
      <MultiSelect
        id="partidos"
        label="Partido / Espectro Político"
        selectedList={selecionados}
        optionList={filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="generos"
        label="Gênero"
        selectedList={selecionados}
        optionList={filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="coresRacas"
        label="Cor/Raça"
        selectedList={selecionados}
        optionList={filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="estadosCivis"
        label="Estado Civil"
        selectedList={selecionados}
        optionList={filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="instrucoes"
        label="Instrução"
        selectedList={selecionados}
        optionList={filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <MultiSelect
        id="ocupacoes"
        label="Ocupação"
        selectedList={selecionados}
        optionList={filtros}
        keyField="codigo"
        valueField="nome"
        handlerEvent={handleChange}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={(event) => handleSwitchChange(event, "reeleicao")}
            />
          }
          label="Somente candidatos a reeleição."
        />
      </FormGroup>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={reiniciarFiltro}>
          Reiniciar
        </Button>
        <Button variant="contained" onClick={buscarCandidatos}>
          Buscar
        </Button>
      </Stack>
    </div>
  );
}

export default Filtro;
