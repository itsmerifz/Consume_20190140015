/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import karyawanService from "../service/service.ts";
import Navbar from "./Navbar.tsx";
import Tabel from "./DataTable.tsx";

export default function ListKaryawan() {
  // const [karyawan, setKaryawan] = useState([]);

  const navigate = useNavigate();

  // const init = () => {
  //   karyawanService.getAll()
  //     .then(res => {
  //       console.log(res);
  //       setKaryawan(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  // useEffect(() => {
  //   init();
  // }, []);

  // const handleDelete = (id) => {
  //   karyawanService.remove(id)
  //     .then(res => {
  //       console.log(res.data);
  //       init();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
  return (
    <>
      {
        localStorage.getItem("googleId") !== null ?

          <div className="bg-dark">
            <Navbar />
            <div className="container my-4 h-100">
              <h3>List Karyawan</h3>
              <div>
                <Link to="/tambah" className="btn btn-outline-success mb-3">Tambah Karyawan</Link>
                <Tabel />
              </div>
            </div>
          </div>

          :
          
          navigate("/")
      }
    </>
  );
}
