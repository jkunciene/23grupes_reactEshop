
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyHeader = () => {
    return (
      <Navbar bg="light" variant="light" className="header">
      <Container>
          <Nav className="me-auto">
              <Link to="/" className='nav-link'>About</Link>
              <Link to="/products" className='nav-link'>Products</Link>
              <Link to="/cart" className='nav-link'>Cart</Link>
          </Nav>
      </Container>
  </Navbar>
     
    )
}

export default MyHeader
