import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
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
  ativarLoading,
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
        { titulo: "Espectro Pol??tico", data: ESPECTRO_POLITICO },
        {
          titulo: "Partidos",
          data: dataPartidos.map((partido) => ({
            codigo: partido.numero,
            nome: partido.sigla,
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
    dispatch(ativarLoading(true));
    const fetchCandidatos = async () => {
      const data = await getCandidatos(selecionados);
      if (!data.length) {
        data.push("");
      }
      dispatch(atualizaCandidatos(data));
    };

    fetchCandidatos().finally(() => dispatch(ativarLoading(false)));
  };

  return (
    <div className="filtro">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SearchBox
            id="numero"
            label="N??mero"
            selectedList={selecionados}
            handlerEvent={handleChange}
            maxLength={5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SearchBox
            id="nome"
            label="Nome"
            selectedList={selecionados}
            handlerEvent={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MultiSelect
            id="estados"
            label="Estados"
            selectedList={selecionados}
            optionList={filtros}
            keyField="codigo"
            valueField="nome"
            handlerEvent={handleChange}
            disabled={
              selecionados.cargos.length === 1 &&
              selecionados.cargos.includes("1")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MultiSelect
            id="cargos"
            label="Cargo"
            selectedList={selecionados}
            optionList={filtros}
            keyField="codigo"
            valueField="nome"
            handlerEvent={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MultiSelect
            id="partidos"
            label="Partido / Espectro Pol??tico"
            selectedList={selecionados}
            optionList={filtros}
            keyField="codigo"
            valueField="nome"
            handlerEvent={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MultiSelect
            id="generos"
            label="G??nero"
            selectedList={selecionados}
            optionList={filtros}
            keyField="codigo"
            valueField="nome"
            handlerEvent={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MultiSelect
            id="coresRacas"
            label="Cor/Ra??a"
            selectedList={selecionados}
            optionList={filtros}
            keyField="codigo"
            valueField="nome"
            handlerEvent={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MultiSelect
            id="estadosCivis"
            label="Estado Civil"
            selectedList={selecionados}
            optionList={filtros}
            keyField="codigo"
            valueField="nome"
            handlerEvent={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MultiSelect
            id="instrucoes"
            label="Instru????o"
            selectedList={selecionados}
            optionList={filtros}
            keyField="codigo"
            valueField="nome"
            handlerEvent={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MultiSelect
            id="ocupacoes"
            label="Ocupa????o"
            selectedList={selecionados}
            optionList={filtros}
            keyField="codigo"
            valueField="nome"
            handlerEvent={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={(event) => handleSwitchChange(event, "reeleicao")}
                />
              }
              label="Somente candidatos a reelei????o."
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={reiniciarFiltro}>
              Reiniciar
            </Button>
            <Button variant="contained" onClick={buscarCandidatos}>
              Buscar
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Filtro;
