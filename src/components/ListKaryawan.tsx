/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import karyawanService from "../service/service.ts";
import Logout from "./Logout.tsx";
import Navbar from "./Navbar.tsx";

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

          <>
            <Navbar />
            <div className="container my-4">
              <h3>List Karyawan</h3>
              <div>
                <Link to="/tambah" className="btn btn-success mb-3">Tambah Karyawan</Link>
                <table className="table table-striped text-center">
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
                                <Link className="btn btn-info m" to={`/edit/${item.id}`}>Edit</Link>
                                <button className="btn btn-danger ms-2" onClick={
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
                </table>
              </div>
            </div>
          </>

          :
          
          navigate("/")
      }
    </>
  );
}
