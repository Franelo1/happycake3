import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <Navbar style={{ background: "#CD1D52" }} variant = "dark">
            <Container>
               
                    <Nav className="me-auto">
                        <Link to="/home" className="text-white ms-3 text-decoration-none">
                        🏠 Home   
                        </Link>
                        <Link to="/contact" className="text-white ms-3 text-decoration-none">
                        📒 Contact
                        </Link>

                       
                    </Nav>
               

            </Container>

            <Navbar.Brand>🎂 Happy Cake 🍰</Navbar.Brand>
        </Navbar>
    )

}

export default Header