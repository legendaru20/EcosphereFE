import {Routes, Route} from "react-router-dom";

import Footer from "./components/Footer";

import Beranda from "./pages/Beranda";
import Testimonial from "./pages/Testimonial";
import FaqPage from "./pages/FaqPage";
import SyaratKeten from "./pages/SyaratKeten";
import NavbarComponent from "./components/NavbarComponent";
import Edukasi from "./pages/Edukasi";

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="/" Component={Beranda}/>
        <Route path="/edukasi" Component={Edukasi}/>
        <Route path="/testimonial" Component={Testimonial}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/syaratketen" Component={SyaratKeten}/>
      </Routes>
    <Footer/>
    </div>
    
  )
  
}

export default App
