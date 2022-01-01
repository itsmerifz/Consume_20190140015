import httpClient from "../axios.ts";

const getAll = () => {
  return httpClient.get("/karyawan");
}

const create = data => {
  return httpClient.post("/karyawan", data);
}

const get = id => {
  return httpClient.get(`/karyawan/${id}`);
}

const update = data => {
  return httpClient.put('/karyawan/', data);
}

const remove = id => {
  return httpClient.delete(`/karyawan/${id}`);
}

export default { getAll, create, get, update, remove };