import iconFreya from '../assets/img/animasi.svg';
import iconPhoto from '../assets/img/Pengaduan.svg';
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Pengaduan.css';



const Pengaduan = () => {
  return (
    <div>
    <main>
    <section className="hero">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg={6}>
              <div className="hero-section">
                <h1 className="text">Suara Anda Adalah Perubahanan</h1>
                <p>Suarakan aspirasi anda, untuk membangun negeri ini</p>
               <div>
                <button className='btn btn-success'>Laporkan!</button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img
                className="bgKampanye w-100 h-100 m-lg-0"
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
  <CardGroup className='cardGroup'>
  <Card border="success" className='card m-2'>
  <Card.Body className='cardBody'>
    <Card.Title className='text-center fw-bold '>Penumpukan Sampah di Jalan Utama</Card.Title>
    <Card.Text  >
    Sampah-sampah ini telah menumpuk selama beberapa minggu terakhir dan mulai mengganggu lalu lintas dan kesehatan masyarakat sekitar. Bau busuknya tidak hanya tidak nyaman tetapi juga berpotensi menyebabkan masalah kesehatan yang serius. Kami membutuhkan tindakan cepat dari pihak berwenang untuk membersihkan dan mengelola sampah ini dengan lebih baik agar tidak terulang di masa mendatang. 
    </Card.Text>
   <p className='mt-5 mb-2'>Pada 7 Mei 2024, 18:29  oleh Anonymous</p>
    <Button className="btn btn-success w-50">Lihat Detail <i className="fa-solid fa-chevron-right ms-1"></i></Button>
  </Card.Body>
</Card>
<Card border="success" className='card m-2'>
  <Card.Body  className='cardBody'>
    <Card.Title className='text-center fw-bold '>Pembuangan Sampah Ilegal di Pinggir Sungai</Card.Title>
    <Card.Text  className=''>
    Para pelaku ini secara teratur membuang sampah-sampah plastik dan limbah lainnya langsung ke sungai, yang merusak ekosistem sungai dan mengancam kesehatan masyarakat sekitar. Saya sangat prihatin dengan dampak negatif yang ditimbulkan oleh perilaku ini dan meminta pihak berwenang untuk mengambil tindakan tegas untuk menghentikan pembuangan sampah ilegal ini dan membersihkan sungai dari sampah yang sudah terlanjur terbuang.    </Card.Text>
   <p className='mt-5'>Pada 10 Mei 2024, 12:25 oleh Anonymous</p>
    <Button className="btn btn-success w-50">Lihat Detail<i className="fa-solid fa-chevron-right ms-1"></i></Button>
  </Card.Body>
</Card>
<Card border="success" className='card m-2'>
  <Card.Body  className='cardBody'>
    <Card.Title className='text-center fw-bold '>Penumpukan Sampah di Jalan Utama</Card.Title>
    <Card.Text  >
    Sampah-sampah ini telah menumpuk selama beberapa minggu terakhir dan mulai mengganggu lalu lintas dan kesehatan masyarakat sekitar. Bau busuknya tidak hanya tidak nyaman tetapi juga berpotensi menyebabkan masalah kesehatan yang serius. Kami membutuhkan tindakan cepat dari pihak berwenang untuk membersihkan dan mengelola sampah ini dengan lebih baik agar tidak terulang di masa mendatang. 
    </Card.Text>
   <p className='mt-5 mb-2'>Pada 12 Juni 2024, 08:18 oleh Anonymous oleh Anonymous</p>
    <Button className="btn btn-success w-50">Lihat Detail<i className="fa-solid fa-chevron-right ms-1"></i></Button>
  </Card.Body>
</Card>
</CardGroup>
    </section>

    <section className="hero">
    <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg={6}>
              <div className="hero-section">
                <h1 className="text">Suarakan Aduan Anda!</h1>
               <div >
                <button className='btn btn-success m-3'>Masuk</button>
                <button className='btn btn-success'>Daftar</button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img
                className="bgKampanye w-100 h-100 m-lg-0"
                src={iconPhoto}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </header>
      </section>
  </main>

</div>
  )
}

export default Pengaduan