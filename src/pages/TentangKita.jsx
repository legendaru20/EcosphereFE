import {Container, Row, Col} from "react-bootstrap";
import myIcon from "../assets/img/tentang.png";



const TentangKita = () => {
  return (
    <div className="Tentang">
          <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
          <Col lg="6 " >
              <img src={myIcon} className="w-100 h-100 m-lg-0"  alt="" />
             </Col>
            <Col lg="6"> 
             <p className="mb-4"><span className="color">EcoSphere </span> adalah Website atau program Pengelolaan lingkungan  yang akan memudahkan komunitas-komunitas pecinta lingkungan bersih untuk berkumpul, selain itu fitur yang di sediakan di platform ini juga menarik karena terdapat fitur informasi, pelaporan dan quiz yang tentunya dapat membuat pengguna lebih menjaga/memperhatikan  lingkungan di sekitar.</p>
             </Col>
           
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default TentangKita