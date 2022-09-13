import AutorenewIcon from "@mui/icons-material/Autorenew";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import ReportIcon from "@mui/icons-material/Report";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import "./TabelaCandidatos.scss";
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
      {row.st_reeleicao === "S" && (
        <Tooltip title="Candidato(a) à reeleição.">
          <IconButton>
            <AutorenewIcon color="info" fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
      {row.ds_situacao_candidatura === "INAPTO" && (
        <Tooltip title="Candidato(a) não pode concorrer.">
          <IconButton>
            <DoNotDisturbAltIcon color="error" fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
      {row.ds_situacao_candidatura === "CADASTRADO" && (
        <Tooltip title="Candidato(a) aguardando julgamento de candidatura pelo TSE.">
          <IconButton>
            <ReportIcon color="warning" fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
      {row.ds_situacao_candidatura === "APTO" && (
        <Tooltip title="Candidato(a) com candidatura aprovada pelo TSE.">
          <IconButton>
            <ThumbUpIcon color="success" fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
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
    headerAlign: "center",
    renderCell: RenderBold,
  },
  {
    field: "nm_urna_candidato",
    headerName: "Candidato",
    renderCell: RenderCandidatoLink,
    width: 300,
  },
  {
    field: "ds_cargo",
    headerName: "Cargo",
    width: 200,
    valueGetter: (params) =>
      `${params.row.ds_cargo || ""} ${
        params.row.sg_uf !== "BR" ? "(" + params.row.sg_uf + ")" : ""
      }`,
  },
  {
    field: "sg_partido",
    headerName: "Partido",
    width: 150,
    valueGetter: (params) =>
      `${params.row.sg_partido || ""} (${params.row.nr_partido || ""})`,
  },
  {
    field: "nr_idade_data_posse",
    headerName: "Idade na posse",
    width: 150,
    valueGetter: (params) =>
      `${params.row.nr_idade_data_posse || ""} (${
        params.row.dt_nascimento || ""
      })`,
  },
  {
    field: "ds_estado_civil",
    headerName: "Estado Civil",
    width: 200,
  },
  {
    field: "sg_uf_nascimento",
    headerName: "Naturalidade",
    width: 200,
    valueGetter: (params) =>
      `${params.row.nm_municipio_nascimento || ""} (${
        params.row.sg_uf_nascimento || ""
      })`,
  },
  {
    field: "ds_genero",
    headerName: "Gênero",
    width: 200,
  },
  {
    field: "ds_ocupacao",
    headerName: "Ocupação",
    width: 250,
  },
];

export default function TabelaCandidatos(props) {
  const { candidatos, loading } = props;

  return !loading ? (
    candidatos.length > 0 ? (
      candidatos[0] !== "" ? (
        <>
          <div className="mobileInstructions">
            <div>
              <strong>Usuários de celular:&nbsp;</strong>por favor, toquem na
              tabela e deslizem para os lados para visualizar mais informações.
            </div>
          </div>
          <div className="legenda">
            <strong>Legenda:&nbsp;</strong>
            <div>
              <Tooltip title="Candidato(a) à reeleição.">
                <IconButton>
                  <AutorenewIcon color="info" fontSize="small" />
                </IconButton>
              </Tooltip>
              Candidato(a) à reeleição.
            </div>
            <div>
              <Tooltip title="Candidato(a) não pode concorrer.">
                <IconButton>
                  <DoNotDisturbAltIcon color="error" fontSize="small" />
                </IconButton>
              </Tooltip>
              Candidato(a) não pode concorrer.
            </div>
            <div>
              <Tooltip title="Candidato(a) aguardando julgamento pelo TSE.">
                <IconButton>
                  <ReportIcon color="warning" fontSize="small" />
                </IconButton>
              </Tooltip>
              Candidato(a) aguardando julgamento pelo TSE.
            </div>
            <div>
              <Tooltip title="Candidato(a) aprovado pelo TSE.">
                <IconButton>
                  <ThumbUpIcon color="success" fontSize="small" />
                </IconButton>
              </Tooltip>
              Candidato(a) aprovado pelo TSE.
            </div>
          </div>
          <DataGrid
            autoHeight
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            getRowId={(row) => row._id}
            rows={candidatos}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
            checkboxSelection={false}
            disableSelectionOnClick={false}
          />
        </>
      ) : (
        <center>
          <p>
            Infelizmente, sua busca não retornou resultados. Por favor, tente
            refazer suas seleções de filtro.
          </p>
        </center>
      )
    ) : (
      <center>
        <p>
          No momento não há nenhum filtro selecionado. Selecione alguns filtros
          e clique em "Buscar" para trazer a lista de candidatos.
        </p>
      </center>
    )
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="20vh"
    >
      <CircularProgress size={128} />
    </Box>
  );
}
