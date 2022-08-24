import * as React from "react";
import Link from "@mui/material/Link";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import { MOCK_DATA } from "../../../api/constantes";

const url =
  "https://divulgacandcontas.tse.jus.br/divulga/#/candidato/2022/2040602022/#UF#/#CODIGO#";
const RenderCandidatoLink = (props) => {
  const { value, row } = props;
  const urlCandidato = url
    .replace("#UF#", row.sg_ue)
    .replace("#CODIGO#", row.sq_candidato);
  return (
    <strong>
      <a href={urlCandidato} target="_blank">
        {value}
      </a>
    </strong>
  );
};
const RenderBold = (props) => {
  const { value } = props;

  return <strong>{value}</strong>;
};
const columns = [
  {
    field: "nr_candidato",
    headerName: "Número",
    type: "number",
    width: 75,
    align: "center",
    renderCell: RenderBold,
  },
  {
    field: "nm_urna_candidato",
    headerName: "Candidato",
    renderCell: RenderCandidatoLink,
    width: 250,
  },
  { field: "ds_cargo", headerName: "Cargo", width: 200 },
  {
    field: "sg_partido",
    headerName: "Partido",
    width: 100,
    valueGetter: (params) =>
      `${params.row.sg_partido || ""} (${params.row.nr_partido || ""})`,
  },
  {
    field: "nr_idade_data_posse",
    headerName: "Idade (em 01/01/23)",
    type: "number",
    width: 150,
  },
  {
    field: "ds_estado_civil",
    headerName: "Estado Civil",
    width: 250,
  },
  {
    field: "sg_uf_nascimento",
    headerName: "Naturalidade",
    width: 250,
    valueGetter: (params) =>
      `${params.row.nm_municipio_nascimento || ""} (${
        params.row.sg_uf_nascimento || ""
      })`,
  },
  {
    field: "ds_genero",
    headerName: "Gênero",
    width: 250,
  },
  {
    field: "ds_ocupacao",
    headerName: "Ocupação",
    width: 250,
  },
  {
    field: "ds_estado_civil",
    headerName: "Estado Civil",
    width: 250,
  },
];

const rows = MOCK_DATA;

export default function TabelaCandidatos() {
  return rows.length > 0 ? (
    <DataGrid
      autoHeight
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      getRowId={(row) => row._id}
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection={false}
      disableSelectionOnClick={false}
    />
  ) : (
    <p>
      No momento não há nenhum filtro selecionado. Selecione alguns filtros e
      clique em "Buscar" para trazer a lista de candidatos.
    </p>
  );
}
