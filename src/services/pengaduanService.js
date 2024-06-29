import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pengaduan';

const submitPengaduan = async (pengaduan) => {
  const formData = new FormData();
  formData.append('subyek', pengaduan.subyek);
  formData.append('laporan', pengaduan.laporan);
  formData.append('lampiranFoto', pengaduan.lampiranFoto);
  formData.append('sembunyikanIdentitas', pengaduan.sembunyikanIdentitas);

  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',// tambahkan header Authorization
    },
  });

  return response.data;
};

export default {
  submitPengaduan,
};
