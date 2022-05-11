import './NavBar.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
class NavBar extends Component {
  state = {};

  render() {
    return (
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">ShortURL</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="#count">Count</Nav.Link> */}
            </Nav>
            </Container>
          </Navbar>
    );
  }
}

export default NavBar;
