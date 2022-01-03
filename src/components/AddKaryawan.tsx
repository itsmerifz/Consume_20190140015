import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../service/service.ts";
import Nav from "./Navbar.tsx";


export default function AddKaryawan() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [thnKerja, setThnKerja] = useState("");
  const [masaKerja, setMasaKerja] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const simpanKaryawan = (e) => {
    e.preventDefault();

    const karyawan = { nama, alamat, departemen, thnKerja, masaKerja, id };
    if (id) { // jika data sudah ada
      // proses update
      service.update(karyawan)
        .then(res => {
          console.log(res.data);
          navigate("/list");
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      // proses simpan
      service.create(karyawan)
        .then(res => {
          console.log(res.data);
          navigate("/list");
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  useEffect(() => {

    if (id) {
      service.get(id)
        .then(res => {
          console.log(res.data);
          setNama(res.data.nama);
          setAlamat(res.data.alamat);
          setDepartemen(res.data.departemen);
          setThnKerja(res.data.thnKerja);
          setMasaKerja(res.data.masaKerja);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, []);

  return (
    <>
      {
        localStorage.getItem("googleId") !== null ?
          <>
            <Nav />
            <div className="container my-4">
              <h3>Tambah Karyawan</h3>
              <hr />
              <form className="bg-dark text-white">
                <div className="row row-cols-2">
                  <div className="form-group my-3">
                    <label htmlFor="nama">Nama</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-white col-8 mt-2 text-white"
                      id="nama"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Masukkan Nama"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="alamat">Alamat</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-white col-8 mt-2 text-white"
                      id="alamat"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Masukkan Alamat"
                    />
                  </div>
                </div>
                <div className="row row-cols-2">
                  <div className="form-group my-3">
                    <label htmlFor="departemen">Departemen</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-white col-8 mt-2 text-white"
                      id="departemen"
                      value={departemen}
                      onChange={(e) => setDepartemen(e.target.value)}
                      placeholder="Masukkan Departemen"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="tahun">Tahun Kerja</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-white col-8 mt-2 text-white"
                      id="tahun"
                      value={thnKerja}
                      onChange={(e) => {
                        setThnKerja(e.target.value)
                      }}
                      placeholder="Masukkan Tahun Kerja"
                    />
                  </div>
                </div>
                <div>
                  <button onClick={e => simpanKaryawan(e)} className="btn btn-outline-warning me-3 my-3">Simpan</button>
                </div>
              </form>
              <hr />
              <Link to="/list" className="text-white">Kembali ke halaman utama</Link>
            </div>
          </>

          :

          navigate("/")
      }
    </>
  )
}
