import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import BeritaImage1 from "../../assets/img/kelas/Berita 1.png";
import BeritaImage2 from "../../assets/img/kelas/Berita 2.png";
import BeritaImage3 from "../../assets/img/kelas/Berita 3.png";
import "./Modals.css";

const Modals = () => {
    const [show, setShow] = useState(false);
    const [selectedKelas, setSelectedKelas] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (kelas) => {
        setSelectedKelas(kelas);
        setShow(true);
    };

    const kelasTerbaru = [
        {
            id: 1,
            image: BeritaImage1,
            title: "Gerakan Limbah Zero",
            title_1: "Ada event seru nih, tujuannya simpel aja buat bikin kita lebih sadar sama pentingnya pengelolaan limbah.",
            read: "Baca Selengkapnya",
        },
        {
            id: 2,
            image: BeritaImage2,
            title: "Bazar Ramah Lingkungan",
            title_1: "Ada tempat keren nih buat produsen lokal yang bikin produk ramah lingkungan.",
            read: "Baca Selengkapnya",
        },
        {
            id: 3,
            image: BeritaImage3,
            title: "Pembersihan Lingkungan",
            title_1: `Bersama-sama Menuju Lingkungan yang Lebih Bersih: Mengikuti Event Pembersihan Area Umum

Di tengah kesadaran akan pentingnya menjaga kebersihan lingkungan, semakin banyak komunitas dan individu yang bergerak untuk memberikan kontribusi positif bagi alam sekitar. Salah satu upaya nyata dalam menjaga kebersihan lingkungan adalah melalui kegiatan pembersihan area umum. Sebagai bagian dari komitmen untuk berkontribusi dalam menjaga alam, komunitas lingkungan menggelar event simpel yang mengajak kita bersama-sama membersihkan area umum.

Event ini bukan sekadar kegiatan membersihkan sampah di lingkungan sekitar, tetapi juga merupakan ajang untuk memperkuat ikatan antara masyarakat dengan alam sekitar. Kegiatan ini dilaksanakan dengan semangat gotong royong dan kepedulian bersama untuk menciptakan lingkungan yang lebih bersih, sehat, dan nyaman untuk semua.

Misi Pembersihan Lingkungan
1. Membersihkan Sampah di Area Umum: Peserta event bekerja sama membersihkan sampah-sampah yang tercecer di area publik seperti taman, pantai, sungai, atau jalanan. Hal ini tidak hanya mencakup sampah-sampah plastik yang seringkali menjadi masalah utama, tetapi juga sampah-sampah organik dan anorganik lainnya.
2. Edukasi Tentang Dampak Sampah terhadap Lingkungan: Selain membersihkan sampah, event ini juga mengedukasi masyarakat tentang dampak negatif sampah terhadap lingkungan. Mulai dari bahaya plastik bagi satwa laut hingga pentingnya daur ulang dalam mengurangi limbah.
3. Mendorong Partisipasi Aktif Masyarakat: Partisipasi dalam event ini menggalang dukungan dan keterlibatan aktif masyarakat dalam menjaga kebersihan lingkungan sehari-hari. Hal ini diharapkan dapat menjadi gerakan yang berkelanjutan di lingkungan sekitar.

Dampak Positif dari Event Pembersihan Lingkungan
1. Lingkungan yang Lebih Bersih dan Sehat: Melalui kegiatan ini, area umum menjadi lebih bersih dan sehat, memberikan manfaat langsung bagi masyarakat dan alam sekitar.
2. Kesadaran Lingkungan yang Meningkat: Event ini juga berkontribusi dalam meningkatkan kesadaran masyarakat akan pentingnya menjaga kebersihan lingkungan dan merawat alam.
3. Penggalangan Dukungan dan Keterlibatan Masyarakat: Partisipasi dalam event ini menggalang dukungan dan keterlibatan aktif masyarakat dalam menjaga kebersihan lingkungan, baik secara individu maupun kolaboratif.`,
            read: "Baca Selengkapnya",
        }
    ];

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {kelasTerbaru.map((kelas) => (
                <Card style={{ width: '18rem' }} key={kelas.id} className="m-3">
                    <Card.Img variant="top" className='align-content-center' src={kelas.image} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                            <Card.Title>{kelas.title}</Card.Title>
                            <Card.Text>{kelas.title_1.slice(0, 100) + '...'}</Card.Text>
                        </div>
                        <Button variant="success" onClick={() => handleShow(kelas)} className='align-self-end'>
                            {kelas.read}
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            {selectedKelas && (
                <Modal show={show} onHide={handleClose} dialogClassName="modal-fullscreen" centered>
                    <Modal.Header closeButton className="justify-content-center">
                        <Modal.Title>{selectedKelas.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column align-items-center text-center">
                        <img 
                            src={selectedKelas.image}
                            alt="Deskripsi Foto"
                            className="img-fluid mb-3 modal-image"
                        />
                        <p style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>{selectedKelas.title_1}</p>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}

export default Modals;
