import React, { useState } from "react";
import "./Daftar.css";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import HeroImage from "../assets/img/hero-edu.png"; // Pastikan untuk mengganti path sesuai dengan gambar yang Anda miliki

const Daftar = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(username, email, password);
      alert('Registrasi berhasil, silakan login.');
      navigate('/masuk');  // Redirect ke halaman login setelah registrasi berhasil
    } catch (error) {
      console.error(error);
      alert('Registrasi gagal, silakan coba lagi.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-form-section">
          <h3 className="register-title">Daftar</h3>
          <p className="register-subtitle">Ayo daftarkan dirimu disini!!!</p>
          <form className="register-form" onSubmit={handleRegister}>
            <div className="inputGroup">
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Masukkan Nama Lengkap"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="register-input"
              />
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register-input"
              />
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-input"
              />
              <button type="submit" className="register-button">DAFTAR</button>
            </div>
          </form>
          <div className="login-link">
            <p>Sudah punya akun? <Link to="/masuk">Masuk</Link></p>
          </div>
        </div>
        <div className="register-image-section">
          <img src={HeroImage} alt="EcoSphere" className="register-image" />
        </div>
      </div>
    </div>
  );
}

export default Daftar;
