import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Tabel from "./DataTable.tsx";

export default function ListKaryawan() {

  const navigate = useNavigate();

  return (
    <>
      {
        localStorage.getItem("googleId") !== null ?

          <div className="bg-dark">
            <Navbar />
            <div className="container my-4 h-100">
              <h3>List Karyawan</h3>
              <div>
                <Link to="/tambah" className="btn btn-outline-success mt-2">Tambah Karyawan</Link>
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
