import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListKaryawan from './components/ListKaryawan.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddKaryawan from './components/AddKaryawan.tsx';
import Error404 from './components/404.tsx';
import Login from './components/Login.tsx';
import Navbar from './components/Navbar.tsx';


function App() {
  return (
    <div className='bg-dark text-white'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<ListKaryawan />} />
          <Route path="/tambah" element={<AddKaryawan />} />
          <Route path="/edit/:id" element={<AddKaryawan />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
