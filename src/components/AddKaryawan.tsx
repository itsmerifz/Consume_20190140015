import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../service/service.ts";


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
          navigate("/");
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      // proses simpan
      service.create(karyawan)
        .then(res => {
          console.log(res.data);
          navigate("/");
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
    <div className="container">
      <h3>Tambah Karyawan</h3>
      <hr />
      <form>
        <div className="form-group my-3">
          <label htmlFor="nama">Nama</label>
          <input 
            type="text"
            className="form-control col-8"
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
            className="form-control col-8"
            id="alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Masukkan Alamat"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="departemen">Departemen</label>
          <input 
            type="text"
            className="form-control col-8"
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
            className="form-control col-8"
            id="tahun"
            value={thnKerja}
            onChange={(e) => {
              setThnKerja(e.target.value)
            }}
            placeholder="Masukkan Tahun Kerja"
          />
        </div>
        <div>
          <button onClick={e => simpanKaryawan(e)} className="btn btn-warning">Simpan</button>
        </div>
      </form>
      <hr />
      <Link to="/">Kembali ke halaman utama</Link>
    </div>
  )
}
