
import iconFreya from '../assets/img/kampanye_photos.svg';
import iconPhoto from '../assets/img/photos.png';
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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

        <section className="eco-edu">
          <h2 className="text-center black-title">Suara Masyarakat</h2>
          <h6 className='text-center'>Apa kata masyarakat selama ini ?</h6>
      <CardGroup >
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>

          <div className='align-content-center'>
          <button className='btn btn-success '>Gabung</button>
          </div>
        </Card.Body>
       
      </Card>
    </CardGroup>
        </section>
      </main>

    </div>
  )
}

export default Kampanye