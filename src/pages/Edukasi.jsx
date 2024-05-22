import CardSwiper from '../components/CardSwiper';
import HeroEdu from '../assets/img/hero-edu.png';
import { ecoEduData, ecoTipsData } from '../data/index';
import { Row, Col } from 'react-bootstrap';
import './Edukasi.css';

const Edukasi = () => {
  return (
    <div>
      <main >
        <section className='hero'>
        <div className="w-100 min-vh-100 d-flex align-items-center">
          <Row className="header-box d-flex align-items-center">
            <Col lg={6}>
              <div className='hero-section'>
                <h1 className='text'>Mulai Dengan Mengetahui Sampahmu!</h1>
                <p>Dengan edukasi yang tepat, kita dapat mengubah sampah menjadi sumber daya yang berharga.</p>
              </div>
            </Col>
            <Col lg={6}>
              <img className="hero-image" src={HeroEdu} />
            </Col>
          </Row>
          </div>
        </section>
        <section className="eco-edu">
          <CardSwiper data={ecoEduData} title="Eco-Edu" />
        </section>
        <section className="eco-tips">
          <CardSwiper data={ecoTipsData} title="Eco-Tips" />
        </section>
      </main>
    </div>
  );
};

export default Edukasi;
