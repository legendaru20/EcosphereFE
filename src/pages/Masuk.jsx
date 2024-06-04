// src/components/Login.js
import React from "react";
import "./Masuk.css";
import { Link } from "react-router-dom";

const Masuk = () => {

  return (
    <div className="addPengguna">
    <h3>Masuk</h3>
    <form className="addPenggunaForm">
      <div className="inputGroup">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="Email" className="rounded-5"
        />
        <label htmlFor="Password"></label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          placeholder="Kata Sandi" className="rounded-5 "
        />
        <button type="submit" class="btn btn-outline-success rounded-5 mt-5 text-black ">
          Masuk
        </button>
      </div>
    </form>
    <div className="masuk">
      <p>Belum punya akun?<Link to="/Daftar" type="submit" >
        Daftar
      </Link>
      <p>
    Atau Masuk Dengan
     </p>
       </p>
    </div>
    <div className="iconSvg">
    <img className="btnImg m-1" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
    <img className="btnImg m-1" src="https://www.svgrepo.com/show/475647/facebook-color.svg" loading="lazy" alt="facebook logo"/>
    <img className="btnImg m-1" src="https://www.svgrepo.com/show/333611/tiktok.svg" loading="lazy" alt="tiktok logo"/>
    </div>
    
  </div>

  )
}

export default Masuk 