import React from 'react';
import './Page2.css'; // Import the CSS file for styling
import ContentImage1 from "../../assets/img/kampanye/content1.png";
import Kepala from "../../assets/img/kampanye/HeaderImage.jpg";
import grup from "../../assets/img/kampanye/Group 2229.png";
import Foto from "../../assets/img/kampanye/Camera.png";
import poto from "../../assets/img/kampanye/Vector.png"; // Assuming this is the path for the alert icon
const Page2 = () => {
  return (
    <div className="page2-container">
      <header className="page2-header">
        <img src={Kepala} alt="Header" className="header-image" />
        <div className="header-content">
          <img src={ContentImage1} alt="" className="content-image" />
        </div>
      </header>

      <div className="content-wrapper">
        <div className="info-container">
          <section className="organizer-section">
            <img src={grup} alt="Organizer Logo" className="organizer-logo m-3" />
            <div className="organizer-info">
              <span className="fw-bold opacity-75">Organizer</span>
              <a href="#" className="organizer-link">#Solarchapterofficial</a>
            </div>
            <p className='m-1 fw-bold'>#IndonesiaMerdekaAir:</p>
            <p className='m-1 fw-bold'>MendukungAksesAirBersih</p>
          </section>
        </div>

        <div className="additional-info">
          <div className="alert-section">
            <p className="alert-label">Aksi</p>
            <div className="info-content">
              <img src={Foto} alt="Information Icon" className="info-icon" />
              <p className="info-text">Menyebar informasi</p>
              <p className="info-description">Foto/Video informasi yang kamu temukan dan baca mengenai air bersih</p>
            </div>
          </div>
        </div>
      </div>

      <div className="upload-section">
        <div className="upload-box">
        <img src={poto} alt="Information Icon" className="info-icon" />
        
          <p className="upload-text">Tambah / Masukkan Foto</p>
        </div>
        <div className="description-section">
          <label htmlFor="description" className="description-label">Keterangan / Deskripsi</label>
          <textarea id="description" className="description-input" placeholder="Tulis keterangan disini"></textarea>
        </div>
        <button className="submit-button">KIRIM</button>
      </div>
    </div>
  );
}

export default Page2;