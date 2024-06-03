import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/anime.svg";
import{ kelasTerbaru} from '../data/index';
import myImage from '../assets/img/bg-beranda.png';
import iconImage from '../assets/img/Logo partner.png';
import "./Beranda.css";

const Beranda = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6"> 
            <h1 className="mb-4"> <br />Selamatkan <span className="color">Alam</span> Untuk <span className="color">Masa Depan</span> Kita 
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
        <Container className="container-terkini">
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
              <h5 className="text-center text-padding"><b>{kelas.title}</b></h5>
              <h6 className="text-center text-padding">{kelas.title_1}</h6> 
              <p className="text-lg-end" ><a href="">{kelas.read}</a></p>
               </Col>            
            })}
          </Row>
        </Container>
      </div>
     <div className="pengertian">
      <section className="w-100 min-vh-100  d-flex align-items-center ">
        <Container>
          <Row className="header-box d-flex align-items-center">
             <Col lg="6">
              <img src={myImage} className="w-100 h-100 m-lg-0"  alt="" />
              </Col>
            <Col lg="6"> 
            <h1 className="mb-4"> <br /> Apa Itu Ecosphere? </h1>
             <p className="mb-5">Selamat datang di <span className="color">Ecosphere!</span> Sebuah platfrom yang berkomitmen untuk memajukan kesadaran lingkungan di Indonesia. Kami percaya bahwa lingkungan yang bersih dan sehat adalah kunci bagi kesejahteraan masyarakat.
              Siap menciptakan perubahan positif dan memberdayakan masyarakat dalam menjaga keberlangsungan lingkungan</p>
             </Col>
          </Row>
        </Container>
      </section>
      </div>
      <div className="mitra py-5">
        <Container>
          <Row >
             <Col >
             <h1 className="text-center fw-bold">Mitra Kami</h1>
             <p className="text-center">Terima kasih kepada para partners hebat yang turut memperjuangkan isu-isu lingkungan!</p>
             <img src={iconImage} alt="" />
              </Col>
          </Row>
        </Container>
      </div>

      <div className="selengkapnya py-5 ">
        <Container>
          <Row >
             <Col className="text-center">
             <h1 className="fw-bold">Jadilah bagian penyelamat bumi kita</h1>
             <button className="btn btn-success rounded-1 ">Selengkapnya <i className="fa-solid fa-chevron-right ms-1"></i></button>
              </Col>
          </Row>
        </Container>
    
      </div>
    </div>
  )
}

export default Beranda