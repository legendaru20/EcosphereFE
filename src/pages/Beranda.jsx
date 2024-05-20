import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/Illustration.png"
import{ kelasTerbaru} from '../data/index'
const Beranda = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6"> 
            <h1 className="mb-4"> <br />  Selamatkan <span className="color">Alam</span> Untuk <span className="color">Masa Depan</span> Kita 
             </h1>
             <p className="mb-4">Pengelolaan lingkungan yang tepat dapat menciptakan lingkungan yang nyaman untuk kita semua, bukan hanya untuk kehidupan kita, tetapi juga bagi seluruh dunia</p>
             </Col>
            <Col lg="6">
              <img src={HeroImage} alt="" />
             </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
           <Col>
              <h4 > Terkini </h4>
           </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return <Col key={kelas.id}> 
              <img src={kelas.image} alt=""className="w-100 mb-4 " />
              <div >
                <i className={kelas.title}></i>
                <i className={kelas.title}></i>
                <i className={kelas.title}></i>
              </div>
              <h5 className="text-center">{kelas.title}</h5>
              <h6 className="text-center">{kelas.title_1}</h6>
              <p ><a href="" >{kelas.read}</a></p>
               </Col>     
            })}
           
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Beranda