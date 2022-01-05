import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import karyawanService from "../service/service.ts";

export default function Tabel() {
  const [karyawan, setKaryawan] = useState([]);

  const init = () => {
    karyawanService.getAll()
      .then(res => {
        setKaryawan(res.data);
        console.log(karyawan);
      })
      .catch(err => {
        console.log(err);
      })
  }

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

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-3 ms-auto mb-3">
        <input type="text" name="" id="" placeholder="Cari data..."  className="bg-dark text-white form-control"/>
        </div>
      </div>
      <table className="table table-dark table-striped text-center">
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
      </table>
    </div>
  )


}