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
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />     
      </Routes>
    
    <Footer/>
    </div>
    
  )
  
}

export default App
