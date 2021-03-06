import httpClient from "../axios.ts";

const getAll = () => {
  return httpClient.get("/karyawan");
}

const search = nama => {
  return httpClient.get(`/karyawan?nama=${nama}`);
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, get, update, remove, search };