import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import karyawanService from "../service/service.ts";

export default function Tabel() {
  const [karyawan, setKaryawan] = useState([]);
  const [search, setSearch] = useState('');

  const init = () => {
    search === '' ?
    karyawanService.getAll()
      .then(res => {
        setKaryawan(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      :
      karyawanService.search(search)
      .then(res => {
        setKaryawan(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleDelete = (id) => {
    karyawanService.remove(id)
      .then(res => {
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
        <div className="col-4 ms-auto">
          <form className="mb-3">
            <div className="form-group d-flex">
              <input type="text" name="" id="" placeholder="Cari data..." className="bg-dark text-white form-control me-3" onChange={e => {
                setSearch(e.target.value);
              }} />
              <button type="button" className="btn btn-outline-primary ml-2" onClick={() => {
                init();
              }
              }>Cari</button>
            </div>
          </form>
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
            karyawan ?

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
            :
            <tr>
              <td colSpan={7}>
                <div className="d-flex justify-content-center">
                  <div className="text-white" role="status">
                    <span className="sr-only">Tidak ada data!</span>
                  </div>
                </div>
              </td>
            </tr>

          }
        </tbody>
      </table>
    </div>
  )


}