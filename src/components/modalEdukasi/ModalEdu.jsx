import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import EduImage1 from "../../assets/img/edu/edu1.png";
import EduImage2 from "../../assets/img/edu/edu2.png";
import EduImage3 from "../../assets/img/edu/edu3.png";
import "./ModalEdu.css";

const EducationModals = () => {
    const [show, setShow] = useState(false);
    const [selectedEdu, setSelectedEdu] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (edu) => {
        setSelectedEdu(edu);
        setShow(true);
    };

    const edukasiTerbaru = [
        {
            id: 1,
            image: EduImage1,
            title: "Pentingnya Daur Ulang",
            description: "Pelajari pentingnya daur ulang dan bagaimana kita bisa berkontribusi dalam mengurangi sampah.",
            read: "Baca Selengkapnya",
        },
        {
            id: 2,
            image: EduImage2,
            title: "Mengurangi Penggunaan Plastik",
            description: "Tips dan trik untuk mengurangi penggunaan plastik dalam kehidupan sehari-hari.",
            read: "Baca Selengkapnya",
        },
        {
            id: 3,
            image: EduImage3,
            title: "Pemanfaatan Energi Terbarukan",
            description: "Informasi tentang berbagai jenis energi terbarukan dan manfaatnya bagi lingkungan.",
            read: "Baca Selengkapnya",
        }
    ];

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {edukasiTerbaru.map((edu) => (
                <Card style={{ width: '18rem' }} key={edu.id} className="m-3">
                    <Card.Img variant="top" className='align-content-center' src={edu.image} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                            <Card.Title>{edu.title}</Card.Title>
                            <Card.Text>{edu.description.slice(0, 100) + '...'}</Card.Text>
                        </div>
                        <Button variant="success" onClick={() => handleShow(edu)} className='align-self-end'>
                            {edu.read}
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            {selectedEdu && (
                <Modal show={show} onHide={handleClose} dialogClassName="modal-fullscreen" centered>
                    <Modal.Header closeButton className="justify-content-center">
                        <Modal.Title>{selectedEdu.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column align-items-center text-center">
                        <img 
                            src={selectedEdu.image}
                            alt="Deskripsi Foto"
                            className="img-fluid mb-3 modal-image"
                        />
                        <p style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>{selectedEdu.description}</p>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}

export default EducationModals;
