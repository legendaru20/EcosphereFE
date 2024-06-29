import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import pengaduanService from '../services/pengaduanService';
import authService from '../services/authService';

const FormPengaduan = () => {
    const [subyek, setSubyek] = useState('');
    const [laporan, setLaporan] = useState('');
    const [lampiranFoto, setLampiranFoto] = useState(null);
    const [sembunyikanIdentitas, setSembunyikanIdentitas] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const currentUser = authService.getCurrentUser();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                const parsedUser = JSON.parse(savedUser);
                setUser(parsedUser);
            } catch (error) {
                localStorage.removeItem('user');
                setUser(null);
            }
        } else {
            setUser(null);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!currentUser) {
            return navigate('/masuk');
        }
    
        const formpengaduan = {
            subyek,
            laporan,
            lampiranFoto,
            sembunyikanIdentitas,
        };
    
        try {
            await pengaduanService.submitPengaduan(formpengaduan);
            alert('Complaint submitted successfully');
            navigate('/pengaduan');
        } catch (error) {
            alert('Failed to submit complaint');
        }
    };

    return (
        <Container>
            <div className='m-5'>
                {user && <h1>Hai {user.username}, Suarakan Aduan Anda!</h1>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="subyek">
                        <Form.Label>Subyek Topik</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tuliskan judul topik laporan..."
                            value={subyek}
                            onChange={(e) => setSubyek(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="laporan">
                        <Form.Label>Laporan/Aduan</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={7}
                            placeholder="Ketikkan detail laporan/aduan anda..."
                            value={laporan}
                            onChange={(e) => setLaporan(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="lampiranFoto">
                        <Form.Label>Lampiran Foto</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => setLampiranFoto(e.target.files[0])}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="sembunyikanIdentitas">
                        <Form.Check
                            type="checkbox"
                            label="Sembunyikan Identitas Saya"
                            checked={sembunyikanIdentitas}
                            onChange={(e) => setSembunyikanIdentitas(e.target.checked)}
                        />
                    </Form.Group>
                    <br></br>
                    <Button variant="success" type="submit">
                        Kirim Aduan
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default FormPengaduan;