import {Routes, Route} from "react-router-dom";

import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import FaqPage from "./pages/FaqPage";
import SyaratKeten from "./pages/SyaratKeten";
import NavbarComponent from "./components/NavbarComponent";
import Edukasi from "./pages/Edukasi";
import Kampanye from "./pages/Kampanye"

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="/" Component={Beranda}/>
        <Route path="/edukasi" Component={Edukasi}/>
        <Route path="/kampanye" Component={Kampanye}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/syaratketen" Component={SyaratKeten}/>
      </Routes>
      <konten1/>
    <Footer/>
    </div>
    
  )
  
}

export default App
