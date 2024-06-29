import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import headerImage from '../../assets/img/edu/edu1.png';
import cardImage1 from '../../assets/img/Image1.png';
import cardImage2 from '../../assets/img/Image2.png';
import cardImage3 from '../../assets/img/Image3.png';
import './EdukasiPage.css';

const EdukasiPage = () => {
  return (
    <div>
      <header className="custom-header">
        <Container fluid>
          <Row>
            <Col lg="6">
              <img src={headerImage} alt="Header" className="header-image5" />
            </Col>
            <Col lg="6" className="d-flex flex-column justify-content-center">
              <h1 className="header-title">Pengenalan Jenis Sampah</h1>
              <p className="header-subtitle">
                Yuk, teman-teman! Lesson ini cuma mau bahas sampah tanpa drama. Apa aja jenis dari sampah?
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="mt-5 bg-white">
        <Container>
          <Row>
            <Col md="12">
              <Card className="mb-3">
                <Row className="no-gutters align-items-center">
                  <Col md="2">
                    <img src={cardImage1} alt="Card 1" className="card-img" />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <div className="icon-with-number">
                          <FontAwesomeIcon icon={faCircle} size="2x" className="circle-icon" />
                          <span className="number">1</span>
                        </div>
                      </div>
                      <Card.Text>
                        Pengenalan Jenis Sampah
                        <br />
                        <FontAwesomeIcon icon={faClock} className="mr-2" /> 5 min
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md="2" className="d-flex justify-content-center">
                    <Button variant="success" className="round-button">
                      <FontAwesomeIcon icon={faPlay} size="2x" />
                    </Button>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-3">
                <Row className="no-gutters align-items-center">
                  <Col md="2">
                    <img src={cardImage2} alt="Card 2" className="card-img" />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <div className="icon-with-number">
                          <FontAwesomeIcon icon={faCircle} size="2x" className="circle-icon" />
                          <span className="number">2</span>
                        </div>
                      </div>
                      <Card.Text>
                        Limbah Organik - Apa itu dan Mengapa Penting?
                        <br />
                        <FontAwesomeIcon icon={faClock} className="mr-2" /> 8 min
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md="2" className="d-flex justify-content-center">
                    <Button variant="success" className="round-button">
                      <FontAwesomeIcon icon={faPlay} size="2x" />
                    </Button>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-3">
                <Row className="no-gutters align-items-center">
                  <Col md="2">
                    <img src={cardImage3} alt="Card 3" className="card-img" />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <div className="icon-with-number">
                          <FontAwesomeIcon icon={faCircle} size="2x" className="circle-icon" />
                          <span className="number">3</span>
                        </div>
                      </div>
                      <Card.Text>
                        Limbah Anorganik - Mengidentifikasi Jenis dan Pengelolaannya
                        <br />
                        <FontAwesomeIcon icon={faClock} className="mr-2" /> 10 min
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md="2" className="d-flex justify-content-center">
                    <Button variant="success" className="round-button">
                      <FontAwesomeIcon icon={faPlay} size="2x" />
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default EdukasiPage;