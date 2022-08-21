import axios from "axios";

export async function getData(url) {
  const res = await axios.get(url);
  return res.data;
}
