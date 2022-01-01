import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListKaryawan from './components/ListKaryawan.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddKaryawan from './components/AddKaryawan.tsx';
import Error404 from './components/404.tsx';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<ListKaryawan />} />
            <Route path="/tambah" element={<AddKaryawan />} />
            <Route path="/edit/:id" element={<AddKaryawan />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
