import { Link } from "react-router-dom";

export default function error404() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center text-center fw-normal">
      <div>
        <h1 style={{
          fontSize: '100px',
        }}>404 :(</h1>
        <p className="fs-2">Nyari apa bro? halamannya gaada, balik sana.</p>
        <Link to='/list' className="fs-4 text-white">
          <p>Kembali ke halaman utama</p>
        </Link>
      </div>
    </div>
  )
}