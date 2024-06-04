import SwiperKampanye from '../components/SwiperKampanye';
import iconFreya from '../assets/img/kampanye_photos.svg';
import { Row, Col, Container } from 'react-bootstrap';
import { KampanyeData, Data } from '../data/index';
import './Kampanye.css';



const Kampanye = () => {
  return (
    <div>
        <main>
        <section className="hero">
          <header className="w-100 min-vh-100 d-flex align-items-center">
            <Container>
              <Row className="header-box d-flex align-items-center">
                <Col lg={6}>
                  <div className="hero-section">
                    <h1 className="text">Ayo membangun aksi nyata bersama kampanye!</h1>     
                  </div>
                </Col>
                <Col lg={6}>
                  <img
                    className=" w-100 h-100 m-lg-0"
                    src={iconFreya}
                    alt=""
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </section>
       
        <section className="kampanye">
          <h2 className="text-center black-title mt-1">Komunitas & Organisasi</h2>
          <SwiperKampanye data={KampanyeData}/>
          <SwiperKampanye data={Data}/>
        </section>
      </main>

    </div>
  )
}

export default Kampanye