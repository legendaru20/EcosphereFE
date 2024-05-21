import React from 'react';
import './Footer.css';
import logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src={logo} className="logo" />
          <p className="text">Copyright © 2024 EcoSphere<br/>All rights reserved</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-discord"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#">S&K Pelayanan</a></li>
          <li><a href="#">Pengaturan Privasi</a></li>
          <li><a href="#">Tentang kita</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Kontak kami</h4>
        <ul className="text">
          <li><a href="#">Email</a></li>
          <li><a href="#">Whatsapp</a></li>
          <li><a href="#">Alamat</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
