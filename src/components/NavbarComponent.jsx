import{useState, useEffect} from "react";
import { navLinks } from "../data/index";
import { Navbar, Container, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';

const NavbarComponent=()=> {
  const[changeColor, setChangeColor] =useState(false);

  // scroll 
  const changeBackgroundColor = ()=> {
    if (window.scrollY > 10) {
      setChangeColor(true);

    } else{
      setChangeColor(false);
    }
  };

  useEffect (() =>{
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor)
  });

  return (
    <div className="sticky-top" >
        <Navbar  expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
      <Navbar.Brand href="#home">
            <img src={logo} alt="EcoSphere Logo" className="logo-navbar" /> {}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
          {navLinks.map((link) =>{
            return (
               <div className="nav-link" key={link.id}>
                <NavLink to ={link.path}className={({ isActive, isPending }) =>
                (isPending ? "pending" : isActive ? "active" : "")}end>
              {link.text}
              </NavLink>
               </div>
            );
          })} 
          </Nav>
          
          <div className="text-center">
            <button className="btn btn-outline-success me-2 ">Masuk</button>
            <button className="btn btn-outline-success">Daftar</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};


export default NavbarComponent
