import CardSwiper from '../components/CardSwiper';
import HeroEdu from '../assets/img/hero-edu.png';
import { ecoEduData, ecoTipsData } from '../data/index';
import { Row, Col, Container } from 'react-bootstrap';
import './Edukasi.css';

const Edukasi = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <header className="w-100 min-vh-100 d-flex align-items-center">
            <Container>
              <Row className="header-box d-flex align-items-center">
                <Col lg={6}>
                  <div className="hero-section">
                    <h1 className="text">Mulai Dengan Mengetahui Sampahmu!</h1>
                    <p>
                      Dengan edukasi yang tepat, kita dapat mengubah sampah
                      menjadi sumber daya yang berharga.
                    </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <img
                    className="hero-image w-100 h-100 m-lg-0"
                    src={HeroEdu}
                    alt="Hero Image"
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </section>

        <section className="eco-edu">
          <h2 className="text-center green-title">Eco Edu</h2>
          <h2 className="text-center black-title">Ayo Jelajahi Setiap Sudut Edukasi</h2>
          <CardSwiper data={ecoEduData}/>
        </section>

        <section className="eco-tips">
          <h2 className="text-center green-title">Eco Tips</h2>
          <h2 className="text-center black-title">Mari Ubah Kebiasaanmu!</h2>
          <CardSwiper data={ecoTipsData} />
        </section>
      </main>
    </div>
  );
};

export default Edukasi;
