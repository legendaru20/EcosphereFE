import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page1.css'; // Import the CSS file for styling
import ContentImage1 from "../../assets/img/kampanye/content1.png";
import Kepala from "../../assets/img/kampanye/HeaderImage.jpg";
import grup from "../../assets/img/kampanye/Group 2229.png";
import fol from "../../assets/img/kampanye/Ellipse 124.png";
import folow from '../../assets/img/Logo partner.png';
import folo from '../../assets/img/bg-beranda.png';
import icon from '../../assets/img/kampanye/Vector.png';
import Opini from '../../assets/img/kampanye/proyek.png';
import pengaturan from '../../assets/img/kampanye/pengaturan.png';
import jam from '../../assets/img/kampanye/jampasir.png';
import tumbuhan from '../../assets/img/kampanye/tumbuhan.png';
import retangle from '../../assets/img/kampanye/Rectangle 125.png';
import pembersih from '../../assets/img/kampanye/pembersihan.png';
import airgalon from '../../assets/img/kampanye/airgalon.png';

const Page1 = () => {
  const navigate = useNavigate();

  return (
    <div className="page1-container1">
      <header className="page1-header2">
        <img src={Kepala} alt="Header" className="image2" />
        <div className="content2">
          <img src={ContentImage1} alt="" className="content-image2" />
          <section className="Lingkungan2 rounded-5">
            <h4 className='m-1 p-1'>Lingkungan</h4>
          </section>
          <p className='m-1 fw-bold'>#IndonesiaMerdekaAir:</p>
          <p className='m-1 fw-bold'>Mendukung Akses Air Bersih</p>
        </div>
      </header>
      <section className="section1">
        <div className="infom">
          <div className="organizer-section">
            <img src={grup} alt="Organizer Logo" className="organizer-logo m-3" />
            <div className="organizer-info">
              <span className="fw-bold opacity-75">Organizer</span>
              <a href="#" className="organizer-link">#Solarchapterofficial</a>
            </div>
          </div>
          <div className="followers-section">
            <img src={fol} alt="Follower 1" className="follower-avatar" />
            <img src={folow} alt="Follower 2" className="follower-avatar" />
            <img src={folo} alt="Follower 3" className="follower-avatar" />
            <span className="followers-count fw-bold">1,7RB</span>
          </div>
        </div>
      </section>
      <section className="section bg-light d-align-self-sm-auto">
        <button className="join-button" onClick={() => navigate("/page2")}>Ikuti</button>
        <h2>Tentang Tantangan</h2>
        <p>Lebih dari 1000 orang di provinsi Nusa Tenggara Timur (NTT), Indonesia, menghadapi keterbatasan akses air bersih. Mereka harus berjalan kaki hingga 4 jam sambil membawa jeriken berat setiap hari untuk mendapatkan air bersih.</p>
        <a href="#" className="organizer-linkp fw-bold">Cari tahu selengkapnya</a>
      </section>
      <section className="stats-section">
        <div className="stat-item">
          <img src={tumbuhan} alt="Action 2" className='foto' />
          <span className='stat-number fw-bold'>3</span>
          <p className="stat-label fw-bold">Aksi</p>
        </div>
        <div className="stat-item">
          <img src={jam} alt="Action 2" className='w-50' />
          <span className="stat-number fw-bold">10</span>
          <p className="stat-label justify-content-end d-flex fw-bold">Sisa hari</p>
        </div>
      </section>
      <section className="actions-section">
        <div className="action-item">
          <img src={icon} alt="Action 1" />
          <h3>Menyebar Informasi</h3>
          <p>Foto/video informasi yang kamu temukan dan baca mengenai air bersih</p>
        </div>
        <div className="action-item">
          <img src={Opini} alt="Action 2" />
          <h3>Opini</h3>
          <p>Foto tulisanmu tentang bagaimana pemerintah dapat membantu akses air bersih di NTT</p>
        </div>
        <div className="action-item">
          <img src={pengaturan} alt="Action 3" />
          <h3>Pengetahuan</h3>
          <p>Foto/video fakta menarik baru yang kamu ketahui tentang akses air bersih di NTT</p>
        </div>
      </section>
      <section className="gallery-section">
        <h2>Aksi 1-Menyebar informasi</h2>
        <br></br>
        <br></br>
        <div className="action-item">
          <img src={retangle} alt="Gallery 1" />
          <img src={pembersih} alt="Gallery 2" />
          <img src={airgalon} alt="Gallery 3" />
        </div>
      </section>
    </div>
  );
}

export default Page1;
