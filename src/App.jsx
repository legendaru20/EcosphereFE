import {Routes, Route} from "react-router-dom";

import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Pengaduan from "./pages/Pengaduan";
import TentangKita from "./pages/TentangKita";
import NavbarComponent from "./components/NavbarComponent";
import Edukasi from "./pages/Edukasi";
import Kampanye from "./pages/Kampanye";
import Masuk from './pages/Masuk';
import Daftar from './pages/Daftar';
import Page1 from './pages/PageKampanye/Page1';
import Page2 from './pages/PageKampanye/Page2';
import Page3 from './pages/PageKampanye/Page3';
import Page4 from './pages/PageKampanye/Page4';
import Page5 from './pages/PageKampanye/Page5';
import Page6 from './pages/PageKampanye/Page6';
import EdukasiPage from './pages/EdukasiPage/EdukasiPage';
import FormPengaduan from './pages/FormPengaduan';




function App() {
  return (
    <div>
      <NavbarComponent/>
    
      <Routes>
        <Route path="/" Component={Beranda}/>
        <Route path="/edukasi" Component={Edukasi}/>
        <Route path="/kampanye" Component={Kampanye}/>
        <Route path="/pengaduan" Component={Pengaduan}/>
        <Route path="/tentang kita" Component={TentangKita}/>
        <Route path="/form-pengaduan" element={<FormPengaduan />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />     
        <Route path="/page1" element={<Page1 />} /> 
        <Route path="/page2" element={<Page2 />} /> 
        <Route path="/page3" element={<Page3 />} /> 
        <Route path="/page4" element={<Page4 />} /> 
        <Route path="/page5" element={<Page5 />} /> 
        <Route path="/page6" element={<Page6 />} /> 
        <Route path="/edukasipage" element={<EdukasiPage />} /> 
      </Routes>
    
    <Footer/>
    </div>
    
  )
  
}

export default App