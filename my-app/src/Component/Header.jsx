import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// ✅ Import images
import menuIcon from "../assets/images/side.png";
import logo from "../assets/images/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <Navbar sticky="top" expand={false} className={`navbar-topper ${scrolled ? "scrolled" : ""}`}>
      <Container>
        {/* Replace hamburger with imported image */}
        <img className="logo-image"
          src={menuIcon}
          alt="Menu"
          style={{ cursor: 'pointer', width: '30px', height: '30px' }}
          onClick={handleShow}
        />

        <div className='center-logo'>
          <img src={logo} alt="Logo" />
        </div>

        <Navbar.Brand>
          <Button className='Get-btn'>Get In Touch ➔</Button>
        </Navbar.Brand>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          style={{ width: '900px' }}
          show={showOffcanvas}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={logo} alt="Logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Container>
            <Offcanvas.Body>
              <div className=" change-direction d-flex flex-wrap gap-5">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Why Schon" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#About us">About us</NavDropdown.Item>
                  <NavDropdown.Item href="#One-Stop-Housing-Solution">One stop housing solutions</NavDropdown.Item>
                  <NavDropdown.Item href="#Quality-Assurance">Quality-Assurance</NavDropdown.Item>
                  <NavDropdown.Item href="#Sustainablity">Sustainablity</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#product">Product</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </div>

              <div className="nav-button-main">
                <Button className="Get-btn btn btn-primary">Get In Touch ➔</Button>
                <Button className="get-btn-2">Become a Dealer ➔</Button>
              </div>
            </Offcanvas.Body>
          </Container>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
