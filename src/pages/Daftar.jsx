import React from "react";
import "./Daftar.css";
import { Link } from "react-router-dom";




const Daftar = () => {
  return (
    <div className="addUser">
      <h3>Daftar</h3>
      <h6>Ayo daftarkan dirimu disini!!!</h6>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name " className="wm">Nama Lengkap:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Masukan Nama Lengkap"
          />
          <label htmlFor="city" className="wm">Kota asal:</label>
          <input
            type="kota asal"
            id="city"
            name="kota asal"
            autoComplete="off"
            placeholder="Pilih Kota asal"
          />
          <label htmlFor="email" className="wm">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Masukan Email"
          />
           <div className="justify-content-end d-flex">
          <button type="submit" class="btn btn-outline-success text-black" href="/Masuk">
            Daftar
          </button>
          </div>
        </div>
      </form>
      <div className="login">
        <p className="text">Sudah punya akun? 
        <Link to="/Masuk" type="submit" class="text">
          Masuk
        </Link>
        </p>
      </div>
    </div>

  )
}

export default Daftar