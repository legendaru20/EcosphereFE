import React from "react";
import "./Daftar.css";
import { Link } from "react-router-dom";


const Daftar = () => {
  return (
    <div className="addUser">
      <h3>Daftar</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
          />
          <button type="submit" class="btn btn-success">
            Daftar
          </button>
        </div>
      </form>
      <div className="login">
        <p>Sudah punya akun? </p>
        <Link to="/Masuk" type="submit" class="btn btn-primary">
          Masuk
        </Link>
      </div>
    </div>

  )
}

export default Daftar