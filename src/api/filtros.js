import { getData } from "./request";
import { VALUES_URL } from "./constantes";

export async function getEstados() {
  let url = VALUES_URL.replace("%FIELD%", "nm_ue");
  return await getData(url);
}

export async function getCargos() {
    let url = VALUES_URL.replace("%FIELD%", "ds_cargo");
    return await getData(url);
  }

export async function getPartidos() {
  let url = VALUES_URL.replace("%FIELD%", "sg_partido");
  return await getData(url);
}

export async function getGeneros() {
  let url = VALUES_URL.replace("%FIELD%", "ds_genero");
  return await getData(url);
}

export async function getCorRaca() {
  let url = VALUES_URL.replace("%FIELD%", "ds_cor_raca");
  return await getData(url);
}

export async function getOcupacao() {
  let url = VALUES_URL.replace("%FIELD%", "ds_ocupacao");
  return await getData(url);
}

export async function getGrausInstrucao() {
  let url = VALUES_URL.replace("%FIELD%", "ds_grau_instrucao");
  return await getData(url);
}
