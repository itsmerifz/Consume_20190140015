/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import karyawanService from "../service/service.ts";
import Navbar from "./Navbar.tsx";
import Tabel from "./DataTable.tsx";

export default function ListKaryawan() {
  const [karyawan, setKaryawan] = useState([]);
  // const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const init = () => {
    karyawanService.getAll()
      .then(res => {
        console.log(res);
        setKaryawan(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    karyawanService.remove(id)
      .then(res => {
        console.log(res.data);
        init();
      })
      .catch(err => {
        console.log(err);
      })
  }
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
                {/* <table className="table table-dark table-striped text-center">
                  <thead className="thead-primary">
                    <tr>
                      <th>No.</th>
                      <th>Nama</th>
                      <th>Alamat</th>
                      <th>Departemen</th>
                      <th>Tahun Kerja</th>
                      <th>Masa Kerja</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      karyawan.map((item, idx) => {
                        return (
                          <tr key={item.id}>
                            <td>{idx + 1}</td>
                            <td>{item.nama}</td>
                            <td>{item.alamat}</td>
                            <td>{item.departemen}</td>
                            <td>{item.thnKerja}</td>
                            <td>{parseInt(new Date().getFullYear().toString()) - parseInt(item.thnKerja)} Tahun</td>
                            <td>
                              <div className="d-flex justify-content-center">
                                <Link className="btn btn-outline-info" to={`/edit/${item.id}`}>Edit</Link>
                                <button className="btn btn-outline-danger ms-2" onClick={
                                  () => {
                                    if (window.confirm('Apakah anda yakin akan menghapus data ini?') === true) {
                                      handleDelete(item.id)
                                    }
                                  }
                                }>Hapus</button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>

          :
          
          navigate("/")
      }
    </>
  );
}
