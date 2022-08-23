import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useEffect, useReducer } from "react";
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
import "./Filtro.scss";

function Filtro() {
  const [state, dispatch] = useReducer(reducer, ESTADO_INICIAL);

  const ESPECTRO_POLITICO = [
    {
      codigo: "E",
      nome: "Partidos de Esquerda",
    },
    {
      codigo: "C",
      nome: "Partidos de Centro",
    },
    {
      codigo: "D",
      nome: "Partidos de Direita",
    },
  ];

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
      atualizaEstadoFiltro("cargos", data);
    };
    const fetchEstados = async () => {
      const data = await getEstados();
      atualizaEstadoFiltro("estados", data);
    };

    const fetchEstadosCivis = async () => {
      const data = await getEstadoCivil();
      atualizaEstadoFiltro("estadosCivis", data);
    };

    const fetchFederacoes = async () => {
      const data = await getFederacoes();
      atualizaEstadoFiltro("federacoes", data);
    };

    const fetchCorRaca = async () => {
      const data = await getCorRaca();
      atualizaEstadoFiltro("coresRacas", data);
    };

    const fetchGeneros = async () => {
      const data = await getGeneros();
      atualizaEstadoFiltro("generos", data);
    };

    const fetchOcupacao = async () => {
      const data = await getOcupacao();
      atualizaEstadoFiltro("ocupacoes", data);
    };

    const fetchPartidos = async () => {
      const data = await getPartidos();
      atualizaEstadoFiltro("partidos", data);
    };

    const fetchGrauInstrucao = async () => {
      const data = await getGrausInstrucao();
      atualizaEstadoFiltro("instrucoes", data);
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
        fetchFederacoes(),
      ]);
  }, []);

  const handleChange = (event, nomeFiltro) => {
    const obj = {
      type: TiposAcoes.ATUALIZA_SELECAO,
      payload: { nome: nomeFiltro, dados: event.target.value },
    };
    dispatch(obj);
    console.log(state);
  };

  return (
    <div className="filtro">
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="cargo-label">Cargo</InputLabel>
          <Select
            labelId="cargo-label"
            id="cargo"
            value={state.selecionados.cargos}
            label="Cargo"
            onChange={(event) => handleChange(event, "cargos")}
            input={<OutlinedInput label="Cargo" />}
            renderValue={(selected) => {
              const nomes = state.filtros.cargos.filter((item) =>
                selected.includes(item.codigo)
              );
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {nomes.map((value) => (
                    <Chip key={value.codigo} label={value.nome} />
                  ))}
                </Box>
              );
            }}
            multiple
          >
            {state.filtros.cargos.map((cargo) => (
              <MenuItem key={cargo.codigo} value={cargo.codigo}>
                <Checkbox
                  checked={state.selecionados.cargos.indexOf(cargo.codigo) > -1}
                />
                <ListItemText primary={cargo.nome} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 400 }}>
        <FormControl
          fullWidth
          size="small"
          disabled={
            state.selecionados.cargos.length === 1 &&
            state.selecionados.cargos.includes("1")
          }
        >
          <InputLabel id="estados-label">Estado</InputLabel>
          <Select
            labelId="estados-label"
            id="estados"
            value={state.selecionados.estados}
            label="Estado"
            onChange={(event) => handleChange(event, "estados")}
            multiple
          >
            {state.filtros.estados.map((estado) => (
              <MenuItem value={estado.codigo}>{estado.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="partidos-label">
            Partido / Espectro Político
          </InputLabel>
          <Select
            labelId="partidos-label"
            id="partidos"
            value={state.selecionados.partidos}
            label="Partido / Espectro Político"
            onChange={(event) => handleChange(event, "partidos")}
            multiple
          >
            <ListSubheader>Espectro Político</ListSubheader>
            {ESPECTRO_POLITICO.map((espectro) => (
              <MenuItem value={espectro.codigo}>{espectro.nome}</MenuItem>
            ))}
            <ListSubheader>Federação Partidária</ListSubheader>
            {state.filtros.federacoes.map((federacao) => (
              <MenuItem value={federacao.codigo}>{federacao.composicao}</MenuItem>
            ))}
            <ListSubheader>Partidos</ListSubheader>
            {state.filtros.partidos.map((partido) => (
              <MenuItem value={partido.numero}>{partido.sigla}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="genero-label">Gênero</InputLabel>
          <Select
            labelId="genero-label"
            id="genero"
            value={state.selecionados.generos}
            label="Gênero"
            onChange={(event) => handleChange(event, "generos")}
            multiple
          >
            {state.filtros.generos.map((genero) => (
              <MenuItem value={genero.codigo}>{genero.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="cor-raca-label">Cor/Raça</InputLabel>
          <Select
            labelId="cor-raca-label"
            id="cor-raca"
            value={state.selecionados.coresRacas}
            label="Cor/Raça"
            onChange={(event) => handleChange(event, "coresRacas")}
            multiple
          >
            {state.filtros.coresRacas.map((cor) => (
              <MenuItem value={cor.codigo}>{cor.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="estado-civil-label">Estado Civil</InputLabel>
          <Select
            labelId="estado-civil-label"
            id="estado-civil"
            value={state.selecionados.estadosCivis}
            label="Estado Civil"
            onChange={(event) => handleChange(event, "estadosCivis")}
            multiple
          >
            {state.filtros.estadosCivis.map((estadoCivil) => (
              <MenuItem value={estadoCivil.codigo}>{estadoCivil.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="instrucao-label">Instrução</InputLabel>
          <Select
            labelId="instrucao-label"
            id="instrucao"
            value={state.selecionados.instrucoes}
            label="Instrução"
            onChange={(event) => handleChange(event, "instrucoes")}
            multiple
          >
            {state.filtros.instrucoes.map((instrucao) => (
              <MenuItem value={instrucao.codigo}>{instrucao.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="ocupacao-label">Ocupação</InputLabel>
          <Select
            labelId="ocupacao-label"
            id="ocupacao"
            value={state.selecionados.ocupacoes}
            label="Ocupação"
            onChange={(event) => handleChange(event, "ocupacoes")}
            multiple
          >
            {state.filtros.ocupacoes.map((ocupacao) => (
              <MenuItem value={ocupacao.codigo}>{ocupacao.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Reiniciar</Button>
        <Button variant="contained">Buscar</Button>
      </Stack>
    </div>
  );
}
export default Filtro;
