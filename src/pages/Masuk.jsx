import React, { useState } from "react";
import "./Masuk.css";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import HeroImage from "../assets/img/hero-edu.png"; // Pastikan untuk mengganti path sesuai dengan gambar yang Anda miliki

const Masuk = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(email, password);
      console.log('Login response:', response); // Debugging line

      // Simpan username ke localStorage jika ada dalam respons
      if (response.data && response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      navigate("/");
      window.location.reload(); // Redirect ke dashboard atau halaman lain setelah login berhasil
    } catch (error) {
      console.error(error);
      alert("Login gagal, silakan coba lagi.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form-section">
          <h3 className="login-title">Masuk</h3>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="inputGroup">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Kata Sandi"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="login-button">
                MASUK
              </button>
            </div>
          </form>
          <div className="register-link">
            <p>
              Belum punya akun? <Link to="/Daftar">Daftar</Link>
            </p>
            <p>Atau Masuk Dengan</p>
          </div>
          <div className="social-login">
            <img
              className="btnImg"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <img
              className="btnImg"
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              loading="lazy"
              alt="facebook logo"
            />
            <img
              className="btnImg"
              src="https://www.svgrepo.com/show/333611/tiktok.svg"
              loading="lazy"
              alt="tiktok logo"
            />
          </div>
        </div>
        <div className="login-image-section">
          <img
            src={HeroImage}
            alt="Login Illustration"
            className="login-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Masuk;
