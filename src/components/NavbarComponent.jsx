import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/img/logo.png';
import authService from "../services/authService";
import { navLinks } from "../data/index";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Scroll
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener('scroll', changeBackgroundColor);

    // Get user data from localStorage on component mount
    const savedUser = localStorage.getItem('user');
    console.log('Saved user:', savedUser); // Debugging line
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        console.log('Parsed user:', parsedUser); // Debugging line
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user'); // Remove invalid data from localStorage
        setUser(null); // Set user to null
      }
    } else {
      setUser(null);
    }

    return () => {
      window.removeEventListener('scroll', changeBackgroundColor);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleLogout = () => {
    authService.logout(); // Remove user data from localStorage
    setUser(null);
    navigate('/');
  };

  return (
    <div className="sticky-top">
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="EcoSphere Logo" className="logo-navbar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>
                    (isPending ? "pending" : isActive ? "active" : "")} end>
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>

            <div className="text-center">
              {user ? (
                <>
                  <span className="me-3">Halo, {user.username}</span>
                  <button className="btn btn-outline-success" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <NavLink className="btn btn-outline-success me-2" to="/masuk">Masuk</NavLink>
                  <NavLink className="btn btn-outline-success" to="/daftar">Daftar</NavLink>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
