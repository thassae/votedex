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
    nome: "",
    numero: "",
    reeleicao: "N",
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
  candidatos: [],
  loading: false,
};

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
  PARTIDOS: "get_partidos",
};

export const PARTIDOS_ESQUERDA = [
  "12",
  "13",
  "16",
  "18",
  "21",
  "29",
  "40",
  "43",
  "50",
  "65",
  "80",
];
export const PARTIDOS_CENTRO = [
  "11",
  "15",
  "19",
  "36",
  "44",
  "55",
  "70",
  "77",
  "90",
];
export const PARTIDOS_DIREITA = [
  "10",
  "14",
  "20",
  "22",
  "23",
  "27",
  "28",
  "30",
  "33",
  "35",
  "45",
  "51",
];

export const ESPECTRO_POLITICO = [
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

export const MOCK_DATA = [
  {
    _id: "62fd9f2a37efcc50cb664c34",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001607829",
    nr_candidato: "13",
    nm_candidato: "LUIZ INÁCIO LULA DA SILVA",
    nm_urna_candidato: "LULA",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "7068093868",
    nm_email: "ADVOGADOS@ARAGAOEFERRARO.COM",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "COLIGAÇÃO",
    nr_partido: "13",
    sg_partido: "PT",
    nm_partido: "PARTIDO DOS TRABALHADORES",
    nr_federacao: "2",
    nm_federacao: "Federação Brasil da Esperança - FE BRASIL",
    sg_federacao: "PT/PC do B/PV",
    ds_composicao_federacao: "PT / PV / PC do B",
    sq_coligacao: "280001681359",
    nm_coligacao: "COLIGAÇÃO BRASIL DA ESPERANÇA",
    ds_composicao_coligacao:
      "PT/PC do B/PV / SOLIDARIEDADE / PSOL/REDE / PSB / AGIR / AVANTE / PROS",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "PE",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "GARANHUNS",
    dt_nascimento: "06/10/1945",
    nr_idade_data_posse: "77",
    nr_titulo_eleitoral_candidato: "122418060191",
    cd_genero: "2",
    ds_genero: "MASCULINO",
    cd_grau_instrucao: "4",
    ds_grau_instrucao: "ENSINO FUNDAMENTAL COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "249",
    ds_ocupacao: "TORNEIRO MECÂNICO",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06006961220226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f2a37efcc50cb66540b",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001677435",
    nr_candidato: "27",
    nm_candidato: "JOSE MARIA EYMAEL",
    nm_urna_candidato: "CONSTITUINTE EYMAEL",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "1061712834",
    nm_email: "SECRETARIA@DEMOCRACIACRISTA.ORG.BR",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "PARTIDO ISOLADO",
    nr_partido: "27",
    sg_partido: "DC",
    nm_partido: "DEMOCRACIA CRISTÃ",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001684145",
    nm_coligacao: "PARTIDO ISOLADO",
    ds_composicao_coligacao: "DC",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "RS",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "PORTO ALEGRE",
    dt_nascimento: "02/11/1939",
    nr_idade_data_posse: "83",
    nr_titulo_eleitoral_candidato: "086137520124",
    cd_genero: "2",
    ds_genero: "MASCULINO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "131",
    ds_ocupacao: "ADVOGADO",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06007662920226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f2a37efcc50cb66546f",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001644128",
    nr_candidato: "44",
    nm_candidato: "SORAYA VIEIRA THRONICKE",
    nm_urna_candidato: "SORAYA THRONICKE",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "60838965172",
    nm_email: "SORAYATHRONICKE@GMAIL.COM",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "PARTIDO ISOLADO",
    nr_partido: "44",
    sg_partido: "UNIÃO",
    nm_partido: "UNIÃO BRASIL",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001683105",
    nm_coligacao: "PARTIDO ISOLADO",
    ds_composicao_coligacao: "UNIÃO",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "MS",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "DOURADOS",
    dt_nascimento: "01/06/1973",
    nr_idade_data_posse: "49",
    nr_titulo_eleitoral_candidato: "013250921929",
    cd_genero: "4",
    ds_genero: "FEMININO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "276",
    ds_ocupacao: "SENADOR",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06007533020226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f2a37efcc50cb665677",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001612393",
    nr_candidato: "12",
    nm_candidato: "CIRO FERREIRA GOMES",
    nm_urna_candidato: "CIRO GOMES",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "12005509353",
    nm_email: "CIROGOMES@PDT.ORG.BR",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "PARTIDO ISOLADO",
    nr_partido: "12",
    sg_partido: "PDT",
    nm_partido: "PARTIDO DEMOCRÁTICO TRABALHISTA",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001681612",
    nm_coligacao: "PARTIDO ISOLADO",
    ds_composicao_coligacao: "PDT",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "SP",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "PINDAMONHANGABA",
    dt_nascimento: "06/11/1957",
    nr_idade_data_posse: "65",
    nr_titulo_eleitoral_candidato: "009288940752",
    cd_genero: "2",
    ds_genero: "MASCULINO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "9",
    ds_estado_civil: "DIVORCIADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "131",
    ds_ocupacao: "ADVOGADO",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06007160320226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f2d37efcc50cb666189",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001607833",
    nr_candidato: "15",
    nm_candidato: "SIMONE NASSAR TEBET",
    nm_urna_candidato: "SIMONE TEBET",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "1099561760",
    nm_email: "RICARDOVITAPORTO@GMAIL.COM",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "COLIGAÇÃO",
    nr_partido: "15",
    sg_partido: "MDB",
    nm_partido: "MOVIMENTO DEMOCRÁTICO BRASILEIRO",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001681361",
    nm_coligacao: "Coligação Brasil para Todos",
    ds_composicao_coligacao: "MDB / PSDB/CIDADANIA / PODE",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "MS",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "TRÊS LAGOAS",
    dt_nascimento: "22/02/1970",
    nr_idade_data_posse: "52",
    nr_titulo_eleitoral_candidato: "008434731953",
    cd_genero: "4",
    ds_genero: "FEMININO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "131",
    ds_ocupacao: "ADVOGADO",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06006927220226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f3237efcc50cb667393",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001603612",
    nr_candidato: "30",
    nm_candidato: "LUIZ FELIPE CHAVES D AVILA",
    nm_urna_candidato: "FELIPE D AVILA",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "8720335890",
    nm_email: "ELEITORAL@BESSONIFORTES.COM.BR",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "PARTIDO ISOLADO",
    nr_partido: "30",
    sg_partido: "NOVO",
    nm_partido: "PARTIDO NOVO",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001681210",
    nm_coligacao: "PARTIDO ISOLADO",
    ds_composicao_coligacao: "NOVO",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "SP",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "SÃO PAULO",
    dt_nascimento: "24/08/1963",
    nr_idade_data_posse: "59",
    nr_titulo_eleitoral_candidato: "167300430116",
    cd_genero: "2",
    ds_genero: "MASCULINO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "159",
    ds_ocupacao: "CIENTISTA POLÍTICO",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06006615220226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f3737efcc50cb66891a",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001600179",
    nr_candidato: "90",
    nm_candidato: "PABLO HENRIQUE COSTA MARÇAL",
    nm_urna_candidato: "PABLO MARÇAL",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "1321223161",
    nm_email: "PABLOVIDE@GMAIL.COM",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "COLIGAÇÃO",
    nr_partido: "90",
    sg_partido: "PROS",
    nm_partido: "PARTIDO REPUBLICANO DA ORDEM SOCIAL",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001681359",
    nm_coligacao: "COLIGAÇÃO BRASIL DA ESPERANÇA",
    ds_composicao_coligacao:
      "PT/PC do B/PV / SOLIDARIEDADE / PSOL/REDE / PSB / AGIR / AVANTE / PROS",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "GO",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "GOIÂNIA",
    dt_nascimento: "18/04/1987",
    nr_idade_data_posse: "35",
    nr_titulo_eleitoral_candidato: "049143831023",
    cd_genero: "2",
    ds_genero: "MASCULINO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "257",
    ds_ocupacao: "EMPRESÁRIO",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06006380920226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f3837efcc50cb668d3a",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001618036",
    nr_candidato: "22",
    nm_candidato: "JAIR MESSIAS BOLSONARO",
    nm_urna_candidato: "JAIR BOLSONARO",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "45317828791",
    nm_email: "MAURO.CIO@PRESIDENCIA.GOV.BR",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "COLIGAÇÃO",
    nr_partido: "22",
    sg_partido: "PL",
    nm_partido: "PARTIDO LIBERAL",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001682069",
    nm_coligacao: "Pelo bem do Brasil",
    ds_composicao_coligacao: "PP / REPUBLICANOS / PL",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "SP",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "CAMPINAS",
    dt_nascimento: "21/03/1955",
    nr_idade_data_posse: "67",
    nr_titulo_eleitoral_candidato: "015564190337",
    cd_genero: "2",
    ds_genero: "MASCULINO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "272",
    ds_ocupacao: "PRESIDENTE DA REPÚBLICA",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "S",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06007290220226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f3837efcc50cb668db3",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001607831",
    nr_candidato: "16",
    nm_candidato: "VERA LUCIA PEREIRA DA SILVA SALGADO",
    nm_urna_candidato: "VERA",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "33619352534",
    nm_email: "VERALSE16@GMAIL.COM",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "PARTIDO ISOLADO",
    nr_partido: "16",
    sg_partido: "PSTU",
    nm_partido: "PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001681360",
    nm_coligacao: "PARTIDO ISOLADO",
    ds_composicao_coligacao: "PSTU",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "PE",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "INAJÁ",
    dt_nascimento: "12/09/1967",
    nr_idade_data_posse: "55",
    nr_titulo_eleitoral_candidato: "005848412151",
    cd_genero: "4",
    ds_genero: "FEMININO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "02",
    ds_cor_raca: "PRETA",
    cd_ocupacao: "999",
    ds_ocupacao: "OUTROS",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06006935720226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f3d37efcc50cb669e86",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001602702",
    nr_candidato: "80",
    nm_candidato: "LEONARDO PÉRICLES VIEIRA ROQUE",
    nm_urna_candidato: "LÉO PÉRICLES",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "1241546622",
    nm_email: "SANTOS_THIAGO.ADV@OUTLOOK.COM",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "PARTIDO ISOLADO",
    nr_partido: "80",
    sg_partido: "UP",
    nm_partido: "UNIDADE POPULAR",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001681181",
    nm_coligacao: "PARTIDO ISOLADO",
    ds_composicao_coligacao: "UP",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "MG",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "BELO HORIZONTE",
    dt_nascimento: "26/08/1981",
    nr_idade_data_posse: "41",
    nr_titulo_eleitoral_candidato: "137526940264",
    cd_genero: "2",
    ds_genero: "MASCULINO",
    cd_grau_instrucao: "6",
    ds_grau_instrucao: "ENSINO MÉDIO COMPLETO",
    cd_estado_civil: "1",
    ds_estado_civil: "SOLTEIRO(A)",
    cd_cor_raca: "02",
    ds_cor_raca: "PRETA",
    cd_ocupacao: "155",
    ds_ocupacao: "TÉCNICO DE MECÂNICA",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06006502320226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f3e37efcc50cb66a1a9",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001655452",
    nr_candidato: "14",
    nm_candidato: "ROBERTO JEFFERSON MONTEIRO FRANCISCO",
    nm_urna_candidato: "ROBERTO JEFFERSON",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "28090764720",
    nm_email: "PRESIDENTEROBERTOJEFFERSON2022@PTB.ORG.BR",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "PARTIDO ISOLADO",
    nr_partido: "14",
    sg_partido: "PTB",
    nm_partido: "PARTIDO TRABALHISTA BRASILEIRO",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001683500",
    nm_coligacao: "PARTIDO ISOLADO",
    ds_composicao_coligacao: "PTB",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "RJ",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "PETRÓPOLIS",
    dt_nascimento: "14/06/1953",
    nr_idade_data_posse: "69",
    nr_titulo_eleitoral_candidato: "000014950388",
    cd_genero: "2",
    ds_genero: "MASCULINO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "3",
    ds_estado_civil: "CASADO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "131",
    ds_ocupacao: "ADVOGADO",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06007610720226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
  {
    _id: "62fd9f4237efcc50cb66b36c",
    dt_geracao: "16/08/2022",
    hh_geracao: "18:35:27",
    ano_eleicao: "2022",
    cd_tipo_eleicao: "2",
    nm_tipo_eleicao: "ELEIÇÃO ORDINÁRIA",
    nr_turno: "1",
    cd_eleicao: "544",
    ds_eleicao: "Eleição Geral Federal 2022",
    dt_eleicao: "02/10/2022",
    tp_abrangencia: "FEDERAL",
    sg_uf: "BR",
    sg_ue: "BR",
    nm_ue: "BRASIL",
    cd_cargo: "1",
    ds_cargo: "PRESIDENTE",
    sq_candidato: "280001600167",
    nr_candidato: "21",
    nm_candidato: "SOFIA PADUA MANZANO",
    nm_urna_candidato: "SOFIA MANZANO",
    nm_social_candidato: "#NULO#",
    nr_cpf_candidato: "15256440845",
    nm_email: "PCB@PCB.ORG.BR",
    cd_situacao_candidatura: "1",
    ds_situacao_candidatura: "CADASTRADO",
    cd_detalhe_situacao_cand: "8",
    ds_detalhe_situacao_cand: "AGUARDANDO JULGAMENTO",
    tp_agremiacao: "PARTIDO ISOLADO",
    nr_partido: "21",
    sg_partido: "PCB",
    nm_partido: "PARTIDO COMUNISTA BRASILEIRO",
    nr_federacao: "-1",
    nm_federacao: "#NULO#",
    sg_federacao: "#NULO#",
    ds_composicao_federacao: "#NULO#",
    sq_coligacao: "280001681036",
    nm_coligacao: "PARTIDO ISOLADO",
    ds_composicao_coligacao: "PCB",
    cd_nacionalidade: "1",
    ds_nacionalidade: "BRASILEIRA NATA",
    sg_uf_nascimento: "SP",
    cd_municipio_nascimento: "-3",
    nm_municipio_nascimento: "SÃO PAULO",
    dt_nascimento: "19/05/1971",
    nr_idade_data_posse: "51",
    nr_titulo_eleitoral_candidato: "199476820191",
    cd_genero: "4",
    ds_genero: "FEMININO",
    cd_grau_instrucao: "8",
    ds_grau_instrucao: "SUPERIOR COMPLETO",
    cd_estado_civil: "1",
    ds_estado_civil: "SOLTEIRO(A)",
    cd_cor_raca: "01",
    ds_cor_raca: "BRANCA",
    cd_ocupacao: "297",
    ds_ocupacao: "SERVIDOR PÚBLICO ESTADUAL",
    vr_despesa_max_campanha: "88944030.8",
    cd_sit_tot_turno: "-1",
    ds_sit_tot_turno: "#NULO#",
    st_reeleicao: "N",
    st_declarar_bens: "S",
    nr_protocolo_candidatura: "-1",
    nr_processo: "06006355420226000000",
    cd_situacao_candidato_pleito: "-1",
    ds_situacao_candidato_pleito: "#NULO#",
    cd_situacao_candidato_urna: "-1",
    ds_situacao_candidato_urna: "#NULO#",
    st_candidato_inserido_urna: "NÃO",
    nm_tipo_destinacao_votos: "#NULO#",
    cd_situacao_candidato_tot: "-1",
    ds_situacao_candidato_tot: "#NULO#",
    st_prest_contas: "N",
  },
];
