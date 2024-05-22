// src/components/Login.js
import React from "react";
import "./Masuk.css";



const Masuk = () => {
  return (
    <div className="addUser">
    <h3>Log in</h3>
    <form className="addUserForm">
      <div className="inputGroup">
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
          placeholder="Enter your Password"
        />
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </div>
    </form>
    <div className="login">
      <p>Don't have Account? </p>
      <Link to="/Daftar" type="submit" class="btn btn-success">
        Daftar
      </Link>
    </div>
  </div>

  )
}

export default Masuk